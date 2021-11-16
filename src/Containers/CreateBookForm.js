import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormCheck,
  FloatingLabel,
  FormSelect,
} from "react-bootstrap";
import Button from "../components/Button";
import styled from "styled-components";

export default class CreateBookForm extends Component {
  state = {
    bookName: "",
    authorName: "",
    numberOfPages: 0,
    category: "",
  };
  changeBookName = (e) => {
    this.setState({ bookName: e.target.value });
    console.log(this.state.bookName);
  };

  changeAuthorName = (e) => {
    this.setState({ authorName: e.target.value });
    console.log(this.state.authorName);
  };

  changeNBPages = (e) => {
    this.setState({ numberOfPages: e.target.value });
    console.log(this.state.numberOfPages);
  };

  changeCategory = (e) => {
    this.setState({ category: e.target.value });
    
  };

  validate = (e) => {

    e.preventDefault();
  
    console.log(this.state.category)
  
  }
  render() {
    return (
      <div>
        <h4>Books info</h4>
        <Wrapper>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicBookName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book's name"
                value={this.state.bookName}
                onChange={this.changeBookName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthorName">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author's name"
                value={this.state.authorName}
                onChange={this.changeAuthorName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumberPages">
              <FormLabel>Number of pages</FormLabel>
              <Form.Control
                type="number"
                value={this.state.numberOfPages}
                onChange={this.changeNBPages}
              />
            </Form.Group>
           <Form.Group>
           <FloatingLabel controlId="floatingSelect" label="Book's genre category">
           <Form.Select value={this.state.category} onChange={this.changeCategory}>
           <option value="fantasy">Fantasy</option>
                <option value="philosophy">Philosophy</option>
                <option value="history">History</option>
                <option value="CS">Computer Science</option>
           </Form.Select>
           </FloatingLabel>
           </Form.Group>
            <Button
              inclination="btn-success"
              text="validate"
              type="submit"
              click={this.validate}
            />
          </Form>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  width: 612px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 21px;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  Button {
    margin-top: 13px;
  }
`;
