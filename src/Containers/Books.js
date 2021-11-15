import React, { Component } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import Button from "../components/Button";
import { dataBook } from "../helpers/data/data";
import Book from "../components/Book";

export default class Books extends Component {
  render() {
    return (
      <div>
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
            {dataBook.map((item) => {
              const { id, title, nbpages, author, category } = item;
            return (
                <tr>
                  <Book
                    id={id}
                    bookTitle={title}
                    nbPages={nbpages}
                    authorName={author}
                    categories={category}
                  />
                  <td>
                    <Button inclination="btn-warning" text="update" />
                    <Button inclination="btn-danger" text="delete" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
