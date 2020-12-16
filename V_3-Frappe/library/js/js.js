let count = 0;
let input_count = 7;
let consump=0;
let table = document.querySelector("table");
let addRowBtn = document.querySelector(".add-row");
let defaultRow = document.querySelector("default-row");

if (count == 0) {
  document.getElementsByTagName("input")[0].setAttribute("id", "a" + count);
  document.getElementsByTagName("input")[1].setAttribute("id", "k" + count);
  document.getElementsByTagName("input")[2].setAttribute("id", "m" + count);

  document.getElementsByTagName("input")[3].setAttribute("id", "w" + count);
  document.getElementsByTagName("input")[4].setAttribute("id", "n" + count);
  document.getElementsByTagName("input")[5].setAttribute("id", "h" + count);
  document.getElementsByTagName("input")[6].setAttribute("id", "c" + count);
  //document.getElementsByTagName("b")[count].innerHTML = count;
}




function load(){
let app_name=["values"];
let com_name=["test"];
let mod_name=["mod"];
let wat_name=[0];
 for (i = 0; i <= count; i++) {
   app_name[i] = (document.getElementById("a" + i).value);
   com_name[i] = (document.getElementById("k" + i).value);
   mod_name[i] = (document.getElementById("m" + i).value);
   wat_name[i] = parseInt(document.getElementById("w" + i).value);
 }

frappe.call({method: "tharif_calculator.tharif_calculator.doctype.energy.energy.ping1",
args:{'doctype':'energy','app_name':[app_name],'com_name':[com_name],'mod_name':[mod_name],'wat_name':[wat_name]},
callback: (r) => console.log(r)})

}

function refreshPage(){

  window.location.reload();
}



function addField() {
  let copyDefaultRow = table.rows[1].cloneNode(true);
  table.appendChild(copyDefaultRow);

  count = count + 1;

  let a = "a" + count;
  let k = "k" + count;
  let m = "m" + count;

  let w = "w" + count;
  let n = "n" + count;
  let h = "h" + count;
  let c = "c" + count;

  if (count != 0) {
   document
      .getElementsByTagName("input")
      [count * input_count + 0].setAttribute("id", a);

    document
      .getElementsByTagName("input")
      [count * input_count + 1].setAttribute("id", k);

    document
      .getElementsByTagName("input")
      [count * input_count + 2].setAttribute("id", m);
    document

      .getElementsByTagName("input")
      [count * input_count + 3].setAttribute("id", w);

    document
      .getElementsByTagName("input")
      [count * input_count + 4].setAttribute("id", n);

    document
      .getElementsByTagName("input")
      [count * input_count + 5].setAttribute("id", h);

    document
      .getElementsByTagName("input")
      [count * input_count + 6].setAttribute("id", c);


      document.getElementById(w).value =0;
      document.getElementById(n).value =0;
      document.getElementById(h).value =0;
      document.getElementById(c).value =0;

      document.getElementsByTagName("b")[count+1].innerHTML = count+1;

      document
      .getElementsByTagName("input")
      [count * input_count + 1].value="";

      document
      .getElementsByTagName("input")
      [count * input_count + 2].value="";

      document
      .getElementsByTagName("input")
      [count * input_count + 0].value="";
  }
}


function find() {
  let i = 0;
  let j = 0;
  let sum = 0;
  for (i = 0; i <= count; i++) {
    w = parseInt(document.getElementById("w" + i).value);
    n = parseInt(document.getElementById("n" + i).value);
    h = parseInt(document.getElementById("h" + i).value);
    cons = w * n * h;
    cons=cons*30;
    document.getElementById("c" + i).value = cons;
    sum = 0;
  }
  consumption();
}

function consumption(){
  consump=0;
  for (i = 0; i <= count; i++) {
    consump = consump + parseInt(document.getElementById("c" + i).value);
  }
  wh = consump/1000;
  document.getElementById("cons").value = wh;
}



