import React from "react";
import Card from "./Card";
import cssIcon from "../../../Assets/icons/5.png";
import sassIcon from "../../../Assets/icons/6.png";
import reactIcon from "../../../Assets/icons/7.png";
import javascriptIcon from "../../../Assets/icons/1.png";
import bootstrapIcon from "../../../Assets/icons/19.svg";

function TimeLine() {
  return (
    <div className="timeline-main">
      <div className="timeline">
        <Card
          img={reactIcon}
          name="AstroX"
          category="Front-end Development"
          date={"فبـراير 2022"}
          desc="بـورتفليو خاص بـ إسلام وائل ، فرونت اند ديفلبور / لوا سكربتر .."
          link="https://media-exp1.licdn.com/dms/document/D4D2DAQEjfIW36FiqZA/profile-treasury-document-pdf-analyzed/0/1662983966540?e=1668643200&v=beta&t=zHopYu6z1GzHEOstzzrhJTCx0Ux4uRr5HbTYT8Itdn4"
        />
        <Card
          img={javascriptIcon}
          name="M3etaty"
          category="Full Stack Development"
          date={"يونيو 2023"}
          desc="موقع مائدتي يهدف الي مساعدة الطلاب فـِ جميع انحاء مصر لـ إيجاد موائد الرحمان تسهيلاً لهم .."
          link="https://drive.google.com/file/d/18AaYr674-ZIL11d8bezveL_n80xtCDtU/view?usp=sharing"
        />
        <Card
          img={bootstrapIcon}
          name="Shalen Studio"
          category="Front-end Development"
          date={"يناير 2023"}
          desc="موقع شعُلان ستديو لعرض اعماله و طلب خدماته .."
          link="https://www.hackerrank.com/certificates/6f1e64a555bd"
        />
        <Card
          img={sassIcon}
          name="Neveada Software"
          category="Front-end Development"
          date={"اكتوبر 2020"}
          desc="موقع لـ شركة نيفديا السعودية .. مختصة بمجال السوفت وير .."
          link="https://www.sololearn.com/certificates/CT-GRQHKKCT"
        />
        <Card
          img={javascriptIcon}
          name="LunaBot"
          category="Front-end Development"
          date={"يناير 2021"}
          desc="لونا بوت ، بوت ميوزك خاص بالديسكورد / يحتوي علي لوحة تحكم كاملة بالبوت .."
          link="https://graduation.udacity.com/nd019-fwd-t4"
        />
        <Card
          img={cssIcon}
          name="Ramadan Events"
          category="Full Stack Development"
          date={"يوليو 2022"}
          desc="موقع التحديات الرمضانية لكل موسم في رمضان!"
          link="https://www.hackerrank.com/certificates/f4449462316b"
        />
      </div>
    </div>
  );
}

export default TimeLine;
