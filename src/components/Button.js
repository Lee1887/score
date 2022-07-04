import styled from "styled-components";

export default function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyle isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  background-color: ${(props) => (props.isDark ? "#666" : "#ddd")};
  color: ${(props) => (props.isDark ? "white" : "inherit")};
  border: none;
  padding: 4px 12px;
`;
