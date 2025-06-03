import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "3rguhmfn",
  dataset: "production",
  apiVersion: "2025-06-03",
  useCdn: false
})
