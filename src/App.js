import DropDown from "./components/DropDown";
import Information from "./components/Information";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [timezone, setTimeZone] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")
      .then((res) => {
        setTimeZone(res.data);
        setSelectedTimeZone(res.data.filter((r) => r === "Asia/Karachi")[0]);
      })
      .catch((err) => {
        setTimeZone([]);
        setSelectedTimeZone("Asia/Karachi");
        console.log("ERROR", err);
      });
  }, []);

  return (
    <div className="App">
      <DropDown
        timezone={timezone}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />
      <Information selectedTimeZone={selectedTimeZone} />
    </div>
  );
}

export default App;
