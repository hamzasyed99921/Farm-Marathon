import React from "react";
import {Link , useNavigate } from "react-router-dom";
const data = [
  {id: '00', img: 'assets/images/logo.png', title: 'MRACE', head: 'APY: 500%'},
]
const Hero = () => {
  const navigate = useNavigate();
  const component = (val) =>
  {
    navigate("/details", {state:val});
  }
  return (
    <>
      <div className="hero_bg">
        <div className="container">
          <div className="head_txt text-center mt-4">
            <h2>FARM</h2>
            <p>Stake your tokens to earn more $MRACE.</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="card" style={{paddingBottom: '60px'}}>
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    <img src="assets/images/logo.png" className="w-25" alt="" />
                    <div className="card_right">
                      <h2>
                        Your MRACE <br /> Balance
                      </h2>
                      <h3 className="text-center">0.00</h3>
                    </div>
                  </div>
                  <hr className="mx-5" />

                  <div className="d-flex botm_txt justify-content-between align-items-center">
                    <h6>Pending Harvest</h6>
                    <h6>
                      <span>0.00</span> MRACE
                    </h6>
                  </div>
                  <div className="d-flex botm_txt justify-content-between align-items-center">
                    <h6>
                      Daily Output of <span>MRACE</span>
                    </h6>
                    <h6>
                      <span>0.00</span>MRACE
                    </h6>
                  </div>
                </div>
              </div>
            </div>

          {data.map((val) => {
            return(
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="row text-center">
                      <div className="col-5">
                        <img
                          src="assets/images/GMT.png"
                          style={{ width: "65%" }}
                          alt=""
                        />
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <h4>{val.head}</h4>
                      </div>
                      <div className="col-5">
                        <img
                          src={val.img}
                          style={{ width: "65%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mx-5" />

                  <div className="d-flex botm_txt justify-content-between align-items-center">
                    <h6>Earn</h6>
                    <h6>
                      <span>GMT</span>
                    </h6>

                    <h6>DEPOSIT</h6>
                    <h6>
                      <span>MARCE</span>
                    </h6>
                  </div>
                  <div className="butn mt-3 d-flex justify-content-center align-items-center">
                    <button onClick={()=> { component(val) }}>Select</button>
                  </div>
                </div>
              </div>
            </div>

            )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
