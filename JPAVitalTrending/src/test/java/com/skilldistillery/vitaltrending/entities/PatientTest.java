package com.skilldistillery.vitaltrending.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

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
		assertEquals("Ronald", patient.getFirstName());
		assertEquals("Viramontes", patient.getLastName());
	}

}
