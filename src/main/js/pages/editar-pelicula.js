const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarPeliculaPage = ()=>{

    const [pelicula, setPelicula] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/peliculas/'+id
        }).done((response)=>setPelicula(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/peliculas/'+id,
            entity: pelicula,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar pelicula</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={pelicula.nombre} onChange={(e)=>setPelicula({...pelicula, nombre: e.target.value})} /> <br/>
                <input type="submit" value="Editar pelicula" />
            </form>

        </>
    )
}

module.exports = EditarPeliculaPage