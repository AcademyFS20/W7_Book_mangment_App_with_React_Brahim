import React from "react";
import "./index.css";
import Books from "./containers/Books";
import Title from "./components/Title";
import Button from "./components/Button";
import styled from "styled-components";
import CreateBookForm from "./containers/CreateBookForm";

function App() {



    return (
        <>
            <Wrapper>
                <div className="page">
                    <Title />
                    <Books />
                    <Button inclination="btn primary" text='create' size="lg"/>
                    <div>
                        <CreateBookForm />
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
  }
`;

export default App;
