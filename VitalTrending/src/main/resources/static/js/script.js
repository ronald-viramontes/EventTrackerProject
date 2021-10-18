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
		
	let patientDataDiv = document.getElementById('viewAllPatientData');

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
		btn.addEventListener('click', function(e){
			deletePatient(patient.id);	
		});
		
		
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

	let hr = document.createElement('hr');
	patientDataDiv.appendChild(hr);
	

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

	getPatientVitals(patient.id);
	getPatientMedicalHistory(patient.id);
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

function getPatientVitals(patientId){
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', `api/patients/${patientId}/vitalsigns/`);
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let vitalSigns = JSON.parse(xhr.responseText);
				
				displayPatientVitals(vitalSigns);
			}
			else if (xhr.status === 404){
				console.error("patient vital signs not found");
				alert("Patient vital signs not Found!")
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState = ' + xhr.readyState);
}

function displayPatientVitals(vitalSigns) {
		
	let vitalSignDataDiv = document.getElementById('vitalSignData');

	let table = document.createElement('table');
	table.class = 'table';
	
	vitalSignDataDiv.appendChild(table);
	
	let head = document.createElement('thead');
	table.appendChild(head);
	
	let t = document.createElement('th');
	
	t.textContent = "Vital Sign ID";
	head.appendChild(t);
		
	t = document.createElement('th');
	t.textContent = "Date & Time";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Systolic Pressure";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Diastolic Pressure";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Pulse Rate";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Temperature";
	head.appendChild(t);
	
	t = document.createElement('th');
	t.textContent = "Respirations";
	head.appendChild(t);
	
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	var i = 0;
	var pulseInitial = 0;
	var pulseChange = 0;
	var tempInitial = 0;
	var tempChange = 0;
	var respInitial = 0;
	var respChange = 0;
	var systolicInitial = 0;
	var systolicChange = 0;
	var diastolicInitial = 0;
	var diastolicChange = 0;
	for(let vitalSign of vitalSigns){
		
		let tr = document.createElement('tr');
		let td = document.createElement('td');

		
		td.textContent = vitalSign.id;
		tr.appendChild(td);
	
		td = document.createElement('td');
		td.textContent = vitalSign.vitalDateTime;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = vitalSign.systolicPressure;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = vitalSign.diastolicPressure;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = vitalSign.pulseRate;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = vitalSign.temperature;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = vitalSign.respiratoryRate;
		tr.appendChild(td);
						
		tbody.appendChild(tr);
		
		if(i == 0){
		pulseInitial = vitalSign.pulseRate;
		tempInitial = vitalSign.temperature;
		systolicInitial = vitalSign.systolicPressure;
		diastolicInitial = vitalSign.diastolicPressure;
		respInitial = vitalSign.respiratoryRate;
		} else if (i > 0){
		pulseChange = vitalSign.pulseRate - pulseInitial;
		tempChange = vitalSign.temperature - tempInitial;
		systolicChange = vitalSign.systolicPressure - systolicInitial;
		diastolicChange = vitalSign.diastolicPressure - diastolicInitial;
		respChange = vitalSign.respiratoryRate -respInitial;
			
		}
		
		i++;	
	}
		
	let span = document.createElement('span');
		span.style.color = "red";
		span.textContent = "Alert: *** ";
		vitalSignData.appendChild(span);
		
		span = document.createElement('span');
		span.textContent = ` Systolic change: ${systolicChange}. `
		vitalSignData.appendChild(span);

		span = document.createElement('span');
		span.textContent = ` Diastolic change: ${diastolicChange}. `
		vitalSignData.appendChild(span);

		span = document.createElement('span');
		span.textContent = ` Pulse change: ${pulseChange}. `
		vitalSignData.appendChild(span);

		span = document.createElement('span');
		span.textContent = ` Temperature change: ${tempChange}. `
		vitalSignData.appendChild(span);

		span = document.createElement('span');
		span.textContent = ` Respiration change: ${respChange}. `
		vitalSignData.appendChild(span);
	
}

function getPatientMedicalHistory(patientId){
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', `api/patients/${patientId}/medicalhistory/`);
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let medicalHistory = JSON.parse(xhr.responseText);
				
				displayPatientMedicalHistory(medicalHistory);
			}
			else if (xhr.status === 404){
				console.error("patient medical history not found");
				alert("Patient medical history not Found!")
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState = ' + xhr.readyState);
}

function displayPatientMedicalHistory(medicalHistory) {
	console.log("inside diplayPatient");
	let medHistoryDataDiv = document.getElementById('pastMedicalHistoryData');
	
	let table = document.createElement('table');
	table.id = "dataTable";
	medHistoryDataDiv.appendChild(table);
	
	let head = document.createElement('thead');
	table.appendChild(head);
	
	let t = document.createElement('th');
	
	t.textContent = "Medical History ID";
	head.appendChild(t);
		
	t = document.createElement('th');
	t.textContent = "Diagnosis";
	head.appendChild(t);
	
	
	t = document.createElement('th');
	t.textContent = "Date Verified";
	head.appendChild(t);
				
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	for(let medHistory of medicalHistory ){

		let tr = document.createElement('tr');
		let td = document.createElement('td');
					
		td.textContent = medHistory.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = medHistory.diagnosis;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = medHistory.dateVerified;
		tr.appendChild(td);
		tbody.appendChild(tr);

	}

}
