import logo from "./logo.svg";
import "./App.css";
import React from "react";
let id = 0;
class Person {
  constructor(
    id,
    name,
    lastname,
    age,
    img_link = "default.png",
    degree = "None"
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.img_link = img_link;
    this.degree = degree;
    this.newProp = "I'm new";
  }
  getName = () => `${this.lastname}, ${this.name}`;
}

const App = () => {
  const list = [
    new Person(
      1,
      "Gabriel",
      "Esqueda",
      19,
      "https://i.pinimg.com/originals/fc/31/6f/fc316fa34a0bcd89adc45dd9780e99e1.jpg",
      "Engineering in Computer Science"
    ),

    new Person(
      2,
      "Esmeralda",
      "Rodriguez",
      19,
      "https://t3.ftcdn.net/jpg/01/73/37/16/360_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg",
      "Engineering in Mechatronics"
    ),
    new Person(
      3,
      "Diego Isaac",
      "Oliden",
      19,
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ronnie-coleman-1645521680.jpg",
      "Psychology"
    ),
    new Person(
      4,
      "Diego Armando",
      "Santos",
      19,
      "https://static.wikia.nocookie.net/villains/images/8/8a/DeathPIB.jpg/revision/latest?cb=20221221222133",
      "Engineering in Computer Science"
    ),
  ];
  /*Create a state object with "useState"
    The first object returned by "useState" is the state object
    The second object is a function to set (change) the value of state object
  */
  const [searchTerm, setSearchTerm] = React.useState("");

  //Event handler
  /*
    This event handler provides the ability to communicate deeper components from the 
    component tree with upper components.
    In this case is used to open a communication channel beetwen "Search" component and
    "App" component
  */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  //The list is filtred based on the state object "searchTerm"
  const filteredList = list.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>People</h1>
      <hr />
      {/* 
        The event handler is passed down the component tree through 
        props. Here, "handleSearch" is passed as "onSearch" in order
        to be used in "Search" component

      */}
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <List list={filteredList} />
    </div>
  );
};

//Search component
const Search = (prop) => {
  return (
    <div id="seds">
      <label htmlFor="search">Search:</label>
      <input key="search" id="search" type="text" onChange={prop.onSearch} />
      <h3>Results for {prop.searchTerm}</h3>
    </div>
  );
};

/*
  Keeping a unique key in list is useful, not only because improves performance 
  (prevents unnecessary render of elements), also prevents bugs. For example, 
  if we had a list where each item define it's key as the index of the element,
  when we try to reverse the list, the items will not be rendered properly because
  the key is the same but the content is different

*/
//List component
const List = (prop) =>
  prop.list.map((item) => (
    <div key={item.id}>
      <ListObject item={item} />
      {console.log(item)}
      <hr />
    </div>
  ));
//List object component
const ListObject = ({ item }) =>
  Object.entries(item)
    .filter(([key, val]) => typeof val != "function")
    .map(([key, val]) => (
      <p key={item.id + key}>
        {key}:{val}
      </p>
    ));

export default App;
