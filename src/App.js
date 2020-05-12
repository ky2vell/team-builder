import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import FormField from './components/FormField';
import Cards from './components/Cards';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then(res => setMembers(res.data))
      .catch(console.log);
  }, []);

  const addMember = newMember => {
    setMembers([...members, newMember]);
  };

  return (
    <div className='App'>
      <Header />
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='mb-3'>Join the Team!</h1>
            <FormField addMember={addMember} />
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <h1 className='mb-4 text-center'>Team Members</h1>
            <Row>
              {members.map((el, i) => (
                <Cards
                  key={!el.char_id ? i : el.char_id}
                  name={el.name}
                  img={el.img}
                  nickname={el.nickname}
                  occupation={el.occupation}
                  status={el.status}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <div id='scroll-bottom'></div>
    </div>
  );
}

export default App;
