import cricket from "../data/cricket.json"
import fitness from "../data/fitness.json"
import content from "../data/content.json"
import projects from "../data/projects.json"

/* -------------------- */
/* Cricket */
/* -------------------- */

export function getCricketData() {
  return cricket
}

export function getCareerStats() {
  return cricket.careerStats
}

export function getMatchHistory() {
  return cricket.matchHistory
}

/* -------------------- */
/* Fitness */
/* -------------------- */

export function getFitnessData() {
  return fitness
}

export function getWeightHistory() {
  return fitness.weightData
}

/* -------------------- */
/* Content */
/* -------------------- */

export function getContentPipeline() {
  return content.upcomingContent
}

export function getContentPlatforms() {
  return content.platforms
}

export function getLatestUploads() {
  return content.latestUploads
}

export function getProjects() {
  return projects.projects
}