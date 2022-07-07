import Axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router';

const AddProduct=()=>{

    const[image, setImage] = useState("")
    const[title, setTitle] = useState("")
    const[marcket_price, setMarcket_price] = useState("")
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")
    const[ville_code_postale, setVille_code_postale] = useState("")
    const[numéro, setNuméro] = useState("")

    const history = useHistory();

    const AddProductInfo= async()=>{
        let formField = new FormData()

        formField.append('title', title)
        formField.append('marcket_price', marcket_price)
        formField.append('description', description)
        formField.append('category', category)
        formField.append('ville_code_postale', ville_code_postale)
        formField.append('numéro', numéro)
        if (image!==null){
            formField.append('image', image)
        }

        await Axios ({
            method: 'post',
            url:'http://127.0.0.1:8000/api/product/',
            data: formField
        }).then((response)=>{
            console.log(response.data);
            history.push('/')
        })

    }

    return(
        <div>
            <h1>Add Product</h1>
            <div  className="container">
                <div className="form-group">
                    <div className="form-control">

                   <div className="form-group">
                    <input type="file" 
                    className="form-control form-control-lg" 
                    name="image" src={image} 
                    onChange={(e)=>setImage(e.target.files[0])}>
                        </input></div>

                    <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg" 
                         placeholder="Enter Name" 
                         name="title" value={title}
                          onChange={(e)=>setTitle(e.target.value)}>
                        </input></div>


                        <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg" 
                         placeholder="Enter price Name"
                          name="marcket_price"
                           value={marcket_price}
                            onChange={(e)=>setMarcket_price(e.target.value)}>
                        </input></div>

                        <div className="form-group">

                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter description Name"
                           name="description" 
                           value={description} 
                           onChange={(e)=>setDescription(e.target.value)}>
                        </input></div>


                        <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter category Name" 
                          name="category" 
                          value={category}
                           onChange={(e)=>setCategory(e.target.value)}>
                        </input></div>


                        <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter ville Name" 
                          name="ville_code_postale" 
                          value={ville_code_postale}
                           onChange={(e)=>setVille_code_postale(e.target.value)}>
                        </input></div>

                        <div className="form-group">
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter numéro" 
                          name="numéro" 
                          value={numéro}
                           onChange={(e)=>setNuméro(e.target.value)}>
                        </input></div>

                        <button className="btn btn-success" onClick={AddProductInfo}>Add Product

                        </button>

                      

                    </div>

                </div>

            </div>


        </div>
    );
};

export default AddProduct;