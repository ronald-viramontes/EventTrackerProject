package com.skilldistillery.vitaltrending.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.vitaltrending.entities.MedicalHistory;

public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Integer> {

	List<MedicalHistory> findByPatient_Id(int patientId);
	MedicalHistory findById(int mhxId);
	MedicalHistory findByIdAndPatient_Id(int mhxId, int patientId);

}
