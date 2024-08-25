import React from "react";
import "./Notifications.css";
import { useState } from "react";
import axios from "axios";
const URL = "http://hn.algolia.com/api/v1/search";

export default function Notification({ value, onChange }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setData(result.data.data);
    } catch (error) {
      setError(error);
    }
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="Notifications" data-testid="notification">
      <p>Here is the list of notifications</p>
      <button onClick={handleFetch}>click tp fetch data</button>

      <label htmlFor="search">search</label>
      <input id="search" value={value} onChange={onChange} />
      <ul>
        {data.map((da) => {
          return <li key={da.id}>{da.name}</li>;
        })}
      </ul>
    </div>
  );
}
