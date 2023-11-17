// import {buildUi} from './src/weakSet.js'
import {buildUi} from './src/weakMap.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Weak examples</h1>

  <div id="container">
    <div id="buttons"></div>

    <div id="reset"></div>
  </div>
`

buildUi('#container')