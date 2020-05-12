import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const FormField = ({ addMember }) => {
  const [user, setUser] = useState({
    key: null,
    name: '',
    nickname: '',
    occupation: '',
    status: 'Alive'
  });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const imgHandler = e => {
    setUser({ ...user, img: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMember(user);
    setUser({ name: '', nickname: '', occupation: '', status: '' });
    window.location.href = '#scroll-bottom';
  };

  return (
    <Form className='mb-4' onSubmit={handleSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='nameInput'>Name</Label>
            <Input
              type='text'
              name='name'
              id='nameInput'
              value={user.name}
              placeholder='Enter Full Name'
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for='nicknameInput'>Nickname</Label>
            <Input
              type='text'
              name='nickname'
              id='nicknameInput'
              value={user.nickname}
              placeholder='Enter Nickname'
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='occupationInput'>Occupation</Label>
            <Input
              type='text'
              name='occupation'
              id='occupationInput'
              value={user.occupation}
              placeholder='Enter Occupation'
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for='statusInput'>Status</Label>
            <Input
              type='select'
              name='status'
              id='statusInput'
              value={user.status}
              onChange={changeHandler}
            >
              <option>Alive</option>
              <option>Deceased</option>
              <option>Presumed dead</option>
              <option>?</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for='imageInput'>Image</Label>
        <Input type='file' name='img' id='imageInput' onChange={imgHandler} />
        <FormText color='muted'>Upload your profile picture here.</FormText>
      </FormGroup>
      <Button color='primary'>Submit</Button>
    </Form>
  );
};

export default FormField;
