import { useState, useEffect } from "react";
import supabase from "./supabase";
import "./style.css";

function App() {
  const [football, setFootball] = useState([]);

  useEffect(function () {
    async function getName() {
      const { data: football, error } = await supabase
        .from("football")
        .select("*")
        .order("name", { ascending: true });
      setFootball(football);

      if (!error) setFootball(football);
      else alert("There was a problem getting data");
    }
    getName();
  }, []);

  return (
    <>
      <p>this is form App</p>
      <main className="main"></main>
      <NameList football={football} setFootball={setFootball} />
    </>
  );
}

function NameList({ football, setFootball }) {
  if (football.length === 0) return <p className="message"> Loading ..... </p>;

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>No.</th>
            <th>Name</th>
          </tr>
          {football.map((el) => (
            <tr key={el.id}>
              <th> {el.id} </th>
              <th> {el.name} </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
