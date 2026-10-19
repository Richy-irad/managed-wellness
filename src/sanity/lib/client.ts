import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, readToken } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // false so the Live Content API's live-update subscription always sees fresh data
  token: readToken, // dataset is private, so reads require a token (server-side only)
})
