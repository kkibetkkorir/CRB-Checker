import React, { useState, useEffect, useRef } from "react";
//import "./creditcheck.css";
import { useNavigate } from "react-router-dom";

const EligibleLoans = () => {
  const navigate = useNavigate();
  const loanAppsRef = useRef(null);

  // Apply for loan function
  const applyForLoan = (loanApp) => {

    navigate('apply-loan');
    //alert('This is a demonstration. In a real application, you would be redirected to apply for a loan with ' + loanApp + '.');
  };

  return (
    <div>
      {/* Loan Apps Section */}
      <section className="loan-apps-section" id="loan-apps" ref={loanAppsRef}>
        <div className="container">
          <div className="section-title">
            <h2>Popular Loan Apps in Kenya</h2>
            <p>Based on your credit status, here are loan options you may be eligible for.</p>
          </div>
          
          <div className="loan-apps-grid">
            {/* Tala */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="loan-app-info">
                  <h3>Tala</h3>
                  <p>Fast, unsecured loans with growing limits</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 500 - KSh 50,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 15% - 30% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Within minutes</p>
              </div>
              <div className="eligibility eligible">
                <i className="fas fa-check-circle"></i>
                <span>You are eligible for this loan app</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.5</span>
                </div>
                <button className="btn btn-primary" onClick={() => applyForLoan('Tala')}>Apply Now</button>
              </div>
            </div>
            
            {/* Branch */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
                <div className="loan-app-info">
                  <h3>Branch</h3>
                  <p>Personal loans through simple, paperless process</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 1,000 - KSh 70,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 14% - 28% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Instant to M-Pesa</p>
              </div>
              <div className="eligibility eligible">
                <i className="fas fa-check-circle"></i>
                <span>You are eligible for this loan app</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.0</span>
                </div>
                <button className="btn btn-primary" onClick={() => applyForLoan('Branch')}>Apply Now</button>
              </div>
            </div>
            
            {/* M-Pesa */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-sim-card"></i>
                </div>
                <div className="loan-app-info">
                  <h3>M-Pesa</h3>
                  <p>Mobile money platform with lending services</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 100 - KSh 150,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 7.5% - 10% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Instant to M-Pesa</p>
              </div>
              <div className="eligibility eligible">
                <i className="fas fa-check-circle"></i>
                <span>You are eligible for this loan app</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.8</span>
                </div>
                <button className="btn btn-primary" onClick={() => applyForLoan('M-Pesa')}>Apply Now</button>
              </div>
            </div>
            
            {/* KCB Mobile */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-university"></i>
                </div>
                <div className="loan-app-info">
                  <h3>KCB Mobile</h3>
                  <p>Mobile banking app with integrated loan services</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 1,000 - KSh 1,000,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 8% - 15% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Within 24 hours</p>
              </div>
              <div className="eligibility not-eligible">
                <i className="fas fa-times-circle"></i>
                <span>Requires KCB bank account</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.3</span>
                </div>
                <button className="btn btn-outline" onClick={() => applyForLoan('KCB Mobile')}>Learn More</button>
              </div>
            </div>
            
            {/* Zenka */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-wind"></i>
                </div>
                <div className="loan-app-info">
                  <h3>Zenka</h3>
                  <p>Flexible personal loans with quick disbursement</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 500 - KSh 30,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 9% - 30% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Within 5 minutes</p>
              </div>
              <div className="eligibility eligible">
                <i className="fas fa-check-circle"></i>
                <span>You are eligible for this loan app</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.1</span>
                </div>
                <button className="btn btn-primary" onClick={() => applyForLoan('Zenka')}>Apply Now</button>
              </div>
            </div>
            
            {/* Timiza */}
            <div className="loan-app-card">
              <div className="loan-app-header">
                <div className="loan-app-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <div className="loan-app-info">
                  <h3>Timiza</h3>
                  <p>Absa Bank mobile loan product</p>
                </div>
              </div>
              <div className="loan-app-details">
                <p><i className="fas fa-money-bill-wave"></i> <strong>Loan Limit:</strong> KSh 500 - KSh 300,000</p>
                <p><i className="fas fa-percentage"></i> <strong>Interest Rate:</strong> 7% - 12% p.a.</p>
                <p><i className="fas fa-clock"></i> <strong>Disbursement:</strong> Instant to M-Pesa</p>
              </div>
              <div className="eligibility not-eligible">
                <i className="fas fa-times-circle"></i>
                <span>Requires Absa bank account</span>
              </div>
              <div className="loan-app-actions">
                <div className="loan-app-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span style={{ marginLeft: "5px", color: "var(--gray)" }}>4.4</span>
                </div>
                <button className="btn btn-outline" onClick={() => applyForLoan('Timiza')}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibleLoans;