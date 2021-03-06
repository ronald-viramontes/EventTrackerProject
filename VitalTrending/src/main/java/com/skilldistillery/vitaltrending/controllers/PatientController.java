package com.skilldistillery.vitaltrending.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.vitaltrending.entities.Patient;
import com.skilldistillery.vitaltrending.services.PatientService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class PatientController {

	@Autowired
	private PatientService patSvc;

	@GetMapping("patients")
	public List<Patient> getAllPatients() {
		return patSvc.findAllPatients();
	}

	@GetMapping("patients/{patientId}")
	public Patient getPatientById(@PathVariable Integer patientId,
									HttpServletResponse res) {
		Patient patient = patSvc.findPatientById(patientId);
		if(patient == null) {
			res.setStatus(404);
			return null;
		}
		return patient;
	}

	@PostMapping("patients")
	public Patient addNewPatient(@RequestBody Patient patient, HttpServletResponse res) {

		patient = patSvc.createNewPatient(patient);
		if (patient == null) {
			res.setStatus(404);
			return null;
		}
		return patient;

	}

	@PutMapping("patients/{patientId}")
	public Patient updatePatientRecord(@PathVariable Integer patientId, 
									   @RequestBody Patient patient, 
									   HttpServletResponse res) {
		
		if (patSvc.updatePatient(patientId, patient) != null) {
			res.setStatus(204);
			return patient;
		} else {
			res.setStatus(404);
			return patient = null;
		} 
	}

	@DeleteMapping("patients/{patientId}")
	public void deletePatient(@PathVariable Integer patientId, HttpServletResponse res) {
		if (patSvc.deletePatient(patientId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}

}
