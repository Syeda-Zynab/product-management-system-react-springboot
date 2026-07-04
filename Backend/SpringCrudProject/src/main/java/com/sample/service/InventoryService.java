package com.sample.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Product;
import com.sample.repository.InventoryRepository;

@Service
public class InventoryService {
	//add repository dependency
	
	@Autowired //used to inject dependencies in springBoot
	private InventoryRepository repository;
	
	//service is for business logic
	//method to insert data
	public Product saveData(Product p)
	{
		Product p1=repository.save(p);
		return p1;
	}
	
	//method to read all products data
	public List<Product> readAllProducts()
	{
		List<Product> all = repository.findAll();
		return all;
	}
	
	//method to update a product
	public Product updateProduct(int id, Product np)
	{
		Optional<Product> temp=repository.findById(id);
		if(temp.isPresent())
		{
			Product op= temp.get();
			op.setPname(np.getPname());
			op.setPqty(np.getPqty());
			op.setPcost(np.getPcost());
			return repository.save(op);
		}
		else 
		{
			 throw new RuntimeException("Product not found");
		}
	}
	
	//methos to delete a product
	public void deleteProduct(int id) { 
		repository.deleteById(id);
	}
	
}
