window.addEventListener('load', function(e){
	console.log('script.js is loaded...');
	
	init();
		console.log("test in window");
	
});

function init() {
	document.patientForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var patientId = document.patientForm.patientId.value;
		if (!isNaN(patientId) && patientId > 0) {
			getPatient(patientId);
		}
	})



/*function init() {
	console.log("beginning of init")
	document.patientForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let patientId = document.patientForm.patientId.value;
		if (!isNaN(patientId) && patientId > 0) {
			console.log("test in init");
			getPatient(patientId);
		}
	})
*/
	document.addPatientForm.addPatient.addEventListener('click', function(event){
		event.preventDefault();
		let pt = document.addPatientForm;
		let newPatient = {
			firstName: pt.firstName.value,
			lastName: pt.lastName.value,
			dateOfBirth: pt.dateOfBirth.value,
			imageIdUrl: pt.imageIdUrl.value
		};
		console.log(newPatient);
		postNewPatient(newPatient);
	});
};
/*function getPatient(patientId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/films/${patientId}`);
	xhr.onreadystatechange = function() {
		if (xhr.onReadyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				var patient = JSON.parse(xhr.responseText);
				displayPatient(patient);
			}
		} else {

		}
	}

	xhr.send();
}
*/

function getPatient(patientId) {
	console.log("line 47 getPt" + patientId);
	
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', 'api/patients/' + patientId);
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);

		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let patient = JSON.parse(xhr.responseText);
				console.log(patient);
				alert("stop");
				displayPatient(patient);
			}
			else {				
				console.error("patient not found");
				let div = document.getElementById('patientData');
				div.textContent = 'patient not found';
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState = ' + xhr.readyState);
}

function displayPatient(patient) {
	console.log("inside diplayPatient");
	let patientDataDiv = document.getElementById('patientData');
//	patientDataDiv.textContent = "";
	let table = document.createElement('table');
	patientDataDiv.appendChild(table);
	let head = document.createElement('thead');
	table.appendChild(head);
	let t = document.createElement('th');
	t.textContext = "First Name";
	head.appendChild(t);
	t = document.createElement('th');
	t.textContent = "Last Name";
	head.appendChild(t);
	t = document.createElement('th');
	t.textContent = "Date of Birth";
	head.appendChild(t);
	t = document.createElement('th');
	t.textContent = "Image Url";
	head.appendChild(t);
	
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	for(let p in patient){
	
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	
	td.textContent = p.firstName;
	tr.appendChild(td);
	
	td = document.createElement('td');
	td.textContent = p.lastName;
	tr.appendChild(td);
	
	td = document.createElement('td');
	td.textContent = p.dateOfBirth;
	tr.appendChild(td);
	
	td = document.createElement('td');
	td.textContent = p.imageIdUrl;
	tr.appendChild(td);
	
	tbody.appendChild(tr);
	}
	
	/*
	//create unordered list
	let ul = document.createElement('ul');
	//append it to the div
	patientDataDiv.appendChild(ul);

	let li = document.createElement('li');

	li.textContent = patient.firstName;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = patient.lastName;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = patient.dateOfBirth;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = patient.imageIdUrl;
	ul.appendChild(li);
	
	*/
	
	
	/*
	let table = document.createElement('table');
	table.style.textAlign = "center";
	patientDataDiv.appendChild(table);
	
	let head = document.createElement('thead');
	table.appendChild(head);
	
	let tr = document.createElement('tr');
	
	let t = document.createElement('th');
	t.textContext = "First Name";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Last Name";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Date of Birth";
	head.appendChild(t);
	
	head.appendChild(tr);
	
	let tr = document.createElement('tr');
	
	let td = document.createElement('td');
	td.textContent = patient.firstName;
	tr.appendChild(td);
	
	td = document.createElement('td');
	td.textContent = patient.lastName;
	tr.appendChild(td);

	td = document.createElement('td');
	td.textContent = patient.dateOfBirth;
	tr.appendChild(td);
	*/





	// getPastMedicalHistory(patient.id);
	// getFamilyMedicalHistory(patient.id);
	// getPatientVitalSigns(patient.id);

}
function postNewPatient(newPatient){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "api/patients");
	xhr.onreadystatechange = function(){
		if(xhr.onReadyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let patient = JSON.parse(xhr.responseText);
				displayPatient(patient);
			}
		} else {
			//do something
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newPatient));
}
