import React from "react";

const Display = (props) => {
  const { desserts } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {desserts.map((dessert) => (
        <article>
          <h1>{dessert.name}</h1>
          <img src={dessert.img} alt={dessert.name}/>
          <h3>{dessert.category}</h3>
          <h3>{dessert.url}</h3>
          <button onClick={() => {
            props.selectDessert(dessert)
            props.history.push("/edit")
          }}>Edit</button>
          <button onClick={() => {
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