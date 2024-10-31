import { useState } from "react";
import { createMission } from "../services/MissionService";

interface Props {
  setNewM: (bool: boolean) => void;
  newM: boolean;
}

const NewMission = ({ newM, setNewM }: Props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Low");
  const [description, setDescription] = useState("");

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
        <option id="Progress" value="In Progress">
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
        className="b-red"
        onClick={async () => {
          const res = await createMission({
            description,
            name,
            priority,
            status,
          });
          if (!res) return;
          // console.log(res);
          setNewM(!newM);
        }}
      >
        Add Mission
      </button>
    </div>
  );
};

export default NewMission;
