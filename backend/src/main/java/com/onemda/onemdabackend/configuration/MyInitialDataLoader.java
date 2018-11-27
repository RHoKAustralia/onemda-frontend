package com.onemda.onemdabackend.configuration;


import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onemda.onemdabackend.dao.ServiceCategoryDAO;
import com.onemda.onemdabackend.model.ServiceCategory;

@Component
public class MyInitialDataLoader implements CommandLineRunner{
	@Value("${initial.dataloader.file}")
	private String datFilePath;

	@Autowired
	private ServiceCategoryDAO serviceCatDao;


	@Override
	public void run(String... args) throws Exception {
		LoadServiceCategory();
	}

	private void LoadServiceCategory() {

		ObjectMapper mapper = new ObjectMapper();

		List<ServiceCategory> listOfCategoryFromFile = null;

		try {
			listOfCategoryFromFile = mapper.readValue(new File(datFilePath), new TypeReference<List<ServiceCategory>>(){});
		} catch (IOException e) {
			e.printStackTrace();
		}

		//Deleting already present data
		serviceCatDao.deleteAll();

		//Adding each object from file to database
		for (ServiceCategory serviceCategory : listOfCategoryFromFile) {
			serviceCatDao.save(serviceCategory);
		}
	}

}
