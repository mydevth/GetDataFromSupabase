import { useState, useEffect } from "react";
import supabase from "./supabase";
import "./style.css";

function App() {
  useEffect(() => {
    async function getFacts() {
      let query = supabase.from("football").select("*");

      const { data: football, error } = await query
        .order("id", { ascending: false })
        .limit(1000);
      console.log(query);
    }
    getFacts();
  }, []);

  return (
    <>
      <main className="main"></main>
    </>
  );
}

export default App;
