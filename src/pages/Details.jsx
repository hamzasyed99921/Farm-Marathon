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
           {title === 'MRACE' ?  <div className="col-md-6 col-12">
              <div className="card" style={{ paddingBottom: "60px" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    <img src="assets/images/GMT.png" className="w-25" alt="" />
                    <div className="card_right">
                      <h3 className="text-center">GMT</h3>
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
            </div> :  <div className="col-md-6 col-12">
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
            </div>}
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
          </div>

          <div className="row mt-5 mb-5 detail_botm">
            <div className="col-md-6 col-12">
                <h1>YOUR STEPS COUNT  <br />  WITH Marathon!</h1>
                <div className="d-flex  align-items-center ">
                    <img src="assets/images/mobile1.svg" alt="" />
                    <img src="assets/images/mobile2.svg" className="ms-3" alt="" />
                </div>
            </div>
            <div className="col-md-6 col-12">
                <h2 className="text-end">
                Join Our Comunity
                </h2>
                <div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
