import Mission from "../types/Mission";

interface Props {
  misson: Mission;
  setNewM: (bool: boolean) => void;
  newM: boolean;
}

const Item = ({ misson, newM, setNewM }: Props): React.JSX.Element => {
  const { description, name, priority, status, _id } = misson;

  const deleteMisison = async () => {
    const resulte: Response = await fetch(
      `https://reactexambackend.onrender.com/missions/8820980/${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }
    );
    if (!resulte.ok) {
      console.log(resulte);
    } else {
      setNewM(!newM);
      alert(`${misson._id} deleted`)
    }
  };

  // const updatePriority = async () => {
  //   const resulte: Response = await fetch(
  //     `https://reactexambackend.onrender.com/missions/8820980/${_id}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       }
  //     }
  //   );
  //   if (!resulte.ok) {
  //     console.log(resulte);
  //   } else {
  //     setNewM(!newM);
  //     alert(`${misson._id} deleted`)
  //   }
  // };
  return (
    <div className="item">
      <div>
        <h3>name: {name}</h3>
        <h5>status: {status}</h5>
        <h5>priority: {priority}</h5>
        <h5>description: {description}</h5>
      </div>
      <div>
        <button>priority</button>
      </div>
      <div>
        <button onClick={() => {deleteMisison()}}>delete</button>
      </div>
    </div>
  );
};

export default Item;
