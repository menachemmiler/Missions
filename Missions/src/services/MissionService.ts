import Mission from "../types/Mission";

const baseUrl = "https://reactexambackend.onrender.com/missions/8820980";

export const getMission = async (
  id: string = ""
): Promise<Mission[] | unknown> => {
  try {
    let url = `${baseUrl}`;
    if (id !== "") {
      url += `/${id}`;
    }
    const res = await fetch(url);
    const json = await res.json();
    if (res.ok) {
      return json as Mission[];
    }
    console.log({ json });
  } catch (err: any) {
    console.log(err.message);
    return 0;
  }
};

export const createMission = async (
  newMission: Mission
): Promise<{} | unknown> => {
  const { description, name, priority, status } = newMission;
  try {
    const resulte: Response = await fetch(baseUrl, {
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
    });
    if (!resulte.ok) throw resulte;
    // setNewM(!newM);
    return resulte;
  } catch (err: any) {
    console.log(err.message);
    return 0;
  }
};

export const deleteMisison = async (_id: string): Promise<boolean> => {
  try {
    const resulte: Response = await fetch(`${baseUrl}/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!resulte.ok) throw new Error("no deleted!");
    return true;
  } catch (err: any) {
    console.log(err.message);
    return false;
  }
};

export const missionProgress = async (_id: string) => {
  try {
    const resulte: Response = await fetch(`${baseUrl}/progress/${_id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!resulte.ok) throw new Error("no Progress");
    return true;
  } catch (err: any) {
    console.log(err.message);
    return false;
  }
};
