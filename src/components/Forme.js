import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {domain} from '../env'
class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            category: '',
            image:'',
            marcket_price:'',
            ville_code_postale:'',
            description:'',
            numéro:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        fetch('http://127.0.0.1:8000/api/article/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            title:'',
            category: '',
            image:'',
            marcket_price:'',
            ville_code_postale:'',
            description:'',
            numéro:'',
        });
    }

    render(){
        /*const [category, setCategory] = useState (null)
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
        }, [])*/
        
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input value={this.state.title} name="title" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>category</th>
                        <td>
                            
                            <select value={this.state.category} name="category" onChange={this.changeHandler} type="text" className="form-control" >
                            <option>Electroménager</option>
                            <option>immo</option>
                            <option>informatique</option>
                            <option>décoration</option>
                            <option>livre</option>
                            <option>ameublement</option>
                            <option>Vêtements</option>
                            <option>Voiture</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>image</th>
                        <td>
                            <input type="file" value={this.state.image} name="image" onChange={this.changeHandler} className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>marcket_price</th>
                        <td>
                            <input value={this.state.marcket_price} name="marcket_price" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>ville_code_postale</th>
                        <td>
                            <input value={this.state.ville_code_postale} name="ville_code_postale" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td>
                            <input value={this.state.description} name="description" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>numéro</th>
                        <td>
                            <input value={this.state.numéro} name="numéro" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Add;