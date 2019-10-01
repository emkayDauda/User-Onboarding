import React, { useState } from "react";
import "./App.css";
import CustomForm from "./components/Form";
import axios from "axios";
import uuid from 'uuid';
import User from './components/User';

function App() {
  const [postedUsers, setPostedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  function submit(formValues, actions) {
    setLoading(true)
    const usertoPost = {
      id: uuid(),
      email: formValues.email,
      first_name: formValues.name.split(" ")[0],
      last_name: formValues.name.split(" ")[1],
      role: formValues.role,
      password: formValues.password,
      gender: formValues.gender
    };
    axios
      .post("https://reqres.in/api/users", usertoPost)
      .then(response => {
        setLoading(false)
        console.log(response.data);
        const newUsers = postedUsers.concat(response.data);
        setPostedUsers(newUsers);
        console.log(postedUsers);
        actions.resetForm();
      })
      .catch(err => {
        setLoading(false)
        console.log(err);
      });
  }
  return (
    <div className="App">
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <CustomForm onSubmit={submit} />
          {postedUsers.map(user => (
            <User key={user.id} person={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
