package com.skilldistillery.vitaltrending;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class VitalTrendingApplication extends SpringBootServletInitializer{
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(VitalTrendingApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(VitalTrendingApplication.class, args);
	}

}
