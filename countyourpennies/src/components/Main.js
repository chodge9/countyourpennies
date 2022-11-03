import React, { Component }from 'react';
import './main.css';
import fire from './config/Fire';
import Login from './forms/Login'
import Register from './forms/Register'
import Tracker from './Tracker/Tracker';


export default class Main extends Component {

    state = {
        user: 1,
        loading: true,
        formSwitcher: false
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            }else{
                this.setState({user:null})
            }
        })
    }

    formSwitcher = (action) => {
        console.log(action);
        this.setState({
            formSwitcher: action === 'register' ? true : false
        });
    }


    render(){


        const form = !this.state.formSwitcher ? <Login/> : <Register/>;


        return(
            <>
                {!this.state.user ?
                    (<div className='form_block'>
                        {form}
                        {!this.state.formSwitcher ?
                            (<span className='account'>
                                Don't have an account? <button 
                                onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                                className='btnLink'>Create an account</button>
                            </span>) : (
                                <span className='account'>
                                Already have an account? <button 
                                onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                                className='btnLink'>Sign In</button>
                                </span>
                            )
                        }
                    </div>) : (<Tracker />)
                }
            </>
        );
    }
}