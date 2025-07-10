export const apiKeyFormDefaults = {
  apiKey: "Demo Key",
  apiSecret: "113d0fc9-c086-4772-ae6b-9d9aa358e525",
  environment: "Production",
  project: "Demo Project",
  team: "DevOps",
  provider: "OpenAI",
  modelType: "GPT-4",
  reminderToUpgrade: true,
}

// Prisma type for API key form inputs
export type ApiKeyFormPrisma = {
  apiKey: string
  apiSecret: string
  environment: string
  project: string
  team: string
  provider: string
  modelType: string
  reminderToUpgrade: boolean
} 