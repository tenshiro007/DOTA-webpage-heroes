import React from "react";
import Navbar from "./Navbar";
import "./HeroDetails.css";
import { useLocation } from "react-router-dom";

const HeroDetails = (props) => {
  const hero = useLocation().state;

  //   console.log(hero);
  // {location.state.name}
  const roles = (roles) => {
    roles.map((i, idx) => {
      <li>i</li>;
    });
  };
  return (
    <div className="herodetails">
      <div className="header">
        <Navbar />
        <div className="container">
          <h1>{hero.localized_name}</h1>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="card-image">
                <img src={"https://api.opendota.com" + hero.img} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="hero-details">
                <h3>PRIMARY ATTRIBUTE</h3>
                <p>{hero.primary_attr}</p>

                <h3>ATTACK TYPE</h3>
                <p>{hero.attack_type}</p>

              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="hero-details">
              <h3>ROLES</h3>
                <p className="line-break">{hero.roles.join("\n")}</p>
                {/* <h3>attack_range</h3>
                <p>{hero.attack_range}</p>

                <h3>projectile_speed</h3>
                <p>{hero.projectile_speed}</p>

                <h3>attack_rate</h3>
                <p>{hero.attack_rate}</p>

                <h3>move_speed</h3>
                <p>{hero.move_speed}</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="hero-details2">
                <div className="details">
                  <h3>base_health</h3>
                  <p>{hero.base_health}</p>
                </div>

                <div className="details">
                  <h3>base_health_regen</h3>
                  <p>{hero.base_health_regen}</p>
                </div>

                <div className="details">
                  <h3>base_mana</h3>
                  <p>{hero.base_mana}</p>
                </div>

                <div className="details">
                  <h3>base_mana_regen</h3>
                  <p>{hero.base_mana_regen}</p>
                </div>

                <div className="details">
                  <h3>base_armor</h3>
                  <p>{hero.base_armor}</p>
                </div>

                <div className="details">
                  <h3>base_mr</h3>
                  <p>{hero.base_mr}</p>
                </div>

                <div className="details">
                  <h3>base_attack_min</h3>
                  <p>{hero.base_attack_min}</p>
                </div>

                <div className="details">
                  <h3>base_attack_max</h3>
                  <p>{hero.base_attack_max}</p>
                </div>

                <div className="details">
                  <h3>base_str</h3>
                  <p>{hero.base_str}</p>
                </div>

                <div className="details">
                  <h3>base_agi</h3>
                  <p>{hero.base_agi}</p>
                </div>

                <div className="details">
                  <h3>base_int</h3>
                  <p>{hero.base_int}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
            <div className="hero-details2">  
            <div className="details">
                  <h3>str_gain</h3>
                  <p>{hero.str_gain}</p>
                </div>

                <div className="details">
                  <h3>agi_gain</h3>
                  <p>{hero.agi_gain}</p>
                </div>
                <div className="details">
                  <h3>int_gain</h3>
                  <p>{hero.int_gain}</p>
                </div>

                <div className="details">
                  <h3>attack_range</h3>
                  <p>{hero.attack_range}</p>
                </div>

                <div className="details">
                  <h3>projectile_speed</h3>
                  <p>{hero.projectile_speed}</p>
                </div>

                <div className="details">
                  <h3>attack_rate</h3>
                  <p>{hero.attack_rate}</p>
                </div>

                <div className="details">
                  <h3>move_speed</h3>
                  <p>{hero.move_speed}</p>
                </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <footer>@Testing Web Dot A Api</footer>
    </div>
  );
};

export default HeroDetails;
