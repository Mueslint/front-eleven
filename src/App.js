import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar, NavbarBrand } from 'reactstrap'
import AstronautsList from './Components/AstronautsList'
import TestForm from './Components/TestForm'

function App() {
  const [astronauts, setAstronauts] = useState([]);

  const fetchAstronauts = async () => {
    const response = await axios.get(`http://127.0.0.1:3300/getAstronauts`);
    setAstronauts(response.data);
  };

  const addAstronaut = (newAstronaut) => {
    const updatedAstronauts = [...astronauts, newAstronaut];
    setAstronauts(updatedAstronauts);
  }

  const deleteAstronaut = (id) => {
    const afterDeletion = astronauts.filter((el, index) => {
      return index !== id
    })
    setAstronauts(afterDeletion);
  }

  const editAstronaut = (editedAstronaut, id) => {
    const afterEdition = astronauts.map((astronaut, index) => {
      if (index !== id) {
        return astronaut
      } else {
        return editedAstronaut
      }
    })
    setAstronauts(afterEdition);
  }

  useEffect( () => { fetchAstronauts() },  [] );

  return (
    <div>
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Eleven labs test</NavbarBrand>
      </Navbar>
      <br/>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <AstronautsList
          astronauts={astronauts}
          deleteAstronaut={deleteAstronaut}
          editAstronaut={editAstronaut}
        />
        <TestForm addAstronaut={addAstronaut}/>
      </div>
    </div>
  );
}

export default App;
