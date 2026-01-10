import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
})

// Helper to generate image URLs from Sanity image references
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
