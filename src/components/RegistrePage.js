import Axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { domain, header2 } from '../env'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const history = useHistory()
    const registerButton = async () => {
        if (password !== password2) {
            alert("Password not patch try agane !")
        } else {
            await Axios({
                method: "post",
                url: `${domain}/api/register/`,
                headers: header2,
                data: {
                    "username": username,
                    "password": password
                }
            }).then(response => {
                // console.log(response.data);
                if (response.data["data"]) {
                    history.push("/login")
                }
                // console.log(response.data["message"]);
                alert(response.data["message"])
            })
        }
    }
    return (
        <div className="container my-5 p-5">
              <div>

<div className="card0">
<h3 className="title">Créez votre compte</h3>
<hr noshade className="nosh0"></hr>
<div className="form">
<div class="form-group">
                <label >Votre Pseudo: </label><br/>
                <input onChange={e => setUsername(e.target.value)} type="text" class="form-control" placeholder="Username" />
            </div><br/>

    <div class="form-group">
                <label >Votre mot de passe:</label><br/>
                <input onChange={e => setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
    </div><br/>

    <div class="form-group">
                <label >Confirmez votre mot de passe:</label><br/>
                <input onChange={e => setPassword2(e.target.value)} type="password" class="form-control" placeholder="Confirm Password" />
    </div>

    </div>
    <div >
    <button onClick={registerButton} className="primary xx ">
                  Identification
    </button>
    <Link to="/login">Login Now</Link>
    </div>
</div>
</div>
        </div>
    )
}

export default Register