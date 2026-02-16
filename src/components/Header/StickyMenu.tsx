import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './StickyMenu.css';

// TypeScript interface for menu item
interface MenuItem {
    label: string;
    path: string;
    subMenu?: MenuItem[];
}


// Define the dynamic menu items array
const menuItems: MenuItem[] = [
    {
        label: 'About Us',
        path: 'about',
        subMenu: [
            { label: 'The Legacy (ABC ABAM)', path: 'about/the-legacy-aditya-birla-chemicals-and-aditya-birla-advanced-materials' },
            { label: 'The Genesis of Recyclamine', path: 'about/the-genesis-of-recyclamine' },
            { label: 'Our Philosophy & Values', path: 'about/our-philosophy-and-values' },
            { label: 'Our Presence', path: 'about/our-presence' },
        ],
    },
    {
        label: 'The Recyclamine Revolution',
        path: '#',
        subMenu: [
            { label: 'The Technology & How it Works', path: '#' },
            { label: 'Why Recyclamine', path: '#' },
            { label: 'Benefit to the Planet & Its People', path: '#' },
            { label: 'Benefit to Businesses', path: '#' },
            { label: 'Recyclamine Innovation Lab', path: '#' },
        ],
    },
    {
        label: 'Applications & Solutions',
        path: '#',
        subMenu: [
            { label: 'Skis', path: '#' },
            { label: 'Surfboards', path: '#' },
            { label: 'Snowboards', path: '#' },
            { label: 'Kayaks', path: '#' },
            { label: 'Wind Blades & Spar Caps', path: '#' },
            { label: 'Mobility Transportation', path: '#' },
            { label: 'Hydrogen Cylinder', path: '#' },
            { label: 'Electrical & Electronics', path: '#' },
            { label: 'Drones', path: '#' },
            { label: 'Other Composites', path: '#' },
        ],
    },
    {
        label: 'Sustainability - The Circular Way',
        path: '#',
        subMenu: [
            { label: 'The Planet is Mine', path: '#' },
            { label: 'The 3Rs of Recycling, Recovery, & Repurposing', path: '#' },
            { label: 'The Recyclamine Ecosystem', path: '#' },
            { label: 'Lifecycle & Carbon Footprint', path: '#' },
            { label: 'Recyclamine Impact Stories', path: '#' },
        ],
    },
    {
        label: 'Updates & Resources',
        path: '#',
        subMenu: [
            { label: 'Stories & Blogs', path: '#' },
            { label: 'Resources', path: '#' },
            { label: 'FAQs', path: '#' },
            { label: 'Collaboration with Universities', path: '#' },
            { label: 'Events & Exhibitions', path: '#' },
        ],
    },
];

