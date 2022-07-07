import React from 'react'
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Annonces from './components/Annonces';
import CategoryProducts from './components/CategoryProducts';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductScreen from './components/ProductScreen';
import SingleProduct from './components/SingleProduct';
import LoginPage from './components/LoginPage';
import RegistrePage from './components/RegistrePage';
import ProfilePage from './components/ProfilePage';
import Axios from 'axios';
import {domain, usertoken, header} from './env';
import { useGlobalState } from './state/Provider'
import { useEffect } from 'react';
import Mesannonces from './components/Mesannonces';
import Nouvelle from './components/Nouvelle';
import Forme from './components/Forme';
import Rechercher from './components/Rechercher';
import AddProduct from './components/AddProduct';
import Add from './components/Add';
import Screen from './components/Screen';
import UpdateProduct from './components/UpdateProduct'



function App() {
  const [{ profile, reloadpage }, dispatch] = useGlobalState()
  const tokenget = window.localStorage.getItem('token')
  useEffect(() => {
    if (tokenget !== null) {
      const getdata = async () => {
        await Axios({
          method: "get",
          url: `${domain}/api/profile/`,
          headers: {
            Authorization: `token ${tokenget}`
          }
        }).then(res => {
          let user = res.data['data']
          // console.log(user)
          dispatch({
            type: "ADD_PROFILE",
            profile: user
          }
          )
        })
          .catch(e => {
            // console.log(e)
            dispatch({
              type: "ADD_PROFILE",
              profile: null
            })

          }
          )

      }
      getdata()
    }

  }, [reloadpage])
 /* useEffect(() => {
    if (profile !== null) {
      const getdata = async () => {
        await Axios({
          method: "get",
          url: `${domain}/api/cart/`,
          headers: {
            Authorization: `token ${tokenget}`
          }
        }).then(res => {
          // console.log(res.data);
          {
            const all_data = []
            res?.data.map(data => {
              if (data.complit) {
                all_data.push(data)
                dispatch({
                  type: "ADD_CARTPRODUCT_COMPLIT",
                  cartproduct_complit: all_data
                })
                // console.log(true);
              }
              else {
                dispatch({
                  type: "ADD_CARTPRODUCT_UNCOMPLIT",
                  cartproductf_uncomplit: data
                })
                // console.log(false)
              }
            })
          }
        })
      }
      getdata()
    }
  }, [reloadpage])*/
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    
    <Route path='/' exact component={HomePage} />
    <Route path='/annonces' exact component={SingleProduct} />
    <Route path="/product/:id" component={Screen} ></Route>
    <Route path="/category/:id" component={CategoryProducts} ></Route>
    <Route path="/connecter" component={LoginPage} ></Route>
    <Route path="/register" component={RegistrePage} ></Route>
    <Route path="/profile" component={ProfilePage} ></Route>
    <Route path="/Myad" component={Mesannonces} ></Route>
    <Route path="/nouvelle" component={Nouvelle} ></Route>
    <Route path="/rechercher" component={Rechercher} ></Route>
    <Route path="/:id/update" component={UpdateProduct} ></Route>
    
    
    
    
    </Switch>
    </BrowserRouter>
  )
}

export default App
