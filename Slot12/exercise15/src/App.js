import React from "react";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";

function App() {
  return (
    <div>
      <Counter />
      <ChangeNameAge />
      <ItemList />
      <QuestionBank />
    </div>
  );
}

export default App;