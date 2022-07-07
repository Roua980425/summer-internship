import React, { useState, useEffect } from 'react';

import { Link, BrowserRouter } from 'react-router-dom';
import { useGlobalState } from '../state/Provider'
import './Header.css';
//import { useSelector } from 'react-redux';

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [{ profile, reloadpage }, dispatch] = useGlobalState()
  console.log(profile, "From navbar page");
  //const cart = useSelector((state) => state.cart);
//  const { cartItems } = cart;

 /* const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);*/

  return (
    
    <BrowserRouter>
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        
          <a href ={'/' }className='navbar-logo' onClick={closeMobileMenu}>
            BonneAffaire
           
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {
              profile !==null ?
              (
              <>
              <li className='nav-item'>
              <a href={'/annonces'} className='nav-links' onClick={closeMobileMenu}>
             {/* <Route path="/annonces/:id" component={ProductScreen}></Route>
                <Route path='/' component={HomeScreen} exact></Route>*/ }
              <span className="top-element-formatting">
                Annonces {" "} <span className="second-word-formatting"><i class="fas fa-list-ul"></i></span>
                </span> 
              </a>
            </li>
            <li className='nav-item'>
              <a href={'/nouvelle'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span className="top-element-formatting">
                Nouvelle Annonce {" "} <span className="second-word-formatting"><i class="far fa-edit"></i></span>
                </span> 
              </a>
            </li>
            <li className='nav-item'>
              <a
                href={'/rechercher'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span className="top-element-formatting">
                  Rechercher {" "} <span className="second-word-formatting"><i class="fas fa-search"></i></span>
                </span> 
              </a>
            </li>
            <li>
              <a
                href={'/profile'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  <span className="top-element-formatting">
                Mon Compte {" "} <span className="second-word-formatting"><i class="fas fa-user-circle"></i></span>
                </span> 
              </a>
              
            </li>
           
              </>
              )
              :
              (
                <>
                <li className='nav-item'>
              <a href={'/annonces'} className='nav-links' onClick={closeMobileMenu}>
           
              <span className="top-element-formatting">
                Annonces {" "} <span className="second-word-formatting"><i class="fas fa-list-ul"></i></span>
                </span> 
              </a>
            </li>
            
            <li className='nav-item'>
              <a
                href={'/rechercher'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span className="top-element-formatting">
                  Rechercher {" "} <span className="second-word-formatting"><i class="fas fa-search"></i></span>
                </span> 
              </a>
            </li>

            <li>
              <a
                href={'/connecter'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  <span className="top-element-formatting">
                Se Connecter {" "} <span className="second-word-formatting"><i class="fas fa-sign-in-alt"></i></span>
                </span> 
              </a>
              
            </li>
                </>
                )
            }
            
           
          </ul>
        
        </div>
      </nav>
      </>
    </BrowserRouter>
  );
}

export default Header;