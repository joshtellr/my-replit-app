import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema (base schema included)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact Message schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  newsletter: boolean("newsletter").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
  newsletter: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Stats schema
export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  value: text("value").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").default("text-primary"),
});

export const insertStatsSchema = createInsertSchema(stats).pick({
  title: true,
  value: true,
  icon: true,
  iconColor: true,
});

export type InsertStats = z.infer<typeof insertStatsSchema>;
export type Stats = typeof stats.$inferSelect;

// Resume schema
export const resumeExperiences = pgTable("resume_experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  location: text("location").notNull(),
  logo: text("logo").notNull(),
  responsibilities: json("responsibilities").notNull().$type<string[]>(),
  skills: json("skills").notNull().$type<{name: string, color: string}[]>(),
});

export const resumeEducation = pgTable("resume_education", {
  id: serial("id").primaryKey(),
  institution: text("institution").notNull(),
  degree: text("degree").notNull(),
  period: text("period").notNull(),
  location: text("location").notNull(),
  logo: text("logo").notNull(),
  achievements: json("achievements").notNull().$type<string[]>(),
  keywords: json("keywords").notNull().$type<{name: string, color: string}[]>(),
});

export const resumeSkills = pgTable("resume_skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  level: text("level").notNull(),
});

export const resumeCertifications = pgTable("resume_certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  date: text("date").notNull(),
});

// Projects schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  status: text("status").notNull(), // "Completed", "In Progress", "Planning"
  category: text("category").notNull(),
  categoryColor: text("category_color").notNull(),
  contributors: json("contributors").notNull().$type<{avatarUrl: string}[]>(),
  lastUpdated: text("last_updated").notNull(),
  caseStudyUrl: text("case_study_url"),
  featured: boolean("featured").default(false),
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  imageUrl: true,
  status: true,
  category: true,
  categoryColor: true,
  contributors: true,
  lastUpdated: true,
  caseStudyUrl: true,
  featured: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Blog Articles schema
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  readTime: text("read_time").notNull(),
  category: text("category").notNull(),
  icon: text("icon").notNull(),
  iconBgColor: text("icon_bg_color").notNull(),
  iconColor: text("icon_color").notNull(),
  summary: text("summary").notNull(),
  url: text("url").notNull(),
  featured: boolean("featured").default(false),
});

export const insertArticleSchema = createInsertSchema(articles).pick({
  title: true,
  date: true,
  readTime: true,
  category: true,
  icon: true,
  iconBgColor: true,
  iconColor: true,
  summary: true,
  url: true,
  featured: true,
});

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;
