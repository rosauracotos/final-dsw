const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoClientePage = () => {

    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/clientes',
            entity: {nombre: nombre },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Cliente</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br />
                <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />

                <input class="btn btn-success" type="submit" value="Nuevo Cliente" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoClientePage;