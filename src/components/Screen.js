import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory} from 'react-router-dom';
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
      const{data}=await Axios.get(`${domain}/api/product/${id}/`)
      
           console.log(data);
           setProduct(data);
           getcategory(data.category)
      
    }
    getdata()
  }, [id])

 // const category_id = product?.category['id']

  const getcategory = async () => {
    const{data}=await Axios.get(`${domain}/api/category/${id}/`)
    console.log(data);
    setCategoryproducts(data)
    
}
const deleteProduct = async (id)=>{
  await Axios.delete(`http://localhost:8000/api/product/${id}`)
  history.pushState('/')
}

const deleteData= async (id) =>{
  fetch('http://127.0.0.1:8000/api/product/'+id+'/',{
    method:'DELETE',
  })
  .then(response=>response)
}
   
 
  return (

    <div className="">
      {
        product !== null &&
        (
          <div>
        {/*<Link to="/annonces">Back to result</Link>*/}
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
                                 
                    {/**  <li>
                        <button className="primary block xx">
                          Ajouter au panier
                        </button>
                      </li>*/}

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
                        <button className="primary block xx" ><Link to={`/${product.id}/update`}>
                        Modifier
                        </Link>
                        </button>
                      </li>

                      <li>
                        <button className="primary block xx"><Link onClick={()=>deleteData(product.id)}>
                        Supprimer
                        </Link> 
                        </button>
                      </li>
                   
                 
            </ul>
          
        </div>{/**4 */}
      </div>{/** 2*/}
    </div>
        )
      }
      <div className="row">
        {/*<h1>des annonces similaires</h1>*/}
        {
          categoryproducts!==null &&
          categoryproducts[0]?.category_products?.map((product, i)=>(
            <div className="" key={i}>
              {product?.title}
            </div>
          ))
        }
      </div>
    
    </div>
  );
}