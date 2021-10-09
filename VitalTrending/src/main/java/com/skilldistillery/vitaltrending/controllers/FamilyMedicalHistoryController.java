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

import com.skilldistillery.vitaltrending.entities.FamilyMedicalHistory;
import com.skilldistillery.vitaltrending.services.FamilyMedicalHistoryService;

@RestController
@RequestMapping("api")
public class FamilyMedicalHistoryController {

	@Autowired
	private FamilyMedicalHistoryService fmhxSvc;
	
	@GetMapping("patients/{patientId}/familymedicalhistory")
	public List<FamilyMedicalHistory> getAllFamilyMedicalHistory(@PathVariable Integer patientId){
		return fmhxSvc.findFamilyMedicalHistoryByPatientId(patientId);
	}
	
	
	@PostMapping("patients/{patientId}/familymedicalhistory")
	public FamilyMedicalHistory addNewFamilyMedicalHistory(@PathVariable Integer patientId, 
														   @RequestBody FamilyMedicalHistory fmhx,
														   HttpServletResponse res) {
		fmhx = fmhxSvc.createNewFamilyMedicalHistory(patientId, fmhx);
		
		if(fmhx == null) {
			res.setStatus(404);
			return null;
		}
		return fmhx;
		
	}
	
	@DeleteMapping("patients/{patientId}/familymedicalhistory/{fmhxId}")
	public void deletePatient(@PathVariable Integer patientId, 
							  @PathVariable Integer fmhxId,
							  HttpServletResponse res) {
		if (fmhxSvc.deleteFamilyMedicalHistory(patientId, fmhxId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	
	
	
	
	
	
	
	
}
