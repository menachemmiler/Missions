import { useEffect, useState } from "react";
import "./App.css";
import Mission from "./types/Mission";
import NewMission from "./components/NewMission";

function App() {
  const baseUrl = "https://reactexambackend.onrender.com/missions/8820980"
  const [missons, setMissions] = useState<Mission[]>([] as Mission[]);
  const [newM, setNewM] = useState<boolean>(false);


  const getData = async (id:string = "") => {
    let url = `${baseUrl}`
    if(id !== ""){url += `/${id}`}
    const res = await fetch(url);
    const json = await res.json();
    if (json.cod === "200") return setMissions(json as Mission[]);
    console.log({ json });
  };



  useEffect(() => {
    getData()
    console.log(missons);
  }, [missons, newM]); //מתבצע בכל שינוי ברשימת המשימות



  return (
    <div className="app">
      <div className="green title">Militey Operations Dashboard</div>
      <NewMission setNewM={setNewM} newM={newM} />
      <div className="title" style={{color:"red"}}>Missions</div>
      <div className="main"></div>
    </div>
  );
}

export default App;
