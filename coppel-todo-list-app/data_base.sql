/*
Navicat MySQL Data Transfer

Source Server         : Aws-task-coppel
Source Server Version : 80028
Source Host           : task-coppel.cssmnxjbwgdo.us-east-1.rds.amazonaws.com:3306
Source Database       : coppel_task

Target Server Type    : MYSQL
Target Server Version : 80028
File Encoding         : 65001

Date: 2023-02-19 12:51:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tarea
-- ----------------------------
DROP TABLE IF EXISTS `tarea`;
CREATE TABLE `tarea` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `usuario_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5on7p4iqygqwy6fgiia34es6d` (`usuario_id`),
  CONSTRAINT `FK5on7p4iqygqwy6fgiia34es6d` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_5171l57faosmj8myawaucatdw` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
