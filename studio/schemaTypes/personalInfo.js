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
    {
      name: 'cloudTags',
      title: 'Cloud Tags/Badges',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags displayed below about content (e.g., "10+ Years", "Swift Expert")',
    },
    {
      name: 'highlights',
      title: 'About Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Highlight Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g., Code2, Smartphone, Layers, CheckCircle2)',
              options: {
                list: [
                  {title: 'Code (Code2)', value: 'Code2'},
                  {title: 'Smartphone', value: 'Smartphone'},
                  {title: 'Layers', value: 'Layers'},
                  {title: 'Check Circle (CheckCircle2)', value: 'CheckCircle2'},
                  {title: 'Award', value: 'Award'},
                  {title: 'Zap', value: 'Zap'},
                  {title: 'Target', value: 'Target'},
                  {title: 'Sparkles', value: 'Sparkles'},
                ],
              },
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: Rule => Rule.max(6),
    },
  ],
}
