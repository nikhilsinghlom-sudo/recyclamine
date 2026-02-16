import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';


// Interface for submenu items
interface SubmenuItem {
    title: string;
    link: string;
}

// Interface for menu items which include submenus
interface MenuItem {
    title: string;
    link: string;
    submenu: SubmenuItem[];
}

// Props for the AccordionMenu component
interface AccordionMenuProps {
    items: MenuItem[];
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


//  const location = useLocation(); 



    return (
        <div className="accordion-menu">
            {items.map((menuItem, index) => (
                (menuItem.submenu.length > 0 || menuItem.link) && (
                    <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
                        <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                {menuItem.submenu.length > 0 ? (
                                    <> 
                                        <h5>{menuItem.title}</h5>
                                        <span>
                                            <svg width="800px" height="800px" viewBox="0 -4.5 20 20" version="1.1">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -6684.000000)" fill="#ffffff">
                                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                                            <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39" id="arrow_down-[#339]"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </>
                                ) : (
                                    <Link to={menuItem.link}>
                                        <h5>{menuItem.title}</h5> 
                                    </Link>
                                )}
                        </div>
                        {menuItem.submenu.length > 0 && (
                            <div className="accordion-content"
                                style={{
                                    maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease',
                                }}
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                            >
                                <ul className="submenu">
                                    {menuItem.submenu.map((submenuItem, i) => (
                                        <li key={i}>
                                            <Link to={submenuItem.link}>{submenuItem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )
            ))}
        </div>


    );
};

export default AccordionMenu;
