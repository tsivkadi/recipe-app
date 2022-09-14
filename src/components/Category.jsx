import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'} className='navLink'>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'} className='navLink'>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'} className='navLink'>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Chinese'} className='navLink'>
        <GiChopsticks/>
        <h4>Chinese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;

  .navLink{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.7em;
    background-color: black;
    text-decoration: none;
    border-radius: 50%;
    width: 4em;
    height: 4em;
  }
  h4{
    font-size: 0.7em;
    color: white;
    font-weight: 400;
  }
  svg{
    color: white;
    font-size: 1.1em;
  }
  .navLink:hover{
    background-color: gray;
  }
`

export default Category;