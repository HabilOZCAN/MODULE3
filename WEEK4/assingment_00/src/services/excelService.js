import * as XLSX from 'xlsx';
/**
 * npm install xlsx kodu terminalde yazilarak ilgili module yuklenmelidir.
 * Hazir olarak verilmis olan kod blogunun icerisinde table olusturulmasi
 * promise.then() fonksiyonu icerisinden saglanmaktadir. 
 * Bunun icin kullanicinin  browser`da input`tan bir exel dosyasi secimi
 * gerekmektedir. 
 */
const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, {
                type: 'buffer'
            });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            res(data);
        };
        fileReader.onerror = (err) => {
            rej(err);
        }
    })
    promise.then((data) => {
        console.log(data);
        const tableNames = Object.keys(data[0]);
            tableNames.map(key => {
            document.querySelector('#tableHead').innerHTML+=`<th>${key}</th>`
            return 0;
        })
        
        data.map(person=>{          
            let temp = (Object.values(person));
            let tempContent = '';
            temp.map(elements => {
                tempContent+= 
                `<td>${elements}</td>`;
                return 0;    
            });
            document.querySelector("#tableBody").innerHTML+= `<tr>${tempContent}</tr>`;
            console.log(person);
            return 0;  
        });
    });
};

export default readExcel;