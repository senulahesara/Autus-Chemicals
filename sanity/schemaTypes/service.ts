import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Used for the service page URL (e.g., /services/your-service-name)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      description: 'Upload a clean PNG or SVG icon',
      options: {
        accept: 'image/svg+xml, image/png',
      },
    }),
    defineField({
      name: 'accentColor',
      title: 'Hover Accent Color',
      type: 'string',
      description: 'Select the brand color to highlight this service card when hovered',
      options: {
        list: [
          { title: 'Brand Green', value: '#01CD61' },
          { title: 'Brand Cyan', value: '#0089F7' },
          { title: 'Brand Magenta', value: '#E6007E' },
          { title: 'Brand Lime', value: '#BED600' },
        ],
        layout: 'radio',
      },
      initialValue: '#01CD61', 
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Enter a number to sort how services appear (e.g., 1, 2, 3)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
  },
})