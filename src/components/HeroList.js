import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../services/services";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./HeroList.css";
import HeroDetails from "./HeroDetails";

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [primary_attr_agi, setPrimary_attr_agi] = useState([]);
  const [primary_attr_str, setprimary_attr_str] = useState([]);
  const [primary_attr_int, setPrimary_attr_int] = useState([]);
  const [attack_type_Melee, setAttack_type_Melee] = useState([]);
  const [attack_type_Ranged, setAttack_type_Ranged] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [showHeroes, setShowHeroes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    findFilerHero();
    checkAndLoadFilter();
  }, [heroes]);

  useEffect(() => {
    checkAndLoadFilter();
  }, [
    primary_attr_agi,
    primary_attr_str,
    primary_attr_int,
    attack_type_Melee,
    attack_type_Ranged,
    status,
  ]);

  useEffect(() => {
    // console.log(showHeroes);
  }, [showHeroes]);

  const findFilerHero = () => {
    const agi = heroes.filter((i) => {
      if (i.primary_attr === "agi") return i;
    });
    const str = heroes.filter((i) => {
      if (i.primary_attr === "str") return i;
    });
    const int = heroes.filter((i) => {
      if (i.primary_attr === "int") return i;
    });
    const melee = heroes.filter((i) => {
      if (i.attack_type === "Melee") return i;
    });
    const ranged = heroes.filter((i) => {
      if (i.attack_type === "Ranged") return i;
    });
    setPrimary_attr_agi(agi);
    setprimary_attr_str(str);
    setPrimary_attr_int(int);
    setAttack_type_Melee(melee);
    setAttack_type_Ranged(ranged);
  };

  const setFilter = (value) => {
    // console.log(value);
    if (value === "all") setStatus("all");
    else if (value === "agi") setStatus("agi");
    else if (value === "str") setStatus("str");
    else if (value === "int") setStatus("int");
    else if (value === "melee") setStatus("melee");
    else if (value === "ranged") setStatus("ranged");
  };

  const checkAndLoadFilter = () => {
    if (status === "all") setShowHeroes(heroes);
    if (status === "agi") setShowHeroes(primary_attr_agi);
    if (status === "str") setShowHeroes(primary_attr_str);
    if (status === "int") setShowHeroes(primary_attr_int);
    if (status === "melee") setShowHeroes(attack_type_Melee);
    if (status === "ranged") setShowHeroes(attack_type_Ranged);
  };

  const loadData = () => {
    axios
      .get(api + "/heroStats")
      .then((response) => {
        //   console.log(response.data)
        setHeroes(response.data);
        setShowHeroes(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Something went wrong ...",
          text: err.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        });
      });
  };

  useEffect(() => {
    loadSearchHero();
  }, [search]);

  const searchHero = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const loadSearchHero = () => {
    const searchH = heroes.filter((i) => {
      if (String(i.name).includes(search)) return i;
    });

    // console.log(searchH);
    setShowHeroes(searchH);
  };

  return (
    <div className="herolist">
      <div className="header">
        <Navbar />
        <div className="header-text">
          <h1>
            HERO<span>ES</span> DOT<span>A</span>
          </h1>
        </div>
      </div>
      <div className="body">
        <div className="container ">
          <h3>FILTER HEROES</h3>
          <div className="filter">
            <div className="button-filter">
              <h4>ATTRIBUTE</h4>
              <button className="btn " onClick={() => setFilter("agi")}>
                AGI
              </button>
              <button className="btn " onClick={() => setFilter("str")}>
                STR
              </button>
              <button className="btn " onClick={() => setFilter("int")}>
                INT
              </button>
            </div>
            <div className="button-filter">
              <h4>ATTACK TYPE</h4>
              <button className="btn " onClick={() => setFilter("ranged")}>
                Ranged
              </button>
              <button className="btn " onClick={() => setFilter("melee")}>
                Melee
              </button>
            </div>
            <div className="button-filter">
              <h4>SEARCH</h4>
              <input
                type="text"
                name="search"
                id=""
                className="btn-search"
                value={search}
                onChange={searchHero}
                placeholder="Search ..."
              />
            </div>
          </div>
          {/* {JSON.stringify(showHeroes)} */}
          {/* {<GroupCard heroes={showHeroes}/>} */}
          <div className="row">
            {showHeroes.map((hero, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 my-2">
                {/* {JSON.stringify(hero)} */}
                <Card key={idx} hero={hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>@Testing Web Dot A Api</footer>
    </div>
  );
};

export default HeroList;
