import React, { useState } from 'react'
import { Container, Row, Button, ButtonGroup } from 'reactstrap'
import axios from 'axios'

const EditableAstronaut = ({astronaut, handleDelete, editAstronaut, setEditMode, index}) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e, ref) => {
    e.preventDefault();
    console.log(ref);
    const updatedAstronaut = {first, last, country, gender}
    setEditMode(false);

    axios.post("http://127.0.0.1:3300/updateAstronaut", {updatedAstronaut, ref})
    .then(() => {
      editAstronaut(updatedAstronaut, index);
    })
    .catch(err => console.error(err))
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
        <br/>
        <ButtonGroup>
          <Button color="danger" onClick={() => handleDelete(index, astronaut.ref)}>Delete</Button>
          <Button color="info" onClick={() => setEditMode(false)}>Cancel</Button>
          <Button color="success" onClick={e => handleSubmit(e, astronaut.ref)}>Submit</Button>
        </ButtonGroup>
      </div>
    </li>
  );
}

export default EditableAstronaut;
