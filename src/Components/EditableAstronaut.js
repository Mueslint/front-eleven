import React, { useState } from 'react'

import { Row } from 'reactstrap'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TextField from '@material-ui/core/TextField';

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
    <Card>
      <CardContent>
        <Container>
          <Row>
            <TextField type='text' placeholder={astronaut.first} onChange={e => setFirst(e.target.value)}/>
          </Row>
          <Row>
            <TextField type='text' placeholder={astronaut.last} onChange={e => setLast(e.target.value)}/>
          </Row>
          <Row>
            <TextField type='text' placeholder={astronaut.gender} onChange={e => setGender(e.target.value)}/>
          </Row>
          <Row>
            <TextField type='text' placeholder={astronaut.country} onChange={e => setCountry(e.target.value)}/>
          </Row>

        <br/>
        <ButtonGroup>

          <Button
            variant="contained"
            style={{color:'white', backgroundColor:'#FF1744'}}
            onClick={() => handleDelete(index, astronaut.ref)}>
            Delete
          </Button>
          <Button variant="contained" style={{color:'white', backgroundColor:'#1976D2'}} onClick={() => setEditMode(false)}>Cancel</Button>
          <Button
            variant="contained"
            style={{color: 'white', backgroundColor: '#00E676'}}
            onClick={e => handleSubmit(e, astronaut.ref)}>
            Submit
          </Button>

        </ButtonGroup>
        </Container>
      </CardContent>
    </Card>
  );
}

export default EditableAstronaut;
