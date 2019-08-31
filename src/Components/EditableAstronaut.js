import React, { useState } from 'react'
import { Container, Row, Button } from 'reactstrap'

const EditableAstronaut = ({astronaut, handleDelete, editAstronaut, setEditMode, index}) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newAstronaut = {first, last, country, gender}
    setEditMode(false);
    editAstronaut(newAstronaut, index);
    //TODO: add axios.post("//api/modifAstroRoute", astro)
  }

  return (
    <li>
      <div>
        <Container>
          <Row>
            <input type='text' placeholder={astronaut.first} onChange={e => setFirst(e.target.value)}/>
          </Row>
          <Row>
            <input type='text' placeholder={astronaut.last} onChange={e => setLast(e.target.value)}/>
          </Row>
          <Row>
            <input type='text' placeholder={astronaut.gender} onChange={e => setGender(e.target.value)}/>
          </Row>
          <Row>
            <input type='text' placeholder={astronaut.country} onChange={e => setCountry(e.target.value)}/>
          </Row>
        </Container>
        <Button color="success" onClick={handleSubmit}>Submit</Button>
      </div>
      <br/>
      <div style={{display: 'flex'}}>
        <Button color="danger" onClick={() => handleDelete(index)}>Delete</Button>
        <Button color="info" onClick={() => setEditMode(false)}>Cancel</Button>
      </div>
    </li>
  );
}

export default EditableAstronaut;
