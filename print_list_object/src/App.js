// import logo from "./logo.svg";
// import "./App.css";
class Person {
  static id = 0;
  constructor(name, lastname, age, img_link = "default.png", degree = "None") {
    this.id = Person.id++;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.img_link = img_link;
    this.degree = degree;
    this.newProp = "I'm new";
  }
  getName = () => `${this.lastname}, ${this.name}`;
}

let list = [
  new Person(
    "Gabriel",
    "Esqueda",
    19,
    "https://i.pinimg.com/originals/fc/31/6f/fc316fa34a0bcd89adc45dd9780e99e1.jpg",
    "Engineering in Computer Science"
  ),

  new Person(
    "Esmeralda",
    "Rodriguez",
    19,
    "https://t3.ftcdn.net/jpg/01/73/37/16/360_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg",
    "Engineering in Mechatronics"
  ),
  new Person(
    "Diego Isaac",
    "Oliden",
    19,
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ronnie-coleman-1645521680.jpg",
    "Psychology"
  ),
  new Person(
    "Diego Armando",
    "Santos",
    19,
    "https://static.wikia.nocookie.net/villains/images/8/8a/DeathPIB.jpg/revision/latest?cb=20221221222133",
    "Engineering in Computer Science"
  ),
];
/*
  Keeping a unique key in list is useful, not only because improves performance 
  (prevents unnecessary render of elements), also prevents bugs. For example, 
  if we had a list where each item define it's key as the index of the element,
  when we try to reverse the list, the items will not be rendered properly because
  the key is the same but the content is different

*/
const objecto = { list: list };
const App = () => {
  return (
    <div>
      <h1>People</h1>
      <hr />
      <Search />
      <List {...objecto} />
    </div>
  );
};

const Search = () => (
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" />
  </div>
);

//Function to print elements of an array
const List = ({ list }) =>
  list.map((item) => (
    <div key={item.id}>
      <ListObject item={item} />
      <hr />
    </div>
  ));

const ListObject = ({ item }) =>
  Object.entries(item)
    .filter(([key, val]) => typeof val != "function")
    .map(([key, val]) => (
      <p key={item.id + key}>
        {key}:{val}
      </p>
    ));

export default App;
