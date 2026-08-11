import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Our Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position / Job Title',
      type: 'string',
      description: 'e.g., Managing Director, R&D Specialist',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true, 
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortId',
      title: 'Display Order (Sort ID)',
      type: 'number',
      description: 'Enter a number to position this person (e.g., 1 for Top Management, 2 for Managers, etc.)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order (1-99)',
      name: 'sortIdAsc',
      by: [{ field: 'sortId', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})