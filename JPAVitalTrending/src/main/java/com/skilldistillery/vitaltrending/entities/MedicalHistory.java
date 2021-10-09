package com.skilldistillery.vitaltrending.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="medical_history")
public class MedicalHistory {

	public MedicalHistory() {
		super();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String diagnosis;
	
	@Column(name="date_verified")
	private LocalDate dateVerified;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	Patient patient;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public LocalDate getDateVerified() {
		return dateVerified;
	}

	public void setDateVerified(LocalDate dateVerified) {
		this.dateVerified = dateVerified;
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
		MedicalHistory other = (MedicalHistory) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "MedicalHistory [id=" + id + ", diagnosis=" + diagnosis + ", dateVerified=" + dateVerified + ", patient="
				+ patient + "]";
	}
	
	
	
	
}
