import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.dessert);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
        <div>Name: </div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name of Recipe"
      />
      <div>Category:</div>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Recipe Category"
      />
      <div>Image URL:</div>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}   
        placeholder="Link for Recipe Image"           
      />
       <div>Recipe URL:</div>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}   
        placeholder="Link to Recipe"           
      />
      <div></div>
      <input class="createButton" type="submit" value={props.label} />
    </form>
  );
};

export default Form;