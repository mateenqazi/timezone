import React from "react";

const DropDown = (props) => {
  const { timezone, selectedTimeZone, setSelectedTimeZone } = props;

  return (
    <div>
      <label>
        Your favorite timezone is &nbsp; &nbsp; &nbsp;
        <select
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.target.value)}
        >
          {timezone?.length ? (
            timezone.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })
          ) : (
            <option key={"Asia/Karachi"} value="Asia/Karachi">
              Lahore (default)
            </option>
          )}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
