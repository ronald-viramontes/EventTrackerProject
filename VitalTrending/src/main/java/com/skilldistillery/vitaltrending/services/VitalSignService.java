package com.skilldistillery.vitaltrending.services;

import java.util.List;

import com.skilldistillery.vitaltrending.entities.VitalSign;

public interface VitalSignService {

	List<VitalSign> findAllPatientVitals(int patientId);
	VitalSign createNewVitalSign(int patientId, VitalSign vitalId);
	VitalSign findVitalSignById(int vitalId);
	Boolean deleteVitalSign(int patientId, int vitalId);
	
}
