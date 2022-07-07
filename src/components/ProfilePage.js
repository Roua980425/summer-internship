import Axios from 'axios'
import React, { useState } from 'react'
import { domain } from '../env'
import { useGlobalState } from '../state/Provider'
import{Link} from 'react-router-dom'
import ReactRoundedImage from "react-rounded-image";



const ProfilePage = () => {
    const [{ profile }, dispatch] = useGlobalState()
    // console.log(profile.prouser);
    const [image, setImage] = useState(null)
    const [firstname, setFirstname] = useState(profile?.prouser.first_name)
    const [lastname, setLastname] = useState(profile?.prouser.last_name)
    const [email, setemail] = useState(profile?.prouser.email)
    const uploadimage = async () => {
        const formdata = new FormData()
        formdata.append('image', image)
        await Axios({
            method: "post",
            url: `${domain}/api/updateprofile/`,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`
            },
            data: formdata
        }).then(response => {
            // console.log(response.data["message"]);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response.data
            })
            alert(response.data["message"])
        })
    }
    const logoutbutton = () => {
        window.localStorage.clear()
        dispatch({
            type: "ADD_PROFILE",
            profile: null
        })
        window.location.href = "/"
    }
    const updatedata = async () => {
        await Axios({
            method: "post",
            url: `${domain}/api/updateuser/`,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`
            },
            data: {
                "first_name": firstname,
                "last_name": lastname,
                "email": email
            }
        }).then(response => {
            // console.log(response.data["message"]);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response.data
            })
            alert(response.data["message"])
        })

    }
    
    return (
        <div className="row">
        <div className="cardp col">
            <div className="">
                <div className="media">
                   <ReactRoundedImage className="rounded-circle account-img " image={`${domain}${profile?.image}`}  roundedSize="0" imageWidth="110" imageHeight="110"/>
                   <div className="media-body">
                   <h2 className="account-heading">{profile?.prouser.username}</h2>
                   <p class="text-secondary">{profile?.prouser.email}</p>
                   <p>{profile?.prouser.first_name} {profile?.prouser.last_name}</p>
                   <div className="form">
                   <div class="form-group">
                   
                   
                <label for="file">Changer photo de profil</label><br/>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" class="form-control file" />      
                            
            <br/>
            
            <button onClick={uploadimage} className="primary col">
                          Changer
            </button><br/><br/>
           
                <label >Adresse e-mail du compte</label><br/>
                <input onChange={(e) => setemail(e.target.value)} type="username" class="form-control" placeholder="" value={email}></input>
            </div><br/>

            <div class="form-group">
                <label >Prenom</label><br/>
                <input onChange={(e) => setFirstname(e.target.value)} type="text" class="form-control" placeholder="" value= {firstname}></input>
            </div><br/>
           
            <div class="form-group">
                <label >Nom</label><br/>
                <input onChange={(e) => setLastname(e.target.value)}  type="text" class="form-control" placeholder="" value={lastname}></input>
            </div><br/>
           
          
            </div>
            <div className="row">
            <button onClick={updatedata} className="primary xx col">
                          Valider
            </button>

            <button onClick={logoutbutton} className="primary xx col">
            Se déconnecter          
            </button>
            
            </div>
                   </div>
                </div>
            </div>
        </div>
        <div  className="col carda">
        <Link to='/Myad'>
            <div className="annonc">
            <i class="fas fa-address-card"></i><br/>
            <h1>Annonces </h1>
            <h3>Gérer mes annonces déposées</h3>
            </div>
        </Link>
        </div>

        </div>
    )
}

export default ProfilePage
