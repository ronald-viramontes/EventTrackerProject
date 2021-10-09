package com.skilldistillery.vitaltrending.services;

import java.util.List;

import com.skilldistillery.vitaltrending.entities.Patient;

public interface PatientService {

	List<Patient> findAllPatients();
	Patient findPatientById(int patientId);
	Patient createNewPatient(Patient patient);
	Boolean deletePatient(int patientId);
	
}
