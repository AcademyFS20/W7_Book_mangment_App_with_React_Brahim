import React, { Component } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import Button from "../components/Button";
import { dataBook } from "../helpers/data/data";
import Book from "../components/Book";
import AddBookForm from "./AddBookForm";
import UpdateBookForm from "./UpdateBookForm"

export default class Books extends Component {
  state = {
    data: dataBook,
    toggle: true,
    idBook: 0
  };

  displayAddBookForm = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  addItem = (title, author, category, nbpages) => {
    console.log(title);
    console.log(author);
    console.log(category);
    console.log(nbpages);

    const id = ((this.state.data.length) + 1)
    const newTable = { id, title, author, category, nbpages }
    this.state.data.push(newTable)
    this.setState(this.state.data);
  };

  deleteItem = (id) => {
    const newTable = this.state.data.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    console.log(newTable);
    this.setState({ data: newTable });
  };

  update = (id, title, author, category, nbpages) => {
    const index = this.state.data.findIndex(item => {
      return item.id === id
    })

    const newBook = {
      id, title, author, category, nbpages
    }

    const newList = [...this.state.data];
    newList[index] = newBook;
    this.setState({ data: newList, idBook: 0 })
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
                if (this.state.idBook !== id) {
                  return (
                    <tr key={id}>
                      <Book
                        id={id}
                        bookTitle={title}
                        nbPages={nbpages}
                        authorName={author}
                        categories={category}
                        modify={() => this.setState({ idBook: item.id })}
                        delete={() => this.deleteItem(item.id)}
                      />
                    </tr>
                  );
                } else {
                  return (
                    <tr key={item.id}>
                      <UpdateBookForm id={item.id}
                        title={title}
                        author={author}
                        category={category}
                        nbpages={nbpages}
                        validateUpdate={this.update} />
                    </tr>
                  )
                }

              })}
            </tbody>
          </Table>
          <div>
            {!this.state.toggle ? (
              <AddBookForm validation={this.addItem} />
            ) : null}
          </div>
          <Button
            inclination="btn primary"
            text={this.state.toggle ? "create" : "close"}
            click={this.displayAddBookForm}
            type="button"
            size="lg"
          />
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
`;
