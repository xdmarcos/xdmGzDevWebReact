export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'descriptionEs',
      title: 'Description (Spanish)',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'features',
      title: 'Key Features (English)',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required().min(3),
    },
    {
      name: 'featuresEs',
      title: 'Key Features (Spanish)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'metrics',
      title: 'Project Metrics (English)',
      type: 'string',
      description: 'E.g., "1.5M+ downloads, 4.7★ App Store rating"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metricsEs',
      title: 'Project Metrics (Spanish)',
      type: 'string',
      description: 'Spanish version of metrics',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the app (App Store, GitHub, or live demo)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      metrics: 'metrics',
    },
    prepare(selection) {
      const {title, media, metrics} = selection
      return {
        title,
        subtitle: metrics,
        media,
      }
    },
  },
}
