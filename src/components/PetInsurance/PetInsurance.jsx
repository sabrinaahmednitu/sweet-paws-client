import React from 'react';
import './PetInsurance.css';
import insurance1 from '../../images/insurance-1.jpg';
import insurance2 from '../../images/insurance-2.jpg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Helmet from 'react-helmet';
const PetInsurance = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pet Insurance | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="insurance-container">
        <div className="insurance-banner">
          <Slide right>
            <h1>Be there for them, like they are for you.</h1>
          </Slide>
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
                    We help them stay healthy with optional add-on coverage for
                    exams, vaccines & check-ups.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pre-exciting-section">
            <Fade left>
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
            </Fade>
            <Fade right>
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
            </Fade>
          </div>
        </section>
        <section>
          <div className="insurance-plan-container">
            <h1>What's included in the base plan</h1>
            <p>
              Our base Accident & Illness coverage offers reimbursement for the
              following expenses:
            </p>
            <div className="insurance-plan-flex">
              <div className="insurance-plan-box insurance-plan-box-1">
                <ul>
                  <p>PROCEDURES</p>
                  <li>X-Ray & Ultrasound</li>
                  <li>Laboratory Tests</li>
                  <li>CT Scan & MRI</li>
                  <li>Surgery</li>
                </ul>
              </div>
              <div className="insurance-plan-box insurance-plan-box-1">
                <ul>
                  <p>ACCIDENTS</p>
                  <li>Toxin ingestion</li>
                  <li>ACL injuries</li>
                  <li>Broken bones</li>
                  <li>Hospitalization</li>
                </ul>
              </div>
              <div className="insurance-plan-box insurance-plan-box-1">
                <ul>
                  <p>ILLNESS</p>
                  <li>Cancer</li>
                  <li>Digestive Issues</li>
                  <li>Hypothyroidism</li>
                  <li>Allergies</li>
                  <li>IVDD*</li>
                  <li>Physical therapy</li>
                  <li>Prescription meds</li>
                  <li>UTIs</li>
                </ul>
              </div>
              <div className="insurance-plan-box">
                <ul>
                  <p>EMERGENCY CARE</p>
                  <li>ER visits</li>
                  <li>Foreign body removal**</li>
                  <li>Animal bites**</li>
                  <li>Lacerations</li>
                  <li>Major trauma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="simpler-think-container">
            <div className="simpler-content">
              <div>
                <h1>The process is simpler than you think</h1>
                <p>So don’t give us that look!</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className="circle-box-container">
          <div className="circle-box-flex">
            <div className="circle-box">
              <div className="circle-1">
                <p>1</p>
              </div>
              <h1>VISIT YOUR VET</h1>
            </div>
            <div className="circle-box">
              <div className="circle-1">
                <p>2</p>
              </div>
              <h1>SUBMIT YOUR CLAIM</h1>
            </div>
            <div className="circle-box">
              <div className="circle-1">
                <p>3</p>
              </div>
              <h1>GET REIMBURSED</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="square-boxs-container">
            <div className="square-boxs-flex">
              <div className="square-box box-color-1">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-2">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-3">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-2">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-transparent">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-1">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-3">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-1">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
                </div>
              </div>
              <div className="square-box box-color-3">
                <div className="square-box-content">
                  <p>
                    The only pet insurance to cover pre-existing conditions*
                  </p>
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
