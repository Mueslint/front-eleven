import React  from 'react';
import { Container, Row } from 'reactstrap'

const Astronaut = ({astronaut}) => {
  return (
    <li>
      <strong>{`${astronaut.first} ${astronaut.last}`}</strong>
      <div>
         <Container>
           <Row>
             { `Gender: ${ astronaut.gender }` }
           </Row>
           <Row>
             { `Country: ${ astronaut.country }` }
           </Row>
         </Container>
      </div>
    </li>
  );
}

export default Astronaut;
