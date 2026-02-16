import { Link } from 'react-router-dom';


import InsideHeader from "../../components/InsideHeader";
import HeroStatement from "../../components/HeroStatement";
// import Solutions from "../components/Solutions";
// import AchievementsSummary from "../../components/AchievementsSummary";
import ContentWithIcon from "../../components/ContentWithIcon";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import SplitHeroSection from "../../components/SplitHeroSection";
import CaseStudies from "../../components/CaseStudies";
// import CaseStudies from "../components/CaseStudies";

const TheLegacy: React.FC = () => {

  const caseStudiesData = [
    {
      headingtype: 'medium',
      subheading: '',
      heading: 'Both companies adhere to stringent environmental and safety standards, making them leaders in sustainable chemicals.',
      description: (<><ul><li><Link to="https://www.adityabirlachemicals.com" target="_blank">Aditya Birla Chemicals</Link></li>
        <li><Link to="https://www.abg-am.com" target="_blank">Aditya Birla Advanced Materials</Link></li>
</ul></>),
      link_title: 'Know more',
      url: '',
      imgsrc: '/images/about/companies.jpg',
    },
    // {
    //   headingtype: 'large',
    //   subheading: 'Case Study',
    //   heading: 'Study Heading 2',
    //   description: 'Description for case study 2.',
    //   link_title: 'Learn more',
    //   url: '/case-study-2',
    //   imgsrc: '/images/homepage/case-studies/Revolutionary Material Use.jpg',
    // },
    // Add more case studies as needed
  ];





  return (
    <>
      <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/insideheader/the-legacy-abc-abam/the-legacy-abc-abam-banner.jpg`} title='The Legacy Of Abc And Abam' alt_title="The Legacy (Aditya Birla Chemicals and Aditya Birla Advanced Materials" />

      <HeroStatement title='The Legacy of ABC and ABAM' content="Aditya Birla Chemicals (ABC) and Aditya Birla Advanced Materials (ABAM) represent the Group's commitment to sustainable and high-performance materials." />

      <SplitHeroSection theme='light' layout_order='reverse' subheading='' heading='Aditya Birla Chemicals, with a six-decade legacy, is one of the largest players in the diversified chemicals sector.' description={
        <>
          It has a significant presence in specialty chemicals value chain through offerings in epoxy, food phosphates, sulphites, and water treatment chemicals.  
        </>
      } url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/abc-with-a-six-decade-legacy.jpg`} />


      <SplitHeroSection theme='blue' layout_order='' subheading='' heading='Notably, Aditya Birla Chemicals is the largest Indian chlor-alkali manufacturer' description={
        <>
          It is the leading producer of Caustic Soda and Chlorine derivative chemicals in India. It is also the largest specialty solution provider of Epoxy resin in the country.
        </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/Notably.jpg`} />


      {/* <AchievementsSummary
        stats={[
          { value: "100K+", label: "Clients Satisfied" },
          { value: "60K+", label: "Trusted Employee Developers" },
          { value: "20K+", label: "Successful Projects" },
          { value: "80K+", label: "Subscribers" },
        ]} /> */}

      <SplitHeroSection layout_order='reverse' theme='grey' subheading='' heading='Aditya Birla Advanced Materials, a more recent venture' description={
        <>
          Pioneers in epoxy and other specialty chemicals, offering solutions that blend performance with eco-consciousness. With a reach that spans over 90 countries, Advanced Materials is among the top 3 epoxy players in the world.
        </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/ABAM.jpg`} />




      <ContentWithIcon sectionclass='abam' bgimg={`${process.env.PUBLIC_URL}/images/about/abc-bg.jpg`} heading={
        <>
          Aditya Birla Advanced Materials’s diverse portfolio strengthens its foundation across primary sectors like, <strong>Construction, Coatings, Composites,</strong> and, <strong>Electronics, </strong> along with specialized industries such as, <strong>Wind, Aerospace, Automotive,</strong> and, <strong>Sports.</strong>
        </>}
        description="Through innovations in waterborne, bio-sourced, and recyclable solutions, Aditya Birla Advanced Materials has established itself as a reliable partner for advanced technologies worldwide. Acquisition of the award-winning Recyclamine technology in 2019 has further amplified its proposition to deliver sustainable, high-impact solutions." imgsrc={`${process.env.PUBLIC_URL}/images/about/IndustrySection.png`} url='https://www.abg-am.com/company/operations?page=contact-us' link_title='Know More' />

 



      <HeroStatement sectionclass='fullwidth' content="The combined expertise of Aditya Birla Chemicals and Aditya Birla Advanced Materials underpins Recyclamine, ensuring a solid foundation rooted in chemical excellence and a global perspective on responsible innovation." />

      <HeroSectionSmall bgimg={`${process.env.PUBLIC_URL}/images/about/presence-bg.jpg`} heading={
        <>
          With a presence in over <strong>80 countries, Aditya Birla Chemicals</strong> and <strong>Aditya Birla Advanced Materials</strong> are <strong>internationally recognised.</strong>
        </>} url="/contact-us" />



      <CaseStudies caseStudies={caseStudiesData} />







{/* 
      <CaseStudies headingtype='medium' subheading='' heading='Both companies adhere to stringent environmental and safety standards, making them leaders in sustainable chemicals.' description={<><ul>
        <li><Link to="https://www.adityabirlachemicals.com" target="_blank">Aditya Birla Chemicals</Link></li>
        <li><Link to="https://www.abg-am.com" target="_blank">Aditya Birla Advanced Materials</Link></li>
        
        </ul>
      </>}
        link_title='Know More' url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/companies.jpg`} /> */}

    </>



  );
};

export default TheLegacy;