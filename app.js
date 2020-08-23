function tables(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value; 
   // let input = [first, second]
    let table = '';
    let result = '';
  if(isNaN(first || second)){
      document.getElementById("check").innerHTML = "Wrong input";
      document.getElementById("table").innerHTML = '';

  }else if(first < 0 || second < 0){
    document.getElementById("check").innerHTML = "Positive intgers only!";
    document.getElementById("table").innerHTML = '';

  }else{ 
    for(var i = 1; i <= second; i++){
    result = i * first;
    table += `${first} * ${i}  = ${result} <br>`
    }
    document.getElementById("table").innerHTML = table;
    document.getElementById("check").innerHTML = "";
}
}

