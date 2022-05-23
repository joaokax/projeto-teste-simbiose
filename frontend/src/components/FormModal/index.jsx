import React from "react";

import {
    Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CheckIcon, CloseIcon
} from './styles'

export default function FormModal() {

    return (
        <Overlay>
            <Container>
                <Header>
                    <strong> Add Item</strong>
                    <button type="button">
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="itemName">itemName</label>
                            <input id="itemName" type="text"/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="UserName">UserName</label>
                            <input id="UserName" type="text"/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="UserEmail">UserEmail</label>
                            <input id="UserEmail" type="text"/>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="submit">
                            <CheckIcon />
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
    
}


