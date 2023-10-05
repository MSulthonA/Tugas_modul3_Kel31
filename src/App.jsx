import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import Tugas from "./components/Tugas/Tugas_on";
import Tugas_on from "./components/Tugas/Tugas_on";

// function App() {
//   const [praktikan, setPraktikan] = React.useState(null);

//   const addPraktikanHandler = (data) => {
//     console.log(data);
//     setPraktikan(data);
//   };

//   const removePraktikanHandler = () => {
//     setPraktikan(null);
//   };

//   return (
//     <>
//       <div className="App">
//         <h1>Kartu Praktikan</h1>
//         <Form onAddPraktikan={addPraktikanHandler} />
//         {praktikan && (
//           <>
//             <button className="delete" onClick={removePraktikanHandler}>
//               Hapus{" "}
//             </button>

//             <Card nama={praktikan.nama} kelompok={praktikan.kelompok} />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

function App() {
  const [counter, setCounter] = React.useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
    console.log(counter + 1);
  };

  return (
    <>
      <div className="App">
        <h1>Counter Kelompok 31</h1>
        <h2>{counter}</h2>
        <button className="add" onClick={addCounter}>
          Tambah dong ...
        </button>
        {counter % 10 == 0 && (
          <>
            <Tugas_on onMod10={counter}></Tugas_on>
          </>
        )}
      </div>
    </>
  );
}

export default App;
