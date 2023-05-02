import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
function App() {
  const test_function = () => {
    console.log("Clicked Hello!");
  };
  return (
    <div className="App">
      <Button
        children={"Bye"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Button
        children={"Hello"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Button
        children={"RCT211"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Counter />
    </div>
  );
}

export default App;
