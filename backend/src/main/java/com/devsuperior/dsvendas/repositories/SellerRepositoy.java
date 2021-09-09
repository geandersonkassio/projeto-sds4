package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Seller;

public interface SellerRepositoy extends JpaRepository<Seller, Long> {

}
