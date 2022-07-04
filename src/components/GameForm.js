import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";

export default function GameForm({ onCreateGame, darkMode }) {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerNames, setPlayerNames] = useState("");

  // const disabled = nameOfGame === "" || playerNames === "";

  return (
    <>
      <Form
        aria-labelledby="formHeader"
        autoComplete="off"
        darkMode={darkMode}

        //onSubmit={handleSubmit}
      >
        <Label for="game">Name of the game :</Label>
        <Input
          name="nameOfGame"
          placeholder="e.g. Tabu"
          onChange={(event) => setNameOfGame(event.target.value)}
          value={nameOfGame}
          required
        />

        <Label for="player">Player names:</Label>
        <Input
          name="Player names"
          placeholder="e.g. Klaus, Dieter"
          onChange={(event) => setPlayerNames(event.target.value)}
          value={playerNames}
          required
        />
      </Form>
    </>
  );
}

const Label = styled.label`
  color: black;
  padding: 5px;
  input {
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
