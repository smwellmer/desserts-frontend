import React from "react";

const Display = (props) => {
  const { desserts } = props;

  const loaded = () => (
    <div class = "dessertContainer" style={{ textAlign: "center" }}>
      {desserts.map((dessert) => (
        <article class="dessertTile">
          <h1 class="dessertName">{dessert.name}</h1>
          <img class='image' src={dessert.img} alt={dessert.name}/>
          <h3>Category: {dessert.category}</h3>
          <a href ={dessert.url}><button class = "recipeButton">Click here for the Recipe!</button></a>
          <button class = 'editButton' onClick={() => {
            props.selectDessert(dessert)
            props.history.push("/edit")
          }}>Edit</button>
          <button class = 'deleteButton' onClick={() => {
            props.deleteDessert(dessert)
          }}>Delete</button>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>

  return desserts.length > 0 ? loaded() : loading;
};

export default Display;