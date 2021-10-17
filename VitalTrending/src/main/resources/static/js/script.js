window.addEventListener('load', function(e) {
	console.log('script.js is loaded...');
	potato();
	
});

function potato() {
	
		
	document.patientForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let patientId = document.patientForm.patientId.value;
		if (!isNaN(patientId) && patientId > 0) {
			getPatient(patientId);
		} else {
			alert("Invalid Number or Entry.  Please Try Again.")
			console.log("getPatient addEventListener")
		}
	});

	document.allPatients.viewAllPatients.addEventListener('click', function(event){
		event.preventDefault();
		getAllPatients();
	});

	document.addPatientForm.addPatient.addEventListener('click', function(event) {
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
	
	document.deletePatientForm.deletePatient.addEventListener('click',function(event){
		event.preventDefault();
		let patientId = document.deletePatientForm.patientId.value;
		if (!isNaN(patientId) && patientId > 0) {
			deletePatient(patientId);
		} else {
			console.log("deletePatient addEventListener");
			alert("Invalid Number or Entry.  Please Try Again.")
		}
		
	});
	document.updatePatientForm.updatePatient.addEventListener('click', function(event) {
		event.preventDefault();
		
		//dynamically create a table to edit patient data
		let patient = document.updatePatientForm;
		let patientId = patient.id.value;
		let updatedPatient = {
			firstName: patient.firstName.value,
			lastName: patient.lastName.value,
			dateOfBirth: patient.dateOfBirth.value,
			imageIdUrl: patient.imageIdUrl.value
		};
		console.log(updatedPatient);
		updatePatient(updatedPatient, patientId);
		
	});
	
};

function getPatient(patientId) {
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
				displayPatient(patient);
			}
			else if (xhr.status === 404){
				console.error("patient not found");
				alert("Patient not Found!")
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState = ' + xhr.readyState);
}

function getAllPatients() {
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', 'api/patients/');
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let patients = JSON.parse(xhr.responseText);
				console.log(patients);
				displayAllPatients(patients);
			}
			else {
				console.error("patient not found");
				alert("Patient not Found!")
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState = ' + xhr.readyState);
}

function displayAllPatients(patients) {
		
	let patientDataDiv = document.getElementById('patientData');

	let table = document.createElement('table');
	table.class = 'table';
	
	patientDataDiv.appendChild(table);
	
	let head = document.createElement('thead');
	table.appendChild(head);
	
	let t = document.createElement('th');
	
	t.textContent = "Patient ID";
	head.appendChild(t);
		
	t = document.createElement('th');
	t.textContent = "First Name";
	head.appendChild(t);
	
	
	t = document.createElement('th');
	t.textContent = "Last Name";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Date of Birth";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Image ID";
	head.appendChild(t);
	
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	var i = 0;
	for(let patient of patients){
		i++;
		let img = document.createElement('img');
		img.style.height = '100px';
		img.style.width = '75px';
		img.src = patient.imageIdUrl;
			
		let tr = document.createElement('tr');
		let td = document.createElement('td');

		
		td.textContent = patient.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.firstName;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.lastName;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.dateOfBirth;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.appendChild(img);
		tr.appendChild(td);
		
		let btn = document.createElement('button');
		btn.type="button";
		btn.textContent = "Edit";
//		btn.onclick = //create editable fields
//		if(btn.onclick){
//		create editable fields 
//		}
				
		td = document.createElement('td');
		td.appendChild(btn);
		tr.appendChild(td);
						
		btn = document.createElement('button');
		btn.type="button";
		btn.textContent = "Delete";
		
		
		td = document.createElement('td');
		td.appendChild(btn);
		tr.appendChild(td);
		
		btn = document.createElement('button');
		btn.type="button";
		btn.textContent = "Save";
		//btn.onclick = updatePatient(patient, patient.id);
		
		td = document.createElement('td');
		td.appendChild(btn);
		tr.appendChild(td);
		
		tbody.appendChild(tr);
			
	}

	// getPastMedicalHistory(patient.id);
	// getFamilyMedicalHistory(patient.id);
	// getPatientVitalSigns(patient.id);

}

function displayPatient(patient) {
	console.log("inside diplayPatient");
	let patientDataDiv = document.getElementById('patientData');
	//	patientDataDiv.textContent = "";
	let img = document.createElement('img');
	img.style.marginLeft = 'auto';
	img.style.marginRight = 'auto';
	img.style.height = '250px';
	img.style.width = '180px';
	img.src = patient.imageIdUrl;
	patientDataDiv.appendChild(img);
	let br = document.createElement('br');
	patientDataDiv.appendChild(br);
	br = document.createElement('br');
	patientDataDiv.appendChild(br);
	
	let table = document.createElement('table');
	table.id = "dataTable";
	patientDataDiv.appendChild(table);
	
	let head = document.createElement('thead');
	table.appendChild(head);
	
	let t = document.createElement('th');
	
	t.textContent = "Patient ID";
	head.appendChild(t);
		
	t = document.createElement('th');
	t.textContent = "First Name";
	head.appendChild(t);
	
	
	t = document.createElement('th');
	t.textContent = "Last Name";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Date of Birth";
	head.appendChild(t);
			
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);

		let tr = document.createElement('tr');
		let td = document.createElement('td');
			
		td.textContent = patient.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.firstName;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.lastName;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = patient.dateOfBirth;
		tr.appendChild(td);

		tbody.appendChild(tr);
		
	let hr = document.createElement('hr');
	patientDataDiv.appendChild(hr);

	// getPastMedicalHistory(patient.id);
	// getFamilyMedicalHistory(patient.id);
	// getPatientVitalSigns(patient.id);

}

