import React from "react"
import Navbar from "./components/Navbar"
import MeatCard from "./components/MeatCard"
import meatData from "./dataMeat"
import VeggieCard from "./components/VeggieCard";
import veggieData from "./dataVeggie"
import RiceNoodleCard from "./components/RiceNoodleCard";
import riceNoodleData from "./dataRiceNoodle"
import {useState} from 'react'
import { useRef } from 'react'
import Form from "./components/Form";

function App() {
  const meatCards = meatData.map(item => {
    return (
        <MeatCard
            key={item.id}
            item={item}
        />
    )
})

const veggieCards = veggieData.map(item => {
  return (
      <VeggieCard
          key={item.id}
          item={item}
      />
  )
})

const riceNoodleCards = riceNoodleData.map(item => {
  return (
      <RiceNoodleCard
          key={item.id}
          item={item}
      />
  )
})

const [isShown, setIsShown] = useState(false)
const ref = useRef(null);
const handleClick = event => {
  setIsShown(true);
  ref.current?.scrollIntoView({behavior: 'smooth'});
}



  return (
    <div>
        <Navbar />
        <div className="top">
        <img src="../meatImages/topImage.png" alt="Top" className="topImage"/>
        </div>
        <h2 className="meat--title">Meat Mains</h2>
        <section className="cards-list">
                {meatCards}
        </section>

        <h2 className="veggie--title">Veggie</h2>
        <section className="cards-list">
                {veggieCards}
        </section>

        <h2 className="rice--title">Rice or Noodle Mains</h2>
        <section className="cards-list">
                {riceNoodleCards}
        </section>

        <div className="order">
          <button className="order-button" onClick={handleClick}>Order Now!</button>
          <div style={{height: '10rem'}} />
          <div ref={ref}>{isShown && <Form />}</div>
          <div style={{height: '20rem'}} />
          
        </div>

      
    </div>
    )   
}

export default App;
