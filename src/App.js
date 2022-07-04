import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import HistoryPage from "./pages/HistoryPage";
import Navigation from "./components/Navigation";
import useToggle from "./Hooks/useToggle";
import styled, { css } from "styled-components";

export default function App() {
  const [darkMode, toggleDarkMode] = useToggle(false);
  return (
    <>
      <AppContainer darkMode={darkMode}>
        <h1>Scorekeeper</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
        <Navigation />
        <DarkButton onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </DarkButton>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  align-content: start;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: #343;
      color: #eee;
    `}
`;

const DarkButton = styled.button`
  background-color: #ccc;
  padding: 10px 20px;
  border: none;
  border-radius: 14px;
`;
