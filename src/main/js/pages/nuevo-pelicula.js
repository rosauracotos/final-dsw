const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoPeliculaPage = () => {

    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/peliculas',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Pelicula</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br />
                <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />

                <input class="btn btn-success" type="submit" value="Nuevo Pelicula" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoPeliculaPage;