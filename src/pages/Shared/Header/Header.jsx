import moment from "moment/moment";
import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <h2>The USET NEWS</h2>
      <p>{moment().format("llll")}</p>
    </div>
  );
};

export default Header;
