let count = 0;
let input_count = 7;
let consump = 0;
let table = document.querySelector("table");

function load(){
	var dict = {}
	for (i = 0; i <= count; i++) {
		dict[i] = [document.getElementById("a" + i).value, document.getElementById("k" + i).value, document.getElementById("m" + i).value, (document.getElementById("w" + i).value)]
	}

	frappe.call({
		method: "tharif_calculator.tharif_calculator.doctype.energy.energy.ping1",
		args: {
			'doctype': 'energy',
			'data': dict
		},
		callback: (r) => console.log(r);
	});
}

function refreshPage(){
	window.location.reload();
}

function addField() {
	count = count + 1;
	table.insertRow(count);
	if (count != 0) {
		const array = ['a', 'k', 'm', 'w', 'n', 'h', 'c'];
		for (i = 0; i < 7; i++){
			document.getElementsByTagName("input")[(count*input_count) + i].setAttribute("id", array[0]+count);
			array.splice(0, 1);
		}
		document.getElementsByTagName("b")[count+1].innerHTML = count + 1;
	}
}


function find() {
	for (i = 0; i <= count; i++) {
		w = parseInt(document.getElementById("w" + i).value);
		n = parseInt(document.getElementById("n" + i).value);
		h = parseInt(document.getElementById("h" + i).value);
		document.getElementById("c" + i).value = w*n*h*30;
    	consump += w*n*h*30;
	}
  	document.getElementById("cons").value = consump/1000;
}
