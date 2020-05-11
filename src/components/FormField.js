import React from 'react';
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

const FormField = () => {
  return (
    <Form className='mb-4'>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleEmail'>Name</Label>
            <Input type='email' name='email' id='exampleEmail' />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for='examplePassword'>Nickname</Label>
            <Input type='password' name='password' id='examplePassword' />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleAddress'>Occupation</Label>
            <Input type='text' name='address' id='exampleAddress' />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleSelect'>Status</Label>
            <Input type='select' name='select' id='exampleSelect'>
              <option>Alive</option>
              <option>Deceased</option>
              <option>Presumed dead</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for='exampleFile'>Image</Label>
        <Input type='file' name='file' id='exampleFile' />
        <FormText color='muted'>Upload your profile picture here.</FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default FormField;
