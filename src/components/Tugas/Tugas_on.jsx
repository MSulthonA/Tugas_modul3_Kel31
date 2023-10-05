import React, { useEffect } from "react";

export default function Tugas_on(props) {
  useEffect(() => {
    alert(`Counter menunjukan ${props.onMod10}`);
  }, []);

  return (
    <div className="card">
      <div className="container">
        <h4>Kami Kelompok 33</h4>
      </div>
    </div>
  );
}
