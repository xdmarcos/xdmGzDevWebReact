import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production'

// Only create client if we have a valid project ID
const isValidProjectId = projectId && projectId !== 'YOUR_PROJECT_ID' && projectId !== 'placeholder' && /^[a-z0-9-]+$/.test(projectId)

export const client = isValidProjectId ? createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
}) : null

// Helper to generate image URLs from Sanity image references
const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source) {
  if (!builder) return null
  return builder.image(source)
}

export const isSanityConfigured = isValidProjectId

