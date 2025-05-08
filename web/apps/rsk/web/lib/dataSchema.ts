import { z } from 'zod'

export const dataSchema = z.object({})

export type SchemaFormValues = z.infer<typeof dataSchema>
