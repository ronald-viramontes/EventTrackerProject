# EventTrackerProject
  The application that I developed for the EventTrackerProject is called VitalTrending.
## Application Description
  VitalTrending is an application that gives healthcare professionals a tool to manage patients in an organized MySQL database.  Key features of my application include: past medical history, family medical history, and vital sign tracking.
  The primary focus of my application is to enable patients or healthcare professionals to enter the following patient vital signs:  blood pressure, pulse rate, respiratory rate, and temperature. VitalTrending's goal is to track subtle changes to a patient's vital signs over time. This would allow providers to identify and react to downward trends, which can lead to rapid patient decomposition.
  It may be difficult to identify subtle changes to vital signs that are taken on a frequent basis. This is especially true if the patient's vital signs are within a normal range.
  VitalTrending is a healthcare management tool to remotely monitor vital sign trending, and gives the patient care team the ability to quickly evaluate changes that may indicate an impending decompensation event.    
## Application Mapping Patient
  Return Type   |             Route                   |    Functionality
  --------------|-------------------------------------|--------------------
  List<Patient> | GET api/patients                    | Gets all patients
  Patient       | GET api/patients/{patientId}        | Gets one patient
  Patient       | POST api/patients                   | Creates patients
  Patient       | PUT api/patients/{patientId}        | Updates patient
  void          | DELETE api/patients/{patientId}     | Removes patient

## Application Mapping Patient Family Medical History
  Return Type                |                               Route                           |  Functionality
  ---------------------------|---------------------------------------------------------------|----------------------------------------
  List<FamilyMedicalHistory> | GET api/patients/{patientId}                                  | Gets patient family medical history
  FamilyMedicalHistory       | POST api/patients/{patientId}/familymedicalhistory            | Creates patient family medical history
  FamilyMedicalHistory       | PUT api/patients/{patientId}/familymedicalhistory/{fmxhId}    | Updates patient family medical history
  void                       | DELETE api/patients/{patientId}/familymedicalhistory/{fmhxId} | Removes patient family medical history

## Application Mapping Patient Medical History

  Return Type           |                         Route                         |  Functionality
  ----------------------|-------------------------------------------------------|---------------------------------
  List<MedicalHistory>  | GET api/patients/{patientId}                          | Gets patient medical history
  MedicalHistory        | POST api/patients/{patientId}/medicalhistory          | Creates patient medical history
  MedicalHistory        | PUT api/patients/{patientId}/medicalhistory/{mhxId}   | Updates patient medical history
  void                  | DELETE api/patients/{patientId}/medicalhistory/{mhxId}| Removes patient medical history

## Application Mapping Patient Vital Signs

  Return Type     |                       Route                         |  Functionality
  ----------------|-----------------------------------------------------|----------------------------
  List<VitalSign> | GET api/patients/{patientId}/vitalsigns             | Gets patient vital signs
  VitalSign       | POST api/patients/{patientId}/vitalsigns            | Creates patient vital sign
  VitalSign       | PUT api/patients/{patientId}/vitalsigns/{vitalId}   | Updates patient vitals
  void            | DELETE api/patients/{patientId}/vitalsigns/{vitalId}| Removes patient vitals


## Technologies Used
    * SpringToolSuite 4, version 4.11.1
      - Spring Data JPA
      - Spring Boot project
      - RESTful Services
    * Atom, version 1.58.0
    * Postman 9, version 9.05
    * MySql Workbench 8, version 8.0.26
    * MAMP, version 6.5

## Lessons Learned
  The development of VitalTrending was a passion project. I spent over 20 years as a military paramedic and Air Force Independent Duty Medical Technician. 
Much of my work was conducted at remote locations with limited medical support. This program would have been extremely useful to me for coordination of care and remote patient monitoring in austere or remote locations around the globe. Through the development process, I solidified foundational Object Oriented Programing pearls, which ensured proper entity mapping, and operational CRUD functions. This was verified using JUnit testing for entity mapping and relational entity mapping, along with Postman for GET, POST, PUT, and DELETE functions.

## Future Development
    * Frontend Functionality
    * Additional MySql tables
      - Medications
      - Treatments
      - SOAP Notes
      - Graphing
