import React from 'react'
import { Link } from 'react-router-dom'

export default function Sectors() {
  return (
    <section className='sectors-section'>
      <div className='container'>
        <div className="section-title">
          <h2>Sectors</h2>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            <div className='sector-options'>
              <ul>
                <li>
                  <Link to={'#'}>
                    <h4>Wind Energy</h4>
                    <p>While wind energy offers a clean and renewable power source, it has faced challenges due to the non-recyclable nature of its turbine blades. The industry's demand for stronger, longer blades has necessitated the use of epoxy systems, which further present recycling difficulties.</p>
                  </Link>
                </li>
                <li className='active'>
                  <Link to={'#'}>
                    <h4>Wind Energy</h4>
                    <p>While wind energy offers a clean and renewable power source, it has faced challenges due to the non-recyclable nature of its turbine blades. The industry's demand for stronger, longer blades has necessitated the use of epoxy systems, which further present recycling difficulties.</p>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <h4>Wind Energy</h4>
                    <p>While wind energy offers a clean and renewable power source, it has faced challenges due to the non-recyclable nature of its turbine blades. The industry's demand for stronger, longer blades has necessitated the use of epoxy systems, which further present recycling difficulties.</p>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <h4>Wind Energy</h4>
                    <p>While wind energy offers a clean and renewable power source, it has faced challenges due to the non-recyclable nature of its turbine blades. The industry's demand for stronger, longer blades has necessitated the use of epoxy systems, which further present recycling difficulties.</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            <div className='sector-imgs'>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/sectors/01.jpg`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
