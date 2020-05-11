import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import FormField from './components/FormField';
import Cards from './components/Cards';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then(res => setData(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='mb-3'>Join the Team!</h1>
            <FormField />
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <h1 className='mb-4 text-center'>Team Members</h1>
            <Row>
              {data.slice(0, 10).map(el => (
                <Cards
                  key={el.char_id}
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
    </div>
  );
}

export default App;
