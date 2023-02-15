package com.coppel.test.service;

import com.coppel.test.model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();
    Task save(Task task);
    Optional<Task> findById(Long id);
    void deleteById(Long id);
}
