package com.example.webshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import com.example.webshop.models.Otaku;

@Repository
public interface OtakuRepository extends JpaRepository<Otaku, Integer> {

}
