import React from 'react';
import './App.css';

function App() {
  return (
    <>
    
    <div className="App">
      <div id="imgContainer">
        <img src="/"></img>
        <h2>Login</h2>
      </div>

      <div className= "container">
        <div id="loginMsgs"></div>

        <div className="form-group">
          <label for = "username">Username</label>
          <div id="error_username"></div>
          <input type = "text" class="form-control" name="user[username]"></input>
        </div>

        <div className="form-group">
          <label for = "username">Password</label>
          <div id="error_password"></div>
          <input type = "password" class="form-control" name="user[password]"></input>
        </div>

        <div className="form-group">
          <button class="btn btn-primary" id="submit">Login</button>
        </div>

      </div>

    </div>
</>
    
  );

  
}

export default App;
