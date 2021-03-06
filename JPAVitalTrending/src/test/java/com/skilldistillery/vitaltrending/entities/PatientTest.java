package com.skilldistillery.vitaltrending.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class PatientTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Patient patient;
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAVitalTrending");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		patient = em.find(Patient.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		patient = null;
	}

	@Test
	@DisplayName("test entity mapping of patient")
	void test() {
		assertNotNull(patient);
		assertEquals("Tom", patient.getFirstName());
		assertEquals("Sawyer", patient.getLastName());
		assertEquals("https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
				patient.getImageIdUrl());
		assertTrue(patient.getFamilyMedicalHistory().size() > 0);
		assertTrue(patient.getMedicalHistory().size() > 0);
		assertTrue(patient.getVitalSigns().size() > 0);
		
		
		
	}

}
