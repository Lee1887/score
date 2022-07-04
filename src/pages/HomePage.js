import ButtonCreate from "../components/ButtonCreate";
import { NavLink } from "react-router-dom";
import GameForm from "../components/GameForm";

export default function HomePage() {
  return (
    <>
      <GameForm />
      <NavLink to="/game">
        <ButtonCreate />
      </NavLink>
    </>
  );
}
