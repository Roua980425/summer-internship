import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
           <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
  </section>*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Mieux connaître BonneAffaire</h2>
            <div className="words">
            <Link to='/'>Qui sommes-nous? </Link><br/>
            <Link to='/'>Rejoignez-nous ! </Link><br/>
            <Link to='/'>Avis BonneAffaire </Link><br/>
            <Link to='/'>Presse </Link><br/>
            <Link to='/'>Nos applications mobiles </Link><br/>
            <Link to='/'>Vos suggestions </Link></div>
          </div>
          <div class='footer-link-items'>
            <h2>Annonces et services</h2>
            <div className="words2">
            <Link to='/'>Annonces gratuites - Immobilier - Voiture occasion -</Link>
            <Link to='/'>Immobilier neuf - Maison neuve - Location vacances -</Link>
            <Link to='/'>Mon débarras - Annonce animaux - Services à la personne -</Link>
            <Link to='/'>Recherche petites annonces - Annonces en Tunisie -</Link>
            <Link to='/'>BonneAffaire mobile - Site petites annonces gratuites</Link></div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Liens utiles</h2>
            <div className="words3">
            <Link to='/'>Passer une annonce gratuite </Link><br/>
            <Link to='/'>Contactez-nous </Link><br/>
            <Link to='/'>Invitez vos amis </Link><br/>
            <Link to='/'>Mentions légales </Link><br/>
            <Link to='/'>Aide - Consentement - Cookies</Link></div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              BonneAffaire
              
            </Link>
          </div>
          <small class='website-rights'>BonneAffaire © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;