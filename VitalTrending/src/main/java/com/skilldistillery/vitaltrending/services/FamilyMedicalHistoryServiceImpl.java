package com.skilldistillery.vitaltrending.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.vitaltrending.entities.FamilyMedicalHistory;
import com.skilldistillery.vitaltrending.entities.Patient;
import com.skilldistillery.vitaltrending.repositories.FamilyMedicalHistoryRepository;
import com.skilldistillery.vitaltrending.repositories.PatientRepository;

@Service
public class FamilyMedicalHistoryServiceImpl implements FamilyMedicalHistoryService{

	@Autowired
	private FamilyMedicalHistoryRepository fmhxRepo;
	
	@Autowired
	private PatientRepository patientRepo;

	@Override
	public List<FamilyMedicalHistory> findFamilyMedicalHistoryByPatientId(int patientId) {
		return fmhxRepo.findByPatient_Id(patientId);
	}

	@Override
	public FamilyMedicalHistory createNewFamilyMedicalHistory(int patientId, FamilyMedicalHistory fmhx) {
		Patient patient = patientRepo.findById(patientId);
		if(patient == null) {
			return null;
		} else {
			fmhx.setPatient(patient);
			fmhxRepo.saveAndFlush(fmhx);
		}
				
		return fmhx;
	}

	@Override
	public FamilyMedicalHistory findFamilyMedicalHistoryById(int fmhxId) {
				
		return fmhxRepo.findById(fmhxId);
	}

	@Override
	public Boolean deleteFamilyMedicalHistory(int patientId, int fmhxId) {
		FamilyMedicalHistory fmhx = fmhxRepo.findByIdAndPatient_Id(fmhxId, patientId);
		
		if(fmhx == null) {
			return null;
		} else {
			fmhxRepo.delete(fmhx);
			return true;
		}
	}

	@Override
	public FamilyMedicalHistory updatePatientFamilyMedicalHistory(int patientId, int fmhxId,
			FamilyMedicalHistory fmhx) {
		FamilyMedicalHistory dbFmhx = fmhxRepo.findByIdAndPatient_Id(fmhxId, patientId);
		
		if(dbFmhx == null) {
			
			return null;
		} else {
			dbFmhx.setFamilyRelation(fmhx.getFamilyRelation());
			dbFmhx.setMedicalCondition(fmhx.getMedicalCondition());
			
			fmhxRepo.save(dbFmhx);
			return dbFmhx;
		}
	}
	
}