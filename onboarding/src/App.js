import React, {useState} from 'react';
import './App.css';
import CustomForm from './components/Form'
import axios from 'axios';

function App() {
  const [postedUsers, setPostedUsers] = useState([])

  function submit(formValues, actions){
    const usertoPost = {
      id: 1,
      email: formValues.email,
      first_name: formValues.name.split(" ")[0],
      last_name: formValues.name.split(" ")[1],
      avatar: ""

  }
  axios.post("https://reqres.in/api/users", usertoPost)
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.log(err);
      
  })
  }
  return (
    <div className="App">
      <CustomForm onSubmit={submit}/>
    </div>
  );
}

export default App;
