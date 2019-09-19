import React from 'react';
import styled from 'styled-components';
import male from '../images/man.svg'
import female from '../images/girl-avatar.svg'


export default function User({person}){
    const src = person.gender === 'male' ? male : female;

    const StyledPerson = styled.div`
    border: .2rem solid green;
    border-radius: 3rem;
    padding: 2.5rem;
    width: 30%;
    margin: 1.3rem 1rem;

    img {
        width: 85%;
        height: 25rem;
        border-radius: 2rem;
        margin: 0 auto;
    }

    p {
        color: green;
    }

    div {
        display: flex;
        justify-content: space-between
    }

    button {
        border-radius: 5px;
        margin: 3px auto;
        background: none;
    }

`
    
    const Name = styled.p`
        font-family: 'Tangerine', serif;
        font-size: 4rem;
    `
    
    return(
        <StyledPerson>
            <img src={src} alt=""/>
            <Name>{`${person.first_name} ${person.last_name? person.last_name:""}`}</Name>
            <div>
                <p>Email: {person.email}</p>
                <p>Role: {person.role}</p>
            </div>
            <p>Gender: {person.gender}</p>
        </StyledPerson>
    )
}
