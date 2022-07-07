import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';
import { domain } from '../env';
import ReactCardFlip from 'react-card-flip';

export default function ProductScreen() {
  const [isFlipped, setIsFlipped]= useState(false);
  const handleClick=()=>{
    setIsFlipped(!isFlipped);
  }
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [categoryproducts, setCategoryproducts] = useState(null)
  const [category, setCategory] = useState (null)
  const history=useHistory();  
  
  useEffect(()=>{
    const getdata = async()=>{
      await Axios({
        method:"get",
        url:`${domain}/api/product/${id}/`
      }).then(response=>{
           console.log(response.data);
           setProduct(response.data)
           getcategory(response?.data?.category['id'])
      })
    }
    getdata()
  }, [id])

 // const category_id = product?.category['id']

  const getcategory = async (id) => {
    await Axios({
        method: "get",
        url: `${domain}/api/category/${id}/`
    }).then(response => {
      setCategoryproducts(response?.data)
    })
}
  
 const deleteProduct = async (id)=>{
   await Axios.delete(`http://localhost:8000/api/product/${id}`)
   history.pushState('/')
 }
 
  return (

    <div className="">
      {
        product !== null &&
        (
          <div>
        <Link to="/annonces">Back to result</Link>
      <div className="row top">{/**2 */}
        <div className="card2 col row">{/**3 */}
        <div className="n1">
          <img className="large" src={product.image} alt={product.title}></img>
        </div>

        <div className="col n2">
          <ul>

            <li className="xx n4">
              <h1>{product.title}</h1>
            </li>

            <li className="xx"><h3 className="">Prix : <p className="prix">{product.marcket_price} dt</p></h3></li>

            <li className="xx">
             <h3>Description:</h3> 
              <p className="desc">{product.description}</p>
            </li>

            <li className="xx">
             <h3>Adresse:</h3> 
              <p className="desc">{product.ville_code_postale}</p>
            </li>

          </ul>
        </div>
        </div>{/**3 */}

        <div className=" col card3">{/** 4*/}
          
            <ul>
              <li className="xx">
                <div className="row">
                  <div>Prix</div>
                  <div className="price">{product.marcket_price} dt</div>
                </div>
              </li >
                                 
                      <li>
                        <button className="primary block xx">
                          Ajouter au panier
                        </button>
                      </li>

                      <li>
                      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <button onClick={handleClick} className="primary block xx">Voir le numéro</button>
        </div>

        <div>
          
          <button onClick={handleClick} className="primary block xx">{product.numéro}</button>
        </div>

      </ReactCardFlip>
                      </li>
                      <li>
                        <button className="primary block xx">
                          Modifier
                        </button>
                      </li>
                      <li>
                        <button className="primary block xx" onClick={()=>deleteProduct(id)}>
                          Supprimer
                        </button>
                      </li>
                   
                 
            </ul>
          
        </div>{/**4 */}
      </div>{/** 2*/}
    </div>
        )
      }
      <div className="row">
        <h1>des annonces similaires</h1>
        {
          categoryproducts!==null &&
          categoryproducts[0]?.category_products?.map((product, i)=>(
            <div className="" key={i}>
              {product.title}
            </div>
          ))
        }
      </div>
    
    </div>
  );
}