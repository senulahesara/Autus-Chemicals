import { type SchemaTypeDefinition } from 'sanity'

import category from './category'
import subcategory from './subcategory'
import product from './product'
import service from './service'
import event from './event'
import partner from './partner'
import team from './team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    subcategory,
    product,
    service,
    event,
    partner,
    team,
  ],
}