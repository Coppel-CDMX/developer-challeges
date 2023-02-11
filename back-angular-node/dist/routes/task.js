"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.post('/', validate_token_1.default, task_1.getTasks);
router.post('/newTask', validate_token_1.default, task_1.newTask);
router.post('/upTask', validate_token_1.default, task_1.upTask);
router.delete('/delTask', validate_token_1.default, task_1.delTask);
exports.default = router;
