import React, { Component } from 'react';
import poz1 from './poze/Samsung20s.jpg';
import poz2 from './poze/GooglePixel4.jpg';
import poz3 from './/poze/Xiaomi.png';
import poz4 from './poze/Iphone11.jpg';
import poz5 from './poze/One Plus.jpg';
class  Telefoane extends Component {
    render() {
     return (
         <div>
            <p><h4>Samsung Galaxy s20: </h4></p> 
             <img src ={poz1} width ="115" height="160" alt ="eyes" />
             <ul>
                 <li>Rezolutie:1080x2400 pixeli</li>
                 <li>Marime display:6.5 inch</li>
                 <li>Frecventa:2840 +2420 + 1800 MHz</li>
                 <li>Nuclee: Octa Core</li>
                 <li>RAM: 6 GB</li>
                 <h4>Pret: 3085 RON</h4>
             </ul>

             <p><h4>Smarphone Google Pixel 4: </h4></p> 
             <img src ={poz2} width ="200" height="200" alt ="eyes" />
             <ul>
                 <li>Rezolutie:1080x2340 pixeli</li>
                 <li>Marime display:6.2 inch</li>
                 <li>Frecventa:2400 +2200 + 1800 MHz</li>
                 <li>Nuclee: Octa Core</li>
                 <li>RAM: 6 GB</li>
                 <h4>Pret: 2700 RON</h4>
             </ul>


             <p><h4>Smartphone Xiaomi POCO x3 Pro: </h4></p> 
             <img src ={poz3} width ="200" height="200" alt ="eyes" />
             <ul>
                 <li>Rezolutie:1080x2400 pixeli</li>
                 <li>Marime display:6.67 inch</li>
                 <li>Frecventa:2960 +2420 + 1780 MHz</li>
                 <li>Nuclee: Octa Core</li>
                 <li>RAM: 6 GB</li>
                 <h4>Pret: 1500 RON</h4>
             </ul>
            

          
             <p><h4>Smartphone Apple iPhone 11, 64GB, Red: </h4></p> 
             <img src ={poz4} width ="200" height="200" alt ="eyes" />
             <ul>
                 <li>Rezolutie:828 x 1792 pixeli</li>
                 <li>Marime display:6.1 inch</li>
                 <li>RAM: 4 GB</li>
                 <h4>Pret: 2999 RON</h4>
             </ul>


             <p><h4>Smartphone OnePlus 7: </h4></p> 
             <img src ={poz5} width ="200" height="200" alt ="eyes" />
             <ul>
                 <li>Rezolutie:1080 x 2340 pixeli</li>
                 <li>Marime display:6.41 inch</li>
                 <li>Frecventa:2840 + 2420 + 1800 MHz</li>
                 <li>Nuclee: Octa Core</li>
                 <li>RAM: 4 GB</li>
                 <h4>Pret: 2700 RON</h4>
             </ul>

          
         </div>
     );
    }
}
export default Telefoane;