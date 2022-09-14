import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom'

function Veggie() {
const [veggie, setVeggie] = useState([])

useEffect(() => {
getVeggie()
}, [])

  const getVeggie = async () => {
    //localStorage.clear()
    const check = localStorage.getItem('vegetarian')

    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9&tags=vegetarian`)
      const data = await api.json()
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      console.log(localStorage.getItem('vegetarian'))
    }
  }

  return (
    <div>
      <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem'
      }}>
      {
        veggie.map(recipe => {
          return(
            <SplideSlide key={recipe.id}>
              <Card>
              <Link to={'/recipe/' + recipe.id}>
                <div key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt='image'/>
                </div>
                <Gradient/>
                </Link>
              </Card>
            </SplideSlide>
          )
        })
      }
      </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2em 4em ;

  h3{
    margin-bottom: 0.4em;
    margin-left: 0.8em;
  }
`
const Card = styled.div`
  height: 15em;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 3rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1em;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,5))
`

export default Veggie;