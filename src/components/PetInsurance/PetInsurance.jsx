import React from 'react';
import './PetInsurance.css'
import insurance1 from '../../images/insurance-1.jpg'
import insurance2 from '../../images/insurance-2.jpg'
import insurance3 from '../../images/insurance-3.jpg'
const PetInsurance = () => {
    return (
      <div>
        <div className="insurance-container">
          <div className="insurance-banner">
            <h1>Be there for them, like they are for you.</h1>
          </div>
          <section>
            <div className="got-solution-container">
              <div className="got-solution-content">
                <h3>Got a situation? We’ve got a solution.</h3>
                <div className="solution-cards-flex">
                  <div className="solution-card">
                    <img
                      src="https://v.fastcdn.co/u/de99de39/64417496-0-AKC-Icon-Injured.svg"
                      alt=""
                    />
                    <h1>WHEN THEY'RE INJURED</h1>
                    <h4>
                      We help support them with emergency care, surgery & rehab
                      coverage.
                    </h4>
                  </div>
                  <div className="solution-card">
                    <img
                      src="https://v.fastcdn.co/u/de99de39/64417492-0-AKC-Icon-Sick.svg"
                      alt=""
                    />
                    <h1>WHEN THEY'RE SICK</h1>
                    <h4>
                      We provide coverage for eligible claims related to
                      diagnostics, treatment & medicine.
                    </h4>
                  </div>
                  <div className="solution-card">
                    <img
                      src="https://v.fastcdn.co/u/de99de39/64417494-0-AKC-Icon-Healthy.svg"
                      alt=""
                    />
                    <h1>WHEN THEY'RE HEALTHY</h1>
                    <h4>
                      We help them stay healthy with optional add-on coverage
                      for exams, vaccines & check-ups.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="pre-exciting-section">
              <div className="pre-exciting-content">
                <div className="pre-exciting-1">
                  <div className="pre-exciting-left">
                    <img src={insurance2} alt="" />
                  </div>
                  <div className="pre-exciting-right">
                    <h1>
                      Rest Easy Knowing We Cover Pre-Existing Conditions After
                      365 Days*
                    </h1>
                    <p>
                      We believe every pet is a champion—that’s why we’re the
                      only pet insurance company to cover pre-existing
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pre-exciting-content">
                <div className="pre-exciting-1">
                  <div className="pre-exciting-right">
                    <h4>
                      Not available in all states. Pre-existing condition
                      coverage available after 365 days of continuous coverage.
                      “Only brand“ refers to comparison with 5 pet insurance
                      carriers making up approximately 80% of the US pet
                      insurance market (Nationwide, ASPCA, Trupanion,
                      HealthyPaws and PetPlan).
                    </h4>
                  </div>
                  <div className="pre-exciting-left">
                    <img src={insurance1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default PetInsurance;