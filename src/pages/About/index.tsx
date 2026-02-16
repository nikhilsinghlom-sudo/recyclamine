import InsideHeader from "../../components/InsideHeader";
// import SplitHeroSection from "../../components/SplitHeroSection";
// import HeroStatement from "../../components/HeroStatement";
import FadeUp from "../../components/Animation/FadeUp";
import SplitSectionWithIcons from "../../components/SplitSectionWithIcons";
// import HeadingWithIcons from "../../components/HeadingWithIcons";
import AccordionSlider from "../../components/AccordionSlider";
// import Teams from "../../components/Teams";

import PlyrPlayer from "../../components/VideoPlayer";

const About: React.FC = () => {
  const options: Plyr.Options = {
    controls: ["play-large"], // Custom controls
    settings: [], // Settings options
    autoplay: false, // Autoplay option
    // muted: false, // Mute video initially
    // clickToPlay: true
    hideControls: true,
  };

  // const aboutData = {
  //     subtitle: 'About',
  //     title: 'The Need',
  //     description: [
  //         'Thermoset Epoxy resins have revolutionized engineering, enabling the creation of lightweight yet incredibly strong and durable structures, like wind turbine blades. However this durability also creates a problem…waste.',
  //         'Epoxy structures are not easily recycled, and often disposed of in landfill, incinerated or ground down into powder and used as low grade filler material. High value materials are lost, with increased pollution as a byproduct.',
  //     ],
  //     knowMore: {
  //         to: '',
  //         title: '',
  //         color: '',
  //     },
  //     icons: [
  //         {
  //             src: '/images/about/the-need/The-Need-Process.png',
  //             alt: 'The Need',
  //             text: '',
  //         }
  //     ],
  // };

  // const sceData = {
  //     subtitle: '',
  //     title: 'Switching to Circular Economy',
  //     description: [
  //         'Recyclamine is a revolutionary recyclable thermoset epoxy system that enables the recovery of both fibers and resin from cured composite parts — a capability once thought   impossible.',
  //         'Engineered for compatibility with existing epoxy applications and manufacturing processes, it allows for circular recycling of composite materials without sacrificing      performance.',
  //         'By unlocking the reuse of high-value materials and reducing end-of-life waste, Recyclamine delivers sustainability for epoxy composites.',
  //     ],
  //     knowMore: {
  //         to: '',
  //         title: '',
  //         color: '',
  //     },
  //     icons: [
  //         {
  //             src: '/images/about/Circular-economy.png',
  //             alt: 'Switching to Circular Economy',
  //             text: '',
  //         }
  //     ],
  // };

  const advancematerialsData = {
    subtitle: "",
    title: "About Aditya Birla Advanced Materials",
    description: [
      "Aditya Birla Advanced Materials – Recyclamine’s parent organization has a diverse portfolio across primary sectors like, Construction, Coatings, Composites, and, Electronics, along with specialized industries such as, Wind, Aerospace, Automotive, and, Sports.",
      "Through innovations in waterborne, bio-sourced, and recyclable solutions, Aditya Birla Advanced Materials has established itself as a reliable partner for advanced technologies worldwide. The award-winning Recyclamine technology has further amplified its proposition to deliver sustainable, high-impact solutions.",
      'For more details, visit: <a href="https://www.abg-am.com">www.abg-am.com</a>',
    ],
    knowMore: {
      to: "",
      title: "",
      color: "blue",
    },
    iconsHeading: "Other brands under Aditya Birla Advanced Materials",
    icons: [
      {
        src: "/images/about/abam/epotec.png",
        alt: "epotec",
        text: "",
      },
      {
        src: "/images/about/abam/cetepox.png",
        alt: "cetepox",
        text: "",
      },
      {
        src: "/images/about/abam/broiozen.png",
        alt: "broiozen",
        text: "",
      },
      {
        src: "/images/about/abam/recyclamine-dark-logo.svg",
        alt: "recyclamine-logo",
        text: "",
      },
    ],
  };

  const accordionItems = [
    {
      id: "0",
      title: "Cost-effectiveness and Economic Viability",
      content:
        "By focusing on the lifecycle costs and the economic benefits of using recyclable materials, Recyclamine positions itself as a cost-effective solution for manufacturers looking to invest in sustainability.",
      img: "",
    },
    {
      id: "4",
      title: "Sustainability and Environmental Responsibility",
      content:
        "Offering eco-friendly alternatives to traditional epoxy resins, this pillar emphasizes the product's role in reducing environmental impact, supporting a circular economy, and meeting the growing demand for green manufacturing practices.",
      img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
    },
    {
      id: "1",
      title: "Innovation and Technological Advancement",
      content:
        "Recyclamine represents a significant technological breakthrough in the materials science and composites industry, providing a recyclable solution without compromising performance. It demonstrates the brand's commitment to R&D, pushing the boundaries of what's possible in epoxy resin technology.",
      img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
    },
    {
      id: "2",
      title: "Performance and Reliability",
      content:
        "Ensuring that product performance, durability, and reliability remain top-notch, meeting or exceeding the industry standards set by traditional, non-recyclable epoxies.",
      img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
    },
    {
      id: "3",
      title: "Versatility and Application Diversity",
      content:
        "Catering to a wide range of industries and applications, from wind turbine blades and automotive components to sports equipment and beyond, highlighting its adaptability to different manufacturing needs and product specifications.",
      img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
    },
  ];

  return (
    <>
      <InsideHeader
        imgsrc={`${process.env.PUBLIC_URL}/images/about/about-header1.jpg`}
        alt_title="Recyclamine Overview"
        title="Recyclamine Overview"
      />

      <section className="hmabout  ">
        <div className="container ">
          {/* <div className='eyebrow-text'>
                        <h5><img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" />ABOUT</h5>
                    </div> */}
          <h4 className="text-blue ">The Need</h4>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 w-100 ">
              <div className="hmabout-lhs ">
                <p>
                  Thermoset Epoxy resins have revolutionized engineering,
                  enabling the creation of lightweight yet incredibly strong and
                  durable structures, like wind turbine blades. However, the
                  inherent durability of composites hinders cost-effective and
                  sustainable end-of-life (EoL) disposal.
                </p>
                <p>
                  Epoxy structures are not easily recycled, and often disposed
                  of in landfill, incinerated or ground down into powder and
                  used as low grade filler material. High value materials are
                  lost, with increased pollution as a byproduct.
                </p>
              </div>
            </div>
            
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="hmabout-rhs ps-0 ps-lg-5">
                <div className="image-wrapper text-center">
                  <pre className="text-blue">
                    <h4> Linear Economy</h4>
                  </pre>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about/the-need/the-need.png`}
                    alt="Linear Economy"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div> */}
          </div>
          <br />
          <br />
          <br />
          <h4 className="text-blue ">The Solution</h4>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 w-100">
              <div className="hmabout-lhs my-1 ">
                <p>
                  A circular economy redefines end of life by keeping materials
                  in productive use rather than allowing them to become waste.
                  Recyclamine enables this shift for thermoset epoxy composites
                  by making controlled recovery possible at the end of service
                  life, instead of disposal through landfill or incineration.
                </p>
                <p>
                  By allowing valuable constituents to be efficiently reclaimed
                  and reintroduced into new applications, recyclamine helps
                  close the loop between use, recovery, and reuse. This approach
                  reduces material loss, lowers environmental impact, and
                  decreases reliance on virgin resources, turning end of life
                  into a source of sustainable value creation.
                </p>
              </div>
            </div>
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="hmabout-rhs ps-0 ps-lg-5">
                <div className="image-wrapper text-center">
                  <h4 className="text-blue">Circular Economy</h4>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about/the-need/Circular_Economy.jpg`}
                    alt="Circular Economy"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <SplitSectionWithIcons title={aboutData.title} subtitle={aboutData.subtitle} description={aboutData.description} knowMore={aboutData.knowMore} icons={aboutData.icons} /> */}

      {/* <HeadingWithIcons heading="Major drivers for recyclable thermosets" description=""
                icons={[
                    {
                        src: `${process.env.PUBLIC_URL}/images/icons/svg/loss-of-valuable-raw-materials.svg`,
                        alt: "Loss of valuable raw materials",
                    },
                    {
                        src: `${process.env.PUBLIC_URL}/images/icons/svg/limited-landfill-spaces.svg`,
                        alt: "Limited landfill spaces",
                    },
                    {
                        src: `${process.env.PUBLIC_URL}/images/icons/svg/increasing-governments-regulations-and-norms.svg`,
                        alt: "Increasing Governments regulations and norms",
                    },
                ]}
            /> */}

      <section className="heading-with-icons bg-lightgrey center-icons">
        <div className="container">
          <div className="heading-with-icons-lhs">
            <h4>Major drivers for recyclable thermosets</h4>
          </div>
          <div className="heading-with-icons-rhs">
            <ul className="row g-0 row-cols-2 row-cols-sm-2 row-cols-md-3">
              <li className="col">
                <figure>
                  <FadeUp duration={1} delay={0.1} threshold={0.1}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/svg/loss-of-valuable-raw-materials.svg`}
                      alt="Loss of valuable raw materials"
                    />
                    <p>
                      Economic value creation by recovery and reuse of valuable
                      raw materials
                    </p>
                  </FadeUp>
                </figure>
              </li>
              <li className="col">
                <figure>
                  <FadeUp duration={1} delay={0.2} threshold={0.2}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/svg/harmful-pollution.png`}
                      alt="Harmful Pollution from Disposal Methods"
                    />
                    <p className="w-100">
                      &nbsp;Significantly reduced pollution and lower carbon
                      footprint
                    </p>
                  </FadeUp>
                </figure>
              </li>
              <li className="col">
                <figure>
                  <FadeUp duration={1} delay={0.2} threshold={0.2}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/svg/increasing-governments-regulations-and-norms.svg`}
                      alt="Increasing Governments regulations and norms"
                    />
                    <p>
                      Compliance with Government regulations/norms and
                      fulfilment of your ESG goals
                    </p>
                  </FadeUp>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
            <SplitSectionWithIcons title={sceData.title} subtitle={sceData.subtitle} description={sceData.description} knowMore={sceData.knowMore} icons={sceData.icons} /> */}

      <section className="contentwithicon philosophy five-pillers">
        <div className="sectionbg">
          <img
            src={`${process.env.PUBLIC_URL}/images/about/abc-bg.jpg`}
            alt=""
          />
        </div>
        <div className="caption ">
          <div className="container">
            <div className="heading">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                  <h3>Recyclamine Values</h3>
                  <p>
                    The brand’s value pillars encapsulates the essence of
                    Recyclamine and its contribution to economic value creation
                    in the recovery and reuse of valuable raw materials as well
                    as in advancing sustainable manufacturing practices.
                  </p>
                </div>
              </div>
            </div>
            <AccordionSlider items={accordionItems} />
          </div>
        </div>
      </section>

      {/* <Teams /> */}

      <section className="research-innovation">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="research-innovation-lhs">
                <h3>Research & Innovation centers</h3>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="research-innovation-rhs">
                <p>
                  Our Performance Material Research Centers in India, Thailand,
                  and Germany deliver world-class capabilities in Research &
                  Development, Application Development, and Technical Service,
                  supported by top experts in their fields. <br /> <br />India and
                  Thailand centers are DNVGL-CP-0484 accredited for mechanical
                  and analytical testing. In addition, a dedicated
                  commercial-scale Recyclamine facility operates in Rayong,
                  Thailand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ri-section">
        <section className="ris-row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-image-placeholder">
                  {/* <img src={`${process.env.PUBLIC_URL}/images/about/research-innovation/thailand.jpg`} alt="Thailand" /> */}

                  <PlyrPlayer
                    videoUrl={`${process.env.PUBLIC_URL}/video/about/thailand-plant.mp4`}
                    options={options}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-disc">
                  <h4>Thailand</h4>
                  {/* <h6>Rayong, Thailand: Capacity expansion from 113 kTPA to 131 kTPA in 2025</h6> */}
                  <ul>
                    <li>
                      The Recyclamine facility in Rayong houses the world’s
                      first 100% recyclable epoxy solution, seamlessly
                      integrated with an Application Development and R&D center
                    </li>
                    <li>
                      The facility drives sustainability in wind turbines,
                      automotive composites, electronics, and water sports
                      equipments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ris-row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-image-placeholder">
                 <img
                    src={`${process.env.PUBLIC_URL}/images/about/research-innovation/germany.jpg`}
                    alt="Germany"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-disc">
                  <h4>Germany</h4>
                  <ul>
                    <li>
                      New state-of-the-art R&D and Application Development
                      Center (ADC) at Rüsselsheim, Germany
                    </li>
                    <li>
                      270 sq m facility to boost our services and product
                      development for our customers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ris-row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-image-placeholder">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about/research-innovation/rnd-lab.jpg`}
                    alt="India"
                  />
                  {/* <img src={`${process.env.PUBLIC_URL}/images/about/research-innovation/india02.jpg`} alt="India" />
                                    <img src={`${process.env.PUBLIC_URL}/images/about/research-innovation/india03.jpg`} alt="India" /> */}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-disc">
                  <h4>India</h4>
                  <ul>
                    <li>
                      Relentless innovation enhances products, processes,
                      sustainability, and industry relevance
                    </li>
                    <li>
                      World-class R&D centers deliver breakthrough solutions in
                      advanced material science
                    </li>
                    <li>
                      Dedicated technical teams ensure performance, efficiency,
                      and customer-centric application support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ris-row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-image-placeholder">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about/research-innovation/Dalton.jpg`}
                    alt="Germany"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="ri-disc">
                  <h4>Dalton, USA</h4>
                  <ul>
                    <li>
                      17-acre specialty chemical manufacturing facility in
                      Dalton, Georgia, USA
                    </li>
                    <li>
                      Focus on products for the automotive, renewable energy and
                      aerospace industries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="innovation-awards">
        <div className="container">
          <div className="heading">
            <h3>Innovation Awards Won</h3>
            <div className="row gx-md-5 row-cols-1 row-cols-sm-1 row-cols-md-3 mt-5">
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.1}>
                  <div className="innovation-awards-card">
                    <h5>Closed-loop Recycling of Epoxy Composites</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/jec_2020.png`}
                      alt="JEC’22 Innovation Award"
                      style={{ objectFit: "contain" }}
                    />
                    <h6>JEC’20 Innovation Award</h6>
                    <p>(Partnership with COBRA International )</p>
                  </div>
                </FadeUp>
              </div>
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.1}>
                  <div className="innovation-awards-card">
                    <h5>Recyclable Wind Turbine Blade</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/JEC_2022.png`}
                      alt="JEC’22 Innovation Award"
                    />
                    <h6>JEC’22 Innovation Award</h6>
                    <p>(Associated Partner Siemens Gamesa, Germany)</p>
                  </div>
                </FadeUp>
              </div>
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.2}>
                  <div className="innovation-awards-card">
                    <h5>Stylish and recyclable carbon fiber furniture</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/JEC_2025.png`}
                      alt="JEC’25 Innovation Award "
                    />
                    <h6>JEC’25 Innovation Award</h6>
                    <p>(Associated Partner Cobra Inter, Thailand)</p>
                  </div>
                </FadeUp>
              </div>
            </div>
            <div className="row gx-md-5 row-cols-1 row-cols-sm-1 row-cols-md-3 mt-5  ">
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.3}>
                  <div className="innovation-awards-card">
                    <h5>Honey Roots Technology for Surfboards</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/JEC_2025.png`}
                      alt="JEC’25 Innovation Award "
                    />
                    <h6>JEC’25 Innovation Award</h6>
                    <p>(Associated Partner Kanoa Surfboards, France)</p>
                  </div>
                </FadeUp>
              </div>
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.1}>
                  <div className="innovation-awards-card">
                    <h5>Green Composites</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/cmax2024.jpg`}
                      alt="JEC’22 Innovation Award"
                    />
                    <h6>CAMX'24 Award</h6>
                    <p>(Associated partner ORNL, USA)</p>
                  </div>
                </FadeUp>
              </div>
              <div className="col">
                <FadeUp duration={1} delay={0.1} threshold={0.2}>
                  <div className="innovation-awards-card">
                    <h5>Most Creative Application</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/cmax2024.jpg`}
                      alt="JEC’25 Innovation Award "
                    />
                    <h6>CAMX'24 Award</h6>
                    <p>(Associated partner ORNL, USA)</p>
                  </div>
                </FadeUp>
              </div>
              <div className="col mt-5">
                <FadeUp duration={1} delay={0.1} threshold={0.3}>
                  <div className="innovation-awards-card">
                    <h5>Recyclable Foam Technology</h5>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/cmax2024.jpg`}
                      alt="JEC’25 Innovation Award "
                    />
                    <h6>CAMX'25 Award</h6>
                    <p>(Award Nominee)</p>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* <div className="innovation-awards-card full">
                            <div className="row g-md-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                                <div className="col">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <figure className="m-0">
                                            <img src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/Award-Camx.jpg`} alt="JEC’25 Innovation Award " />
                                        </figure>
                                    </FadeUp>
                                </div>
                                <div className="col">
                                    <div className="iac-desc">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <h5>CAMX 2024</h5>
                                        <figure>
                                            <h6>1&#41; Green Composites : Winner (Associated partner ORNL, USA)</h6>
                                            <p>LCCF Blade : Fully recyclable lightweight wind blade from low-cost carbon fiber and its lightening protection methodologies</p>
                                        </figure>
                                        <figure>
                                            <h6>2&#41; Most Creative Application : Winner (Associated partner Nikita Wood, Canada)</h6>
                                            <p>A Sustainable, Fully-Recyclable Composite Sandwich Panel Solution for Temporary Housing</p>
                                        </figure>
                                    </FadeUp>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="innovation-awards-card full">
                            <div className="row g-md-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                                <div className="col">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <figure className="m-0">
                                            <img src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/JEC-2020.jpg`} alt="JEC 2020 " />
                                        </figure>
                                    </FadeUp>
                                </div>
                                <div className="col">
                                    <div className="iac-desc">
                                        <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                            <h5>JEC’20 Innovation Award</h5>
                                            <figure>
                                                <p>We are the winners of JEC WORLD INNOVATION AWARDS for Closed-loop Recycling of Epoxy Composites a project in partnership with COBRA International</p>
                                            </figure>
                                        </FadeUp>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/* <div className="innovation-awards-card full">
                            <div className="row g-md-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                                <div className="col">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <figure className="m-0">
                                            <img src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/JEC-2020.jpg`} alt="JEC 2020 " />
                                        </figure>
                                    </FadeUp>
                                </div>
                                <div className="col">
                                    <div className="iac-desc">
                                        <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                            <h5>JEC’20 Innovation Award</h5>
                                            <figure>
                                                <p>We are the winners of JEC WORLD INNOVATION AWARDS for Closed-loop Recycling of Epoxy Composites a project in partnership with COBRA International</p>
                                            </figure>
                                        </FadeUp>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="innovation-awards-card full">
                            <div className="row g-md-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                                <div className="col">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <figure className="m-0">
                                            <img src={`${process.env.PUBLIC_URL}/images/about/innovation-awards/Award-Camx.jpg`} alt="JEC’25 Innovation Award " />
                                        </figure>
                                    </FadeUp>
                                </div>
                                <div className="col">
                                    <div className="iac-desc">
                                    <FadeUp duration={1} delay={0.1} threshold={0.3}>
                                        <h5>CAMX 2025</h5>
                                        <figure>
                                            <h6>1&#41; Green Composites : Winner (Associated partner ORNL, USA)</h6>
                                            <p>Award Nominee for Recyclable Foam Technology</p>
                                        </figure>
                                        <figure>
                                            <h6>1&#41; Green Composites : Winner (Associated partner ORNL, USA)</h6>
                                            <p>LCCF Blade : Fully recyclable lightweight wind blade from low-cost carbon fiber and its lightening protection methodologies</p>
                                        </figure>
                                        <figure>
                                            <h6>2&#41; Most Creative Application : Winner (Associated partner Nikita Wood, Canada)</h6>
                                            <p>A Sustainable, Fully-Recyclable Composite Sandwich Panel Solution for Temporary Housing</p>
                                        </figure>
                                    </FadeUp>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>

      <SplitSectionWithIcons
        title={advancematerialsData.title}
        subtitle={advancematerialsData.subtitle}
        description={advancematerialsData.description}
        knowMore={advancematerialsData.knowMore}
        icons={advancematerialsData.icons}
        iconsHeading="Brands under Aditya Birla Advanced Materials"
      />

      {/* 
            <section className='hmabout'>
                <div className='container'>
                    <div className='eyebrow-text'>
                        <h5><img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" />ABOUT</h5>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
                            <div className='hmabout-lhs'>
                                <h4>The Need</h4>
                                <p>Thermoset Epoxy resins have revolutionized engineering, enabling the creation of lightweight yet incredibly strong and durable structures, like wind turbine blades. However this durability also creates a problem…waste.</p>
                                <p>Epoxy structures are not easily recycled, and often disposed of in landfill, incinerated or ground down into powder and used as low grade filler material. High value materials are lost, with increased pollution as a byproduct.</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1'>
                            <div className='hmabout-rhs'>
                               <figure>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/the-need/The-Need-Process.png`} alt="The Need" />
                               </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 */}

      {/* <HeroStatement title="About" content="As sustainability becomes a prime focus of government norms and regulations, it is ever more essential for millennials and centennials of the market to demand for eco-friendly products." /> */}

      {/* <SplitHeroSection theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='The Genesis of Recyclamine & Our Philosophy & Values' description={
                <>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </>} url='/about/the-genesis-of-recyclamine' imgsrc={`${process.env.PUBLIC_URL}/images/about/abc-with-a-six-decade-legacy.jpg`} /> */}

      {/* <SplitHeroSection theme='white-spacing' layout_order='' contenttype='' subheading='' heading='The Legacy (ABC ABAM) ' description={
                <>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </>} url='/about/the-legacy-aditya-birla-chemicals-and-aditya-birla-advanced-materials' imgsrc={`${process.env.PUBLIC_URL}/images/about/the-need.jpg`} />

            <SplitHeroSection theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='Our Presence' description={
                <>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </>} url='#' imgsrc={`${process.env.PUBLIC_URL}/images/philosophy-and-values/the-planet-is-mine-cover.jpg`} /> */}
    </>
  );
};
export default About;
