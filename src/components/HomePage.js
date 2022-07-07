import React, { useState,useEffect } from 'react'
import { BrowserRouter,Route , Link, Switch} from 'react-router-dom';
import Footer from './Footer';

import Carousel from 'react-elastic-carousel';




export default function HomePage() {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 250, itemsToShow: 2},
    {width: 500, itemsToShow: 3},
    {width: 768, itemsToShow: 4}
  ]

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
        setOutputURL8(data.image_url8);
        setOutputURL9(data.image_url9);
        setOutputURL10(data.image_url10);
        setOutputURL11(data.image_query);
      })
    })
  }  
  Upload();
}
    return (
        
            <BrowserRouter>
    
    <div>
    
  
  
  

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
   
           {/**  <div className="points">
              <Carousel breakPoints={breakPoints}>
                <div><a href={'/annonces'}><img src={"./images/clothes1.png"}></img></a></div>
                <a href={'/annonces'}><img src={"./images/ameublement1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/freg.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/book1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/immo1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/voiture1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/vacances1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/decoration.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/emploi1.png"}></img></a>
                <a href={'/annonces'}><img src={"./images/info1.png"}></img></a>
               
              </Carousel>

            </div>*/}
            
      <Footer/>
     
    </div>
    </BrowserRouter>
        
    )
}
