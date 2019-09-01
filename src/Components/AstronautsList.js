import React, { useState } from 'react';
import { Label, Button, ButtonGroup } from 'reactstrap'
import axios from 'axios'

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
      {
        astronauts.map((astronaut, index) => (
          <ul key={astronaut.first.concat(astronaut.last)} style={{display: 'flex', flexDirection: 'column'}}>
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

              <div>
                <Astronaut astronaut={astronaut} />
                <div>
                  <ButtonGroup>
                    <Button color="danger" onClick={() => handleDelete(index, astronaut.ref)}>Delete</Button>
                    <Button color="info" onClick={() => handleEdit(index)}>Edit</Button>
                  </ButtonGroup>
                </div>
              </div>

            }
          </ul>
        ))
      }
    </div>
  )
};

export default AstronautsList;
