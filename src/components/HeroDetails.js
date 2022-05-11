import React from "react";
import Navbar from "./Navbar";
import "./HeroDetails.css";
import { useLocation } from "react-router-dom";
import {getHeroes,addHeroes} from '../services/services'
import {useState,useEffect}from 'react'
import Swal from "sweetalert2";

const HeroDetails = () => {
  const hero = useLocation().state;
  const [favHero,setFavHero]=useState([])


  useEffect(()=>{
    var oldHero=getHeroes()
    setFavHero(oldHero)
  },[])

  const addHeroStorage=()=>{
    console.log(favHero);

    if(favHero){
      var addHero=favHero
      const redundance=addHero.filter(i=>{
        if(i.name===hero.name){
          return i
        }
        // return []
      })

      // console.log(redundance);
      
      // console.log(redundance)
      if(redundance.length>0){
        // console.log('already add');
        Swal.fire({
          icon: "error",
          title: "Can not add this hero",
          text: "This hero is already add to your favorite hero",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
      }else{
        addHero.push(hero)
        setFavHero(addHero)
        addHeroes(addHero)

        Swal.fire(
          'Successfully Add',
          'Add hero to your favorite hero successfully',
          'success'
        )
      }
    }else{
      var addHero2=[]
        addHero2.push(hero)
        setFavHero(addHero2)
        addHeroes(addHero2)

        Swal.fire(
          'Successfully Add',
          'Add hero to your favorite hero successfully',
          'success'
        )
    }
  }

  useEffect(()=>{
    // console.log('from useeffect',favHero);
  },[favHero,hero])

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
              <div className="hero-details-r">
                <h3>ROLES</h3>
                <p className="line-break">{hero.roles.join("\n")}</p>
              </div>
            </div>
          </div>

          <div className="statusHero">
            <div className="row">
              <div className="col-lg-3">
                <h3 id="text-attr">ATTRIBUTES</h3>
                <div className="inside2">
                  <p>
                    <span>STRENGTH :</span> {hero.base_str} + {hero.str_gain}
                  </p>

                  <p>
                    <span>INTELLIGENCE :</span> {hero.base_int} +{" "}
                    {hero.int_gain}
                  </p>

                  <p>
                    <span>AGILITY :</span> {hero.base_agi} + {hero.agi_gain}
                  </p>
                </div>
              </div>
              <div className="col-lg-9">
                <h3 id="text-status">STATUS</h3>
                <div className="status">
                  <div className="inside">
                    <h4>ATTACT</h4>
                    <p>
                      <span>ATTACK :</span> {hero.base_attack_min} -{" "}
                      {hero.base_attack_max}
                    </p>
                    <p>
                      <span>RATE :</span> {hero.attack_rate}{" "}
                    </p>
                    <p>
                      <span>RANGE :</span> {hero.attack_range}{" "}
                    </p>
                  </div>
                  <div className="inside">
                    <h4>BASE</h4>
                    <p>
                      <span>HEALTH :</span> {hero.base_health} +{" "}
                      {hero.base_health_regen}
                    </p>
                    <p>
                      <span>MANA :</span> {hero.base_mana} +{" "}
                      {hero.base_mana_regen}
                    </p>
                    <p>
                      <span>ARMOR :</span> {hero.base_armor}
                    </p>
                    <p>
                      <span>MR :</span> {hero.base_mr}
                    </p>
                  </div>
                  <div className="inside">
                    <h4>MOBILITY</h4>
                    <p>
                      <span>SPEED :</span> {hero.move_speed}{" "}
                    </p>
                    <p>
                      <span>PROJECTILE SPEED :</span> {hero.projectile_speed}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button className="btn btn-outline-success btn-lg btn-block"id="button-add" onClick={addHeroStorage}>Add To My Favorite Hero</button>
            </div>
          </div>
        </div>
      </div>
      <footer>@Testing Web Dot A Api</footer>
    </div>
  );
};

export default HeroDetails;
