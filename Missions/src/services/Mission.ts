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
    throw err;
  }
};
