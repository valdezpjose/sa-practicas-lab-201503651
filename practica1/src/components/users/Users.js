import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, deleteUser } from '../../actions/users';

export class Users extends Component {
    state = {
        id: 0
    }
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        const id = this.state.id;
        this.props.getUser(id);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.state.id;
        this.props.getUser(id);
        this.setState({
            id: 0
        })
    };

    render() {
        const { id } = this.state.id
        return (
            <div className="d-flex justify-content-center">
                <div className='container'>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card card-body mt-4 mb-4">
                                <h2>Obtener usuario</h2>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Id usuario</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            Obtener
                            </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-sm">
                            <br />
                            <h1>Datos usuario</h1>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Estado</th>
                                        <th>Genero</th>
                                        <th>Creado</th>
                                        <th>Actualizado</th>
                                        <th />
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={this.props.users.id}>
                                        <td>{this.props.users.id}</td>
                                        <td>{this.props.users.name}</td>
                                        <td>{this.props.users.email}</td>
                                        <td>{this.props.users.status}</td>
                                        <td>{this.props.users.gender}</td>
                                        <td>{this.props.users.created_at}</td>
                                        <td>{this.props.users.updated_at}</td>
                                        <td>
                                            <button
                                                onClick={this.props.deleteUser.bind(this, this.props.users.id)}
                                                className="btn btn-danger btn-sm">
                                                {" "}
                                                Borrar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, { getUser, deleteUser })(Users);
