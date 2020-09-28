import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: .8rem;
    color: white;
    font-size: 24px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    );
}
 
export default Error;