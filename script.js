function convertTemp(){

  let temp = document.getElementById("temp").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  if(unit === "c"){
    let f = (temp * 9/5) + 32;
    result.innerHTML = f + " °F";
  }

  else{
    let c = (temp - 32) * 5/9;
    result.innerHTML = c + " °C";
  }
}
