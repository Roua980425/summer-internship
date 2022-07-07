import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import HomeScreen from './HomeScreen';
//fih lpartie te3 app.js

export default function Annonces() {
    return (
      <BrowserRouter>
        <main className="">
          <Switch>
          <Route path="/" component={HomeScreen}></Route>
          
          </Switch>
        </main>
        </BrowserRouter>
    )
}
