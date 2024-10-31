import { useState } from "react";
import Mission from "../types/Mission";

interface Props {
  setNewM: (bool: boolean) => void;
  newM: boolean;
}

const NewMission = ({ newM, setNewM }: Props) => {
  const [error, setError] = useState<any>(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Low");
  const [description, setDescription] = useState("");

  const createMission = async () => {
    const resulte: Response = await fetch(
      "https://reactexambackend.onrender.com/missions/8820980",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          status: status,
          priority: priority,
          description: description,
        }),
      }
    );
    if (!resulte.ok) setError("Error adding mission");

    setNewM(!newM);
  };

  return (
    <div className="newMission">
      <input
        type="text"
        placeholder="enter tour name here please"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <select
        name=""
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        value={status}
      >
        <option id="Pending" value="Pending">
          Pending
        </option>
        <option id="Progress" value="Progress">
          Progress
        </option>
        <option id="Completed" value="Completed">
          Completed
        </option>
      </select>

      <select
        name=""
        onChange={(e) => {
          setPriority(e.target.value);
        }}
        value={priority}
      >
        <option id="Low" value="Low">
          Low
        </option>
        <option id="Medium" value="Medium">
          Medium
        </option>
        <option id="High" value="High">
          High
        </option>
      </select>
      <input
        type="text"
        placeholder="enter description here please"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        className="red"
        onClick={() => {
          createMission();
        }}
      >
        Add Mission
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewMission;
