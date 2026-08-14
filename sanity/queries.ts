import { groq } from 'next-sanity'

export const getServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    accentColor
  }
`

export const getPartnersQuery = groq`
  *[_type == "partner"] {
    _id,
    name,
    image
  }
`

export const getProductsQuery = groq`
  *[_type == "product"] {
    _id,
    title,
    image,
    "category": category->title,
    "subcategory": subcategory->title
  }
`

export const getEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    coverImage,
    description
  }
`

export const getTeamQuery = groq`
  *[_type == "team"] | order(sortId asc) {
    _id,
    name,
    position,
    image
  }
`