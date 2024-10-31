import { useEffect, useState } from "react";
import "./App.css";
import Mission from "./types/Mission";
import NewMission from "./components/NewMission";
import Main from "./components/Main";
import { getMission } from "./services/MissionService";

function App() {
  const [missons, setMissions] = useState<Mission[]>([] as Mission[]);
  const [newM, setNewM] = useState<boolean>(false);

  useEffect(() => {
    const filingMissions = async () => {
      const res = await getMission();
      if (!res) return;
      setMissions(res as Mission[]);
    };
    filingMissions();
    console.log(missons);
  }, [newM]); //מתבצע בכל שינוי ברשימת המשימות

  return (
    <div className="app">
      <div className="green title">Militey Operations Dashboard</div>
      <NewMission setNewM={setNewM} newM={newM} />
      <div className="title" style={{ color: "red" }}>
        Missions
      </div>
      <Main missons={missons} setNewM={setNewM} newM={newM} />
    </div>
  );
}

export default App;
