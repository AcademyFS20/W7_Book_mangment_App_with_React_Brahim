import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormCheck,
  FloatingLabel,
  FormSelect
} from "react-bootstrap";
import Button from "../components/Button";
import styled from "styled-components";

export default class CreateBookForm extends Component {
  render() {
    return (
      <div>
        <h4>Books info</h4>
        <Wrapper>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter book's name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAuthorName">
            <Form.Label>Authors Name</Form.Label>
            <Form.Control type="text" placeholder="Enter author's name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumberPages">
            <FormLabel>Number of pages</FormLabel>
            <Form.Control type="number" />
          </Form.Group>
          <FloatingLabel controlId="floatingSelect" label="Categories">
          <Form.Select aria-label="Default select example">
            <option value="1">Fantasy</option>
            <option value="2">Thriller</option>
            <option value="3">Philosophy</option>
            <option value="3">History</option>
            <option value="3">Computer Science</option>
                  </Form.Select>
          </FloatingLabel>
          <Button inclination='btn-success' text="validate"/>
        </Form>
        </Wrapper>
      </div>
    );
  }
}


const Wrapper = styled.div`

     
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    width:134%;
    padding: 21px;

:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}  

Button{
  margin-top:13px;
}
      
     
`
