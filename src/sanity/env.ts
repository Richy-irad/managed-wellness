export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-09-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// Server-only (no NEXT_PUBLIC_ prefix): the "development" dataset is private,
// so reads need a token. Never expose this to the browser.
export const readToken = assertValue(
  process.env.SANITY_API_READ_TOKEN,
  'Missing environment variable: SANITY_API_READ_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
