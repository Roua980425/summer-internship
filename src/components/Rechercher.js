import Axios from 'axios'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { domain } from '../env'
import { useGlobalState } from '../state/Provider'
import{Link} from 'react-router-dom'
import { set } from 'lodash-es'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Image } from "semantic-ui-react";

export default function Rechercher() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const[data, setData] = useState([{}])
    const[data1, setData1] = useState([{}])
    const[photo,setPhoto] = useState("");
    const [outputURL, setOutputURL] = useState("");
    const [outputURL1, setOutputURL1] = useState("");
    const [outputURL2, setOutputURL2] = useState("");
    const [outputURL3, setOutputURL3] = useState("");
    const [outputURL4, setOutputURL4] = useState("");
    const [outputURL5, setOutputURL5] = useState("");
    const [outputURL6, setOutputURL6] = useState("");
    const [outputURL7, setOutputURL7] = useState("");
    const [outputURL8, setOutputURL8] = useState("");
    const [outputURL9, setOutputURL9] = useState("");
    const [outputURL10, setOutputURL10] = useState("");
    const [outputURL11, setOutputURL11] = useState("");
    const [outputURL12, setOutputURL12] = useState("");

    useEffect (()=>{
        fetch('/api').then(
            res=>res.json()
        ).then(
            data=>{
                setData(data)
                console.log(data)})

    }, []);
 
    const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target); 
    const Upload = async() => {
      await fetch('/api/upload', {
        method: 'POST',
        body: formData
      }).then(resp => {
        resp.json().then(data => 
          {
          console.log(data)
          setData(data)
          setOutputURL(data.image_url);
          setOutputURL1(data.image_url1);
          setOutputURL2(data.image_url2);
          setOutputURL3(data.image_url3);
          setOutputURL4(data.image_url4);
          setOutputURL5(data.image_url5);
          setOutputURL6(data.image_url6);
          setOutputURL7(data.image_url7);
          
          setOutputURL11(data.image_query);
        })
      })
    }  
    Upload();
  }

    return (

      
   <div className="rechercher">     
  <div className="back" >
      <div className="cardR">
      <div className="">
      <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" enctype="multipart/form-data">
        <div className="row">
    <div className="form-inline justify-content-center mt-5 col first">
        <div className="input-group">
            <input type="file" id="image" name="file" 
            accept="image/*" className="file-custom"/>
        </div>
    </div>

    <div className="input-group justify-content-center mt-4 col last">
        <button type="submit" className="primary block xx">Rechercher</button>
    </div>
    </div>
</form>
      </div>
      </div>
      </div>
      
      <h3>image de requête: </h3>
      
      <img src={outputURL11} size='small' />

      <h3>Les annonces existantes: </h3>

      <div className="center card-size row">

      <div className="card9">
     <img src={outputURL} size='small' className=""/>  
     <div className="card-body">
     <a  ><h3>jeu voiture</h3></a>   
      <div className="price">20 dt</div>
     </div>
     </div>  
     <div className="card9">
     <img src={outputURL1} size='small' className=""/> 
     <div className="card-body">
     <a  ><h3>Ford</h3></a>   
      <div className="price">15000 dt</div>
     </div>
     </div>
     <div className="card9">
     <img src={outputURL2} size='small' className=""/>
     <div className="card-body">
     <a  ><h3>voiture</h3></a>   
      <div className="price">30000 dt</div>
     </div>
     </div> 
     <div className="card9">
     <img src={outputURL3} size='small'className="" /> 
     <div className="card-body">
     <a  ><h3>Nissan</h3></a>   
      <div className="price">25000 dt</div>
     </div>
     </div> 
     <div className="card9">
     <img src={outputURL4} size='small'className="" /> 
     <div className="card-body">
     <a  ><h3>jeu voiture</h3></a>   
      <div className="price">50 dt</div>
     </div>
     </div>
     <div className="card9">
     <img src={outputURL5} size='small'className="" />
     <div className="card-body">
     <a  ><h3>PEUGEOT 3008</h3></a>   
      <div className="price">19000 dt</div>
     </div>
     </div>
     <div className="card9"> 
     <img src={outputURL6} size='small'className="" />
     <div className="card-body">
     <a  ><h3>Voiture Peugeot</h3></a>   
      <div className="price">22000 dt</div>
     </div> 
     </div>
     <div className="card9">
     <img src={outputURL7} size='small'className="" /> 
     <div className="card-body">
     <a  ><h3>jeu d'enfants</h3></a>   
      <div className="price">15 dt</div>
     </div>
    </div>

     
     
     </div>
        
  
  </div>
    
   
        
    )
}
