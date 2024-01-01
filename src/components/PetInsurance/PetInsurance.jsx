import React from 'react';
import './PetInsurance.css'
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
        </div>
      </div>
    );
};

export default PetInsurance;