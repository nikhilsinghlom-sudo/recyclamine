import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import LangDropdown from "../LangDropdown";
import React from "react";
import AccordionMenu from "../AccordionMenu";


export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();  // Hook to track route changes

  // Toggle menu visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on route change or press Escape
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscKey);
    setIsOpen(false); // Close menu when route changes

    return () => document.removeEventListener('keydown', handleEscKey);
  }, [location]);



  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);




  // hash links scroll to the correct position

  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);


  const menuItems = [
    {
      "title": "Recyclamine Overview",
      "link": "recyclamine-overview",
      "submenu": []
    },
    {
      "title": "The Recyclamine Technology",
      "link": "the-recyclamine-technology",
      "submenu": []
    },
    {
      "title": "Industries and Applications",
      "link": "industries",
      "submenu": []
    },
    {
      "title": "Sustainability",
      "link": "sustainability",
      "submenu": []
    },
    {
      "title": "Success Stories",
      "link": "success-stories",
      "submenu": []
    },
    {
      "title": "Articles and Blogs",
      "link": "articles-and-blogs",
      "submenu": []
    },
    
    {
      "title": "Events",
      "link": "events",
      "submenu": []
    },
    
    {
      "title": "Contact Us",
      "link": "contact-us",
      "submenu": []
    },
    


    // {
    //   "title": "About Us",
    //   "link": "/about",
    //   "submenu": [
    //     // {"title" : "About Us", "link" : "about"},
    //     {"title": "Our Genesis, Philosophy & Values", "link": "about-us/our-genesis-philosophy-and-values"},
    //     // { "title": "The Legacy of ABC and ABAM", "link": "about-us/the-legacy-of-abc-and-abam" },
    //     // { "title": "Our Philosophy & Values", "link": "about/our-philosophy-and-values" },
    //     {"title": "Our Presence", "link": "about-us/our-presence"},
    //   ]
    // },
    // {
    //   "title": "The Recyclamine Revolution",
    //   "link": "#",
    //   "submenu": [
    //     { "title": "Technology & How it Works", "link": "the-recyclamine-revolution/the-technology-and-how-it-works" },
    //     // { "title": "Why Recyclamine", "link": "the-recyclamine-revolution/why-recyclamine" },
    //     // { "title": "Benefit to the Planet & Its People", "link": "#" },
    //     // { "title": "Benefit to Businesses", "link": "#" },
    //     { "title": "Recyclamine Innovation Lab", "link": "#" }
    //   ]
    // },
    // {
    //   "title": "Applications & Solutions",
    //   "link": "applications",
    //   "submenu": [
    //     { "title": "Applications & Solutions", "link": "applications" },
    //     { "title": "Skis", "link": "applications/skis" },
    //     { "title": "Snowboards", "link": "applications/snowboards" },
    //     { "title": "Surfboards", "link": "applications/surfboards" },
    //     { "title": "Kayaks", "link": "applications/kayaks" },
    //     { "title": "Wind blade/ Spar Cap", "link": "applications/wind-blades-and-spar-caps" },
    //     { "title": "Mobility/Transportation", "link": "applications/mobility-and-transportation" },
    //     { "title": "Hydrogen Cylinder", "link": "applications/hydrogen-cylinders" },
    //     { "title": "Electrical & Electronics", "link": "applications/electricals-electronics" },
    //     { "title": "Drones", "link": "applications/drones" },
    //     { "title": "Other Composites", "link": "applications/other-composites" }
    //   ]
    // },
    // {
    //   "title": "Sustainability",
    //   "link": "sustainability",
    //   "submenu": [
    //     { "title": "Sustainability", "link": "sustainability" },
    //     { "title": "The Planet is Mine", "link": "sustainability#ThePlanet" },
    //     { "title": "The 3Rs of Recycling, Recovery, & Repurposing", "link": "sustainability#The3Rs" },
    //     // { "title": "The Recyclamine Ecosystem", "link": "sustainability#TheRecyclaime" },
    //     { "title": "Lifecycle & Carbon Footprint", "link": "sustainability#Lifecycle" },
    //     // { "title": "Recyclamine Impact Stories", "link": "sustainability#Recyclamine" }
    //   ]
    // },
    // // {
    // //   "title": "Updates & Resources",
    // //   "link": "#",
    // //   "submenu": [
    // //     { "title": "Stories & Blogs", "link": "blog" },
    // //     { "title": "Resources", "link": "updates-and-resources/resources" },
    // //     { "title": "FAQs", "link": "faq" },
    // //     { "title": "Collaboration with Universities", "link": "updates-and-resources/collaboration-with-universities" },
    // //     { "title": "Events & Exhibitions", "link": "#" },
    // //   ]
    // // },

    // {
    //   "title": "Contact Us",
    //   "link": "contact-us",
    //   "submenu": []
    // }

  ];


  return (
    <>
      <header>
        <div className='container'>
          <div className='flex-container'>
            <div className="flex-container-lhs">
              <Link className="brand-logo" to={"/"}>
                {/* <img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Logo.svg`} alt="Recyclamine Logo" /> */}
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
            <div className="flex-container-right">
              {/* <div className="search"><Link to={"/"}><img src={`${process.env.PUBLIC_URL}/images/icons/Search.svg`} alt="Search" /></Link></div> */}
              {/* <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} */}
              <div className={`hamburger`} onClick={toggleMenu}
              >
                <span></span>
              </div>
              {/* <LangDropdown /> */}
            </div>
            <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
              <div className={`hamburger ms-auto open`} onClick={toggleMenu}>
                <span></span>
              </div>
              <div className="main-menu">
                <AccordionMenu items={menuItems} />
                <ul className="social-links">

                  <li><Link to={"https://www.linkedin.com/company/recyclamine/"} target='_blank'>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_295_70)">
                        <path id='bg' d="M17.8235 0.5C7.98026 0.5 0 8.48026 0 18.3235C0 28.1668 7.98026 36.1471 17.8235 36.1471C27.6668 36.1471 35.6471 28.1668 35.6471 18.3235C35.6471 8.48026 27.6668 0.5 17.8235 0.5Z" fill="#F9F9F9" fillOpacity="0.15" />
                      </g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.15 15.2892H13.1327C12.2684 15.2892 11.708 14.7238 11.708 14.007C11.708 13.2763 12.2849 12.7227 13.1665 12.7227C14.0474 12.7227 14.589 13.2749 14.6063 14.0049C14.6063 14.7217 14.0474 15.2892 13.15 15.2892ZM23.9581 23.6116H21.2506V19.7837C21.2506 18.7817 20.8271 18.0977 19.8958 18.0977C19.1835 18.0977 18.7874 18.5593 18.603 19.0041C18.5421 19.1447 18.5432 19.334 18.5443 19.529C18.5445 19.5555 18.5446 19.5821 18.5446 19.6087V23.6116H15.8624C15.8624 23.6116 15.897 16.8308 15.8624 16.2144H18.5446V17.3753C18.7031 16.8677 19.5602 16.1433 20.928 16.1433C22.6249 16.1433 23.9581 17.2073 23.9581 19.4985V23.6116ZM14.4046 16.2144H12.017V23.6116H14.4046V16.2144Z" fill="white" />
                      <defs>
                        <filter id="filter0_b_295_70" x="-15" y="-14.5" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_295_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_295_70" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </Link></li>
                  <li><Link to={"https://www.youtube.com/@RecyclamineAdityaBirla"} target='_blank'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_493_581)">
                        <path id='bg' d="M17.8235 35.6471C27.6672 35.6471 35.6471 27.6672 35.6471 17.8235C35.6471 7.97987 27.6672 0 17.8235 0C7.97987 0 0 7.97987 0 17.8235C0 27.6672 7.97987 35.6471 17.8235 35.6471Z" fill="#F9F9F9" fillOpacity="0.15" />
                      </g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.9231 11.418C25.7406 11.648 26.3844 12.3256 26.6029 13.1861C27 14.7458 27 18 27 18C27 18 27 21.2541 26.6029 22.8139C26.3844 23.6744 25.7406 24.352 24.9231 24.5821C23.4415 25 17.5 25 17.5 25C17.5 25 11.5585 25 10.0768 24.5821C9.25929 24.352 8.61545 23.6744 8.39695 22.8139C8 21.2541 8 18 8 18C8 18 8 14.7458 8.39695 13.1861C8.61545 12.3256 9.25929 11.648 10.0768 11.418C11.5585 11 17.5 11 17.5 11C17.5 11 23.4415 11 24.9231 11.418ZM15.7188 15.2608V21.3478L20.4688 18.3044L15.7188 15.2608Z" fill="white" />
                      <defs>
                        <filter id="filter0_b_493_581" x="-15" y="-15" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_493_581" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_493_581" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </Link></li>

                  <li><Link to={"https://www.facebook.com/recyclamine "} target='_blank'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_491_543)">
                        <path id='bg' d="M17.8235 35.6471C27.6672 35.6471 35.6471 27.6672 35.6471 17.8235C35.6471 7.97987 27.6672 0 17.8235 0C7.97987 0 0 7.97987 0 17.8235C0 27.6672 7.97987 35.6471 17.8235 35.6471Z" fill="#F9F9F9" fillOpacity="0.15" />
                      </g>
                      <path d="M18.2715 14.3335C18.2715 14.4771 18.2715 14.945 18.2715 15.6098H20.6444L20.3871 17.6472H18.2715C18.2715 20.7894 18.2715 25 18.2715 25H15.4633C15.4633 25 15.4633 20.8451 15.4633 17.6472H14V15.6098H15.4633C15.4633 14.8018 15.4633 14.2272 15.4633 14.0673C15.4633 13.3051 15.4036 12.9434 15.7399 12.3528C16.0763 11.7622 17.0252 10.9815 18.6664 11.0003C20.308 11.0198 21 11.1719 21 11.1719L20.6444 13.3434C20.6444 13.3434 19.5962 13.0767 19.0816 13.1718C18.5678 13.2668 18.2715 13.5717 18.2715 14.3335Z" fill="white" />
                      <defs>
                        <filter id="filter0_b_491_543" x="-15" y="-15" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_491_543" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_491_543" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </Link></li>

                  <li><Link to={"https://www.instagram.com/recyclamine_am/"} target='_blank'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_295_79)">
                        <path id='bg' d="M17.8235 35.7955C27.6672 35.7955 35.6471 27.8156 35.6471 17.972C35.6471 8.1283 27.6672 0.148438 17.8235 0.148438C7.97987 0.148438 0 8.1283 0 17.972C0 27.8156 7.97987 35.7955 17.8235 35.7955Z" fill="#F9F9F9" fillOpacity="0.15" />
                      </g>
                      <path d="M18.3001 15.8789C16.7702 15.8789 15.5244 17.124 15.5244 18.6539C15.5244 20.1845 16.7702 21.4299 18.3001 21.4299C19.8307 21.4299 21.0754 20.1845 21.0754 18.6539C21.0754 17.1243 19.8304 15.8789 18.3001 15.8789Z" fill="#F9F9F9" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.924 11.3555H13.6768C12.2008 11.3555 11 12.5563 11 14.0323V23.2795C11 24.7555 12.2008 25.9567 13.6768 25.9567H22.924C24.4 25.9567 25.6012 24.7558 25.6012 23.2795V14.0323C25.6012 12.5563 24.4004 11.3555 22.924 11.3555ZM18.3004 23.4629C15.6501 23.4629 13.4939 21.3066 13.4939 18.6561C13.4939 16.0058 15.6501 13.8496 18.3004 13.8496C20.9509 13.8496 23.1072 16.0058 23.1072 18.6561C23.1072 21.3063 20.9506 23.4629 18.3004 23.4629ZM22.1241 13.7061C22.1241 14.3331 22.6343 14.8433 23.2617 14.8433C23.8887 14.8433 24.3989 14.3331 24.3989 13.7061C24.3989 13.079 23.8887 12.5688 23.2617 12.5688C22.6343 12.5688 22.1241 13.079 22.1241 13.7061Z" fill="#F9F9F9" />
                      <defs>
                        <filter id="filter0_b_295_79" x="-15" y="-14.8516" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_295_79" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_295_79" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </Link></li>
     
                </ul>
              </div>


              {/* <div className="main-menu row">
                <div className="menu-items col-auto">
                  <h5><Link to={"about"}>About Us</Link></h5>
                  <ul className="submenu">
                    <li><Link to={"about/the-legacy-aditya-birla-chemicals-and-aditya-birla-advanced-materials"}>The Legacy (ABC ABAM)</Link></li>
                    <li><Link to={"about/the-genesis-of-recyclamine"}>The Genesis of Recyclamine </Link></li>
                    <li><Link to={"about/our-philosophy-and-values"}>Our Philosophy &amp; Values</Link></li>
                    <li><Link to={"#"}>Our presence</Link></li>
                  </ul>
                </div>
                <div className="menu-items col-auto">
                  <h5><Link to={"#"}>The Recyclamine Revolution</Link></h5>
                  <ul className="submenu">
                    <li><Link to={"the-recyclamine-revolution/the-technology-and-how-it-works"}>The Technology & How it Works</Link></li>
                    <li><Link to={"the-recyclamine-revolution/why-recyclamine"}>Why Recyclamine</Link></li>
                    <li><Link to={"#"}>Benefit to the Planet & Its People</Link></li>
                    <li><Link to={"#"}>Benefit to Businesses</Link></li>
                    <li><Link to={"#"}>Recyclamine Innovation Lab</Link></li>
                  </ul>
                </div>
                <div className="menu-items col-auto">
                  <h5><Link to={"applications"}>Applications & Solutions</Link></h5>
                  <ul className="submenu">
                    <li><Link to={"applications/skis"}>Skis </Link></li>
                    <li><Link to={"applications/surfboards-and-snowboards"}>Surfboards & Snowboards </Link></li>
                    <li><Link to={"applications/kayaks"}>Kayaks & Surfboats</Link></li>
                    <li><Link to={"applications/wind-blades-and-spar-caps"}>Wind blade/ Spar Cap</Link></li>
                    <li><Link to={"applications/mobility-and-transportation"}>Mobility/Transportation</Link></li>
                    <li><Link to={"applications/hydrogen-cylinders"}>Hydrogen Cylinder </Link></li>
                    <li><Link to={"applications/electricals-electronics"}>Electrical & Electronics</Link></li>
                    <li><Link to={"applications/drones"}>Drones </Link></li>
                    <li><Link to={"applications/other-composites"}>Other Composites</Link></li>
                  </ul>
                </div>
                <div className="menu-items col-auto">
                  <h5><Link to={"/sustainability"}>Sustainability - The Circular Way</Link></h5>
                  <ul className="submenu">
                    <li><Link to={"/sustainability#ThePlanet"}>The Planet is Mine</Link></li>
                    <li><Link to={"/sustainability#The3Rs"}>The 3Rs of Recycling, Recovery, & Repurposing</Link></li>
                    <li><Link to={"/sustainability#TheRecyclaime"}>The Recyclaime Ecosystem</Link></li>
                    <li><Link to={"/sustainability#Lifecycle"}>Lifecycle & Carbon Footprint</Link></li>
                    <li><Link to={"/sustainability#Recyclamine"}>Recyclamine Impact Stories</Link></li>
                  </ul>
                </div>
                <div className="menu-items col-auto">
                  <h5><Link to={"#"}>Updates & Resources</Link></h5>
                  <ul className="submenu">
                    <li><Link to={"blog"}>Stories &amp; Blogs</Link></li>
                    <li><Link to={"updates-and-resources/resources"}>Resources</Link></li>
                    <li><Link to={"faq"}>FAQs</Link></li>
                    <li><Link to={"updates-and-resources/collaboration-with-universities"}>Collaboration with Universities</Link></li>
                    <li><Link to={"#"}>Events & Exhibitions</Link></li>
                  </ul>
                </div></div> */}

            </nav>

            {/* <div className="flex-container-rhs">
            <Link className="contbtn" to={"#"}>Get in touch <img src={`${process.env.PUBLIC_URL}/images/right-arrow-white.svg`} alt="Arrow" /></Link>
          </div> */}
          </div>
        </div>
        <div className="nav-overlay"></div>

      </header>

    </>

  )
}