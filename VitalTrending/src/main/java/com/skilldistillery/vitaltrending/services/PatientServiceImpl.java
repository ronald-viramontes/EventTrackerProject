package com.skilldistillery.vitaltrending.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.vitaltrending.entities.Patient;
import com.skilldistillery.vitaltrending.repositories.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService{

	@Autowired
	private PatientRepository patientRepo;
	
	@Override
	public List<Patient> findAllPatients() {

		return patientRepo.findAll();
	}

	@Override
	public Patient findPatientById(int patientId) {
		
		return patientRepo.findById(patientId);
	
	}

	@Override
	public Patient createNewPatient(Patient patient) {
		
		return patientRepo.saveAndFlush(patient);
	}

	@Override
	public Boolean deletePatient(int patientId) {
		Patient patient = patientRepo.findById(patientId);
		if(patient != null) {
			patientRepo.delete(patient);
			return true;
		}	else {
			return false;
		}
	}

	@Override
	public Patient updatePatient(int patientId, Patient patient) {
		Patient dbPatient = patientRepo.findById(patientId);
		if (dbPatient == null) {
			return null;
		} else {
		dbPatient.setDateOfBirth(patient.getDateOfBirth());
		dbPatient.setFirstName(patient.getFirstName());;
		dbPatient.setImageIdUrl(patient.getImageIdUrl());
		dbPatient.setLastName(patient.getLastName());
		patientRepo.save(dbPatient);
		return dbPatient;
		}	
	}
		
	
	

}
