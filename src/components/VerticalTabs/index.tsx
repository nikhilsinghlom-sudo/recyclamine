import React, { useState } from 'react';
const VerticalTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="vertical-tabs">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <ul className='tab-titles'>
              <li><button onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : ''}>Manufacturing</button></li>
              <li><button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>R&D, ADC</button></li>
              <li><button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>Contact Us</button></li>
            </ul>
          </div>
          <div className='col-12 col-lg-8'>
            <div className="tab-content">
              {activeTab === 0 && <div className='content-container'>
                <h4>Deep-Seated Commitment For Sustained Delivery</h4>
                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/manufacturing/A relentless quest for manufacturing excellence.jpg`} alt="" />
                  </figure>
                  <h6>A relentless quest for manufacturing excellence</h6>
                  <p>Safety, quality, and sustainability are core principles across our operations in Thailand, India, and Germany. These principles are integrated into every aspect of our manufacturing and distribution, supported by advanced technology, skilled teams, and efficient processes to ensure consistent quality and supply.</p>
                  <p>We understand that each customer has unique needs, and our ability to deliver customized solutions helps us meet those demands. With a strong customer focus, we’ve built lasting relationships based on trust. Our products comply with the highest standards, including REACH and RoHS.</p>
                </article>

                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/manufacturing/Uncompromised Safety- Before everything else.jpg`} alt="" />
                  </figure>
                  <h6>Uncompromised Safety: Before everything else</h6>
                  <p>Safety, at Aditya Birla Advanced Materials is not a goal. It is a way of life, integrated into the actions, outlook and consciousness, of the entire workforce in the plant. From the newest joinee to the oldest veteran, all plant employees undergo regular safety training and are part of awareness programs. Rigorous audits assess compliance and scope out possibilities to strengthen safety further. Safety standards at the plants are ANAB accredited and IQNet certified for ISO 45001.</p>
                </article>



                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/manufacturing/Consistent Quality- At each touchpoint.jpg`} alt="" />
                  </figure>
                  <h6>Consistent Quality: At each touchpoint</h6>
                  <p>Quality assurance starts with raw material itself; if not, it is bound to fall short. Incoming raw material is checked through robust control mechanisms at the in-house testing lab. They are stored, managed and validated for shelf-life in line with international standards. Given the varied nature of materials, complexities of production lines and hundreds of variants, nothing is left to chance. At each touchpoint best practices are complied with, to ensure we deliver the very best, consistently. Quality standards at the plants are ANAB & DAkkS accredited and certified by IQNet & UKAS for ISO 9001. </p>
                </article>

                {/* <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/manufacturing/Vitalized Footprint- At the very core.jpg`} alt="" />
                  </figure>
                  <h6>Vitalized Footprint: At the very core</h6>
                  <p>Responsible product stewardship has been a key driver of our product life cycle from development to production, to distribution, to its end-application. Minimizing our ecological footprint has been committed quest, long before it became a buzz-word. Dedicated teams and process oversee vital aspects like carbon emissions, effluent treatment, water harvesting, and zero-land-fill. Environmental systems & standards are ANAB accredited and certified by IQNet & UKAS for ISO 14001. </p>
                </article> */}

              </div>}
              {activeTab === 1 && <div className='content-container'>
                <h4>Determined Quest To Heighten Value Propositions</h4>
                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/r&d,adc/An insatiable thirst to explore newer horizons.webp`} alt="" />
                  </figure>
                  <h6>An insatiable thirst to explore newer horizons</h6>
                  <p>At Aditya Birla Advanced Materials, we believe today’s best can always be improved. This drives our continuous innovation, from enhancing existing products to exploring new possibilities. We focus on safety, efficiency, regulatory compliance, and sustainability to stay ahead of the curve.</p>
                  <p>With advanced equipment and substantial annual investments, we offer industry-leading polymer characterization and testing. Our R&D centers in India, Thailand, and Germany are staffed by top experts and are DNVGL-CP-0484 accredited for mechanical and analytical testing.</p>
                </article>

                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/r&d,adc/Research & Development Center- Redefining Possibilities..webp`} alt="" />
                  </figure>
                  <h6>Research & Development Center: Redefining Possibilities.</h6>
                  <p>Our R&D is focused on the entire spectrum of development from enhancement to innovation to disruption. Infusing our extensive knowledge base in Material Science with new perspectives, is a ceaseless quest for each engineers and scientists at our competence centers. Our focus is to develop cutting-edge solutions in specialty chemicals and new-age technology that will challenge current norms and redefine the possible.</p>
                </article>

                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/r&d,adc/Application Development Center- Enhancing Outcomes..webp`} alt="" />
                  </figure>
                  <h6>Application Development Center: Enhancing Outcomes.</h6>
                  <p>Developing high-quality products and systems is just half the job. Helping customers derive optimal value from them completes the value cycle. Customer-end applications can be simulated, helping them arrive at the best solution, even before the first dispatch. Diverse range of customers, globally run collaborative projects and joint trials with us. With dedicated teams for Coating & Construction and Composites & Electronics, our quest is to unleash path-breaking applications and add new market segments.</p>
                </article>

                <article>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/images/about/our-presence/r&d,adc/Technical Service Center- Optimizing Outputs..webp`} alt="" />
                  </figure>
                  <h6>Technical Service Center: Optimizing Outputs.</h6>
                  <p>A world-class portfolio combined with in-depth technical expertise helps us empower our customers to take on even the toughest challenges. Driven by a deep belief in customer fulfillment, our technical teams are available round-the-clock to work closely with customers, even at their sites. Aligning with customers to build best-in-class deliverables for their markets, we help them consolidate their competitive edge.</p>
                </article>

              </div>}
              {activeTab === 2 && <div className='content-container'>
                <h4>Offices</h4>
                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/india.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>Grasim Industries Limited, Advanced Materials</h6>
                      <p>Ahura Centre, 308/310, 'B' Wing, 3rd Floor 82,<br />
                        Mahakali Caves Road, Andheri- East Mumbai 400093, India<br />
                        <a href="tel:+91 22 6692 8180">+91 22 6692 8180</a><br />
                        <a href="mailto:am.in@adityabirla.com">am.in@adityabirla.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/thailand.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>Aditya Birla Chemicals (Thailand) Limited, Advanced Materials</h6>
                      <p>888/167, 16th Floor, Mahatun Plaza Building, Ploenchit Road,<br />
                        Lumpini, Pathumwan, Bangkok 10330, Thailand<br />
                        <a href="tel:+66(0)22535031-33">+66 (0) 2 2535031-33</a>, <a href="tel:+66(0)2253-5030">+66 (0) 2 253-5030</a><br />
                        <a href="mailto:am.th@adityabirla.com">am.th@adityabirla.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/germany.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>CTP Advanced Materials GmbH</h6>
                      <p>Stahlstr. 60 D-65428, Russelsheim, Deutschland<br />
                        <a href="tel:+49 (0) 6142-9185-0">+49 (0) 6142-9185-0,</a>, <a href="tel:+49 (0) 6142-9185-55">+49 (0) 6142-9185-55</a><br />
                        <a href="mailto:am.de@adityabirla.com">am.de@adityabirla.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/united-states.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>Aditya Birla Chemicals (USA) Inc.</h6>
                      <p>7310 Turfway Road, Suite 550, Florence, KY 41042, USA<br />
                        <a href="tel:+1 832 544 8647">+1 832 544 8647</a><br />
                        <a href="mailto:am.us@adityabirla.com">am.us@adityabirla.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <br />
                <h4>Manufacturing Plants</h4>

                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/india.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>Grasim Industries Limited, Advanced Materials</h6>
                      <p>Plot No. 1, GIDC Vilayat Industrial Estate, Village – Vilayat,<br />
                        Tehsil - Vagra, Bharuch - 392140 Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/thailand.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>Aditya Birla Chemicals (Thailand) Limited, Advanced Materials</h6>
                      <p>No 2, I-5 Road, Map Ta Phut Industrial Estate, Tambol Map Ta Phut,<br /> Amphur Muang , Rayong 21150, Thailand
                      </p>
                    </div>
                  </div>
                </div>

                <div className='contact-box'>
                  <div className='row'>
                    <div className='col-2 col-lg-auto'>
                      <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/germany.png`} alt="" />
                    </div>
                    <div className='col-10'>
                      <h6>CTP Advanced Materials GmbH</h6>
                      <p>Stahlstr 60, D-65428 Rüsselsheim, Deutschland</p>
                    </div>
                  </div>
                </div>

              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
