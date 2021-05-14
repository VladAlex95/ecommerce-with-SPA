import React, { Component } from 'react';
import poz1 from './poze/SamsungCrystal.jfif';
import poz2 from './poze/SamsungQled.png';
import poz3 from './poze/LG UHD.jpg';
import poz4 from './poze/LGNanocell.jpg';
import poz5 from './poze/LGOLED.jpg';
class Televizoare extends Component{
    render(){
        return (
          <div>
           <p><h4>Televizor LED Samsung Smart TV: </h4></p> 
             <img src ={poz1} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>imagine HD:4k UHD</li>
                 <li>Diagonala inch:43</li>
                 <li>Diagonala cm:108</li>
                 <li>Rezolutie:3840 x2160 pixeli</li>
                 <li>internet tv:Da</li>
                 <h4>Pret: 1699 RON</h4>
             </ul>

             <p><h4>Televizor LED Samsung Smart TV QLED: </h4></p> 
             <img src ={poz2} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>imagine HD:4k UHD</li>
                 <li>Diagonala inch:50</li>
                 <li>Diagonala cm:125</li>
                 <li>Rezolutie:3840 x2160 pixeli</li>
                 <li>internet tv:Da</li>
                 <h4>Pret: 2300 RON</h4>
             </ul>

             <p><h4>Televizor LED LG Smart TV: </h4></p> 
             <img src ={poz3} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>imagine HD:4k UHD</li>
                 <li>Diagonala inch:43</li>
                 <li>Diagonala cm:108</li>
                 <li>Rezolutie:3840 x2160 pixeli</li>
                 <li>internet tv:Da</li>
                 <h4>Pret: 1500  RON</h4>
             </ul>

             <p><h4>Televizor LED LG NanoCell Smart TV: </h4></p> 
             <img src ={poz4} width ="180" height="130" alt ="eyes" />
             <ul>
                 <li>imagine HD:4k UHD</li>
                 <li>Diagonala inch:43</li>
                 <li>Diagonala cm:108</li>
                 <li>Rezolutie:3840 x2160 pixeli</li>
                 <li>internet tv:Da</li>
                 <h4>Pret: 1800  RON</h4>
             </ul>

             <p><h4>Televizor LED LG Smart TV OLED: </h4></p> 
             <img src ={poz5} width ="190" height="130" alt ="eyes" />
             <ul>
                 <li>imagine HD:4k UHD</li>
                 <li>Diagonala inch:55</li>
                 <li>Diagonala cm:139</li>
                 <li>Rezolutie:3840 x2160 pixeli</li>
                 <li>internet tv:Da</li>
                 <h4>Pret: 5500  RON</h4>
             </ul>
          </div>  
        );
    }
}

export default Televizoare
