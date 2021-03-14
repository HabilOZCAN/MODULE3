/**
 * OrnekDosya.xlsx dosyanın içeriği oncelikli olarak boş olacaktır. Bu bakımdan önce  node write.js komutu ile
 * ilgili dosyanın içini doldurunuz.
 * BAŞLANGIC AŞAMASINDA ORNEKDOSYA.XLSX BOSTUR. BU NEDENLE LUTFEN ONCE JavaScript Dosya dizini içinde
 * node write.js komutunu çalıştırın.
 */

//Requiring the module
const reader = require('xlsx');

//reading our test file
const file  = reader.readFile('../OrnekDosya.xlsx');

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
