package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sample.entity.Product;
import com.sample.service.InventoryService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/app")
public class InventoryController {
	
	//controller needs service dependency
	@Autowired
	private InventoryService service;
	
	//contoller is for webservices/REST API
	//1.webservice for insert
	
	@PostMapping("/insert")
	public ResponseEntity<Product> saveData(@RequestBody Product p) {
		Product p1=service.saveData(p);
		return ResponseEntity.ok(p1);
	}
	
	//2.webservice for read all products
	@GetMapping("/readall")
	public List<Product> readAllproducts() {
		List<Product> allProducts = service.readAllProducts();
		return allProducts;
	}
	
	//3.webservice for updating one product
	@PutMapping("/update/{pno}")
	public Product updateProduct(@PathVariable int pno,@RequestBody Product np)
	{
		Product updateProduct = service.updateProduct(pno, np);
		return updateProduct;
	}
	
	//4.webservice for deleting one product
	@DeleteMapping("/delete/{pno}")
	public void deleteOneProduct(@PathVariable int pno) {
		service.deleteProduct(pno);
	}
	
}
