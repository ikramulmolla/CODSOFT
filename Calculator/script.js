const res = document.getElementById("result");
res.value=0;//initialize the result value


function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = 0;
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  //check is 0 entered one time or not
  if(res.value==0 && enteredValue===0){
    res.value=0;
    console.log("if");
  }else if(res.value=="0" && Number.isInteger(enteredValue)==true){
    res.value=enteredValue;
    console.log("else if");
  }else{
    if((res.value[res.value.length-1]==="+" || res.value[res.value.length-1]==="-" || res.value[res.value.length-1]==="*" || res.value[res.value.length-1]==="/" || res.value[res.value.length-1]===".") && Number.isInteger(enteredValue)==false){
      const val=res.value;
      const array = val.split("");
      array[array.length-1]=enteredValue;
      res.value=array.join("");
      console.log("if under else"+array[array.length-1]);
    }else{
      res.value+=enteredValue;
      console.log("else");
    }
    
  }
}

//back space button
function backSpace(back){
  if (back === "B") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
    if(res.value.length === 0){
      res.value=0;
    }
  }
}

