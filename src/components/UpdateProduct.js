import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {domain, header2} from '../env'

const UpdateProduct = () => {
    const[image, setImage] = useState("")
    const[title, setTitle] = useState("")
    const[marcket_price, setMarcket_price] = useState("")
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState(null)
    const[ville_code_postale, setVille_code_postale] = useState("")
    const[numéro, setNuméro] = useState("")
    const history= useHistory();
    const {id}=useParams();

    const loadProducts= async()=>{
        const {data} = await Axios.get(`http://localhost:8000/api/product/${id}`);
        console.log(data)
        setImage(data.image)
        setTitle(data.title)
        setMarcket_price(data.marcket_price)
        setDescription(data.description)
        setCategory(data.category)
        setVille_code_postale(data.ville_code_postale)
        setNuméro(data.numéro)
    }

    useEffect (() => {
        const getcategory = async () => {
            await Axios ({
                method: "get",
                url: `${domain}/api/categori/`
            }).then(response => {
                console.log(response.data);
                setCategory(response.data)
            })
        }
        getcategory()
    }, [])

    useEffect(()=>{
        loadProducts()
    },[])

    const UpdateProductInfo= async()=>{
        let formField=new FormData()
        formField.append('title', title)
        formField.append('marcket_price', marcket_price)
        formField.append('description', description)
        formField.append('category', category)
        formField.append('ville_code_postale', ville_code_postale)
        formField.append('numéro', numéro)
        if (image!==null){
            formField.append('image', image)
        }
        await Axios({
            method: 'PUT',
            url:`http://localhost:8000/api/product/${id}/`,
            data: formField
        }).then(response=>{
            console.log(response.data)
            history.push('/')
        })
    }

    return (
        <div>
            <div className="cardn">
            <h3 className="title">Modifier votre annonce</h3>
            <hr noshade className="nosh1"></hr>

            <div className="row xx cat">
            <div className="col cat1">Titre de l'annonce</div> 
            <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg" 
                         placeholder="Enter Name" 
                         name="title" value={title}
                          onChange={(e)=>setTitle(e.target.value)}>
                        </input></div>

            </div>

            <div className="row xx cat">
            <div className="col cat1">Catégorie</div>
            <div className="col">
            <select className="cate">
                {
                    category!==null &&
                    category?.map((category,i)=>(

                        <option onChange={(e) => setCategory(e.target.value)} key={i} value={category?.title}>
                            {category?.title}</option>
                    ))

                      }
                      </select>
            </div>
            </div>
            
            <div className="row xx cat">
            <div className="col cat1">Image</div>

            
            <div className="form-group ">
                    <input type="file" 
                    className="form-control form-control-lg cat2" 
                    name="image" src={image}
                    onChange={(e)=>setImage(e.target.files[0])} >
                        </input></div>
            </div>

            <div className="row xx cat">
            <div className="col cat1">Prix</div> 
            <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg" 
                         placeholder="Enter price Name"
                          name="marcket_price"
                           value={marcket_price}
                            onChange={(e)=>setMarcket_price(e.target.value)}>
                        </input></div>
            </div>

            <div className="row xx cat">
            <div className="col cat1" >Code Postal</div> 
            <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter ville Name" 
                          name="ville_code_postale" 
                          value={ville_code_postale}
                           onChange={(e)=>setVille_code_postale(e.target.value)}>
                        </input></div>
            </div>


            <div className="row xx cat">
            <div className="col cat1" >Description</div> 
            <div className="form-group">
         <textarea type="text"
         className="form-control form-control-lg cat2"
         placeholder="Enter description Name"
         name="description" 
         value={description} 
         onChange={(e)=>setDescription(e.target.value)}>
         </textarea></div>
            </div>

            <div className="row xx cat">
            <div className="col cat1">Téléphone</div> 
            <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter numéro" 
                          name="numéro" 
                          value={numéro}
                           onChange={(e)=>setNuméro(e.target.value)}>
                        </input></div>
            </div>

            <button onClick={UpdateProductInfo} className="primary bout ">
                  Modifier cette annonce
            </button>
            
            </div>
        </div>
    )
}

export default UpdateProduct
