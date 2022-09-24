import React from "react";
import * as moment from "moment-timezone";

const Information = (props) => {
  const { selectedTimeZone } = props;

  const currentTimeAtTimeZone = (time) => {
    if (time) {
      return moment().tz(time).format("hh:mm A");
    }
  };

  return (
    <div>
      The time in {selectedTimeZone} is{" "}
      {currentTimeAtTimeZone(selectedTimeZone)}
    </div>
  );
};

export default Information;
