import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';



const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 2rem;
    text-align: center;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const H1 = styled.header`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 50px;
  

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;



function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargar, setCargar] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {

      // Evitamos la ejecucion la 1era vez
      if(moneda === '') return;

      // Consultar la Api para tener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const respuesta = await axios.get(url);
      // Mostrar Spinner
      setCargar(true);
      setTimeout(() => {
        setCargar(false);
        setResultado(respuesta.data.DISPLAY[criptomoneda][moneda])
      }, 2000);
    }

    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen-cripto"
        />
      </div>
      <div>
        <H1>Cotiza Criptomonedas Al Instante</H1>
        <Formulario
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />
        {cargar ? <Spinner/>
        : <Cotizacion 
          resultado={resultado}
        /> }
      </div>
    </Contenedor>
  );
}

export default App;
