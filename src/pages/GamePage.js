import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Player from "../components/Player";

export default function GamePage() {
  return (
    <>
      <h2>Cool! You created a game! </h2>

      <ButtonWrap>
        <button>RESET SCORE</button>
        <NavLink NavLink to="/">
          <button>END GAME</button>
        </NavLink>
      </ButtonWrap>
    </>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
`;
