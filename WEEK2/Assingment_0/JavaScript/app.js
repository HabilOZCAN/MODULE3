/**
 * Dizin içerisinde bulunan bir dosyanın içeriğinin okulanarak erana 
 * yazdırilması sağlanmıştır. 
 * Küçük program, consol'da node app.js komutunun app.js'in içinde bulunduğu
 * dizinde çalıştırılmalıdır.
 * habilozcan@gmail.com 
 */

const fs = require('fs');

try{
    //const data = fs.readFileSync('/home/benutzer00/Desktop/HICODERS/MODUL3/WEEK2/Assingment_0/OrnekDosya.txt','utf-8');
    const data = fs.readFileSync('../OrnekDosya.txt','utf-8');
    // Okunacak dosyanın relativ veya gerçek yolunun doğru olmasına dikkat edilmelidir.
    console.log(data);
}catch(err){
    console.log('hata verdi');
    console.error(err);
}