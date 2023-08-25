const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoBoletoPage = () => {

    let { id } = useParams();

    const [clientes, setClientes] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [posicion, setPosicion] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/boletos',
            entity: {
                pelicula: 'http://localhost:8081/api/peliculas/'+id,
                cliente: 'http://localhost:8081/api/clientes/'+idCliente,
                posicion: posicion
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/clientes'
        }).done(response=>{
            setClientes(response.entity._embedded.clientes)
        })
    },[])

    return (
        <>
            <h1>Nuevo Boleto</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='cliente'>Cliente </label>
                <select name="cliente" id="cliente" onChange={(e)=>{setIdCliente(e.target.value)}}>
                    {clientes.map(cliente => {
                        const value = cliente._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{cliente.nombre}]</option>
                        )
                    })}
                </select><br />

                <label>Asiento</label> <br />
                <input type="text" id='posicion' name='posicion' onChange={e=>setPosicion(e.target.value)} /> <br />

                <input class="btn btn-success" type="submit" value="Nuevo Boleto" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoBoletoPage;