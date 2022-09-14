import { GoSearch } from 'react-icons/go';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState('');

  const updateInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Form>
      <div>
        <input placeholder='Search..' onChange={updateInput}/>
        <NavLink to={`/search/${search}`} ><GoSearch/></NavLink>
      </div>
    </Form>
  );
}

const Form = styled.form`
  width: 40em;
  height: 2.5em;
  background-color: black;
  border-radius: 2em;

  input{
    width: 94%;
    height: 2.5em;
    background-color: black;
    border-radius: 2em;
    color: white;
    margin-left: auto;
    border: none;
  }
  input:active{
    border:none;
  }
  input:focus{
    outline:none;
  }

  svg{
    font-size: 1.5em;
    color: white;
    margin-left: 0.4em;
  }

  div{
    width: 100%;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
`


export default Search;