/**
 * oncelikle npm install xlsx komutu çalıştırılarak gereken json paket yüklenmeli
 * sonrasında write dosyası node write.js olacak şekilde çalıştırılmalı
 * Burada iki ayrı sayfaya bilgi yazdırılmaktadır. Sheet2 ve Sheet3 olarak
 * Sheet2'e write.js içerisinde yazılan bilgiler
 * Sheet3'ye ise data.js dosyası içerisindeki data yazdırılmaktadır.
 * Bilgiler yazıldıktan sonra read.js dosyası ile bilgileri okuyabilirsiniz.
 * 
 * Sheet1 dosyasında yazdırılamıyor. Nedeninin xlsx dosyası oluşturuluduğunda 
 * otomatik olarak kullandığım Linux işletim sisteminde bu sayfayı 'Sheet1' reserve
 * etmesidir. Başka bir sorun da olabilir ancak şu aşamada bu şekilde oluğunu 
 * değerlendiriyorum.
 */

//Require module
const reader = require('xlsx');
const data = require('./data');

//Reading the OrnekDosya.xlsx
const file = reader.readFile('../OrnekDosya.xlsx');

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
//Writing to OrnekDosya.xlsx Sheet2
reader.writeFile(file, '../OrnekDosya.xlsx');


ws = reader.utils.json_to_sheet(data);
reader.utils.book_append_sheet(file,ws,'Sheet3');
//Writing to OrnekDosya.xlsx Sheet3
reader.writeFile(file, '../OrnekDosya.xlsx');

