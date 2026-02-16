import React from "react";
import { Link } from "react-router-dom";

const ArticlesBlogs: React.FC = () => {
  return (
    <section className="articlesblogs" id="articlesblogs">
      <div className="container">
        <h3>Articles and Blogs</h3>
        <div className="row gy-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="articlesblogs-card">
              <Link
                target="_blank"
                to={`${process.env.PUBLIC_URL}/articles-and-blogs/N┬░164 - september 2025_Recyclable Hydrogen Pressure Vessels.pdf`}
              >
                <div className="articlesblogs-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/articles-and-blogs/Recyclable-Type-IV-hydrogen.jpg`}
                    alt="Recyclable Type IV hydrogen storage pressure vessel for fuel cell electric vehicles"
                  />
                </div>
                <div className="articlesblogs-card-desc">
                  <h6>September 2025</h6>
                  <h5>
                    Recyclable Type IV hydrogen storage pressure vessel for fuel
                    cell electric vehicles
                  </h5>
                  <p>
                    Hydrogen mobility is emerging as a key zero-emission
                    technology, but its environmental impact depends on the
                    entire lifecycle, from manufacturing to end-of-life.
                  </p>
                </div>
                <ul className="articlesblogs-card-ftr">
                  <li>
                    <hr />
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/external-link.svg`}
                      alt="External Link"
                    />
                  </li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="articlesblogs-card">
              <Link
                target="_blank"
                to={`${process.env.PUBLIC_URL}/articles-and-blogs/0625-F1.pdf`}
              >
                <div className="articlesblogs-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/articles-and-blogs/Epoxy-adhesive-system-for-rotor-blades.jpg`}
                    alt="Epoxy adhesive system for rotor blades"
                  />
                </div>
                <div className="articlesblogs-card-desc">
                  <h6>June 2025</h6>
                  <h5>Epoxy adhesive system for rotor blades</h5>
                  <p>
                    A wind turbine rotor blade made from a recyclable epoxy
                    resin system and the recyclable epoxy adhesive system can be
                    fully recycled by a low-energy solvolysis process.
                  </p>
                </div>
                <ul className="articlesblogs-card-ftr">
                  <li>
                    <hr />
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/external-link.svg`}
                      alt="External Link"
                    />
                  </li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="articlesblogs-card">
              <Link
                target="_blank"
                to={`${process.env.PUBLIC_URL}/articles-and-blogs/Transforming-sustainability-in-the-composite-industry.pdf`}
              >
                <div className="articlesblogs-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/articles-and-blogs/Transforming-sustainability-in-the-composite-industry.jpg`}
                    alt="Transforming sustainability in the composite industry"
                  />
                </div>
                <div className="articlesblogs-card-desc">
                  <h6>May 2025</h6>
                  <h5>Transforming sustainability in the composite industry</h5>
                  <p>
                    Thermoset composites have revolutionized industries such as
                    automotive, aerospace, marine, and wind by offering
                    unmatched strength, lightweight properties, and corrosion
                    resistance.
                  </p>
                </div>
                <ul className="articlesblogs-card-ftr">
                  <li>
                    <hr />
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/external-link.svg`}
                      alt="External Link"
                    />
                  </li>
                </ul>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="articlesblogs-card">
              <Link
                target="_blank"
                to={`${process.env.PUBLIC_URL}/articles-and-blogs/Recyclable_epoxy_adhesive_system_for_rotor_blades_1737034408.pdf`}
              >
                <div className="articlesblogs-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/articles-and-blogs/recyclable-epoxy-dhesive-system.jpg`}
                    alt="Recyclable epoxy adhesive system for rotor blades"
                  />
                </div>
                <div className="articlesblogs-card-desc">
                  <h6>August 2024</h6>
                  <h5>Recyclable epoxy adhesive system for rotor blades</h5>
                  <p>
                    The growth of the wind industry is supported by the
                    development of new technologies that make it possible to
                    harness more energy with high efficiency.{" "}
                  </p>
                </div>
                <ul className="articlesblogs-card-ftr">
                  <li>
                    <hr />
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/external-link.svg`}
                      alt="External Link"
                    />
                  </li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="articlesblogs-card">
              <Link
                target="_blank"
                to={`${process.env.PUBLIC_URL}/articles-and-blogs/Closed_loop_Recycling_of_Epoxy_Composites_1737034380.pdf`}
              >
                <div className="articlesblogs-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/articles-and-blogs/closed-loop-recycling-epoxy.jpg`}
                    alt="Closed-loop recycling of epoxy composites"
                  />
                </div>
                <div className="articlesblogs-card-desc">
                  <h6> November 2020</h6>
                  <h5>Closed-loop recycling of epoxy composites</h5>
                  <p>
                    Cobra and Aditya Birla Chemicals present a sustainable
                    solution for closed-loop recycling of infused epoxy mould
                    tools and thermoset epoxy RTM watersports fins for Starboard
                    and MFC.
                  </p>
                </div>
                <ul className="articlesblogs-card-ftr">
                  <li>
                    <hr />
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/external-link.svg`}
                      alt="External Link"
                    />
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesBlogs;
