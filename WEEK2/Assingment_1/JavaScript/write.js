//Require module
const reader = require('xlsx');
const data = require('./data');

//Reading the OrnekDosya.xlsx
const file = reader.readFile('/home/benutzer00/Desktop/HICODERS/MODUL3/WEEK2/Assingment_1/OrnekDosya.xlsx');

let student_data = [{
    Student: 'Habil',
    Age:40,
    Branch:'IT',
    Marks:100
},
{
    Student: 'Mehmet',
    Age:34,
    Branch:'Math',
    Marks:100
},
{
    Student: 'Enes',
    Age:32,
    Branch:'Physhology',
    Marks:200
}];

let ws = reader.utils.json_to_sheet(student_data);
reader.utils.book_append_sheet(file, ws,'Sheet2');
//Writing to OrnekDosya.xlsx
reader.writeFile(file, '/home/benutzer00/Desktop/HICODERS/MODUL3/WEEK2/Assingment_1/OrnekDosya.xlsx');


ws = reader.utils.json_to_sheet(data);
reader.utils.book_append_sheet(file,ws,'Sheet3');
reader.writeFile(file, '/home/benutzer00/Desktop/HICODERS/MODUL3/WEEK2/Assingment_1/OrnekDosya.xlsx');

