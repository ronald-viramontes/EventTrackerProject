package com.skilldistillery.vitaltrending.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class FamilyMedicalHistoryTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private FamilyMedicalHistory fmhx;
	
	
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
		fmhx = em.find(FamilyMedicalHistory.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		fmhx = null;
	}

	@Test
	@DisplayName("test entity mapping of patient")
	void test() {
		
		assertNotNull(fmhx);
	
		assertEquals("Depression", fmhx.getMedicalCondition());
		
		
	}

}
