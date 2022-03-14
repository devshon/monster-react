import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import CardList from "../components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  // 데이터 로딩
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sortMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput);
  });

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={updateUserInput} />
      <CardList monsters={sortMonster} />
    </div>
  );
}

export default Monsters;
