import React, { useState } from 'react';
import {
  Form, FormGroup, Input, Label, Col, Button
} from 'reactstrap';

import axios from 'axios'

const TestForm = ({addAstronaut}) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newAstronaut = { first, last, country, gender}

    addAstronaut(newAstronaut);
    axios.post(`http://127.0.0.1:3300/postNewAstronaut`, newAstronaut);
  }

  return (
      <Form onSubmit={handleSubmit}>
        <Label>
          <strong>Add an astronaut</strong>
        </Label>
        <FormGroup row>
          <Label for="firstname" sm={4}>First name</Label>
          <Col sm={8}>
            <Input
              type="first"
              name="first"
              id="firstname"
              placeholder="Astronaut's first name"
              onChange={e => setFirst(e.target.value)}
              />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastname" sm={4}>Last name</Label>
          <Col sm={8}>
            <Input
              type="last"
              name="last"
              id="lastname"
              placeholder="Astronaut's last name"
              onChange={e => setLast(e.target.value)}
              />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="country" sm={4}>Country</Label>
          <Col sm={8}>
            <Input
              type="country"
              name="country"
              id="countryname"
              placeholder="Astronaut's country"
              onChange={e => setCountry(e.target.value)}
              />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="gender" sm={4}>Gender</Label>
          <Col sm={8}>
            <Input
              type="gender"
              name="gender"
              id="genderid"
              placeholder="Astronaut's gender"
              onChange={e => setGender(e.target.value)}
              />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{size:10, offset:8}}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
  )
};

export default TestForm;
