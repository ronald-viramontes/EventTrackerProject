package com.skilldistillery.vitaltrending.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.vitaltrending.entities.VitalSign;

public interface VitalSignRepository extends JpaRepository<VitalSign, Integer> {
	
	List<VitalSign> findByPatient_Id(int patientId);
	VitalSign findById(int vitalId);
	VitalSign findByIdAndPatient_Id(int vitalId, int patientId);
}
