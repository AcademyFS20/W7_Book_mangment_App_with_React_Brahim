import React, { Component } from 'react'
import "./index.css";
import Books from "./containers/Books";
import Title from "./components/Title";
import Button from "./components/Button";
import styled from "styled-components";
import CreateBookForm from "./containers/CreateBookForm";
import { ThemeProvider } from 'react-bootstrap';


export default class App extends Component {


  

    render() {

        return (
            <>
                <Wrapper>
                    <div className="page">
                            <Title titleContent="Admin dashboard Books" />
                            <Books />
                    </div>
                </Wrapper>
            </>
        )
    }
}


const Wrapper = styled.div`


.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;
}

`;

