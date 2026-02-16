// Home.tsx
import Swiper from "../../components/MainSlider";
import SplitHeroSection from "../../components/SplitHeroSection";
// import HeroSection from '../../components/HeroSection';
// import HeroVideo from '../components/HeroVideo';
// import Solutions from '../components/Solutions';
import Process from "../../components/Process";
// import CaseStudies from '../../components/CaseStudies';
// import Events from '../../components/Events';
// import SocialFeed from '../components/SocialFeed';
// import KnowMore from '../../components/TextCTA';
// import FadeUp from '../../components/Animation/FadeUp';
// import ArticlesBlogs from '../../components/ArticlesBlogs';

import IndustryCertifications from "../../components/IndustryCertifications";
import HomeApplication from "../../components/HomeApplications";
import SplitSectionWithIcons from "../../components/SplitSectionWithIcons";
// import TableModal from '../../components/TableModal';

const Home: React.FC = () => {
  const aboutData = {
    subtitle: "Recyclamine Overview",
    title: "Ready to close the loop on Thermoset Epoxy waste?",
    description: [
      "Recyclamine is a groundbreaking solution that brings true circularity to thermoset composites without compromising on performance. It allows manufacturers to maintain the strength and durability of traditional epoxy composites while enabling full recyclability. By significantly reducing environmental impact and landfill waste, Recyclamine supports sustainability goals and resource efficiency. Additionally, it unlocks cost savings through the recovery and reuse of valuable fibers and resins, making it both an environmentally and economically smart choice.",
    ],
    knowMore: {
      to: "recyclamine-overview",
      title: "Read more on this disruptive technology",
      color: "blue",
    },
    icons: [
      {
        src: "/images/icons/svg/true-circularity-for-thermoset-epoxyΓÇï.svg",
        alt: "True Circularity for Thermoset Epoxy",
        text: "True Circularity for Thermoset Epoxy",
      },
      {
        src: "/images/icons/svg/high-performance-material-zero-compromiseΓÇï.svg",
        alt: "High performance Material, Zero compromise",
        text: "High performance Material, Zero compromise",
      },
      {
        src: "/images/icons/svg/valuable-material-recovery-enhanced-economy.svg",
        alt: "Valuable Material Recovery, enhanced economy",
        text: "Valuable Material Recovery, enhanced economy",
      },
      {
        src: "/images/icons/svg/lower-environmental-impact-and-waste-reductionΓÇï.svg",
        alt: "Lower Environmental Impact & Waste reduction",
        text: "Lower Environmental Impact & Waste reduction",
      },
    ],
  };

  // const caseStudiesData = [
  //   {
  //     headingtype: 'large',
  //     subheading: '',
  //     heading: 'The Recyclamine Ecosystem',
  //     description: 'The Recyclamine Ecosystem is shaping a future where sustainable practices are not just an option, but the standard, and where innovation thrives across industries. It’s a dynamic network designed to support sustainable manufacturing throughout every stage of production. Insert icons for each of the below points.',
  //     "points": [
  //       {
  //         "icon": "Collaboration.svg",
  //         "title": "Collaboration",
  //         "description": "We partner with industries to develop customized recycling solutions that address the unique needs of each sector."
  //       },
  //       {
  //         "icon": "Innovation.svg",
  //         "title": "Innovation",
  //         "description": "Our advanced technology transforms waste into valuable, reusable resources, continually expanding the possibilities of composite materials."
  //       },
  //       {
  //         "icon": "Education.svg",
  //         "title": "Education",
  //         "description": "We equip businesses and consumers with the knowledge and tools to make informed, sustainable choices."
  //       }
  //     ],
  //     link_title: 'Know more',
  //     url: '',
  //     imgsrc: '/images/homepage/case-studies/Revolutionary Material Use.jpg',
  //   },
  //   // {
  //   //   headingtype: 'large',
  //   //   subheading: 'Case Study',
  //   //   heading: 'Study Heading 2',
  //   //   description: 'Description for case study 2.',
  //   //   link_title: 'Learn more',
  //   //   url: '/case-study-2',
  //   //   imgsrc: '/images/homepage/case-studies/Revolutionary Material Use.jpg',
  //   // },
  // ];

  return (
    <>
      <Swiper />

      <SplitSectionWithIcons
        title={aboutData.title}
        subtitle={aboutData.subtitle}
        description={aboutData.description}
        knowMore={aboutData.knowMore}
        icons={aboutData.icons}
      />

      {/* 
      <section className='hmabout'>
        <div className='container'>
          <div className='eyebrow-text'>
            <h5>
              <img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" />
              ABOUT</h5>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
              <div className='hmabout-lhs'>
                <h4>Ready to close the loop on Thermoset Epoxy waste?</h4>
                <p>Recyclamine is a groundbreaking solution that brings true circularity to thermoset composites without compromising on performance. It allows manufacturers to maintain the strength and durability of traditional epoxy composites while enabling full recyclability. By significantly reducing environmental impact and landfill waste, Recyclamine supports sustainability goals and resource efficiency. Additionally, it unlocks cost savings through the recovery and reuse of valuable fibers and resins, making it both an environmentally and economically smart choice.</p>
                <KnowMore to="about-us/our-genesis-philosophy-and-values" title="Read more on this disruptive technology" color="blue" />
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1'>
              <div className='hmabout-rhs'>
                <ul className='hmabout-icons'>
                  <li><img src={`${process.env.PUBLIC_URL}/images/icons/svg/true-circularity-for-thermoset-epoxy​.svg`} alt="True Circularity for Thermoset Epoxy​" />
                    <p>True Circularity for Thermoset Epoxy​</p>
                  </li>
                  <li><img src={`${process.env.PUBLIC_URL}/images/icons/svg/high-performance-material-zero-compromise​.svg`} alt="High performance Material, Zero compromise​" />
                    <p>High performance Material, Zero compromise​</p>
                  </li>
                  <li><img src={`${process.env.PUBLIC_URL}/images/icons/svg/valuable-material-recovery-enhanced-economy.svg`} alt="Valuable Material Recovery, enhanced economy" />
                    <p>Valuable Material Recovery, enhanced economy</p>
                  </li>
                  <li><img src={`${process.env.PUBLIC_URL}/images/icons/svg/lower-environmental-impact-and-waste-reduction​.svg`} alt="Lower Environmental Impact & Waste reduction​" />
                    <p>Lower Environmental Impact & Waste reduction​</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </section> */}

      <SplitHeroSection
        theme="light"
        layout_order="reverse"
        contenttype=""
        subheading=""
        heading="The Recyclamine Technology"
        description={
          <>
            Recyclamine is a revolutionary new platform chemistry, with a series
            of solutions that cover different properties such as reactivity
            speed, viscosity and chemical resistance.
            <br />
            Recyclamine retains the key advantages of standard epoxy resins,
            such as mechanical performance and durability and can be integrated
            seamlessly with your existing manufacturing processes.
          </>
        }
        url="the-recyclamine-technology"
        linktitle="Find out more about the chemistry behind this revolutionary technology"
        imgsrc={`${process.env.PUBLIC_URL}/images/homepage/about/home-about.jpg`}
      />

      <Process />

      <HomeApplication />

      <IndustryCertifications />

      {/* <SplitHeroSection theme='light' layout_order='reverse' contenttype='' subheading='' heading='Industry Use Cases' description={
        <>
          Recyclamine is transforming industries by providing sustainable, high performance solutions for composite materials.
        </>}
          url='/industries' linktitle={'Explore solutions for your industry'} HeroImage={[
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Skis.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Surfboards & Snowboards.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Kayaks.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Wind blades & Spar Caps.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Mobility & Transportation.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Hydrogen Cylinders.png`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Electricals & Electronics.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Drones.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Other Composites.jpg`
        ]} /> */}
      <SplitHeroSection
        theme="light"
        layout_order="reverse"
        heading="Industry Use Cases"
        description={
          <>
            Recyclamine is transforming industries by providing sustainable,
            high performance solutions for composite materials.
            <br />
            <br />
            <div className="industry-links bol">
              <a href="/industries/skis-and-snowboards">Skis & Snowboards</a> |{" "}
              <a href="/industries/surfboards">Surfboards</a> |{" "}
              <a href="/industries/kayaks">Kayaks</a> |{" "}
              <a href="/industries/wind-blades-and-spar-caps">
                Wind Blades & Spar Caps
              </a>
              <br />
              <a href="/industries/mobility-and-transportation">
                Mobility & Transportation
              </a>{" "}
              |{" "}
              <a href="/industries/type-iv-pressure-vessel">
                Type IV Pressure Vessel
              </a>{" "}
              |{" "}
              <a href="/industries/electricals-electronics">
                Electricals & Electronics
              </a>{" "}
              | <a href="/industries/drones">Drones</a> |{" "}
              <a href="/industries/other-composites">Other Composites</a>
            </div>
          </>
        }
        imgsrc={[
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Skis.jpg`,
            url: "/industries/skis-and-snowboards",
            linktitle: "Skis",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Surfboards & Snowboards.jpg`,
            url: "/industries/surfboards",
            // linktitle: "surfboards",
            linktitle: "Surfboards",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Kayaks.jpg`,
            url: "/industries/kayaks",
            linktitle: "Kayaks",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Wind blades & Spar Caps.jpg`,
            url: "/industries/wind-blades-and-spar-caps",
            linktitle: "Wind blades & Spar Caps",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Mobility & Transportation.jpg`,
            url: "/industries/mobility-and-transportation",
            linktitle: "Mobility & Transportation",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Hydrogen Cylinders.png`,
            url: "/industries/type-iv-pressure-vessel",
            linktitle: "Type IV Pressure Vessel",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Electricals & Electronics.jpg`,
            url: "/industries/electricals-electronics",
            linktitle: "Electricals & Electronics",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Drones.jpg`,
            url: "/industries/drones",
            linktitle: "Drones",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Other Composites.jpg`,
            url: "/industries/other-composites",
            linktitle: "Other Composites",
          },
        ]}
      />

      {/* <SplitHeroSection
        theme="light"
        layout_order="reverse"
        heading="Industry Use Cases"
        description="Recyclamine is transforming industries by providing sustainable, high performance solutions for composite materials."
        imgsrc={[
          {
            src: `${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/the-gun-sails-thumb.webp`,
            url: "/success-stories",
            linktitle:
              "Learn how we have helped our clients reach their sustainability goals",
            // description: "High-performance skis using recyclable composites.",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Surfboards & Snowboards.jpg`,
            url: "/industries/surfboards",
            linktitle: "Surfboards",
            // description: "Sustainable surfboards & snowboards solutions.",
          },
          {
            src: `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Kayaks.jpg`,
            url: "/industries/kayaks",
            linktitle: "Kayaks",
            // description: "Eco-friendly kayak composites.",
          },
        ]}
      /> */}

      {/* <section theme='light' layout_order='reverse'>
          <div>
            Industry Use Cases
          </div>
          <div>
            Recyclamine is transforming industries by providing sustainable, high performance solutions for composite materials.
          </div>
        </section> */}

      {/* <SplitHeroSection
        theme="white"
        layout_order=""
        subheading="SUCCESS STORIES"
        heading="The Gun Sails von Osterhausen (Kanoa Surfboards) & Aditya Birla Advanced Materials Collaborative Innovation Towards Sustainable Surfboards"
        description={[
          "Kanoa Surfboards is a premium surfboard brand based in Germany, known for its high-performance and custom-designed boards. The company designs, manufactures, and sells surfboards across Europe and is rapidly expanding its presence. Kanoa has earned recognition for combining advanced engineering with a deep passion for surfing, offering boards that cater to a wide range of enthusiasts—from beginners to seasoned professionals. Their focus is on creating surfboards that harmonize cutting-edge technology, sustainability, and craftsmanship.",
        ]}
        imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/the-gun-sails-thumb.webp`}
        url="/success-stories"
        linktitle="Learn how we have helped our clients reach their sustainability goals"
      /> */}

      <SplitHeroSection
        theme="white"
        layout_order=""
        subheading="SUCCESS STORIES"
        heading=""
        description={
          <>
            <div className="industry-links bol">
              {/* <a href="/industries/skis-and-snowboards">Skis & Snowboards</a> |{" "}
              <a href="/industries/surfboards">Surfboards</a> |{" "} */}
              <a href="/success-stories/the-gun-sails-von-osterhausen">
                Kanoa Surfboards
              </a>{" "}
              |{" "}
              <a href="/success-stories/hanyang-university-korea-and-aditya-birla-advanced-materials-collaboration">
                Hanyang University, Korea
              </a>{" "}
              |{" "}
              <a href="/success-stories/ncc-uk-and-aditya-birla-advanced-materials">
                National Composites Centre
              </a>{" "}
              |{" "}
              {/* <br />
              <a href="/industries/mobility-and-transportation">
                Mobility & Transportation
              </a>{" "}
              |{" "} */}
              {/* <a href="/industries/type-iv-pressure-vessel">
                National Composites Centre
              </a>{" "}
              |{" "} */}
              <a href="/success-stories/cobra-international-x-aditya-birla-advanced-materials-collaboration">
                Cobra International
              </a>{" "}
              {/* | <a href="/industries/drones">Drones</a> |{" "}
              <a href="/industries/other-composites">Other Composites</a> */}
            </div>
          </>
        }
        imgsrc={[
          {
            heading:
              "The Gun Sails von Osterhausen (Kanoa Surfboards) & Aditya Birla Advanced Materials Collaborative Innovation Towards Sustainable Surfboards",
            src: `${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/the-gun-sails-thumb.webp`,
            url: "/success-stories/the-gun-sails-von-osterhausen",
            linktitle: "Know More",

            description:
              "Kanoa Surfboards is a premium surfboard brand based in Germany, known for its high-performance and custom-designed boards. The company designs, manufactures, and sells surfboards across Europe and is rapidly expanding its presence. Kanoa has earned recognition for combining advanced engineering with a deep passion for surfing, offering boards that cater to a wide range of enthusiasts—from beginners to seasoned professionals. Their focus is on creating surfboards that harmonize cutting-edge technology, sustainability, and craftsmanship.",
          },
          {
            heading:
              "National Composites Centre, UK X Aditya Birla Advanced Materials",
            src: `${process.env.PUBLIC_URL}/images/stories-and-blogs/ncc2.jpg`,
            url: "/success-stories/ncc-uk-and-aditya-birla-advanced-materials",
            linktitle: "Know More",
            description:
              "The NCC (National Composites Centre) is a world-leading UK research and development facility that provides access to state-of-the-art engineering capability and technology. It collaborates to address the most complex engineering challenges of our time and accelerate the development of new products across advanced materials, digital engineering, sustainability, and hydrogen. Delivering pioneering innovation to drive industrial transformation, the NCC works across a diverse range of sectors to deliver benefits to the UK, investing in the talent of our current and future workforce.",
          },
          {
            heading:
              "Cobra International X Aditya Birla Advanced Materials Collaboration for Closed-Loop Recycling in Composite Manufacturing",
            src: `${process.env.PUBLIC_URL}/images/stories-and-blogs/cobra-abg/1cobra-abg-thumb.jpg`,
            url: "/success-stories/cobra-international-x-aditya-birla-advanced-materials-collaboration",
            linktitle: "Know More",
            description:
              "Cobra International, based in Thailand, is a leading manufacturer specializing in high-end composite products for a variety of industries, including water sports, automotive, marine, and luxury accessories. With over 40 years of experience, Cobra has become a trusted name in the design, development, and production of strong, lightweight, and aesthetically appealing composite components.",
          },
          {
            heading:
              "Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry",
            src: `${process.env.PUBLIC_URL}/images/stories-and-blogs/hanyang-abg/1hanyang-university-korea-thumb.jpg`,
            url: "/success-stories/hanyang-university-korea-and-aditya-birla-advanced-materials-collaboration",
            linktitle: "Know More",
            description:
              "Hanyang University, established in 1939, is one of South Korea's leading private universities, located in Seoul. It has a strong emphasis on engineering, science, and technology. The university is renowned for its high-quality research, particularly in the fields of engineering, architecture, and IT.",
          },
        ]}
      />

      {/* //heading=""
  description= */}

      {/* <HeroSection /> */}

      {/* <HeroVideo /> */}

      {/* <Solutions theme='grey' subheading='Solutions' heading='Applications and Solutions' description={[<strong>Transforming Composites, Renovating the Future across Industries</strong>, <br/>, "Our innovative epoxy solutions deliver unmatched performance while driving sustainability, creating lasting benefits for your business and the planet."]} url='#' imgsrc={`${process.env.PUBLIC_URL}/images/homepage/solutions/Solutions-Cover.jpg`} /> */}

      {/* <SplitHeroSection
        theme="grey"
        layout_order=""
        subheading="Solutions"
        heading="Applications & Solutions"
        description={[
          <strong>Discover how Recyclamine’s revolutionary recyclable epoxy technology transforms industries</strong>,
          // <br />,
          " by providing sustainable, high-performance solutions for composite materials."
        ]}
        url="/applications"
        imgsrc={[
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Skis.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Surfboards & Snowboards.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Kayaks.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Wind blades & Spar Caps.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Mobility & Transportation.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Hydrogen Cylinders.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Electricals & Electronics.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Drones.jpg`,
          `${process.env.PUBLIC_URL}/images/homepage/solutions/slider/Other Composites.jpg`
        ]}
      /> */}

      {/* <CaseStudies /> */}

      {/* <CaseStudies caseStudies={caseStudiesData} /> */}

      {/* <ArticlesBlogs/> */}

      {/* <CaseStudies headingtype='large' subheading='Case Studies' heading='Revolutionary Material Use' description={<><p>Cobra, with Aditya Birla Chemicals, incorporated Recyclamine technology into the production of watersports fin moulds using recyclable epoxy, enabling efficient closed-loop recycling.</p>
        </>}
        link_title='Know More' url='#' imgsrc={`${process.env.PUBLIC_URL}/images/homepage/case-studies/Revolutionary Material Use.jpg`} /> */}

      {/* <Events /> */}
      {/* <SocialFeed /> */}
    </>
  );
};

export default Home;
