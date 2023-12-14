import React, { useState } from 'react';
import './subscribe.css'; // Assurez-vous d'importer le fichier CSS correct


function Subscribe() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleButtonClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    <div className="container-with-background">
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto">
          <h1 className='mov titreMovies' style={{ textAlign: 'center', marginTop: '2rem' }}>Subscribe</h1>
          <div className="button-container" role="group">
            <button
              className={`transi ${selectedOption === 'option1' ? 'active' : 'inactive'}`}
              onClick={() => handleButtonClick('option1')}
            >
              Annualy
            </button>
            <button
              className={`transi ${selectedOption === 'option2' ? 'active' : 'inactive'}`}
              onClick={() => handleButtonClick('option2')}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='container mx-auto mt-3'>
      <div className="row mt-3">
        <div className="col d-flex">
          {selectedOption === 'option1' && 
          <p>
            <div className="d-flex flex-wrap justify-content-around">
              <button className="sub-option">
                <h3>Free</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Free access to a limited selection of content.</li>
                    <li className="liste" >Light advertisements.</li>
                    <li className="liste" >No long-term commitment.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Limited catalog compared to other plans.</li>
                    <li className="liste" >Limited streaming quality.</li>
                    <li className="liste" >Regular advertisements during viewing.</li>
                </ul>
                <h4>Price : Free</h4>
              </button>
              </div>
              <div className="d-flex flex-wrap justify-content-around">
              <button className="sub-option">
                <h3>Individual</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Unlimited access to the entire catalog.</li>
                    <li className="liste" >High-definition streaming.</li>
                    <li className="liste" >No advertisements during viewing.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Upfront annual cost.</li>
                    <li className="liste" >Limited to a single user.</li>
                    <li className="liste" >No included family sharing.</li>
                </ul>
                <h4>Price: $9.99 per month, billed annually at $119.88</h4>
              </button>
              </div>
              <div className="d-flex flex-wrap justify-content-around">
              <button className="sub-option">
                <h3>Family</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Unlimited access to the entire catalog for multiple users.</li>
                    <li className="liste" >High-definition streaming.</li>
                    <li className="liste" >No advertisements during viewing.</li>
                    <li className="liste" >Parental control features.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Higher annual cost than the individual plan.</li>
                    <li className="liste" >Requires coordination with family members.</li>
                </ul>
                <h4>Price: $14.99 per month, billed annually at $179.88</h4>
              </button>
              </div>
          </p>}
          {selectedOption === 'option2' && 
          <p>
            <div className="options-container">
              <button className="sub-option">
                <h3>Free</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Free access to a limited selection of content.</li>
                    <li className="liste" >Light advertisements.</li>
                    <li className="liste" >No long-term commitment.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Limited catalog compared to other plans.</li>
                    <li className="liste" >Limited streaming quality.</li>
                    <li className="liste" >Regular advertisements during viewing.</li>
                </ul>
                <h4>Price : Free</h4>
              </button>
              <button className="sub-option">
                <h3>Individual</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Unlimited access to the entire catalog.</li>
                    <li className="liste" >High-definition streaming.</li>
                    <li className="liste" >No advertisements during viewing.</li>
                    <li className="liste" >Monthly payment for more flexibility.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Slightly higher monthly cost than the annual plan.</li>
                </ul>
                <h4>Price: $12.99 per month</h4>
              </button>
              <button className="sub-option">
                <h3>Family</h3>
                <ul>
                  <h5>Advantages</h5>
                    <li className="liste" >Unlimited access to the entire catalog for multiple users.</li>
                    <li className="liste" >High-definition streaming.</li>
                    <li className="liste" >No advertisements during viewing.</li>
                    <li className="liste" >Parental control features.</li>
                    <li className="liste" >Monthly payment for more flexibility.</li>
                  <h5>Disadvantages</h5>
                    <li className="liste" >Higher monthly cost than the annual plan.</li>
                </ul>
                <h4>Price: $19.99 per month</h4>
              </button>
            </div>
          </p>}
        </div>
      </div>
      </div>
  </div>
  );
}

export default Subscribe;

