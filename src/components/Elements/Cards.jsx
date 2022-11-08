import React from "react";
import { data } from "./Data/Data";
import {Link , useNavigate } from "react-router-dom";

const Cards = () => {
    const navigate = useNavigate();
  const component = (val) =>
  {
    navigate("/details", {state:val});
  }
  return (
    <>
      <div className="card_bg">
        <div className="container">
          <h2 className="mt-5 mb-5 text-center">Choose Your Stake Pool</h2>
          <div className="row">
            {data.map((val) => {
            return(
                <div className="col-md-3 col-12 mt-3">
              <div className="card" >
                <div className="card-body">
                 <div className="card-title text-center">
                    <img src={val.img} className="w-50" alt="" />
                    <h4 className="mt-2">{val.head}</h4>
                 </div>
                 <div className="d-flex botm_txt justify-content-between align-items-center">
                    <h6>Deposit</h6>
                    <h6>
                      <span>{val.title}</span> 
                    </h6>
                  </div>
                 <div className="d-flex botm_txt justify-content-between align-items-center">
                    <h6>Earn</h6>
                    <h6>
                      <span>MRACE</span> 
                    </h6>
                  </div>
                  <hr  />
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

export default Cards;
