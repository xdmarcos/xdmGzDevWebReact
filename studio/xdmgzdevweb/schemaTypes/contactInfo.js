export default {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title (English)',
      type: 'string',
      description: 'e.g., "Let\'s Work Together"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleEs',
      title: 'Section Title (Spanish)',
      type: 'string',
      description: 'e.g., "Trabajemos Juntos"',
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle (English)',
      type: 'text',
      description: 'Brief description below the title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitleEs',
      title: 'Section Subtitle (Spanish)',
      type: 'text',
      description: 'Spanish version of subtitle',
    },
    {
      name: 'services',
      title: 'Services List (English)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of services you can help with',
      validation: Rule => Rule.required().min(3),
    },
    {
      name: 'servicesEs',
      title: 'Services List (Spanish)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Spanish version of services',
    },
    {
      name: 'formEndpoint',
      title: 'Form Submission Endpoint',
      type: 'string',
      description: 'URL for form submissions (e.g., Web3Forms, Formspree, or custom endpoint)',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'string',
      description: 'Without https://',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'string',
      description: 'Without https://',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email',
    },
  },
}
