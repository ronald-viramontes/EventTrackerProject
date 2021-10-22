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

import com.skilldistillery.vitaltrending.entities.VitalSign;
import com.skilldistillery.vitaltrending.services.VitalSignService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4300"})
public class VitalSignController {

	@Autowired
	private VitalSignService vitalSvc;
	
	@GetMapping("patients/{patientId}/vitalsigns")
	public List<VitalSign> getAllPatientVitals(@PathVariable Integer patientId){
		return vitalSvc.findAllPatientVitals(patientId);
	}
	
	
	@PostMapping("patients/{patientId}/vitalsigns")
	public VitalSign addPatientVitals(@PathVariable Integer patientId, 
														   @RequestBody VitalSign vitalSign,
														   HttpServletResponse res) {
		vitalSign = vitalSvc.createNewVitalSign(patientId, vitalSign);
		if(vitalSign == null) {
			res.setStatus(404);
			return null;
			}
		return vitalSign;
		
	}
	
	@PutMapping("patients/{patientId}/vitalsigns/{vitalId}")
	public VitalSign updatePatientVitals(@PathVariable Integer patientId, 
									   @PathVariable Integer vitalId,
									   @RequestBody VitalSign vitalSign, 
									   HttpServletResponse res) {
		
		if (vitalSvc.updateVitalSign(patientId, vitalId, vitalSign) != null) {
			res.setStatus(204);
			return vitalSign;
		} else {
			res.setStatus(404);
			return vitalSign = null;
		} 
	}
	
	
	@DeleteMapping("patients/{patientId}/vitalsigns/{vitalId}")
	public void deletePatientVitals(@PathVariable Integer patientId, 
							  @PathVariable Integer vitalId,
							  HttpServletResponse res) {
		if (vitalSvc.deleteVitalSign(patientId, vitalId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	
	
	
	
	
	
	
	
}
