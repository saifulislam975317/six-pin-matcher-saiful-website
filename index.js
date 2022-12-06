// pin matcher button working and show on input

function randomPin(){
const pin = Math.round(Math.random()*10000);
const pinString = pin+'';
if(pinString.length==4){
    return pin;
}
else{
    return randomPin();
}
}

document.getElementById("pinMatcher").addEventListener("click", function(){
    const pin = randomPin();
    document.getElementById("displayPin").value= pin;
})

// key pad working

document.getElementById("key-pad").addEventListener("click", function(event){
    const keyNumbers = event.target.innerText;
    const getInputNumber = document.getElementById("inputDisplayKey");
    if(isNaN(keyNumbers)){
        if(keyNumbers=="ac"){
            getInputNumber.value='';
        }
    }
    else{
    const previousInputValue = getInputNumber.value;
    const currentInputValue = previousInputValue+keyNumbers;
    getInputNumber.value=currentInputValue;
    }
    
})

function verifyPin(){
    const displayPin = document.getElementById("displayPin").value;
    const displayKey = document.getElementById("inputDisplayKey").value;
    
    const pinMatched = document.getElementById("pinMatched");
    const pinDidNotMatched = document.getElementById("pinDidNotMatched");

    if(displayPin==displayKey){
     pinMatched.style.display="block";
     pinDidNotMatched.style.display="none"
    }
    else{
        pinMatched.style.display="none";
     pinDidNotMatched.style.display="block"
    }
}