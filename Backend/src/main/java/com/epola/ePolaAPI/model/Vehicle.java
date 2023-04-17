package com.epola.ePolaAPI.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Document("vehicle")
public class Vehicle {
    @Id
    private String vid;
    private String ownerId;
    private String vehicleModel;
    private String regNo;
    private int priceRate;
    private String capacity;
}
