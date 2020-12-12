function find() {
    let x = document.getElementById("b1").value;
    let y = document.getElementById("b2").value;
    let z = eval(x * y);
    document.getElementById("b3").value = z;
  }
  
  appliance = ["Bulb","Tube Light","Fan","Room A/C","Fridge"];
  let MAX_appliance = 5;
  power = [12, 31, 23];
  let max_power=3;
  let i,j = 0;
  MAX_appliance_row = 2;
  
  function set() {
    for (j = 0; j < MAX_appliance_row; j++) {
      for (i = 0; i < 3; i++) {
        //document.getElementById("b3").value
        //document.getElementsByClassName("select").options[i].text = 12
        //document.getElementById('select').value=1000;
        document.getElementsByClassName("select")[j].getElementsByTagName("option")[i].text = appliance[i];
      }
    }
  }
  
  function watts(position) {
      var position = position;
      //console.log(position);
    //var  check = document.getElementsByClassName("select")[0].getElementsByTagName("option")..text;
    var e = document.getElementsByClassName("select")[position];
    var check = e.options[e.selectedIndex].text;
    //console.log(check);
    switch(check){
      case "Bulb":
          one(position);
          break;
      default:
          console.log("sorry")
    }
  }
  
  function one(position){
      //console.log(position);
      for (i = 0; i < 3; i++) {
          document.getElementsByClassName("watts")[position].getElementsByTagName("option")[i].text = power[i];
        }
  }
  
  set();
  //one();
  