/**
 * In this Assingment basicly Gregeroin Year Converted into Hijri Year and vice versa.
 * Year Gregorian = Year Hijri X 32/33 + 622
 * Year Hijri = ( Year Gregorian - 622 ) X 33/32
 */
module.exports = yearConverter;


function yearConverter(pYear, pCalentederInfo){
    if (pCalentederInfo == 'H' || pCalentederInfo == 'h'){
        return hijriToGregorianYear(pYear);
    }else if (pCalentederInfo == 'G' || pCalentederInfo == 'g'){
        return gregorianTohijriYear(pYear);
    }else{
        console.log("please control your parameters.")
        return -1;
    }
}

 function hijriToGregorianYear(pHicriYear){

    let convertedToGregorianYear = new Date (pHicriYear)*(32/33) + 622;   
    convertedToGregorianYear = Math.floor(convertedToGregorianYear);
    return convertedToGregorianYear;
 }

 function gregorianTohijriYear(pGregorianYear){
    
    let convertedToHijriYear = (new Date(pGregorianYear)-622)*(33/32);
    convertedToHijriYear = Math.floor(convertedToHijriYear);
    return convertedToHijriYear;
}

