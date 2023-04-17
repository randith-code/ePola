package com.epola.ePolaAPI.resource;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class BuyerRequest {

    private String userName;
    private String password;
    private String email;
    private String phone;
    private String role;
}
