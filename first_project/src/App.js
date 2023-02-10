import logo from "./logo.svg";
import "./App.css";

const obj = {
  Name: "Gabriel",
  Age: 19,
};

const arr = [
  "Java (Small personal project)",
  "C# (Preferred)",
  "NodeJs (School Project)",
  "C++ (Alorithms)",
  "Python (School)",
];

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        My name is {obj.Name}, I'm {obj.Age}!
      </p>
      <p>I've worked with the following programming languages</p>
      <ul>
        {arr.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
