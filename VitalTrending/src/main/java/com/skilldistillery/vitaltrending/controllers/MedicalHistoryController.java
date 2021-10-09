package com.skilldistillery.vitaltrending.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.vitaltrending.entities.MedicalHistory;
import com.skilldistillery.vitaltrending.services.MedicalHistoryService;

@RestController
@RequestMapping("api")
public class MedicalHistoryController {

	@Autowired
	private MedicalHistoryService mhxSvc;
	
	@GetMapping("patients/{patientId}/medicalhistory")
	public List<MedicalHistory> getAllMedicalHistory(@PathVariable Integer patientId){
		return mhxSvc.findAllPatientMedicalHistory(patientId);
		
	}
	
	
	@PostMapping("patients/{patientId}/medicalhistory")
	public MedicalHistory addNewMedicalHistory(@PathVariable Integer patientId, 
														   @RequestBody MedicalHistory medicalHistory,
														   HttpServletResponse res) {
		medicalHistory = mhxSvc.createNewMedicalHistory(patientId, medicalHistory);
		
		if(medicalHistory == null) {
			res.setStatus(404);
			return null;
		}
		return medicalHistory;
		
	}
	
	@DeleteMapping("patients/{patientId}/medicalhistory/{mhxId}")
	public void deletePatient(@PathVariable Integer patientId, 
							  @PathVariable Integer mhxId,
							  HttpServletResponse res) {
		if (mhxSvc.deleteMedicalHistory(patientId, mhxId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	
	
	
	
	
	
	
}
