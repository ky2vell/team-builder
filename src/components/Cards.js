import React from 'react';
import { Card, CardImg, CardBody, Col } from 'reactstrap';

const Cards = ({ name, img, nickname, occupation, status }) => {
  return (
    <Col xs='12' sm='6' lg='3'>
      <Card className='mb-4'>
        <CardImg top width='100%' src={img} alt={name} />
        <CardBody>
          <div>
            <b>Name:</b> {name}
          </div>
          <div>
            <b>Nickname:</b> {nickname}
          </div>
          <div>
            <b>Occupation:</b> {occupation}
          </div>
          <div>
            <b>Status:</b> {status}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Cards;
