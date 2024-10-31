import { useEffect } from "react";
import Mission from "../types/Mission";
import Item from "./Item";

interface Props {
  missons: Mission[];
  setNewM: (bool: boolean) => void;
  newM: boolean;
}

const Main = ({ missons, newM, setNewM }: Props): React.JSX.Element => {
  return (
    <div className="main">
      {missons.map((m) => (
        <Item misson={m} setNewM={setNewM} newM={newM} />
      ))}
    </div>
  );
};

export default Main;
