package com.skilldistillery.vitaltrending.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.vitaltrending.entities.Patient;
import com.skilldistillery.vitaltrending.entities.VitalSign;
import com.skilldistillery.vitaltrending.repositories.PatientRepository;
import com.skilldistillery.vitaltrending.repositories.VitalSignRepository;

@Service
public class VitalSignServiceImpl implements VitalSignService{

	@Autowired
	private VitalSignRepository vitalRepo;
	
	@Autowired
	private PatientRepository patientRepo;

	@Override
	public List<VitalSign> findAllPatientVitals(int patientId) {
		return vitalRepo.findByPatient_Id(patientId);
	}

	@Override
	public VitalSign createNewMedicalHistory(int patientId, VitalSign vitalSign) {
		Patient patient = patientRepo.findById(patientId);
		if(patient == null) {
			return null;
		} else {
			
			vitalSign.setPatient(patient);
			vitalRepo.saveAndFlush(vitalSign);
		}
				
		return vitalSign;
	}

	@Override
	public VitalSign findVitalSignById(int vitalId) {
		return vitalRepo.findById(vitalId);
	}

	@Override
	public Boolean deleteVitalSign(int patientId, int vitalId) {
		VitalSign vitalSign = vitalRepo.findByIdAndPatient_Id(vitalId, patientId);
		
		if (vitalSign == null) {
			return null;
		} else {
			vitalRepo.delete(vitalSign);
			return true;
		}
		
	}
	
	
	
	

}
