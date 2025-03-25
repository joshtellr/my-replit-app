import express, { type Express } from "express";
import type { Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertUserSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  
  // Stats endpoint
  apiRouter.get("/stats", async (_req: Request, res: Response) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
  
  // Resume endpoints
  apiRouter.get("/resume", async (_req: Request, res: Response) => {
    try {
      const resume = await storage.getResume();
      res.json(resume);
    } catch (error) {
      console.error("Error fetching resume:", error);
      res.status(500).json({ message: "Failed to fetch resume data" });
    }
  });
  
  apiRouter.get("/resume/highlights", async (_req: Request, res: Response) => {
    try {
      const highlights = await storage.getResumeHighlights();
      res.json(highlights);
    } catch (error) {
      console.error("Error fetching resume highlights:", error);
      res.status(500).json({ message: "Failed to fetch resume highlights" });
    }
  });
  
  // Projects endpoints
  apiRouter.get("/projects", async (_req: Request, res: Response) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  
  apiRouter.get("/projects/recent", async (_req: Request, res: Response) => {
    try {
      const recentProjects = await storage.getRecentProjects();
      res.json(recentProjects);
    } catch (error) {
      console.error("Error fetching recent projects:", error);
      res.status(500).json({ message: "Failed to fetch recent projects" });
    }
  });
  
  // Blog articles endpoints
  apiRouter.get("/articles", async (_req: Request, res: Response) => {
    try {
      const articles = await storage.getArticles();
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ message: "Failed to fetch articles" });
    }
  });
  
  apiRouter.get("/articles/recent", async (_req: Request, res: Response) => {
    try {
      const recentArticles = await storage.getRecentArticles();
      res.json(recentArticles);
    } catch (error) {
      console.error("Error fetching recent articles:", error);
      res.status(500).json({ message: "Failed to fetch recent articles" });
    }
  });
  
  // Contact form endpoint
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const result = await storage.saveContactMessage(contactData);
      res.status(201).json(result);
    } catch (error) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details,
        });
      }
      
      console.error("Error saving contact message:", error);
      res.status(500).json({ message: "Failed to save contact message" });
    }
  });
  
  // Mount the API router
  app.use("/api", apiRouter);

  const httpServer = createServer(app);

  return httpServer;
}
