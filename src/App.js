import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const data = [
  { 
    Collagename: 'Universel collage of engineering',
    Studentname: 'Anusuya',
    Age:21 
  },
  { 
    Collagename: 'Arunachala collage of engineering',
    Studentname: 'Abinaya',
    Age:22
  },
  {
    Collagename: 'Rohini collage of engineering',
    Studentname: 'Akshaya',
    Age:22 
  }
]

function App() {
  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr>
          {/* <th scope="col">Sl.No</th> */}
          <th scope="col">Collage Name</th>
          <th scope="col">Student Name</th>
          <th scope="col">Age</th>
          </tr>
        </thead>
        </table>

        <div className="enter-btn">
          <button type="button" class="btn btn-primary">Enter details</button>
        </div> 

        <div  className="input-box">
          <lable>Enter Collage Name :</lable>
          <input type="text" placeholder="enter collage name"/><br/>
          <lable>Enter Student Name :</lable>
          <input type="text" placeholder="enter student name"/><br/>
          <lable>Age :</lable>
          <input type="text" placeholder="age"/><br/>
        </div> 
    </div>
  );
}

export default App;
