import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subcategory',
  title: 'Sub Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Subcategory Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentCategory',
      title: 'Main Category',
      description: 'Select the main category this subcategory belongs to',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})