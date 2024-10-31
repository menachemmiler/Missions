import { useEffect, useState } from "react";
import "./App.css";
import Mission from "./types/Mission";
import NewMission from "./components/NewMission";
import Main from "./components/Main";

function App() {
  const baseUrl = "https://reactexambackend.onrender.com/missions/8820980";
  const [missons, setMissions] = useState<Mission[]>([] as Mission[]);
  const [newM, setNewM] = useState<boolean>(false);

  const getData = async (id: string = "") => {
    let url = `${baseUrl}`;
    if (id !== "") {
      url += `/${id}`;
    }
    const res = await fetch(url);
    const json = await res.json();
    if (res.ok) {
      setMissions(json as Mission[]);
    }
    console.log({ json });
  };

  // useEffect(() => {
  //   console.log(missons);
  // }, [missons]); //מתבצע בטעינה הראשונית של הדף

  useEffect(() => {
    getData();
    console.log(missons);
    console.log("2");
  }, [newM]); //מתבצע בכל שינוי ברשימת המשימות

  return (
    <div className="app">
      <div className="green title">Militey Operations Dashboard</div>
      <NewMission setNewM={setNewM} newM={newM} />
      <div className="title" style={{ color: "red" }}>
        Missions
      </div>
      <Main missons={missons} />
    </div>
  );
}

export default App;
