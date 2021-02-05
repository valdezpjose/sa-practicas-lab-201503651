import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postUser, updateUser } from '../../actions/users';


export class Form extends Component {
    static propTypes = {
        postUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired
    }
    state = {
        name: '',
        email: '',
        gender: 'Male',
        status: 'Active',
        id: 0,
        updated_at: "",
        created_at: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updateUsers() {
        const { name, email, gender, status } = this.state
        const id = this.state.id
        this.props.updateUser({ name, email, gender, status },id)
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, gender, status } = this.state
        this.props.postUser({ name, email, gender, status })
        const lastUser = JSON.parse(sessionStorage.getItem("lastUser"))
        console.log(lastUser)
        if (lastUser.code == 201) {
            this.setState({
                name: lastUser.data.name,
                email: lastUser.data.email,
                gender: lastUser.data.gender,
                status: lastUser.data.status,
                id: lastUser.data.id,
                updated_at: lastUser.data.updated_at,
                created_at: lastUser.data.created_at,
            })
        } else {
            this.setState({
                name: '',
                email: '',
                gender: 'Male',
                status: 'Active',
                id: 0,
                updated_at: "",
                created_at: ""
            })
        }

    };



    render() {
        const { id, name, email, gender, status } = this.state;
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm">
                        <div className="card card-body mt-4 mb-4">
                            <h2>Agregar usuarios</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Id (Solamente para modificar)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="id"
                                        onChange={this.onChange}
                                        value={id}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        onChange={this.onChange}
                                        value={name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        onChange={this.onChange}
                                        value={email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Genero</label>
                                    <select className="form-control" name="gender" onChange={this.onChange} value={gender}>
                                        <option value="Male">Masculino</option>
                                        <option value="Female">Femenino</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Estado</label>
                                    <select className="form-control" name="status" onChange={this.onChange} value={status}>
                                        <option value="Active">Acitvo</option>
                                        <option value="Inactive">Inactivo</option>
                                    </select>
                                </div>
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-sm">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">
                                                    Agregar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button onClick={() => this.updateUsers()}  className="btn btn-primary">
                                Modificar
                           </button>
                        </div>
                    </div>
                    <div className="col-sm">
                        <br />
                        <h1>Datos ultimo usuario insertado</h1>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={this.state.id}>
                                    <td>{this.state.id}</td>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.email}</td>
                                    <td>{this.state.status}</td>
                                    <td>{this.state.gender}</td>
                                    <td>{this.state.created_at}</td>
                                    <td>{this.state.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { postUser, updateUser })(Form);
