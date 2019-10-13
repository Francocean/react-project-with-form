import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? 'teal' : 'lightgrey'};
    color: ${prop => prop.cart? 'teal' : 'lightgrey'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${prop => prop.cart ? 'teal' : 'lightgrey'};
        color: var(--mainBlue);
    }
    &:focus{
        outline-style: none;
    }
`;
export const ViewCartButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? 'teal' : 'lightgrey'};
    color: ${prop => prop.cart? 'teal' : 'lightgrey'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${prop => prop.cart ? 'teal' : 'lightgrey'};
        color: var(--mainWhite);
    }
    &:focus{
        outline-style: none;
    }
`;

//used to style continue shopping button in Modal.js
export const SecondButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: grey;
    color: var(--mainBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        color: crimson;
        border-color: crimson;
    }
    &:focus{
        outline-style: none;
    }
`;