import React from "react";
import CalculateDays from "./CalculateDays";

function DayLeftRender(task) {
    var difference_days = CalculateDays(task);
    // console.log( difference_days)
    if (difference_days === 1) {
      return <div className="left-day red-day list-border">1day left</div>;
    } else if(isNaN(difference_days)){
      return(
        <div className="left-day expired-day list-border">
          {"---------"}
        </div>
      );
    }
    else if (difference_days < 7 && difference_days>0) {
      return (
        <div className="left-day yellow-day list-border">
          {difference_days + "days left"}
        </div>
      );
    } else if(difference_days>= 7){
      return (
        <div className="left-day green-day list-border">
          {difference_days + "days left"}
        </div>
      );
    }else if(difference_days === 0){
      return <div className="left-day red-day list-border">today!</div>;
    }
    else{
      return(
        <div className="left-day expired-day list-border">
          {"it's already over..."}
        </div>
      );
    }
  }

  export default DayLeftRender;