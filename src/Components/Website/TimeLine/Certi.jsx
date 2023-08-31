import React from "react";
import "./TimeLineStyle.css";
import TimeLine from "./TimeLine";

function Certi() {
  return (
    <div id="certi">
      <div className="main-title">
        <h2>من نحن ؟</h2>
        <p>
          شركة برمجيات مختصة بمجال الويب و الموبايل ابلكيشن و التسويق
          الإلكـتروني ..
          <br />
          <span style={{ paddingRight: "208px", color: "#ff7757" }}>
            تأسست شركة درَب سوفت وير سنة 2021 .. و إليك بعض اعمالنا المميزة!
          </span>
        </p>
      </div>
      <TimeLine />
    </div>
  );
}

export default Certi;
