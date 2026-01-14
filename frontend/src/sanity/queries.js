// Sanity queries for fetching data

export const personalInfoQuery = `*[_type == "personalInfo"][0] {
  name,
  title,
  titleEs,
  description,
  descriptionEs,
  aboutContent,
  aboutContentEs,
  cloudTags,
  cloudTagsEs,
  highlights[] {
    title,
    titleEs,
    description,
    descriptionEs,
    icon
  }
}`

export const contactInfoQuery = `*[_type == "contactInfo"][0] {
  title,
  titleEs,
  subtitle,
  subtitleEs,
  services,
  servicesEs,
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
  descriptionEs,
  category,
  order
}`

export const projectsSectionQuery = `*[_type == "projectsSection"][0] {
  title,
  titleEs,
  subtitle,
  subtitleEs,
  featuresLabel,
  featuresLabelEs,
  technologiesLabel,
  technologiesLabelEs,
  viewButtonLabel,
  viewButtonLabelEs
}`

export const projectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id,
  title,
  description,
  descriptionEs,
  image,
  features,
  featuresEs,
  technologies,
  metrics,
  metricsEs,
  projectUrl,
  order
}`
