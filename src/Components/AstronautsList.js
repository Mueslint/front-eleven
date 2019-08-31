import React, { useState } from 'react';
import { Label, Button } from 'reactstrap'

import Astronaut from './Astronaut';
import EditableAstronaut from './EditableAstronaut'

const AstronautsList = ({ astronauts, deleteAstronaut, editAstronaut }) => {
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(0);

  const handleDelete = (index) => {
    setEditMode(false);
    deleteAstronaut(index);
    // TODO: add axios.post("//api/deleteRoute", astronaut)
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
          <ul key={astronaut.last.concat(astronaut.first)} style={{display: 'flex', flexDirection: 'column'}}>
            {(editMode && editIndex === index) ?
              <div>
                <EditableAstronaut
                  astronaut={astronaut}
                  editAstronaut={editAstronaut}
                  index={index}
                  setEditMode={setEditMode}
                />
              </div>

              :

              <div>
                <Astronaut astronaut={astronaut} />
                <div style={{display: 'flex'}}>
                  <Button color="danger" onClick={() => handleDelete(index)}>Delete</Button>
                  <Button color="info" onClick={() => handleEdit(index)}>Edit</Button>
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
