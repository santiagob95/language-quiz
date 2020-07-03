import React from 'react'
import logo from './svg/logo.png';
import './App.css'

export default function Header (){
        return (
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Titulo">Juego de Lengua</h1>
          </div>
        )
}