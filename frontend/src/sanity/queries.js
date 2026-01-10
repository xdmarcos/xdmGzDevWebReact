// Sanity queries for fetching data

export const personalInfoQuery = `*[_type == "personalInfo"][0] {
  name,
  title,
  description,
  aboutContent,
  aboutContentEs,
  cloudTags,
  highlights
}`

export const contactInfoQuery = `*[_type == "contactInfo"][0] {
  title,
  subtitle,
  services,
  formEndpoint,
  email,
  github,
  linkedin
}`

export const skillsQuery = `*[_type == "skill"] | order(order asc) {
  _id,
  name,
  years,
  description,
  category,
  order
}`

export const projectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id,
  title,
  description,
  image,
  features,
  technologies,
  metrics,
  order
}`
