import React, { Component } from 'react';
import poz1 from './poze/apple1.jpg';
import poz2 from './poze/accer.jpg';
import poz3 from './poze/lenovoipad.jpg';
import poz4 from './poze/msi.jpg';
class  Laptopuri extends Component {
    render() {
     return (
         <div>
             <p><h4>Apple MacbookAir 13 Apple M1 chip(8 core):</h4> </p>
           <img src ={poz1} width ="200" height="120" alt ="eyes" />
           <ul>
               <li>Diagonala:13.4 inch</li>
               <li>Capacitate 8GB</li>
               <li>Capacitate SSD: 256</li>
           </ul>
           <h4>Pret: 5400 RON</h4>
           <p><h4>Laptop Acer Gaming 15.6'' Nitro 5 AN515-43:</h4></p>
           <img src ={poz2} width ="200" height="120" alt ="eyes" />
           <ul>
             <li>Diagonala: 15.6 inch</li>
             <li>Procesor : Ryzen 5</li>
             <li>Frecventa: 3 Ghz</li>
             <li>Capacitate: 8 GB</li>
             <li>Capacitate SSD:256 GB</li>
             <li>Placa video Model:gtx 1650</li>
             <h4>Pret: 2780 RON</h4>
          </ul>

          <p><h4>Laptop Lenovo Gaming 15.6'' IdeaPad 3 15ARH05:</h4></p>
           <img src ={poz3} width ="200" height="120" alt ="eyes" />
           <ul>
             <li>Diagonala: 15.6 inch</li>
             <li>Procesor : Ryzen 5 4000 series</li>
             <li>Frecventa: 3 Ghz</li>
             <li>Capacitate: 8 GB</li>
             <li>Capacitate SSD:256 GB</li>
             <li>Placa video Model:gtx 1650</li>
             <h4>Pret: 2890 RON</h4>
          </ul>
          <p><h4>Laptop MSI Gaming 15.6'' GF65 Thin 10UE:</h4></p>
           <img src ={poz4} width ="220" height="180" alt ="eyes" />
           <ul>
             <li>Diagonala: 15.6 inch</li>
             <li>Procesor : 5 10th gen </li>
             <li>Frecventa: 2.4 Ghz</li>
             <li>Capacitate: 16 GB</li>
             <li>Capacitate SSD:512 GB</li>
             <li>Placa video Model:RTX 3060</li>
             <h4>Pret: 5500 RON</h4>
          </ul>
         </div>
     );
    }
}
export default  Laptopuri;