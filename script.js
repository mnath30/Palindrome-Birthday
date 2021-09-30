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

function returnDateFormat(dategiven){
    var datepassed=dateToString(dategiven);
    var ddmmyyyy=datepassed.day+datepassed.month+datepassed.year;
    var mmddyyyy=datepassed.month+datepassed.day+datepassed.year;
    var yyyymmdd=datepassed.year+datepassed.month+datepassed.day;
    var ddmmyy=datepassed.day+datepassed.month+datepassed.year.slice(-2);
    var mmddyy=datepassed.month+datepassed.day+datepassed.year.slice(-2)
    var yymmdd=datepassed.year.slice(-2)+datepassed.month+datepassed.day;
    var dateArray=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd,yymmdd];
    // console.log(dateArray);
    return(dateArray);
}

function checkPalindrome(arrOfDate){
    var isItpalindrome=false;
    for(var i=0;i<arrOfDate.length;i++){
        // console.log(`string passed is ${i} ${arrOfDate[i]}`)
        if(isPalindrome(arrOfDate[i])){
            isItpalindrome=true;
            break;
        }
    }
    // console.log(isItpalindrome);
    return (isItpalindrome);
}

//leap year
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


//Next date
function nextdate(date){
    monthend=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    //for all last days of the month
    if (date.day==monthend[date.month-1]){
        //last day of year
        if (date.month==12){
            date.month=1;
            date.day=1;
            date.year=date.year+1;
        }
        //february
        else if (date.month==2){
                //leap year
                if(leapYear(date.year)){
                    date.day=date.day+1;
                }
                //not a leap year
                else{
                    date.month=date.month+1;
                    date.day=1;
                }
        }
        //for other last days of month except feb and dec
        else{
            date.month=date.month+1;
            date.day=1;
        }
        
    }

    //when leap year date is choosen 29th feb
    else if ((date.day==29) && (date.month==2)){
        date.day=1;
        date.month=date.month+1;
    }

    //all other normal increase in date
    else{
        date.day=date.day+1;
    }

    // console.log(date);
    return(date);
}


var countPrevious=0;

function findNextPlaindromeDate(date){
    var countNext=0;
    var nextday;
    var dateFormatOfNextDay;
    var nextpal;
    while(true){
        countNext=countNext+1;
        nextday=nextdate(date);
        dateFormatOfNextDay=returnDateFormat(nextday);
        nextpal=checkPalindrome(dateFormatOfNextDay);
        if(nextpal){
            return([countNext,nextday]);
        }
    }
    
    
}

var dateent={};

function inputHandler(){
    if (dateEntered.value){

        var datearray=dateEntered.value.split("-");
        dateent.day=Number(datearray[2]);
        dateent.month=Number(datearray[1]);
        dateent.year=Number(datearray[0]);
        var dateformats=returnDateFormat(dateent);
        var ispalindrm=checkPalindrome(dateformats);
        console.log(ispalindrm)
        if (ispalindrm){
            display.innerText="Yay your birthday is a palindrome 🥳🥳";
        }
        else{
            console.log("No");
            var nextone=findNextPlaindromeDate(dateent);
            var dayordays=(nextone[0]===1)?"day":"days";
            display.innerText=`Oh no your birthday is not a palindrome. The next palindrome date is ${nextone[1].day}-${nextone[1].month}-${nextone[1].year}. You missed it by ${nextone[0]} ${dayordays} 😞😞.`

        }

    }
    else{
        display.innerText="You have to enter your birthday first 😶😶";

    }

}
    




var dateEntered=document.querySelector("#dateEntered");
var button=document.querySelector("#btn");
var result=document.querySelector("#display");
button.addEventListener("click",inputHandler);