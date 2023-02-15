package com.coppel.test.controller;


import com.coppel.test.model.Task;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController()
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class UserController {

    @PostMapping
    public ResponseEntity<?> create(){
        Map<String, String> result = new HashMap<String, String>();
        result.put("result", "ok");
        return new ResponseEntity(result, HttpStatus.OK);
    }
}
