import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
    const { state } = useLocation();
    const { id,img,title,head } = state;
  return (
    <>
      <div className="hero_bg">
        <div className="container">
          <div className="head_txt text-center mt-4">
            <img src={img}  alt="" style={{width: '10%'}} />
            <h2>{title}</h2>
            <p>Deposit CAKE Tokens and Earn MRACE</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="card" style={{ paddingBottom: "60px" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    <img src="assets/images/logo.png" className="w-25" alt="" />
                    <div className="card_right">
                      <h3 className="text-center">MRACE</h3>
                    </div>
                  </div>
                  <hr className="mx-5" />

                  <div className="row botm_txt">
                    <div className="col-6 text-center">
                      <h6>Earned</h6>
                      <h6>0.00</h6>
                    </div>
                    <div className="col-6">
                      <div className="butn ">
                        <button>Harvest</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card" style={{ paddingBottom: "60px" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    <img src={img} className="w-25" alt="" />
                    <div className="card_right">
                      <h3 className="text-center">{title}</h3>
                    </div>
                  </div>
                  <hr className="mx-5" />

                  <div className="row botm_txt">
                    <div className="col-6 text-center">
                      <h6>Staked</h6>
                      <h6>0.00</h6>
                    </div>
                    <div className="col-6">
                      <div className="butn ">
                        <button>Approve</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-12">
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
                        <h4>APY: 500%</h4>
                      </div>
                      <div className="col-5">
                        <img
                          src="assets/images/logo.png"
                          className="w-50"
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
                    <button>Select</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
