import React from "react";
import Navbar from "./Navbar";
import "./HeroFav.css";
import CardFav from "./CardFav";
import { useState, useEffect } from "react";
import { getHeroes, deleteHeroes } from "../services/services";

const HeroFav = () => {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    var myH = getHeroes();
    setHeroes(myH);
    // console.log(myH);
  };
  useEffect(() => {}, [heroes]);

  return (
    <div className="heroFav">
      <div className="header">
        <Navbar />
        <h1>
          MY FAVORITE <span>HEROES</span>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          { heroes && heroes.map((hero, idx) => (
            <div className="col-lg-3 col-md-4 col-6 my-2">
              {/* {JSON.stringify(hero)} */}
              <CardFav key={idx} hero={hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFav;
