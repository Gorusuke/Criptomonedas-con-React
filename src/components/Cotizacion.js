import React from 'react';
import styled from '@emotion/styled';


const Contenedor = styled.div`
  background-color: white;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  p{
    font-size: 20px;
    letter-spacing: .7px;
    margin: 10px 0;
    span{
        font-weight: bold;
    }
  }
`;

const Precio = styled.p`
  font-size: 1.9rem;
`;

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <Contenedor>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <p>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCTDAY}</span></p>
            <p>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></p>

        </Contenedor>
    );
}
 
export default Cotizacion;