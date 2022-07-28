import React from "react";
import data from "./data/data"
import Review from "./components/Review"

export default function App(){

  const [Data, setData] = React.useState(data)
  const [selected, setSelected] = React.useState(0)

  const increment = ()=>{
    setSelected( prevValue => prevValue === Data.length -1 ? 0 : ++prevValue)
  }

  const decrement = ()=>{
    setSelected( prevValue => prevValue === 0 ? Data.length -1 : --prevValue)
  }

  const surprise = ()=>{
    const randomNum = Math.floor(Math.random() * Data.length)
    setSelected(randomNum)
  }


  return(
    <section className="main-container">
      <h1 className="main-container-title">Our Reviews</h1>
      <hr className="main-container-sep"/>
        <Review 
              img={Data[selected].image}
              name={Data[selected].name}
              text={Data[selected].text}
              job={Data[selected].job}
              increment={increment}
              decrement={decrement}
              surprise={surprise}
        />
    </section>
  )
}