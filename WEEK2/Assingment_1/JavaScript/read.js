/**
 * oncelikle npm install xlsx komutu çalıştırılarak gereken json paket yüklendi.
 */

//Requiring the module
const reader = require('xlsx');

//reading our test file
const file  = reader.readFile('/home/benutzer00/Desktop/HICODERS/MODUL3/WEEK2/Assingment_1/OrnekDosya.xlsx');

let data  = [];

const sheets = file.SheetNames;

for (let index = 0; index<sheets.length; index++)
{
    const temp  = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[index]])
        temp.forEach((res)=>{
            data.push(res);
        });
}

//printing data
console.log(data);
