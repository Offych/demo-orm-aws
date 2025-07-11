import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ApiSubmitResult<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

/**
 * Generic form submit utility for any endpoint and data.
 * @param endpoint - API endpoint (e.g. '/api/apikey')
 * @param data - Data to send (object)
 * @param options - Optional: method, headers, etc.
 */
export async function submitForm<T = unknown>(
  endpoint: string,
  data: Record<string, unknown>,
  options?: { method?: string; headers?: Record<string, string> }
): Promise<ApiSubmitResult<T>> {
  try {
    const res = await fetch(endpoint, {
      method: options?.method || "POST",
      headers: { "Content-Type": "application/json", ...(options?.headers || {}) },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      const responseData = await res.json()
      return { success: true, data: responseData }
    } else {
      const err = await res.json()
      return { success: false, error: err?.error || "API error" }
    }
  } catch (e) {
    return { success: false, error: (e as Error).message }
  }
}
