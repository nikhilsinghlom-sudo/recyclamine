import { useState } from "react";
import { Link } from "react-router-dom";

type AccordionProps = {
    items: { title: string; content: string; id: string; img: string; }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [currentContent, setCurrentContent] = useState("0");

    const handleMouseEnter = (id: string) => {
        setCurrentContent(id);
    };

    // console.log('dataaaaaa',items)
    
    return (
        <div className="vaccordion">
            {/* <div className="accordion"> */}
                <ul>
                    {items.map((item) => (
                        <li
                            key={item.id} data-index={item.id} className={currentContent === item.id ? "hovered" : ""} onMouseEnter={() => handleMouseEnter(item.id)} >
                            <h4>{item.title}</h4>
                            <div className="overlay"></div>
                            <div>
                                <Link to={"#"} className="sliderLink">
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                    {/* <p>{item.img}</p> */}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            {/* </div> */}
        </div>
    );
};

export default Accordion;
