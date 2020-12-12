
function refreshPage() {
  window.location.reload();
}

let count = 0;
let input_count = 7;
let consump=0;
let table = document.querySelector("table");
let addRowBtn = document.querySelector(".add-row");
let defaultRow = document.querySelector("default-row");

if (count == 0) {
  document.getElementsByTagName("input")[3].setAttribute("id", "w" + count);
  document.getElementsByTagName("input")[4].setAttribute("id", "n" + count);
  document.getElementsByTagName("input")[5].setAttribute("id", "h" + count);
  document.getElementsByTagName("input")[6].setAttribute("id", "c" + count);
}

function addField() {
  let copyDefaultRow = table.rows[1].cloneNode(true);
  table.appendChild(copyDefaultRow);

  count = count + 1;

  let w = "w" + count;
  let n = "n" + count;
  let h = "h" + count;
  let c = "c" + count;

  if (count != 0) {
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

      document.getElementsByTagName("b")[count].innerHTML = count+1;
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
  consump = consump/1000;
  document.getElementById("cons").value = consump;
}



