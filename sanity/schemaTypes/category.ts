import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Main Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
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
      description: 'Used for the product category URL (e.g., /products/rubber-white-clear). Click "Generate" after entering the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'array', 
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})