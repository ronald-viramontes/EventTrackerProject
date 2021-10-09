package com.skilldistillery.vitaltrending.services;

import java.util.List;

import com.skilldistillery.vitaltrending.entities.MedicalHistory;

public interface MedicalHistoryService {

	List<MedicalHistory> findAllPatientMedicalHistory(int patientId);
	MedicalHistory createNewMedicalHistory(int patientId, MedicalHistory mhx);
	MedicalHistory findMedicalHistoryById(int mhxId);
	Boolean deleteMedicalHistory(int patientId, int mhxId);
	MedicalHistory updatePatientMedicalHistory(int patientId, int mhxId, MedicalHistory mhx);
}
