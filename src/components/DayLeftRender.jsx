import React from "react";

function DayLeftRender(task) {
    const deadline = new Date(task.deadline);
    const today = new Date();
    today.setHours(0, 0, 0);
    var today_time = today.getTime();
    var deadline_time = deadline.getTime();
    var time_difference = deadline_time - today_time;
    var difference_days = Math.round(time_difference / (1000 * 3600 * 24));
    // console.log("deadline is " + deadline);
    if (difference_days === 1) {
      return <div className="left-day red-day list-border">1day left</div>;
    } else if (difference_days < 7 && difference_days>0) {
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
    }else{
      return(
        <div className="left-day expired-day list-border">
          {"it's already over..."}
        </div>
      );
    }
  }

  export default DayLeftRender;