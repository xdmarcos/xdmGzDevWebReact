// Sanity queries for fetching data

export const personalInfoQuery = `*[_type == "personalInfo"][0] {
  name,
  title,
  description,
  email,
  github,
  linkedin,
  aboutContent,
  aboutContentEs
}`

export const skillsQuery = `*[_type == "skill"] | order(order asc) {
  _id,
  name,
  level,
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
