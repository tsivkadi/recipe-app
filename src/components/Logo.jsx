import { GiKitchenKnives } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <div>
      <NavLink to={'/recipe-app'} className='navLink'>
        <StyledDiv>
        <h2>R</h2><GiKitchenKnives/><h2>cipes</h2>
        </StyledDiv>
      </NavLink>
    </div>
  );
}

const StyledDiv = styled.div`
  margin: 1em 5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  color: black;
  svg{
    font-size: 1.4em;
    margin: 0em 0.08em;
    color: black;
  }
`

export default Logo;