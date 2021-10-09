package com.skilldistillery.vitaltrending.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="family_medical_history")
public class FamilyMedicalHistory {

	public FamilyMedicalHistory() {
		super();
	}

		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="medical_condition")
	private String medicalCondition;
	
	@Column(name="family_relation")
	private String familyRelation;
	
	@ManyToOne()
	@JoinColumn(name="patient_id")
	@JsonIgnore
	Patient patient;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMedicalCondition() {
		return medicalCondition;
	}

	public void setMedicalCondition(String medicalCondition) {
		this.medicalCondition = medicalCondition;
	}

	public String getFamilyRelation() {
		return familyRelation;
	}

	public void setFamilyRelation(String familyRelation) {
		this.familyRelation = familyRelation;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FamilyMedicalHistory other = (FamilyMedicalHistory) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "FamilyMedicalHistory [id=" + id + ", medicalCondition=" + medicalCondition + ", familyRelation="
				+ familyRelation + "]";
	}

	
	
	
	
}
