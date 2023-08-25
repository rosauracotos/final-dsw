const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerBoletoPage = () => {

    let { id } = useParams();
    const [pelicula, setPelicula] = useState({});
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/peliculas/' + id
        }).done(response => setPelicula(response.entity))
        client({
            method: 'GET',
            path: '/api/boletos/' + id + '/clientespelicula'
        }).done(response => setClientes(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Pelicula</h1>
            <hr />

            <table class="table table-responsive table-bordered table-hover">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <td>{pelicula.nombre}</td>
                </tr>
                </tbody>
            </table>
            <hr />

            <h2>Clientes</h2>
            <table class="table table-responsive table-bordered table-hover">
                <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Asiento</th>
                </tr>
                </thead>
                <tbody>

                {clientes.map(cliente=>{
                    return(
                        <tr key={cliente.ID}>
                            <td>{cliente.CLIENTE}</td>
                            <td>{cliente.ASIENTO}</td>
                        </tr>
                    )
                })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-boleto/${id}/nuevo-cliente`}>Nuevo Boleto</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerBoletoPage;