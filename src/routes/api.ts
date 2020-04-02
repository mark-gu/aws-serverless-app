import express from "express";
import HealthService from "../services/healthService";

const api = express.Router();

api.get("/health/ping", (req, res) => {
  const healthService = new HealthService();
  res.json(healthService.ping());
});

export = api;
