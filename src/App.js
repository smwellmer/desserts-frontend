import React, {useState, useEffect} from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";


function App() {

const url = "https://desserts-api.herokuapp.com"

const [desserts, setDesserts] = useState([])

const emptyDessert = {
  name: "",
  category: "",
  img: "",
  url: "",
}

const getDesserts = () => {
  fetch(url + '/dessert')
  .then((response) => response.json())
  .then((data) => {
    setDesserts(data);
  })
}

useEffect(() => {getDesserts()}, [])

const [selectedDessert, setSelectedDessert] = useState(emptyDessert)

const handleCreate = (newDessert) => {
  fetch(url + "/dessert", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDessert)
  })
  .then(() => {
    getDesserts()
  })
}

const handleUpdate = (dessert) => {
  fetch(url + "/dessert/"+ dessert._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dessert)
  })
  .then(() => {
    getDesserts()
  })
}

const selectDessert = (dessert) => {
  setSelectedDessert(dessert)
}

const deleteDessert = (dessert) => {
  fetch(url + "/dessert/"+ dessert._id, {
    method: "delete"
  })
  .then(() => {
    getDesserts()
  })


  return (
    <div className="App">
          <h1>Just Desserts!</h1>
      <hr />
      <Link to="/create">
        <button>Add a Dessert</button>
      </Link>
      <main>
        <Switch>
          <Route exact path="/" 
          render={(rp) => (
          <Display {...rp} desserts={desserts} 
          selectDessert={selectDessert}
          deleteDessert={deleteDessert}/>)} />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="Create" dessert={emptyDessert} handleSubmit={handleCreate} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="Update" dessert={selectedDessert} handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}
}

export default App
