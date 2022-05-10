import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import {Link, useNavigate} from 'react-router-dom';

const Card = (props) => {
  const hero=props.hero
  const navigate = useNavigate();
  
  const setDataToHeroDetail=()=>{
    // console.log('click');
    navigate('/details',{state:hero});
  }

  return (
    <div className="card-m" onClick={setDataToHeroDetail}>
      <img
        src={"https://api.opendota.com" + hero.img}
        alt=""
        width="270"
        height="150"
      />
      <div className="card-body-m">
        <h5 className="heroname text-center card-title">
          {hero.localized_name}
        </h5>
      </div>
    </div>
  );
};

export default Card;
