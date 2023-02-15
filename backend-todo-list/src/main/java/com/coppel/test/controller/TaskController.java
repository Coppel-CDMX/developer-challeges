package com.coppel.test.controller;

import com.coppel.test.model.Task;
import com.coppel.test.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController()
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskService taskService;

    @GetMapping
    public ResponseEntity<?> taskList(){
        List<Task> taskList = taskService.findAll();
        return new ResponseEntity(taskList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Task task){
        taskService.save(task);
        return new ResponseEntity(task, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Task task, @PathVariable("id") Long id){

        Optional<Task>  dataTaskDb = taskService.findById(id);
        if(dataTaskDb.isEmpty()){
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }

        task.setId(dataTaskDb.get().getId());
        taskService.save(task);
        return new ResponseEntity(task, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){

        Optional<Task>  dataTaskDb = taskService.findById(id);
        if(dataTaskDb.isEmpty()){
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }

        taskService.deleteById(id);

        Map<String, String> result = new HashMap<String, String>();
        result.put("result", "ok");
        return new ResponseEntity(result, HttpStatus.OK);
    }

}
