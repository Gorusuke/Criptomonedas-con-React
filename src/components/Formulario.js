import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptomonedas from '../hooks/useCriptomonedas';
import Error from './Error';



const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 22px;
    padding: 12px;
    background-color: #66a2fe;
    border: white;
    width: 100%;
    border-radius: 8px;
    color: white;
    letter-spacing: 1px;
    transition: all .3s ease;

    &:hover{
        color: #66a2fe;
        background-color: white;
        border: #66a2fe;
        cursor: pointer;
    }
    &:focus{
        outline: none
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    // State del listado de criptomonedas
    const [listaCripto, setGuardarCriptomonedas] = useState([]);
    const [error, setError] = useState(false)

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar De Estados Unidos'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'COP', nombre: 'Peso Colombiano'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'GDP', nombre: 'Libra Esterlina'}
    ]

    // Utilizar useMoneda
    const [monedas, SetMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);
    // Utilizar useCriptomoneda
    const [criptomonedas, SetCriptomonedas] = useCriptomonedas('Elige tu Criptomoneda', '', listaCripto);

    // llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=COP`;
            const respuesta = await axios.get(url);
            setGuardarCriptomonedas(respuesta.data.Data); 
        }
        consultarAPI();
    }, []);

    // Cuando el usuario hace submit
    const cotizarmoneda = e => {
        e.preventDefault();
        // Validar
        if (monedas === '' || criptomonedas === ''){
            setError(true);
            return;
        }
        // Pasar al componente principal
        setError(false);
        setMoneda(monedas);
        setCriptomoneda(criptomonedas);
    }




    return (
        <form
            onSubmit={cotizarmoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> :null}
           
            <SetMonedas/>
             
            <SetCriptomonedas/>

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;