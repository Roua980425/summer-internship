import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {domain} from "../env"
import{Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-elastic-carousel';

//homescreen

function SingleProduct() {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 250, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 4}
      ]
    const [products,setProducts]= useState(null)
    const [category, setCategory] = useState(null)
    useEffect(() => {
        const getdata = async () => {
            await Axios({
                method: "get",
                url: `${domain}/api/product/`
            }).then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
        }
        getdata()
    }, [])

    useEffect(() => {
        const getcategory = async () => {
            await Axios({
                method: "get",
                url: `${domain}/api/categori/`
            }).then(response => {
                console.log(response.data);
                setCategory(response.data)
            })
        }
        getcategory()
    }, [])
return (
        <div>
            <div className="caro">
                <Carousel breakPoints={breakPoints}>
                {
                    category!==null &&
                    category?.map((category,i)=>(
                        <div key={i}>
                            <Link to={`/category/${category?.id}`}>
                            {category?.title}</Link></div> 
                    ))
                }
                </Carousel>
            </div>
            
        <div className="row center card-size">
                    
                    {
                        products!==null &&
                        products?.results.map((item,i)=>(
                            <div key={i} className="">
                             <div className="card">  
                             <a href={`/product/${item.id}`} >
                              <img className="medium" src={item.image} alt={item.title} />
                             </a>
                             <div className="card-body">
                              <a href={`/product/${item.id}`} ><h3>{item.title}</h3></a>   
                              <div className="price">{item.marcket_price} dt</div>
                             </div>
                             </div>
                            </div>
                        ))
                    }
                    
                    </div>    
            </div>
            
        
    )
}

export default SingleProduct
