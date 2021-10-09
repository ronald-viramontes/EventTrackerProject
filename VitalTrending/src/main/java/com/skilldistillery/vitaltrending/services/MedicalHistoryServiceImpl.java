package com.skilldistillery.vitaltrending.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.vitaltrending.entities.MedicalHistory;
import com.skilldistillery.vitaltrending.entities.Patient;
import com.skilldistillery.vitaltrending.repositories.MedicalHistoryRepository;
import com.skilldistillery.vitaltrending.repositories.PatientRepository;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService{

	@Autowired
	private MedicalHistoryRepository mhxRepo;

	@Autowired
	private PatientRepository patientRepo;
	
	@Override
	public List<MedicalHistory> findAllPatientMedicalHistory(int patientId) {
		return mhxRepo.findByPatient_Id(patientId);
	}

	@Override
	public MedicalHistory createNewMedicalHistory(int patientId, MedicalHistory mhx) {
		Patient patient = patientRepo.findById(patientId);
		if(patient == null) {
			return null;
		} else {
			mhx.setPatient(patient);
			mhxRepo.saveAndFlush(mhx);
		}
				
		return mhx;
		
	}

	@Override
	public MedicalHistory findMedicalHistoryById(int mhxId) {
		return mhxRepo.findById(mhxId);
	}

	@Override
	public Boolean deleteMedicalHistory(int patientId, int mhxId) {
		MedicalHistory medicalHistory = mhxRepo.findByIdAndPatient_Id(mhxId, patientId);
		
		if(medicalHistory == null) {
			return null;
		} else {
			mhxRepo.delete(medicalHistory);
			return true;
		}
				
	}


	
		
	

}
