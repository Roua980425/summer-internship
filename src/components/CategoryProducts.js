import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { domain } from '../env';


const CategoryProducts = () => {
    const [category, setCategory] = useState (null)
    const {id} =useParams()
    useEffect(()=>{
        const getcategoryproduct = async()=>{
            await Axios({
                method: "get",
                url: `${domain}/api/categori/${id}/`
            }).then(response=>{
                console.log(response.data[0]);
                setCategory(response.data[0])
            })
        }
        getcategoryproduct()
    }, [])
    return (
        <div className="container">
            {/*<h1>Category: {category?.title}</h1>*/}
            

            
            <div className="row center card-size">
                {
                    category!==null &&
                    category?.category_product?.map((product,i)=>(
                        <div key={i} className="">
                             
                   
                    <div className="card">  
                             <a href={`/product/${product.id}`} >
                              <img className="medium" src={`${domain}${product?.image}`} alt={product.title} />
                             </a>
                             <div className="card-body">
                              <a href={`/product/${product.id}`} ><h3>{product.title}</h3></a>   
                              <div className="price">{product.marcket_price} dt</div>
                             </div>
                             </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryProducts
