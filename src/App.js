import { useEffect, useState } from "react";

import Plot from "react-plotly.js";
import styles from "./styles/Home.module.css";
import Switch from "./components/switch";

export default function App() {
  const [data, setData] = useState([
    {
      x: [3],
      y: [4],
      z: [5],
      type: "scatter3d",
      mode: "markers",
      name: "base",
    },
  ]);
  const [singleX, setSingleX] = useState("");
  const [singleY, setSingleY] = useState("");
  const [singleZ, setSingleZ] = useState("");
  const [name, setName] = useState("");

  const addData = () => {
    setData([
      ...data,
      {
        x: [parseFloat(singleX)],
        y: [parseFloat(singleY)],
        z: [parseFloat(singleZ)],
        type: "scatter3d",
        mode: "markers",
        name: name,
      },
    ]);
    setSingleX("");
    setSingleY("");
    setSingleZ("");
    setName("");
  };

  return (
    <div>
      <Plot
        data={data}
        layout={{
          width: 900,
          height: 800,
          title: `Simple 3D Scatter`,
        }}
      />

      <div>
        <input
          type="number"
          name="x"
          value={singleX}
          onChange={(e) => setSingleX(e.target.value)}
          placeholder="x"
        />
        <input
          type="number"
          name="y"
          value={singleY}
          onChange={(e) => setSingleY(e.target.value)}
          placeholder="y"
        />
        <input
          type="number"
          name="z"
          value={singleZ}
          onChange={(e) => setSingleZ(e.target.value)}
          placeholder="z"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <button onClick={addData}>Add Data</button>
      </div>
    </div>
  );
}
