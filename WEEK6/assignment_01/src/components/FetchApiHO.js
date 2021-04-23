//import { getDefaultNormalizer } from '@testing-library/dom';

/**
 * Fetched data is shown has to parts Name part and Information part. To show this data into our DOM 
 * ul li elements are used with 2 inner div elementes. 
 */
import './FetchApiHO.css';
import React, {useState, useEffect} from 'react'

export default function FetchApiHO(props) {

    const API_URL = props.API_URL;
    const [data, setData] = useState({});

    useEffect(async () => {
        if (!API_URL) return;
        webPageInformation(API_URL);       
    },[]);
  
    async function webPageInformation(url){
      await fetch(url,{"method":"GET"})
                    .then(response => response.json())
                    .then(data =>  {setData(data)})//{console.log(data)})
                    .catch(err => {
                        console.error(err);
                    });
    }
    console.log(data);

    const dataArray = Object.keys(data).map((key) => [String(key), data[key]]);
    //const problemInfo = dataArray[14];
    //14 element of this array is not standart so it is removed from the dataArray
    dataArray.splice(14,1);

    return (
        <div>
        <h1>Budur</h1>
        <ul className="infoList">
            {dataArray.map((item) => (
            <li className="boseData">
              <div>{item[0]}:</div>
              <div>{item[1]}</div>
            </li>
            ))}
        </ul>
        </div>

    );
}
