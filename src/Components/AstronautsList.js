import React, { useState } from 'react';
import { Label } from 'reactstrap'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import axios from 'axios';
import uuidv4 from 'uuid/v4';

import Astronaut from './Astronaut';
import EditableAstronaut from './EditableAstronaut'

const AstronautsList = ({ astronauts, deleteAstronaut, editAstronaut }) => {
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(0);

  const handleDelete = (index, ref) => {
    setEditMode(false);
    axios.post("http://127.0.0.1:3300/deleteAstronaut", {ref})
    .then(()=> {
      deleteAstronaut(index);
    })
    .catch((err) => {console.error(err)})

  }

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
  }

  return (
    <div>
      <Label><strong>My astronauts list</strong></Label>
      <br />
      <Label>Edit mode:<strong> {editMode.toString()}</strong></Label>
      <Container>
        {
          astronauts.map((astronaut, index) => (
            <div key={uuidv4()}>
              {(editMode && editIndex === index) ?
                <div>
                  <EditableAstronaut
                    astronaut={astronaut}
                    editAstronaut={editAstronaut}
                    index={index}
                    setEditMode={setEditMode}
                    handleDelete={handleDelete}
                  />
                </div>

                :

                <Card style={{padding: 5, margin: 10}}>
                  <Container>
                  <CardContent>
                    <Astronaut astronaut={astronaut} />
                    <div>
                      <ButtonGroup style={{marginTop: 10}}>
                        <Button variant="contained" style={{color:'white', backgroundColor:'#FF1744'}} onClick={() => handleDelete(index, astronaut.ref)}>Delete</Button>
                        <Button variant="contained" style={{color: 'white', backgroundColor: '#1976d2'}} onClick={() => handleEdit(index)}>Edit</Button>
                      </ButtonGroup>
                    </div>
                  </CardContent>
                  </Container>
                </Card>

              }
            </div>
          ))
        }
      </Container>

    </div>
  )
};

export default AstronautsList;
