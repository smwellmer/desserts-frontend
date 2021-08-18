import React, {useState, useEffect} from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";


function App(props) {

const url = "https://desserts-api.herokuapp.com"

const [desserts, setDesserts] = useState([])

const emptyDessert = {
  name: "",
  category: "",
  img: "",
  url: "",
}

const getDesserts = () => {
  fetch(url + '/desserts')
  .then((response) => response.json())
  .then((data) => {
    setDesserts(data);
  })
}

useEffect(() => {getDesserts()}, [])

const [selectedDessert, setSelectedDessert] = useState(emptyDessert)

const handleCreate = (newDessert) => {
  fetch(url + "/desserts", {
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
  fetch(url + "/desserts/"+ dessert._id, {
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
  fetch(url + "/desserts/"+ dessert._id, {
    method: "delete"
  })
  .then(() => {
    getDesserts()
  })
}

  return (
    <div className="App">
      <header id="header">
         <h1 class = 'title'>Just Desserts!</h1>
      </header>
      <div class="hero">
            <Link to="/create">
              <button class="addButton">Click here to add a Dessert!</button>
            </Link>
      </div>   
      <div class="description"> Keep track of all your favorite dessert recipes!</div>  
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
      <footer class="footer"> Website constructed and desgined by Samantha Wellmer </footer>
    </div>
  );
}

export default App
