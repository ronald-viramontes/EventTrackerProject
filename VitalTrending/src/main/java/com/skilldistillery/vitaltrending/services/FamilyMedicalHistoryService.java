package com.skilldistillery.vitaltrending.services;

import java.util.List;

import com.skilldistillery.vitaltrending.entities.FamilyMedicalHistory;

public interface FamilyMedicalHistoryService {


	List<FamilyMedicalHistory> findFamilyMedicalHistoryByPatientId(int patientId);
	FamilyMedicalHistory createNewFamilyMedicalHistory(int patientId, FamilyMedicalHistory fmhx);
	FamilyMedicalHistory findFamilyMedicalHistoryById(int fmhxId);
	Boolean deleteFamilyMedicalHistory(int patientId, int fmhxId);
	FamilyMedicalHistory updatePatientFamilyMedicalHistory(int patientId, int fmhxId, FamilyMedicalHistory fmhx);
	
}
