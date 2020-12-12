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

  let w3 = document.getElementById("w3").value;
  let n3 = document.getElementById("n3").value;
  let h3 = document.getElementById("h3").value;
  let c3 = eval(w3 * n3 * h3);
  document.getElementById("c3").value = c3;

  let w4 = document.getElementById("w4").value;
  let n4 = document.getElementById("n4").value;
  let h4 = document.getElementById("h4").value;
  let c4 = eval(w4 * n4 * h4);
  document.getElementById("c4").value = c4;

  let w5 = document.getElementById("w5").value;
  let n5 = document.getElementById("n5").value;
  let h5 = document.getElementById("h5").value;
  let c5 = eval(w5 * n5 * h5);
  document.getElementById("c5").value = c5;

  let w6 = document.getElementById("w6").value;
  let n6 = document.getElementById("n6").value;
  let h6 = document.getElementById("h6").value;
  let c6 = eval(w6 * n6 * h6);
  document.getElementById("c6").value = c6;

  let w7 = document.getElementById("w7").value;
  let n7 = document.getElementById("n7").value;
  let h7 = document.getElementById("h7").value;
  let c7 = eval(w7 * n7 * h7);
  document.getElementById("c7").value = c7;

  let w8 = document.getElementById("w8").value;
  let n8 = document.getElementById("n8").value;
  let h8 = document.getElementById("h8").value;
  let c8 = eval(w8 * n8 * h8);
  document.getElementById("c8").value = c8;

  let w9 = document.getElementById("w9").value;
  let n9 = document.getElementById("n9").value;
  let h9 = document.getElementById("h9").value;
  let c9 = eval(w9 * n9 * h9);
  document.getElementById("c9").value = c9;

  let w10 = document.getElementById("w10").value;
  let n10 = document.getElementById("n10").value;
  let h10 = document.getElementById("h10").value;
  let c10 = eval(w10 * n10 * h10);
  document.getElementById("c10").value = c10;

  let total;
  let cons = 0;
  total = c1 + c2 +c3 + c4 + c5 +c6 + c7 + c8 + c9 +c10;
  cons = total/1000;
  console.log(cons);
  document.getElementById("cons").value = cons;
}

function refreshPage(){
  window.location.reload();
} 


