let count = 0;
let input_count = 7;
let consump = 0;
let i = 0;
let table = document.querySelector("table");
const array = ["a", "k", "m", "w", "n", "h", "c"];

function load() {
  var dict = {};
  for (i = 0; i <= count; i++) {
    dict[i] = [
      document.getElementById("a" + i).value,
      document.getElementById("k" + i).value,
      document.getElementById("m" + i).value,
      document.getElementById("w" + i).value,
    ];
  }

  frappe.call({
    method: "energy.www.energy.ping1",
    args: {
      doctype: "energy",
      data: dict,
    },
    callback: (r) => console.log(r),
  });
}

function refreshPage() {
  count = 0;
  reset();
  window.location.reload();
}

function reset() {
  for (i = 0; i < 7; i++) {
    if (i < 3) {
      document.getElementById(array[i] + count).value = "";
    } else {
      document.getElementById(array[i] + count).value = 0;
    }
  }
}

function addField() {
  count = count + 1;
  let copyDefaultRow = table.rows[1].cloneNode(true);
  table.appendChild(copyDefaultRow);

  if (count != 0) {
    for (i = 0; i < 7; i++) {
      document
        .getElementsByTagName("input")
        [count * input_count + i].setAttribute("id", array[i] + count);
    }
    document.getElementsByClassName("count_no")[count].innerHTML = count + 1;

    reset();
  }
}

function find() {
  consump = 0;
  for (i = 0; i <= count; i++) {
    w = parseInt(document.getElementById("w" + i).value);
    n = parseInt(document.getElementById("n" + i).value);
    h = parseInt(document.getElementById("h" + i).value);
    document.getElementById("c" + i).value = w * n * h * 30;
    consump += w * n * h * 30;
  }
  document.getElementById("cons").value = consump / 1000;
}