const StickyMenu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Track if scroll happened
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null); // Track open submenu for mobile
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsSticky(true);
                if (!isScrolled) {
                    setIsScrolled(true);
                }
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    const handleMouseEnter = (label: string) => {
        setActiveMenu(label);
    };
    const handleMouseLeave = () => {
        setActiveMenu(null);
    };
    const toggleSubMenu = (label: string) => {
        setOpenSubMenu(openSubMenu === label ? null : label); // Toggle submenu on click
    };

    return (
        <header>
            <div className='container'>
                <div className='flex-container'>
                    <Link className="brand-logo" to={"/"}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 263 47">
                            <defs>
                            </defs>
                            <g>
                                <path className="st1" d="M43.8,32.8V11.6s8,0,8,0c1.3,0,2.6.2,3.8.5,1.1.4,2,.9,2.8,1.7,1.4,1.3,2.3,2.5,2.3,4.9v.5c0,1.5-.5,2.8-1.5,4.1-.7.9-1.3,1.4-2.3,1.8l5.3,7.6h-6.5l-6.5-8.3v8.3h-5.4ZM55.2,19.2c0-.7-.3-1.2-.9-1.7-.6-.5-1.8-.7-2.8-.7h-2.3v4.9h2s1.2,0,1.2,0c1.5,0,2.8-1.1,2.8-2.5h0Z" />
                                <path className="st1" d="M64.4,11.6h15.1v5.2h-9.5v2.9h7.3v5.2h-7.3v2.9h9.5v5.1h-15.1V11.6Z" />
                                <path className="st1" d="M94,11.4c3.4.2,6.1,1.6,7.9,3.3l.3.3-3.9,3.7-.4-.3c-1.3-1.2-2.9-1.8-4.7-1.8s-3.4.5-4.7,1.6c-1.3,1.1-2,2.4-2,3.9s.6,2.8,1.9,3.9c1.3,1.1,2.8,1.6,4.7,1.6s3.4-.6,4.7-1.8l.4-.3,3.9,3.7-.3.3c-1,1-2.3,1.8-3.8,2.4-1.5.6-3.1.9-4.8.9-3.4,0-6.3-1.1-8.8-3.1-2.3-2.1-3.4-4.6-3.4-7.6s1.1-5.5,3.4-7.6c2.4-2.1,5.4-3.2,8.8-3.2h.7,0Z" />
                                <path className="st1" d="M103.2,11.6h6.1l4.2,6.8,4.2-6.8h6.1l-7.3,12.1v9h-6v-9l-7.2-12.1Z" />
                                <path className="st1" d="M136.1,11.4c3.4.2,6.1,1.6,7.9,3.3l.3.3-3.9,3.7-.4-.3c-1.3-1.2-2.9-1.8-4.7-1.8s-3.4.5-4.7,1.6c-1.3,1.1-2,2.4-2,3.9s.6,2.8,1.9,3.9c1.3,1.1,2.8,1.6,4.7,1.6s3.4-.6,4.7-1.8l.4-.3,3.9,3.7-.3.3c-1,1-2.3,1.8-3.8,2.4-1.5.6-3.1.9-4.8.9-3.4,0-6.3-1.1-8.8-3.1-2.3-2.1-3.4-4.6-3.4-7.6s1.1-5.5,3.4-7.6c2.4-2.1,5.4-3.2,8.8-3.2h.7,0Z" />
                                <path className="st1" d="M146.7,11.6h5.4v16h9.8v5.2h-15.1V11.6Z" />
                                <path className="st1" d="M163.7,32.8l10.6-21.1h1.3l10.6,21.1h-5.8l-1.6-3.2h-7.6l-1.6,3.2h-5.8ZM173.5,25.4h2.8l-1.4-2.9-1.4,2.9Z" />
                            </g>
                            <path className="st0" d="M189.5,11.6l10.6,13.4,10.5-13.4h1.1v21.1h-5.3v-7.8l-6.3,7.8-6.3-7.8v7.8h-5.3V11.6h1.1Z" />
                            <path className="st0" d="M215.6,32.8V11.6h5.4v21.2h-5.4Z" />
                            <path className="st0" d="M225.9,11.6l12.8,11.1v-11.1h5.5v21.2h-1.2l-12.8-11.1v11.1h-5.5V11.6h1.2,0Z" />
                            <path className="st0" d="M247.9,11.6h15.1v5.2h-9.5v2.9h7.3v5.2h-7.3v2.9h9.5v5.1h-15.1V11.6Z" />
                            <path className="st0" d="M36.5,4.6h-7.3v3.5h3.6v28.2h-16.7l2.1-2.1-2.6-2.5-4.7,4.6h0s-1.8,1.8-1.8,1.8l6.5,6.3,2.6-2.5-2.1-2.1h20.4V4.6Z" />
                            <path className="st0" d="M3.7,8.1h16.7l-2.1,2.1,2.6,2.5,4.7-4.6,1.8-1.8L20.8,0l-2.6,2.5,2.1,2.1H0v35.3h7.3v-3.5h-3.6V8.1Z" />
                            <path className="st0" d="M112.7,41.3h-2.2v-1.4h6.1v1.4h-2.2v5.6h-1.6v-5.6Z" />
                            <path className="st0" d="M120.2,39.8h1.6v2.8h3v-2.8h1.6v7.1h-1.6v-2.8h-3v2.8h-1.6v-7.1Z" />
                            <path className="st0" d="M130.5,39.8h5.5v1.4h-3.9v1.4h3.5v1.4h-3.5v1.5h4v1.4h-5.6v-7.1h0Z" />
                            <path className="st0" d="M145.4,39.8h3c1.7,0,2.8,1,2.8,2.4h0c0,1.7-1.3,2.5-3,2.5h-1.2v2.1h-1.6v-7.1h0ZM148.3,43.4c.8,0,1.3-.5,1.3-1.1h0c0-.7-.5-1.1-1.3-1.1h-1.2v2.2h1.3,0Z" />
                            <path className="st0" d="M154.7,39.8h1.6v5.7h3.7v1.4h-5.3v-7.1h0Z" />
                            <path className="st0" d="M166.1,39.8h1.5l3.1,7.1h-1.7l-.7-1.6h-3.1l-.7,1.6h-1.6l3.1-7.1h0ZM167.8,43.9l-1-2.3-1,2.3h2Z" />
                            <path className="st0" d="M174.2,39.8h1.5l3.4,4.4v-4.4h1.6v7.1h-1.4l-3.5-4.5v4.5h-1.6v-7.1Z" />
                            <path className="st0" d="M184.9,39.8h5.5v1.4h-3.9v1.4h3.5v1.4h-3.5v1.5h4v1.4h-5.6v-7.1h0Z" />
                            <path className="st0" d="M196,41.3h-2.2v-1.4h6.1v1.4h-2.2v5.6h-1.6v-5.6Z" />
                            <path className="st0" d="M209,39.8h1.6v7.1h-1.6v-7.1Z" />
                            <path className="st0" d="M214.3,45.9l.9-1.1c.7.5,1.3.9,2.2.9s1.1-.2,1.1-.7h0c0-.4-.2-.6-1.5-.9-1.5-.4-2.4-.8-2.4-2.2h0c0-1.3,1.1-2.2,2.6-2.2s2,.3,2.7.9l-.8,1.2c-.6-.4-1.3-.7-1.9-.7s-.9.3-.9.6h0c0,.5.3.6,1.6.9,1.5.4,2.3.9,2.3,2.1h0c0,1.4-1.1,2.2-2.7,2.2s-2.2-.4-3.1-1.1h0Z" />
                            <path className="st0" d="M229.4,39.8h1.7l1.9,3,1.9-3h1.7v7.1h-1.6v-4.6l-2.1,3h0l-2-3v4.6h-1.6v-7.1h0Z" />
                            <path className="st0" d="M241,39.8h1.6v7.1h-1.6v-7.1Z" />
                            <path className="st0" d="M246.8,39.8h1.5l3.4,4.4v-4.4h1.6v7.1h-1.4l-3.5-4.5v4.5h-1.6v-7.1h0Z" />
                            <path className="st0" d="M257.4,39.8h5.5v1.4h-3.9v1.4h3.5v1.4h-3.5v1.5h4v1.4h-5.6v-7.1h0Z" />
                        </svg>

                    </Link>

                </div>
</div>

                    <nav className={`menu ${isSticky ? 'sticky' : ''} ${isScrolled ? 'jerk' : ''}`}>
                <div className='container'>

                        <ul>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(item.label)}
                                    onMouseLeave={handleMouseLeave}
                                    className="menu-item"
                                >
                                    <Link to={item.path} onClick={() => item.subMenu && toggleSubMenu(item.label)}>
                                        {item.label}
                                    </Link>

                                    {/* Accordion submenu for mobile */}
                                    {item.subMenu && (
                                        <ul className={`submenu ${openSubMenu === item.label ? 'open' : ''}`}>
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path}>{subItem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
            </div>
            </nav>

        </header>
    );
};

export default StickyMenu;
