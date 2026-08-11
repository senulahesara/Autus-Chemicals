import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Main Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory (Optional)',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      description: 'Select a subcategory (Only applicable subcategories will be shown based on the Main Category selected above)',
      options: {
        filter: ({ document }) => {
          if (!document.category) {
            return { filter: 'false' } 
          }
          return {
            filter: 'parentCategory._ref == $categoryId',
            params: { 
              // @ts-ignore
              categoryId: document.category._ref 
            }
          }
        }
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'image',
    },
  },
})