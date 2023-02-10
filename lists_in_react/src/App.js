// import logo from "./logo.svg";
// import "./App.css";

let list = [
  {
    id: 1,
    name: "Gabriel",
    img_link:
      "https://i.pinimg.com/originals/fc/31/6f/fc316fa34a0bcd89adc45dd9780e99e1.jpg",
    lastname: "Esqueda",
    degree: "Engineering in Computer Science",
    age: 19,
  },
  {
    id: 2,
    name: "Esmeralda",
    img_link:
      "https://t3.ftcdn.net/jpg/01/73/37/16/360_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg",
    lastname: "Rodriguez",
    degree: "Engineering in Mechatronics",
    age: 19,
  },
  {
    id: 3,
    name: "Diego Isaac",
    img_link:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ronnie-coleman-1645521680.jpg",
    lastname: "Oliden",
    degree: "Psychology",
    age: 19,
  },
  {
    id: 4,
    name: "Diego Armando",
    img_link:
      "https://static.wikia.nocookie.net/villains/images/8/8a/DeathPIB.jpg/revision/latest?cb=20221221222133",
    lastname: "Santos",
    degree: "Engineering in Computer Science",
    age: 19,
  },
];
/*
  Keeping a unique key in list is useful, not only because improves performance 
  (prevents unnecessary render of elements), also prevents bugs. For example, 
  if we had a list where each item define it's key as the index of the element,
  when we try to reverse the list, the items will not be rendered properly because
  the key is the same but the content is different

*/
function App() {
  return (
    <div>
      <h1>People</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      {list.map((person) => (
        <div key={person.id} className="pe">
          <span>{person.name}</span>
          <span>{person.lastname}</span>
          <span>{person.degree}</span>
          <span>{person.age}</span>
          <span>{person.img_link}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
