function find() {
  let w1 = document.getElementById("w1").value;
  let n1 = document.getElementById("n1").value;
  let h1 = document.getElementById("h1").value;
  let c1 = eval(w1 * n1 * h1);
  document.getElementById("c1").value = c1;

  let w2 = document.getElementById("w2").value;
  let n2 = document.getElementById("n2").value;
  let h2 = document.getElementById("h2").value;
  let c2 = eval(w2 * n2 * h2);
  document.getElementById("c2").value = c2;

  let total = 0;
  let cons = 0;
  total = c1 + c2;
  cons = total/1000;
console.log(cons)
}


