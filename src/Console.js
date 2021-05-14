import React, { Component } from 'react';
import poz1 from './poze/ps4.jpeg';
import poz2 from './poze/ps4pro.jpg';
import poz3 from './poze/xboxones.jpg';
import poz4 from './poze/xboxonex.jpg';
import poz5 from './poze/ps5.jpeg';
class Console extends Component{
    render(){
        return(
        <div>
             <p><h4>Consola SONY PlayStation 4 Slim (PS4 Slim): </h4></p> 
             <img src ={poz1} width ="180" height="140" alt ="eyes" />
             <ul>
             <li>Procesor:8-core 1.6 GHz</li>
                 <li>Memorie:8GB GDDR5</li>
                 <li>Capacitate de stocare :1 TB</li>
                 <li>Tip stocare: HDD </li>
                 <h4>Pret: 1300 RON</h4>
             </ul>

             <p><h4>Consola SONY Playstation 4 Pro (PS4 Pro) : </h4></p> 
             <img src ={poz2} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>Procesor:8-core 2.1 GHz</li>
                 <li>Memorie:8GB GDDR5</li>
                 <li>Capacitate de stocare :1 TB</li>
                 <li>Tip stocare: HDD </li>
                 <h4>Pret: 1899 RON</h4>
             </ul>

             <p><h4>Consola Microsoft Xbox One S : </h4></p> 
             <img src ={poz3} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>Procesor:8-core 1.75 GHz</li>
                 <li>Memorie:8GB GDDR3</li>
                 <li>Capacitate de stocare :1 TB</li>
                 <li>Tip stocare: HDD </li>
                 <h4>Pret: 1400 RON</h4>
             </ul>

             <p><h4>Consola Microsoft Xbox One X  : </h4></p> 
             <img src ={poz4} width ="180" height="140" alt ="eyes" />
             <ul>
                 <li>Procesor:8-core 2.3 GHz</li>
                 <li>Memorie:12GB GDDR5</li>
                 <li>Capacitate de stocare :1 TB</li>
                 <li>Tip stocare: HDD </li>
                 <h4>Pret: 1819 RON</h4>
             </ul>
        </div>
        );
    }
}
export default Console