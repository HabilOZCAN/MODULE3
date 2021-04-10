import React, {useState} from 'react';
import {FishFarm} from './FishFarm';
/**
 * state yapisi ile basit anlamda database'imiz olan balik cifligindeki kayitlara ait index numarasi button tiklamasi ile guncellenmekte
 * daha sonra guncellenen bu deger ile gosterilecek kayit gene state yapisi kullanilarak guncellenerek browser ekranina yazdirilmaktadir.
 * 
 */

export default function FishFarmRealisation() {

    const FISH_FARM_RECORDS = FishFarm.length;
        
    const[stateIndex, setStateIndex] = useState(0);

    const[fish, setFish] = useState(FishFarm[0]);

    const next = ()=>{
        if(stateIndex < FISH_FARM_RECORDS-1)
        {  
            let temp = stateIndex;
            temp++;
            setStateIndex(temp); 
            setFish(FishFarm[stateIndex]); 
            console.log(stateIndex);
        }else{
            console.log(stateIndex);
            setFish(FishFarm[stateIndex]);         
        }
    }
    const pre = ()=>{
        if(stateIndex > 0){
            let temp = stateIndex;
            temp--;
            setStateIndex(temp); 
            setFish(FishFarm[stateIndex]);
            console.log(stateIndex);
        }else {
            console.log(stateIndex);
            setFish(FishFarm[stateIndex]);
           
        }
    }
   
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>fishType</th>
                        <th>price</th>
                        <th>entryDate</th>
                        <th>durationInDays</th>
                        <th>itemWeightInGrams</th>
                        <th>originCountry</th>
                        <th>season</th>
                        <th>stockVolumeInKg</th>
                        <th>saleLocations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fish.fishType}</td>
                        <td>{fish.price}</td>
                        <td>{fish.entryDate.toISOString().substring(0, 10)}</td>
                        <td>{fish.durationInDays}</td>
                        <td>{fish.itemWeightInGrams}</td>
                        <td>{fish.originCountry}</td>
                        <td>{fish.season}</td>
                        <td>{fish.stockVolumeInKg}</td>
                        <td>{fish.saleLocations.join("/")}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={pre}>Previous</button>
            <button onClick={next}>Next</button>   
        </div>
    )
}
