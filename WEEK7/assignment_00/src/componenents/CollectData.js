// (Ad, Soyad, Cinsiyet, Dogum Tarihi, E-mail, Şifre, Hakkımda) kişi bilgilerinin bulunması gerekiyor. 
// Sizden istenenler :
// Sayfayi ikiye bölüp, sol tarafta kisi bilgi formu sag tarafta ise girilen kisilerin listesi olacak.
// Kisi listesi her zaman BACKEND-URL'den alinacak.
// Backend ReST API info:
// BILGI EKLEME ICIN
// - POST Methodu kullanarak asagidak adrese kisi nesnesi yollanacak
// http://174.138.103.233/api/employees
// Bu cagrimda body icinde asagidaki JSON/Object gönderielcek
//   {

//   }
// Kriterler:
// =======================
// - Jest Testlerin Yazılması,
import React, {useState, useEffect} from 'react'


export default function CollectData() {

    const API_URL =   new URL (`http://174.138.103.233/api/employees`);
    const [data, setData] = useState({});

    useEffect( () => {
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
    const personList = [];
    Object.entries(data).forEach(element => {
        if (Object.keys(element[1]).length>0){
            let tempPerson = {
                "firstName": "",
                "lastName": "",
                "gender": "",
                "birthday": "",
                "email": "",
                "password": "",
                "about": ""
            }
            Object.entries(element[1]).map((item)=>
            {
                switch (item[0]) {
                    case 'firstName':
                        tempPerson.firstName = item[1];
                        break;
                    case 'lastName':
                        tempPerson.lastName = item[1];
                        break;
                    case 'gender':
                        tempPerson.gender = item[1];
                        break;
                    case 'birthday':
                        tempPerson.birthday = item[1];
                        break;
                    case 'email':
                        tempPerson.email = item[1];
                        break;
                    case 'password':
                        tempPerson.password = item[1];
                        break;
                    case 'about':
                        tempPerson.about = item[1];
                        break;
                    default:
                        break;
                }
            });
            personList.push(tempPerson);
        }
    });
    console.log(personList);
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>PassWord</th>
                    <th>About</th>
                </tr>
            </thead>
            <tbody>                   
                { personList.map((person)=>
                    <tr>  
                        <td>{person['firstName']}</td>
                        <td>{person.lastName}</td>
                        <td>{person.gender}</td>
                        <td>{person.birthday}</td>
                        <td>{person.email}</td>
                        <td>{person.password}</td>
                        <td>{person.about}</td>
                    </tr>)    
                } 
            </tbody>
        </table>
    )
}
