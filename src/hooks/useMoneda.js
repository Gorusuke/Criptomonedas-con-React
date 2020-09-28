import React, { Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
    letter-spacing: 2px;
    text-align: left;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;

    &:focus{
        outline: none
    }
`;


const useMoneda = (label, inicialState, opciones) => {
    // State de nuedtro custon Hook
    const [state, actualizarState] = useState(inicialState);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(option => (
                    <option key={option.codigo} value={option.codigo}>{option.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );
    // Retornar el state, interfaz y finction que modifica el state
    return [state, Seleccionar, actualizarState];
    // Al pasarlo al lugar donde lo utilizaras puedes nombrarlos como quieras pero en el orden que los pasaste y es importante que cuando lo renombres (Seleccionar) lo hagas con la 1era letra en mayuscula, siempre y cuando tu componente lo hayas nombrado con la 1era letra en mayusculas!
}
 
export default useMoneda;