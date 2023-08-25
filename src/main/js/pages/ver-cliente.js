const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerClientePage = () => {

    let { id } = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/clientes/' + id
        }).done(response=>setCliente(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Clientes</h1>

            <table class="table table-responsive table-bordered table-hover">
                <tr>
                    <th>Nombre</th>
                    <td>{cliente.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerClientePage;