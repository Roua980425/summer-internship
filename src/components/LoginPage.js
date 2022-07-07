import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Axios from 'axios'
import{domain, header2} from'../env';

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginbutton = () => {
        Axios({
            url: `${domain}/api/login/`,
            method: "post",
            headers: header2,
            data: {
                "username": username,
                "password": password
            }
        }).then(response => {
            window.localStorage.setItem('token', response.data['token'])
            window.location.href = "/"
        }).catch(eee => {
            alert("Username OR Password is invalid Try Agane !!")
            // console.log(eee);
        })
    }
    return (
        <div>

        <div className="card0">
        <h3 className="title">Saisissez vos identifiants</h3>
        <hr noshade className="nosh0"></hr>
        <div className="form">
            <div class="form-group">
                <label >Votre Pseudo:</label><br/>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" class="form-control" placeholder=""></input>
            </div><br/>
            <div class="form-group">
                <label >Votre mot de passe:</label><br/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder=""></input>
            </div>
            </div>
            <div className="row">
            <button onClick={loginbutton} className="primary xx col">
                          Identification
            </button>
            <Link className="col xx">Mot de passe oublié </Link>
            </div>
            <hr noshade className="nosh"></hr>
            <div className="row">
            <div className="xx2 col1">
            Vous n'avez pas encore de compte ?
            </div>
            <Link to="/register" className="col xx2" >Créez un compte GRATUIT </Link>
            </div>
        </div>
        </div>
    )
}

export default LoginPage