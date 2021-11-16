import React, { Component } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import Button from "../components/Button";
import { dataBook } from "../helpers/data/data";
import Book from "../components/Book";
import CreateBookForm from "./CreateBookForm";


export default class Books extends Component {

  state = {
    data:dataBook,
    toggle: true,
  }

  clickHandler = () => {

    this.setState({ toggle: !this.state.toggle })
  }

deleteItem = (id) =>{
    const newTable = this.state.data.filter((item) => {
      if (item.id !== id) {
        console.log(item);
        return item
}
});
this.setState({data:newTable})

  }

  render() {
    return (
      <>
        <Wrapper>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Identifier</th>
                <th>Book name</th>
                <th>Author</th>
                <th>Category</th>
                <th>Nb of pages</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => {
                const { id, title, nbpages, author, category } = item;
                return (
                  <tr key={id}>
                    <Book
                      id={id}
                      bookTitle={title}
                      nbPages={nbpages}
                      authorName={author}
                      categories={category}
                    />
                    <td>
                      <Button inclination="btn-warning" text="update" />
                      <Button inclination="btn-danger" text="delete" click={() => this.deleteItem(item.id)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            {!this.state.toggle ? <CreateBookForm /> : null}
          </div>
          <Button inclination="btn primary" text={this.state.toggle ? 'create' : 'close'} click={this.clickHandler} type="button" size="lg" />
        </Wrapper>
      </>
    );
  }
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 13px;
`
