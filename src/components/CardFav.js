import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import "./CardFav.css";
import { Link, useNavigate } from "react-router-dom";
import { addHeroes, deleteHeroes, getHeroes } from "../services/services";
import Swal from "sweetalert2";

const CardFav = (props) => {
  const [favHero, setFavHero] = useState([]);
  const [visible, setVisible] = useState(true);

  const hero = props.hero;
  const navigate = useNavigate();

  useEffect(() => {
    var oldHero = getHeroes();
    // console.log(oldHero);
    setFavHero(oldHero);
  }, []);

  useEffect(() => {}, [favHero]);

  const setDataToHeroDetail = () => {
    // console.log('click');
    navigate("/details", { state: hero });
  };

  const setDeleteHero = () => {
    var loadH = getHeroes();
    if (loadH) {
      // console.log('before : ',favHero);
      const newHero = loadH.filter((i) => {
        if (i.name !== hero.name) {
          return i;
        }
      });
      deleteHeroes();
      addHeroes(newHero);
      setVisible(false);
      // console.log(newHero);
    }
  };

  return (
    <div>
      {visible  && (
        <div className="cardFav">
          <img src={"https://api.opendota.com" + hero.img} alt="" />
          <div className="card-body-m">
            <h5 className="heroname text-center card-title">
              {hero.localized_name}
            </h5>
            <div className="options">
              <button
                className="btn btn-outline-primary"
                onClick={setDataToHeroDetail}
              >
                Watch
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={setDeleteHero}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardFav;
