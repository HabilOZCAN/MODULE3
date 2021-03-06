/**
 * Bu çalışmada basit anlamda dört işlemin yapılması sağlanmaktadır.
 * Matematik işleminin hangisinin olacağı + - x / işaretlerinden birinin 
 * kullanılması ile sağlanmakta ve sonrasında iki adet numara girilmesi 
 * istenmektedir. 
 * programın  kullanımı;
 * node app.js / 5 3.4 
 * şeklinde yapılmaktadır. Yani parametre ve işlem bilgisi doğrudan terminal 
 * üzerinden alınmaktadır.
 */
const generalCalculation = require('./functions');//generalCalculation tüm işlemlerin implemente edildiği genel hesap fonksiyonudur.
const argv = process.argv.slice(2);
console.log(generalCalculation(argv));
