import { useEffect } from "react";
import Mission from "../types/Mission";
import Item from "./Item";

interface Props {
  missons: Mission[];
}

const Main = ({ missons }: Props): React.JSX.Element => {
  return (
    <div className="main">
      {missons.map((m) => (
        <Item misson={m} />
      ))}
    </div>
  );
};

export default Main;
