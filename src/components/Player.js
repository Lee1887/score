import styled from "styled-components";

export default function Player({ name, score, onIncrement, onDecrement }) {
  return (
    <Wrapper>
      <Name>Player</Name>
      <button onClick={onIncrement}>+</button>
      <Score>SCORE</Score>
      <button onClick={onDecrement}>-</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: right;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12 px;
`;
