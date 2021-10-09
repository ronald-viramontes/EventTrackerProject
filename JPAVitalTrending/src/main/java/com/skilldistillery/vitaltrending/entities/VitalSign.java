package com.skilldistillery.vitaltrending.entities;

import java.time.LocalDateTime;
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
@Table(name="vital_sign")
public class VitalSign {

	public VitalSign() {
		super();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="vital_date_time")
	private LocalDateTime vitalDateTime;
	
	@Column(name="systolic_pressure")
	private int systolicPressure;
	
	@Column(name="diastolic_pressure")
	private int diastolicPressure;	
	
	@Column(name="pulse_rate")
	private int pulseRate;	
	
	private double temperature;
	
	@Column(name="respiratory_rate")
	private int respiratoryRate;

	@ManyToOne
	@JoinColumn(name="patient_id")
	@JsonIgnore
	Patient patient;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getVitalDateTime() {
		return vitalDateTime;
	}

	public void setVitalDateTime(LocalDateTime vitalDateTime) {
		this.vitalDateTime = vitalDateTime;
	}

	public int getSystolicPressure() {
		return systolicPressure;
	}

	public void setSystolicPressure(int systolicPressure) {
		this.systolicPressure = systolicPressure;
	}

	public int getDiastolicPressure() {
		return diastolicPressure;
	}

	public void setDiastolicPressure(int diastolicPressure) {
		this.diastolicPressure = diastolicPressure;
	}

	public int getPulseRate() {
		return pulseRate;
	}

	public void setPulseRate(int pulseRate) {
		this.pulseRate = pulseRate;
	}

	public double getTemperature() {
		return temperature;
	}

	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}

	public int getRespiratoryRate() {
		return respiratoryRate;
	}

	public void setRespiratoryRate(int respiratoryRate) {
		this.respiratoryRate = respiratoryRate;
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
		VitalSign other = (VitalSign) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "VitalSign [id=" + id + ", vitalDateTime=" + vitalDateTime + ", systolicPressure=" + systolicPressure
				+ ", diastolicPressure=" + diastolicPressure + ", pulseRate=" + pulseRate + ", temperature="
				+ temperature + ", respiratoryRate=" + respiratoryRate + "]";
	}

	



}
