import React from 'react';
import './SaleEverywhere.css';

const SaleEverywhere = () => {
  return (
    <div>
      <div className='state-main'>
        <section>
          <div className="state-header">
            <h2> Puppies for Sale Everywhere!</h2>
            <img src="https://www.puppyspot.com/assets/img/map.svg" alt="" />
            <p>See all the US locations for Puppies for Sale</p>
          </div>
        </section>
        <section className="states-container">
          <div className="states">
            <div className="state-1">
              <h3>WEST</h3>
              <div>
                <ul>
                  <li>California</li>
                  <li>Colorado</li>
                  <li>Montana</li>
                  <li>Nevada</li>
                  <li>Oregon</li>
                  <li>Utah</li>
                  <li>Wyoming</li>
                  <li>Idaho</li>
                  <li>Washington</li>
                </ul>
              </div>
            </div>
            <div className="state-1">
              <h3>SOUTHWEST</h3>
              <div>
                <ul>
                  <li> Arizona</li>
                  <li>Oklahoma</li>
                  <li> New Mexico</li>
                  <li>Texas</li>
                </ul>
              </div>
            </div>
            <div className="state-1">
              <h3>MIDWEST</h3>

              <div>
                <ul>
                  <li>Illinois</li>
                  <li>Indiana</li>
                  <li>Michigan</li>
                  <li>Iowa</li>
                  <li>Kansas</li>
                  <li>Minnesota</li>
                  <li>Missouri</li>
                  <li> North Dakota</li>
                  <li>Nebraska</li>
                  <li> Ohio</li>
                  <li>Wisconsin</li>
                  <li> South Dakota</li>
                </ul>
              </div>
            </div>
            <div className="state-1">
              <h3>NORTHEAST</h3>

              <div>
                <ul>
                  <li>Maryland</li>
                  <li>Maine</li>
                  <li>Delaware</li>
                  <li>New Hampshire</li>
                  <li>Connecticut</li>
                  <li>Massachusetts</li>
                  <li>New Jersey</li>
                  <li>Rhode Island</li>
                  <li>New York</li>
                  <li>Pennsylvania</li>
                  <li>Vermont</li>
                </ul>
              </div>
            </div>
            <div className="state-1">
              <h3>SOUTHEAST</h3>
              <div>
                <ul>
                  <li>Alabama</li>
                  <li>Arkansas</li>
                  <li>Florida</li>
                  <li>Georgia</li>
                  <li>Kentucky</li>
                  <li>Louisiana</li>
                  <li>Mississippi</li>
                  <li>North Carolina</li>
                  <li>South Carolina</li>
                  <li>Virginia</li>
                  <li>West Virginia</li>
                  <li>Tennessee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SaleEverywhere;
