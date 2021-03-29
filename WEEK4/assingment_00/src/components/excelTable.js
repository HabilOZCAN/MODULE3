import React from 'react'
import readExcel from '../services/excelService'
/**
 * input elementinin altina eklenen table elementinin thead ve tbody 
 * kismi excelService.js dosyasinda manupule edilmesi icin id eklenerek
 * burada yazilmistir.
 * 
 */

export default function table(){
    return (
    <div>
       <input type="file" onChange={(e)=>{
           const file=e.target.files[0];
           readExcel(file);
       }}></input>
       <table>
           <thead>
               <tr id = 'tableHead'></tr>
           </thead>
           <tbody id = 'tableBody'>
           </tbody>
       </table>      
    </div>);
}
