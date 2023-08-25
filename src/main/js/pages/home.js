const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { peliculas: [], clientes: [], boletos: [] };
    }
    componentDidMount() {

        client({ method: 'GET', path: '/api/peliculas' }).done(response => {
            this.setState({ peliculas: response.entity._embedded.peliculas });
        });

        client({ method: 'GET', path: '/api/clientes' }).done(response => {
            this.setState({ clientes: response.entity._embedded.clientes });
        });

        client({ method: 'GET', path: '/api/boletos/todos' }).done(response => {
            this.setState({ boletos: response.entity });
        });

    }
    render() {
        return (
            <>
                <div class="container">
                    <h1>Examen Final</h1>
                    <div class="row">
                        <div class="col-sm">
                            <Titulo entidad="Películas" emoji="🎸" />
                            <ProductoList peliculas={this.state.peliculas} />
                            <Link to="/nuevo-pelicula" class="btn btn-warning">Nuevo Pelicula</Link>
                        </div>
                        <div class="col-sm">
                            <Titulo entidad="Clientes" emoji="🎶" />
                            <ClienteList clientes={this.state.clientes} />
                            <Link to="/nuevo-cliente" class="btn btn-warning">Nuevo Cliente</Link>
                        </div>
                        <div class="col-sm">
                            <Titulo entidad="Boletos" emoji="👩🏼‍🎤" />
                            <BoletoList boletos={this.state.boletos} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const Titulo = (props) => {
    return (
        <>
            <hr />
            <h2>{props.emoji} - {props.entidad}</h2>
            <hr />
            Lista completa de {props.entidad.toLowerCase()}
        </>
    )
}


class ProductoList extends React.Component {
    render() {
        const peliculas = this.props.peliculas.map(pelicula =>
            <Pelicula key={pelicula._links.self.href} pelicula={pelicula} />
        );
        return (
            <table class="table table-responsive table-bordered table-hover">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                {peliculas}
                </tbody>
            </table>
        )
    }
}
class ClienteList extends React.Component {
    render() {
        const clientes = this.props.clientes.map(cliente =>
            <Cliente key={cliente._links.self.href} cliente={cliente} />
        );
        return (
            <table class="table table-responsive table-bordered table-hover">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                {clientes}
                </tbody>
            </table>
        )
    }
}
class BoletoList extends React.Component {
    render() {
        const boletos = this.props.boletos.map(boleto =>
            <Boleto key={boleto.PELICULAID} boleto={boleto} />
        );
        return (
            <table class="table table-responsive table-bordered table-hover">
                <tbody>
                <tr>
                    <th>Pelicula</th>
                    <th>Cantidad Boletos</th>
                    <th>Acciones</th>
                </tr>
                {boletos}
                </tbody>
            </table>
        )
    }
}

class Pelicula extends React.Component {
    render() {
        const id = this.props.pelicula._links.self.href.split("/").slice(-1)
        return (
            <tr>
                <td>{this.props.pelicula.nombre}</td>
                <td>
                    <Link to={"/ver-pelicula/" + id} class="btn btn-success">Ver</Link>
                    <Link to={"/editar-pelicula/" + id} class="btn btn-primary">Editar</Link>
                </td>
            </tr>
        )
    }
}
class Cliente extends React.Component {
    render() {
        const id = this.props.cliente._links.self.href.split("/").slice(-1)

        return (
            <tr>
                <td>{this.props.cliente.nombre}</td>
                <td>
                    <Link to={"/ver-cliente/" + id} class="btn btn-success">Ver</Link>
                    <Link to={"/editar-cliente/" + id} class="btn btn-primary">Editar</Link>
                </td>
            </tr>
        )
    }
}
class Boleto extends React.Component {
    render() {
        const id = this.props.boleto.PELICULAID

        return (
            <tr>
                <td>{this.props.boleto.PELICULA}</td>
                <td>{this.props.boleto.CANTIDADBOLETOS}</td>
                <td>
                    <Link to={"/ver-boleto/" + id} class="btn btn-success">Ver</Link>
                </td>
            </tr>
        )
    }
}

module.exports = HomePage;