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
    <form onSubmit={handleSubmit}>
        <div>Name: </div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <div>Category:</div>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <div>Image URL:</div>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}              
      />
       <div>recipe URL:</div>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}              
      />
      <div></div>
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;