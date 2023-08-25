const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarClientePage = ()=>{

    const [cliente, setCliente] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/clientes/'+id
        }).done((response)=>setCliente(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/clientes/'+id,
            entity: cliente,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar cliente</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={cliente.nombre} onChange={(e)=>setCliente({...cliente, nombre: e.target.value})} /> <br/>
                <input type="submit" value="Editar cliente" />
            </form>

        </>
    )
}

module.exports = EditarClientePage