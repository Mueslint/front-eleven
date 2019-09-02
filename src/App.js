import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AstronautsList from './Components/AstronautsList'
import AstronautForm from './Components/AstronautForm'

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
      <AppBar position="static" style={{backgroundColor: '#1976D2'}}>
        <Toolbar>
          <Typography><strong>Eleven labs test</strong></Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <AstronautsList
          astronauts={astronauts}
          deleteAstronaut={deleteAstronaut}
          editAstronaut={editAstronaut}
        />
      <AstronautForm addAstronaut={addAstronaut}/>
      </div>
    </div>
  );
}

export default App;
