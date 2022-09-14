import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom'

function Recipe() {
  const [recipe, setIngredients] = useState({
    title: '',
    image: '',
    summary: '',
    ingredients: [],
    instruction: []
    })

  let params = useParams()

useEffect(() => {
getIngredients()
}, [params.name])

  const getIngredients = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY}`)
    const data = await api.json()
    console.log(data)
    setIngredients({
      title: data.title,
      image: data.image,
      summary: data.summary,
      ingredients: data.extendedIngredients,
      instruction: data.analyzedInstructions[0].steps
    })
  }

  const ingredients = recipe.ingredients
  const instruction = recipe.instruction

  return (
    <Wrapper>
      <h2>{recipe.title}</h2>
      <FlexDiv>
        <img src={recipe.image} alt='image'/>
        <div>
        <h3>Ingredients:</h3>
        <ul>
        {ingredients.map((el) => {
          return(
            <li>{el.name}</li>
          )
        })}
        </ul>
      </div>
      </FlexDiv>
      <Instruction>
      <h3>Instruction:</h3>
      <ol>
        {instruction.map((el) => {
          return(
            <li>{el.step}</li>
          )
        })}
      </ol>
      </Instruction>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 3em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FlexDiv = styled.div`
  width: 100%;
  margin-top: 2.5em;
  display: flex;
  flex-direction: row;

  img{
    width: 35em;
    height: auto;
    border-radius: 3em;
    margin-left: 10em;
  }
  ul{
    margin-top: 1em;
    list-style: disc;
    margin-left: 2em;
  }
  div{
    margin-left: 7em;
  }
`
const Instruction = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  border: 1px solid black;
  padding: 2em;
`

export default Recipe