export default {
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'string',
    },
    {
      name: 'aboutContent',
      title: 'About Me Content',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'aboutContentEs',
      title: 'About Me Content (Spanish)',
      type: 'text',
    },
  ],
}
