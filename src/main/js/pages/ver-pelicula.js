const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerPeliculaPage = () => {

    let { id } = useParams();
    const [pelicula, setPelicula] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/peliculas/' + id
        }).done(response=>setPelicula(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Pelicula</h1>

            <table class="table table-responsive table-bordered table-hover">
                <tr>
                    <th>Nombre</th>
                    <td>{pelicula.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerPeliculaPage;