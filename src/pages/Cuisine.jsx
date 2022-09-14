import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])
  
    const getCuisine = async (name) => {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}`)
      const data = await api.json()
      setCuisine(data.results)
      console.log(data)
    }
  return (
    <Grid>{
      cuisine.map(recipe => {
        return(
          <Card key={recipe.id}>
            <Link to={'/recipe/' + recipe.id}>
            <div key={recipe.id}>
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt='image'/>
            </div>
            <Gradient/>
            </Link>
          </Card>
        )})
  }</Grid>)
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 3em 0.5em;
`
const Card = styled.div`
  height: 15em;
  width: 21em;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover
  }
  a{
    text-decorations: none;
  }
  h4{
    position: absolute;
    text-align: center;
    padding: 1rem;
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

export default Cuisine