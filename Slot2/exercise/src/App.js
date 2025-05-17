import React, { useState } from "react";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import AreAllTeenagers from "./AreAllTeenagers";
import AverageAgePerOccupation from "./AverageAgePerOccupation";
import FirstTeenager from "./FirstTeenager";
import GroupByOccupation from "./GroupByOccupation";
import OldestAndYoungest from "./OldestAndYoungest";
import NamePerson from "./NamePerson";
import SortByOccupationThenAge from "./SortByOccupationThenAge";

function App() {
  const [exercise, setExercise] = useState("PeopleList");

  const renderExercise = () => {
    switch (exercise) {
      case "PeopleList": return <PeopleList />;
      case "PeopleTable": return <PeopleTable />;
      case "AreAllTeenagers": return <AreAllTeenagers />;
      case "AverageAgePerOccupation": return <AverageAgePerOccupation />;
      case "FirstTeenager": return <FirstTeenager />;
      case "GroupByOccupation": return <GroupByOccupation />;
      case "OldestAndYoungest": return <OldestAndYoungest />;
      case "NamePerson": return <NamePerson />;
      case "SortByOccupationThenAge": return <SortByOccupationThenAge />;
      default: return <div>Select an exercise</div>;
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>Exercise Viewer</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {[
          "PeopleList", "PeopleTable", "AreAllTeenagers", "AverageAgePerOccupation",
          "FirstTeenager", "GroupByOccupation",
          "OldestAndYoungest", "NamePerson", "SortByOccupationThenAge"
        ].map(name => (
          <button key={name} onClick={() => setExercise(name)} style={{ margin: "5px" }}>
            {name}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        {renderExercise()}
      </div>
    </div>
  );
}

export default App;
