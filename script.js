function reverseString(str){
    var charOfString=str.split('');
    var reverseChar=charOfString.reverse();
    var reversedString=reverseChar.join('');
    return(reversedString);
}

function isPalindrome(str){
    var reverseStr=reverseString(str);
    if (str===reverseStr){
        return true;
    }
    else{
        return false;
    }
}

function dateToString(date){
    var dateInString={day:"",month:"",year:""};
    if (date.day<10){
        dateInString.day='0'+date.day;
    }
    else{
        dateInString.day=date.day.toString();
    }
    if (date.month<10){
        dateInString.month='0'+date.month;
    }
    else{
        dateInString.month=date.month.toString();
    }
    dateInString.year=date.year.toString();
    return(dateInString);
}

function returnDateFormat(date){
    var ddmmyyyy=date.day+date.month+date.year;
    var mmddyyyy=date.month+date.day+date.year;
    var yyyymmdd=date.year+date.month+date.day;
    var ddmmyy=date.day+date.month+date.year.slice(-2);
    var mmddyy=date.month+date.day+date.year.slice(-2);
    var yymmdd=date.year.slice(-2)+date.month+date.day;
    var dateArray=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd,yymmdd];
    return(dateArray);
    
}

function checkPalindrome(arrOfDate){
    var isPalindromeArr=[];
    for(var i=0;i<arrOfDate.length;i++){
        if(isPalindrome(arrOfDate[i])){
            isPalindromeArr[i]=true;
        }
        else{
            isPalindromeArr[i]=false;
        }
    }
    return (isPalindromeArr);
}
function leapYear(year){
    if (year%400==0){
        return true;
    }
    if (year%100==0){
        return false;
    }
    if (year%4==0){
        return true;
    }
}

function nextdate(date){
    monthend=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    if (date.day==monthend[date.month-1]){
        if (date.month==12){
            date.month=1;
            date.day=1;
            date.year=date.year+1;
        }
        else if (date.month==2){
            if(leapYear(date.year)){
                date.day=date.day+1;
            }
            else{
                date.month=date.month+1;
                date.day=1;
            }
        }
        else{
            date.month=date.month+1;
            date.day=1;
        }
        
    }
    else if ((date.day==29) && (date.month==2)){
        date.day=1;
        date.month=date.month+1;
    }
    else{
        date.day=date.day+1;
    }

    console.log(date);
    return(date);
    
    //leap year
    //month end
    //31st december
}
var countNext=0;
var countPrevious=0;

function findNextPlaindromeDate(date){
    var nextdate=nextdate(date);
    var dateArrayFormat=returnDateFormat(nextdate);
    
    

}

var dateent={
}

function inputHandler(e){
    var datearray=e.target.value.split("-");
    console.log(datearray);
    dateent.day=Number(datearray[2]);
    dateent.month=Number(datearray[1]);
    dateent.year=Number(datearray[0]);
    console.log(dateent);
    nextdate(dateent);

}
var dateEntered=document.querySelector("#dateEntered");


dateEntered.addEventListener("input",inputHandler);



// //var dateInStringFormat=dateToString(date);
// var dateFormats=returnDateFormat(dateInStringFormat);
// console.log(checkPalindrome(dateFormats));
// console.log(date);
