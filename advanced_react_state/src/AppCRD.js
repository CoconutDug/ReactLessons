import "./App.css";
import React from "react";

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
    // this.newProp = "I'm new";
  }
  getName = () => `${this.lastname}, ${this.name}`;
}
//Custom hook
const useSemiPersistentState = (key, value) => {
  /*Create a state object with "useState" (React hook)
    The first object returned by "useState" is the state object
    The second object is a function to set (change) the value of state object
  */
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem(key) || value
  );
  /**
   * useEffect is another react hook that allow to "watch" for a change
   * in any element of an array of dependencies. Every time an element changes
   * the function in the hook gets called. Makes the application more robust
   * "Everywhere, anytime"
   * The functon in "useEffect" is called "effect"
   */
  React.useEffect(() => {
    console.log("X");
    localStorage.setItem(key, searchTerm);
  }, [searchTerm, key]);
  return [searchTerm, setSearchTerm];
};

let id = 0;
let list = [
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
const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    "search",
    "Gabriel"
  );
  const [userList, setUserList] = React.useState(list);
  const [namePerson, setNamePerson] = React.useState("");
  const [lastnamePerson, setLastnamePerson] = React.useState("");
  const [agePerson, setAgePerson] = React.useState("");
  const [profilePicPerson, setProfilePicPerson] = React.useState("");
  const [degreePerson, setDegreePerson] = React.useState("");

  //Event handler
  /*
    This event handler provides the ability to communicate deeper components from the 
    component tree with upper components.
    In this case is used to open a communication channel beetwen "Search" component and
    "App" component
  */
  const handleStateChange = (setState) => (event) =>
    setState(event.target.value);

  //The list is filtred based on the state object "searchTerm"
  const filteredList = userList.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>People</h1>
      <hr />
      {/* 
        The event handler is passed down the component tree through 
        props. Here, "handleStateChange" is passed as "onSearch" in order
        to be used in "Search" component
      */}

      <InputWithLabel
        id="name_input"
        type="text"
        onInputChange={handleStateChange(setNamePerson)}
      >
        <Text>Name:</Text>
      </InputWithLabel>

      <InputWithLabel
        id="lastname_input"
        type="text"
        onInputChange={handleStateChange(setLastnamePerson)}
      >
        <Text>Lastname:</Text>
      </InputWithLabel>

      <InputWithLabel
        id="age_input"
        type="text"
        onInputChange={handleStateChange(setAgePerson)}
      >
        <Text>Age:</Text>
      </InputWithLabel>

      <InputWithLabel
        id="profile_input"
        type="text"
        onInputChange={handleStateChange(setProfilePicPerson)}
      >
        <Text>Profile pic:</Text>
      </InputWithLabel>

      <InputWithLabel
        id="degree_input"
        type="text"
        onInputChange={handleStateChange(setDegreePerson)}
      >
        <Text>Degree:</Text>
      </InputWithLabel>
      {/* Add button */}
      <button
        onClick={(event) => {
          let newUser = new Person(
            id++,
            namePerson,
            lastnamePerson,
            agePerson,
            profilePicPerson,
            degreePerson
          );
          setUserList([...userList, newUser]);
        }}
      >
        Add
      </button>

      <hr />
      <InputWithLabel
        id="search_input"
        onInputChange={handleStateChange(setSearchTerm)}
        searchTerm={searchTerm}
        type="text"
      >
        <Text>Search:</Text>
      </InputWithLabel>
      {/* Delete button */}
      <button
        onClick={(event) => {
          setUserList([
            ...userList.filter((element) => element.name != searchTerm),
          ]);
        }}
      >
        Delete
      </button>
      <h3>Results for {searchTerm}</h3>
      <List list={filteredList} />
    </div>
  );
};

const Text = ({ children }) => (
  //This is a fragment -> <> </>
  <>
    <strong>{children}</strong>
  </>
);

//InputWithLabel component
const InputWithLabel = ({
  searchTerm = undefined,
  onInputChange = undefined,
  id,
  type,
  children,
}) => {
  console.log("render search");
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} value={searchTerm} onChange={onInputChange} />
    </>
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
const List = (prop) => {
  console.log("render list");

  return prop.list.map((item) => (
    <div key={item.id}>
      <ListObject item={item} />
      {/* {console.log(item)} */}
      <hr />
    </div>
  ));
};
//List object component
const ListObject = ({ item }) => {
  console.log("render item;");
  return Object.entries(item)
    .filter(([key, val]) => typeof val != "function")
    .map(([key, val]) => (
      <p key={item.id + key}>
        {key}:{val}
      </p>
    ));
};

export default App;
