import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormCheck,
  FloatingLabel,
  FormSelect,
  Alert
} from "react-bootstrap";
import Button from "../components/Button";
import styled from "styled-components";

export default class CreateBookForm extends Component {
  state = {
    bookName: "",
    authorName: "",
    numberOfPages: 0,
    category: "",
    errorTitle: "",
    errorAuthor: "",
    errornbrpages: 0,

  };
  changeBookName = (e) => {
    this.setState({ bookName: e.target.value });
  };

  changeAuthorName = (e) => {
    this.setState({ authorName: e.target.value });
  };

  changeNBPages = (e) => {
    this.setState({ numberOfPages: e.target.value });
  };

  changeCategory = (e) => {
    this.setState({ category: e.target.value });

  };

  validate = (e) => {

    e.preventDefault();
    if (this.state.bookName === "") {
      this.setState({ errorTitle: "you must write the name of the book" });
    }
    if (this.state.authorName === ""){
      this.setState({errorAuthor:"you must write the name of the author"})
    }
    if (this.state.numberOfPages === ""){
      this.setState({errornbrpages:"you must specify the number of the book pages"})
    }

    const newBook = [this.state.bookName,this.state.authorName,this.state.numberOfPages,this.state.category]
    console.log(newBook);
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
              {
                this.state.errorTitle ? <Alert variant="danger">
                  <p className="mb-0"> {this.state.errorTitle}</p>
                </Alert> : null
              }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthorName">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author's name"
                value={this.state.authorName}
                onChange={this.changeAuthorName}
              />
               {
                this.state.errorTitle ? <Alert variant="danger">
                  <p className="mb-0"> {this.state.errorAuthor}</p>
                </Alert> : null
              }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumberPages">
              <FormLabel>Number of pages</FormLabel>
              <Form.Control
                type="number" min="0"
                value={this.state.numberOfPages}
                onChange={this.changeNBPages}
              />
               {
                this.state.errorTitle ? <Alert variant="danger">
                  <p className="mb-0"> {this.state.errornbrpages}</p>
                </Alert> : null
              }
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
