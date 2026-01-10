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
      name: 'years',
      title: 'Years of Experience',
      type: 'string',
      description: 'e.g., "5+", "3-5", "10+"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description: 'Brief description of the skill',
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'years',
      category: 'category',
    },
    prepare(selection) {
      const {title, subtitle, category} = selection
      return {
        title,
        subtitle: `${subtitle} years • ${category}`,
      }
    },
  },
}
