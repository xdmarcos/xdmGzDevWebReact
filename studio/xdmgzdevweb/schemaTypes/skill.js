export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'level',
      title: 'Proficiency Level (%)',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(100),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Languages', value: 'Languages'},
          {title: 'Frameworks', value: 'Frameworks'},
          {title: 'Data', value: 'Data'},
          {title: 'Cloud', value: 'Cloud'},
          {title: 'Backend', value: 'Backend'},
          {title: 'Integration', value: 'Integration'},
          {title: 'Tools', value: 'Tools'},
          {title: 'CI/CD', value: 'CI/CD'},
          {title: 'Distribution', value: 'Distribution'},
          {title: 'Architecture', value: 'Architecture'},
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}