function postNewPatient(newPatient) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "api/patients");
	xhr.onreadystatechange = function() {
		if (xhr.onReadyState === 4) {
			if (xhr.status === 200 || xhr.status === 204) {
				let patient = JSON.parse(xhr.responseText);
				displayPatient(patient);
			}
		} else if (xhr.status >= 400 && xhr.status < 500 ){
			alert("Something Went Wrong!  Please Try Again.");
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newPatient));
}

function updatePatient(updatedPatient, patientId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', "api/patients/" + patientId);
	xhr.onreadystatechange = function() {
		if (xhr.onReadyState === 4) {
			if (xhr.status === 200 || xhr.status === 204) {
				let patient = JSON.parse(xhr.responseText);
				displayPatient(patient);
			}
		} else if(xhr.status >= 400){
			alert("Something Went Wrong!  Please Try Again.");
			
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(updatedPatient));
}

function deletePatient(patientId) {
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('DELETE', 'api/patients/' + patientId);
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				
				alert("Patient Removal Successful");
			}
			else if(xhr.status === 404){
				console.error("patient not found");
				alert("The patient was not found!  Please Try Again.");
			}
		}
	}
	xhr.send();
}

function editRow(no)
{
 document.getElementById("editButton"+no).style.display="none";
 document.getElementById("saveButton"+no).style.display="block";
	
 let firstName = document.getElementById("firstNameRow"+no);
 let lastName = document.getElementById("lastNameRow"+no);
 let dateOfBirth = document.getElementById("dateOfBirthRow"+no);
 

 let firstNameData = firstName.innerHTML;
 let lastNameData = lastName.innerHTML;
 let dateOfBirthData = dateOfBirth.innerHTML;

	
 firstName.innerHTML="<input type='text' id='firstNameText"+no+"' value='"+firstNameData+"'>";
 lastName.innerHTML="<input type='text' id='lastNameText"+no+"' value='"+lastNameData+"'>";
 dateOfBirth.innerHTML="<input type='date' id='dateOfBirthDate"+no+"' value='"+dateOfBirthData+"'>";

}

function saveRow(no)
{
 let firstNameVal=document.getElementById("firstNameText"+no).value;
 let lastNameVal=document.getElementById("lastNameText"+no).value;
 let dateOfBirthVal=document.getElementById("dateOfBirthDate"+no).value;

 document.getElementById("firstNameRow"+no).innerHTML=firstNameVal;
 document.getElementById("lastNameRow"+no).innerHTML=lastNameVal;
 document.getElementById("dateOfBirthRow"+no).innerHTML=dateOfBirthVal;

 document.getElementById("editButton"+no).style.display="block";
 document.getElementById("saveButton"+no).style.display="none";
}

function deleteRow(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
