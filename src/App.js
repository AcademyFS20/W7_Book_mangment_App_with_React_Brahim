import React from "react";
import "./index.css";
import Books from "./Containers/Books";
import Title from "./components/Title";
import Button from "./components/Button";
import styled from "styled-components";
import CreateBookForm from "./Containers/CreateBookForm";

function App() {
    return (
        <>
            <Wrapper>
                <div className="page">
                    <Title />
                    <Books />
                    <Button inclination="btn primary" text='create'/>
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
    gap: 21px;
  }
`;

export default App;
