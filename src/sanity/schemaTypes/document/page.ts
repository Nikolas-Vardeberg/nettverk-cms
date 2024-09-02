import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  groups: [
    {
      name: "page",
      title: "Page",
      default: true,
    },
    {
      name: "seo",
      title: "Seo"
    }
  ],
  fields: [
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
      group: "page",
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      group: "page",
      of: [
       // defineArrayMember({ type: "Image" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})