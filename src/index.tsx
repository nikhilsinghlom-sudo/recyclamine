import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS (includes Popper for dropdowns, modals, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CommonProvider } from "./contexts/commonContext";
import Layout from './Layout';

// Pages
import Home from "./pages/Home";
import FourZeroFour from './pages/404';

// About pages

// import TheLegacy from './pages/About/TheLegacy';
// import TheGenesisofRecyclamine from './pages/About/TheGenesisofRecyclamine';
// import OurPhilosophyAndValues from './pages/About/OurPhilosophyAndValues';
import About from './pages/About';
// import OurPresence from './pages/About/OurPresence';


// The Recyclamine Revolution

// import TechnologyHowItWorks from './pages/TheRecyclamineRevolution/TechnologyHowItWorks';
// import WhyRecyclamine from './pages/TheRecyclamineRevolution/WhyRecyclamine';

// import ScrollToTop from './components/ScrollToTop';




// Applications

import Applications from './pages/Applications';
import ApplicationsDetail from './pages/Applications/detail';
// import ApplicationsDetailSkis from './pages/Applications/skis';
import Contact from './pages/Contact';



// import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';

// Sustainability

import Sustainability from './pages/Sustainability';

// CaseStudies

// import CaseStudies from './pages/CaseStudies';

// Resources

// import Resources from './pages/Resources';


// Collaboration With Universities

// import CollabUniv from './pages/CollaborationWithUniversities';

// Blog

// import Blog from './pages/Blog'
// import BlogDetail from './pages/Blog/detail';

// Blog and stories

import SuccessStories from './pages/Success-Stories';
import TheGunSails from './pages/Success-Stories/the-gun-sails-von-osterhause';
import Ncc from './pages/Success-Stories/ncc';
// import Sgre from './pages/Success-Stories/sgre';
import Cobra from './pages/Success-Stories/cobra-abg-collaboration';
import HanyangUniversity from './pages/Success-Stories/hanyang-university-korea';

// import TechnologyHowItWorks from './pages/TheRecyclamineRevolution/TechnologyHowItWorks';

import RecyclamineTechnology from './pages/TheRecyclamineTechnology';

// Events
import Events from './pages/Events';
import JecWorld2025 from './pages/Events/jec-world-2025';
import Camx from './pages/Events/camx-the-composites-and-advanced-materials-expo';
import Windergy from './pages/Events/windergy-india-2024';


// ArticlesAndBlogs

import ArticlesAndBlogsIndex from './pages/ArticlesAndBlogs';



// Language

// import Lang from './pages/lang';

import ScrollToHashElement from './components/ScrollToHashElement';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <CommonProvider>
      <BrowserRouter>
        <ScrollToHashElement /> 
        <ScrollToTop/>
       
        <Routes>
          {/* Define Layout as a wrapper for all pages */}
          
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            {/* ABOUT */}
            <Route path="recyclamine-overview" element={<About />} />

            <Route path="the-recyclamine-technology" element={<RecyclamineTechnology />} />

          

            {/* <Route path="about-us/our-genesis-philosophy-and-values" element={<TheGenesisofRecyclamine />} /> */}
            {/* <Route path="about-us/the-legacy-of-abc-and-abam" element={<TheLegacy />} /> */}
            {/* <Route path="about-us/our-presence" element={<OurPresence />} /> */}

            {/* <Route path="about-us/our-philosophy-and-values" element={<OurPhilosophyAndValues />} /> */}
            {/* The Recyclamine Revolution */}
            {/* <Route path="the-recyclamine-revolution/the-technology-and-how-it-works" element={<TechnologyHowItWorks />} /> */}
            {/* <Route path="the-recyclamine-revolution/why-recyclamine" element={<WhyRecyclamine />} /> */}


            <Route path='contact-us' element={<Contact />}/>
            {/* <Route path='faq' element={<Faq />} /> */}
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='disclaimer' element={<Disclaimer />} />

            {/* Applications */}

            <Route path='industries' element={<Applications/>} />
            <Route path="/industries/:id" element={<ApplicationsDetail />} />

            {/* Sustainability */}
            <Route path='sustainability' element={<Sustainability/>} />

            {/* CaseStudies */}

            {/* <Route path='casestudies' element={<CaseStudies />} /> */}

            {/* Resources */}

            {/* <Route path='updates-and-resources/resources' element={<Resources />} /> */}

            {/* Collaboration With Universities */}

            {/* <Route path='updates-and-resources/collaboration-with-universities' element={<CollabUniv />} /> */}

            {/* Blog */}

            {/* <Route path='/blog' element={<Blog/>} /> */}
            {/* <Route path='/blog-detail' element={<BlogDetail />} /> */}

            <Route path="*" element={<FourZeroFour />} />

            {/* Blog and stories */}

            <Route path='/success-stories/' element={<SuccessStories />} />
            <Route path='/success-stories/the-gun-sails-von-osterhausen' element={<TheGunSails />} />
            <Route path='/success-stories/ncc-uk-and-aditya-birla-advanced-materials' element={<Ncc />} />
            {/* <Route path='/success-stories/siemens-gamesa-renewable-energy-x-aditya-birla-advanced-materials' element={<Sgre />} /> */}
            <Route path='/success-stories/cobra-international-x-aditya-birla-advanced-materials-collaboration' element={<Cobra />} />
            <Route path='/success-stories/hanyang-university-korea-and-aditya-birla-advanced-materials-collaboration' element={<HanyangUniversity />} />

            {/* Events */}

            <Route path='/events' element={<Events />} />
            <Route path='/events/jec-world-2025' element={<JecWorld2025 />} />
            <Route path='/events/camx-the-composites-and-advanced-materials-expo' element={<Camx />} />
            <Route path='/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference' element={<Windergy/>}></Route>


            {/* ArticlesAndBlogsIndex */}

            <Route path='/articles-and-blogs' element={<ArticlesAndBlogsIndex />} />
          

            {/* ---------------Test---------------- */}

            {/* <Route path='lang' element={<Lang/>}/> */}


          </Route>
        </Routes>
      </BrowserRouter>
    </CommonProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
