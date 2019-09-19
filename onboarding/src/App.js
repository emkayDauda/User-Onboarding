import React, { useState } from "react";
import "./App.css";
import CustomForm from "./components/Form";
import axios from "axios";
import uuid from 'uuid';

function App() {
  const [postedUsers, setPostedUsers] = useState([]);

  function submit(formValues, actions) {
    const usertoPost = {
      id: uuid(),
      email: formValues.email,
      first_name: formValues.name.split(" ")[0],
      last_name: formValues.name.split(" ")[1],
      password: formValues.password
    };
    axios
      .post("https://reqres.in/api/users", usertoPost)
      .then(response => {
        console.log(response.data);
        const newUsers = postedUsers.concat(response.data);
        setPostedUsers(newUsers);
        console.log(postedUsers);
        actions.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <CustomForm onSubmit={submit} />
      {postedUsers.map(user => (
        <h3 key={user.id}>{user.first_name}</h3>
      ))}
    </div>
  );
}

export default App;
