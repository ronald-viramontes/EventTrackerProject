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

class VitalSignTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private VitalSign vs;
	
	
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
		vs = em.find(VitalSign.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		vs = null;
	}

	@Test
	@DisplayName("test entity mapping of patient")
	void test() {
		assertNotNull(vs);
		assertEquals(125, vs.getSystolicPressure());
		assertEquals(68, vs.getDiastolicPressure());
		assertEquals(55, vs.getPulseRate());
		assertEquals(98.2, vs.getTemperature());
		assertEquals(16, vs.getRespiratoryRate());
		
	}

}
