import React, { Component } from 'react' 
import fire from '../config/Fire'
import './login.css'

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {

        let errorNotification = this.state.fireErrors ?
        (<div className='Error'>{this.state.fireErrors}</div>) : null;


        return (
            <>
            {errorNotification}
                <form>
                    <input type="text"
                            className='boxes'
                            placeholder='Email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            name='email' />

                    <input type="password"
                            className='boxes'
                            placeholder='Password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            name='password' />

                    <input type="submit"
                            className='btnSubmit'
                            value="Login" />
                </form>
            </>
        )
    }
} 

export default Login;