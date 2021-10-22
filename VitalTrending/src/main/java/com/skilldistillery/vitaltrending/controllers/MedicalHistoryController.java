package com.skilldistillery.vitaltrending.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.vitaltrending.entities.MedicalHistory;
import com.skilldistillery.vitaltrending.services.MedicalHistoryService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class MedicalHistoryController {

	@Autowired
	private MedicalHistoryService mhxSvc;
	
	@GetMapping("patients/{patientId}/medicalhistory")
	public List<MedicalHistory> getAllPatientMedicalHistory(@PathVariable Integer patientId){
		return mhxSvc.findAllPatientMedicalHistory(patientId);
		
	}
	
	
	@PostMapping("patients/{patientId}/medicalhistory")
	public MedicalHistory addPatientMedicalHistory(@PathVariable Integer patientId, 
														   @RequestBody MedicalHistory medicalHistory,
														   HttpServletResponse res) {
		medicalHistory = mhxSvc.createNewMedicalHistory(patientId, medicalHistory);
		
		if(medicalHistory == null) {
			res.setStatus(404);
			return null;
		}
		return medicalHistory;
		
	}
	
	@PutMapping("patients/{patientId}/medicalhistory/{mhxId}")
	public MedicalHistory updatePatientMedicalHistory(@PathVariable Integer patientId, 
									   @PathVariable Integer mhxId,
									   @RequestBody MedicalHistory mhx, 
									   HttpServletResponse res) {
		
		if (mhxSvc.updatePatientMedicalHistory(patientId, mhxId, mhx) != null) {
			res.setStatus(204);
			return mhx;
		} else {
			res.setStatus(404);
			return mhx = null;
		} 
	}
	
	@DeleteMapping("patients/{patientId}/medicalhistory/{mhxId}")
	public void deletePatientMedicalHistory(@PathVariable Integer patientId, 
							  @PathVariable Integer mhxId,
							  HttpServletResponse res) {
		if (mhxSvc.deleteMedicalHistory(patientId, mhxId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	
	
	
	
	
	
	
}
