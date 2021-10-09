package com.skilldistillery.vitaltrending.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.vitaltrending.entities.FamilyMedicalHistory;

public interface FamilyMedicalHistoryRepository extends JpaRepository<FamilyMedicalHistory, Integer> {
	
	List<FamilyMedicalHistory> findByPatient_Id(int patientId);
	FamilyMedicalHistory findById(int fmhxId);
	FamilyMedicalHistory findByIdAndPatient_Id(int fmhxId, int patientId);
	
}
