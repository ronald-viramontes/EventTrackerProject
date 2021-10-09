package com.skilldistillery.vitaltrending.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.vitaltrending.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	Patient findById(int patientId);
	Patient findByFirstNameAndLastName(String fName, String lName);

}
