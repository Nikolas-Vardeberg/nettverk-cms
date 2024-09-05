import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'customImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'string',
      name: 'alt',
      title: 'Image Alt',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Image',
        media,
        title,
      }
    },
  },
})