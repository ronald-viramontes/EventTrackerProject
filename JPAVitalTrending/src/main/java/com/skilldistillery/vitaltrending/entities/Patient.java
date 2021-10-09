package com.skilldistillery.vitaltrending.entities;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Patient {

	public Patient() {
		super();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="date_of_birth")
	private LocalDate dateOfBirth;
	
	@Column(name="image_id_url")
	private String imageIdUrl;
	
	@OneToMany(mappedBy="patient")
	@JsonIgnore
	List<VitalSign> vitalSigns;
	
	@OneToMany(mappedBy="patient")
	@JsonIgnore
	List<FamilyMedicalHistory> familyMedicalHistory;
	
	@OneToMany(mappedBy="patient")
	@JsonIgnore
	List<MedicalHistory> medicalHistory;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getImageIdUrl() {
		return imageIdUrl;
	}

	public void setImageIdUrl(String imageIdUrl) {
		this.imageIdUrl = imageIdUrl;
	}

		
	public List<VitalSign> getVitalSigns() {
		return vitalSigns;
	}

	public void setVitalSigns(List<VitalSign> vitalSigns) {
		this.vitalSigns = vitalSigns;
	}

	public List<FamilyMedicalHistory> getFamilyMedicalHistory() {
		return familyMedicalHistory;
	}

	public void setFamilyMedicalHistory(List<FamilyMedicalHistory> familyMedicalHistory) {
		this.familyMedicalHistory = familyMedicalHistory;
	}

	public List<MedicalHistory> getMedicalHistory() {
		return medicalHistory;
	}

	public void setMedicalHistory(List<MedicalHistory> medicalHistory) {
		this.medicalHistory = medicalHistory;
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
		Patient other = (Patient) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", imageIdUrl=" + imageIdUrl + "]";
	}
	
	
	
	
}
