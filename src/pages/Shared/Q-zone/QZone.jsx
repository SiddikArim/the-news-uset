import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary text-center py-4 my-4 rounded">
      <h1>This is QZone</h1>
      <div>
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" />
        <img src={qZone3} alt="qZone3" />
      </div>
    </div>
  );
};

export default QZone;
