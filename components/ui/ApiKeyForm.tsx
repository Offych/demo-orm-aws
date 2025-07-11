'use client';

import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Minus } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { apiKeyFormDefaults } from "@/lib/apiKeyFormDefaults"
import { submitForm } from "@/lib/utils"

interface FormValues {
  apiKey: string
  apiSecrets: string[] // main + additional secrets
  environment: string
  project: string
  team: string
  provider: string
  modelType: string
  reminderToUpgrade: boolean
}

function storeFormDataLocally(data: unknown) {
  // Accepts any, but expects an object
  const obj = typeof data === "object" && data !== null ? data as Partial<FormValues> : {};
  // Combine apiSecret and additionalApiSecrets into apiSecrets array
  const apiSecrets = [
    obj.apiSecrets?.[0], // main secret
    ...(obj.apiSecrets?.slice(1) ?? []) // additional secrets
  ].filter(Boolean);
  const dataWithApiSecrets = { ...obj, apiSecrets };
  try {
    const json = JSON.stringify(dataWithApiSecrets, null, 2)
    localStorage.setItem("apiKeyFormData", json)
    console.log("Stored form data:", json)
  } catch (e) {
    console.error("Failed to store form data:", e)
  }
}

export function ApiKeyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      apiKey: apiKeyFormDefaults.apiKey,
      apiSecrets: [apiKeyFormDefaults.apiSecret],
      environment: apiKeyFormDefaults.environment,
      project: apiKeyFormDefaults.project,
      team: apiKeyFormDefaults.team,
      provider: apiKeyFormDefaults.provider,
      modelType: apiKeyFormDefaults.modelType,
      reminderToUpgrade: apiKeyFormDefaults.reminderToUpgrade,
    },
    mode: "onChange",
  })

  const [showSecrets, setShowSecrets] = useState<boolean[]>([true])
  const maxSecrets = 20
  const [isSubmitting, setIsSubmitting] = useState(false)
  const apiKeyRef = useRef<HTMLInputElement>(null)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null)

  useEffect(() => {
    apiKeyRef.current?.focus()
  }, [])

  const apiSecrets = watch("apiSecrets")

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      const result = await submitForm("/api/apikey", data as unknown as Record<string, unknown>)
      setSubmitResult(result)
      if (result.success) {
        storeFormDataLocally(data)
        reset({
          apiKey: "",
          apiSecrets: [""],
          environment: "",
          project: "",
          team: "",
          provider: "",
          modelType: "",
          reminderToUpgrade: false,
        })
        setShowSecrets([true])
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddSecret = () => {
    if (apiSecrets.length < maxSecrets) {
      setValue("apiSecrets", [...apiSecrets, ""])
      setShowSecrets(arr => [...arr, true])
    }
  }

  const handleDeleteSecret = (i: number) => {
    if (apiSecrets.length === 1) return // always keep at least one
    setValue("apiSecrets", apiSecrets.filter((_, j) => j !== i))
    setShowSecrets(arr => arr.filter((_, j) => j !== i))
  }

  const handleToggleShow = (i: number) => {
    setShowSecrets(arr => arr.map((v, j) => j === i ? !v : v))
  }

  // Helper for live char count
  const charCount = (val: string | undefined, max: number) => `${val?.length || 0}/${max}`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 max-w-md mx-auto px-2 sm:px-0">
      <div className="mb-2 sm:mb-0">
        <label htmlFor="api-key" className="block mb-1 font-medium">API Key Identifier</label>
        <div className="relative">
          <Input
            id="api-key"
            type="text"
            placeholder="Enter your API key"
            maxLength={75}
            aria-invalid={!!errors.apiKey}
            aria-describedby={errors.apiKey ? "api-key-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("apiKey", {
              required: "API Key is required",
              maxLength: { value: 75, message: "API Key cannot exceed 75 characters." },
            })}
            ref={el => {
              apiKeyRef.current = el;
              if (register("apiKey").ref) register("apiKey").ref(el);
            }}
          />
          {(!errors.apiKey && watch("apiKey")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="api-key-error" aria-live="polite" className="text-red-500 text-xs">{errors.apiKey?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("apiKey"), 75)}</span>
        </div>
      </div>
      {apiSecrets.map((_, i) => (
        <div key={i}>
          <label htmlFor={`api-secret-${i}`} className="block mb-1 font-medium">API Secret {i + 1}</label>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex-grow">
              <Input
                id={`api-secret-${i}`}
                type={showSecrets[i] ? "text" : "password"}
                placeholder={`Enter API secret #${i + 1}`}
                maxLength={75}
                aria-invalid={!!(errors.apiSecrets && errors.apiSecrets[i])}
                aria-describedby={errors.apiSecrets && errors.apiSecrets[i] ? `api-secret-error-${i}` : undefined}
                onFocus={e => e.target.select()}
                {...register(`apiSecrets.${i}`, {
                  required: "API Secret is required",
                  maxLength: { value: 75, message: "API Secret cannot exceed 75 characters." },
                })}
              />
            </div>
            <div className="flex gap-2 ml-auto">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                tabIndex={-1}
                onClick={() => handleToggleShow(i)}
              >
                {showSecrets[i] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
              {apiSecrets.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-red-600 transition-colors"
                  tabIndex={-1}
                  onClick={() => handleDeleteSecret(i)}
                  aria-label="Delete API secret"
                >
                  <Minus className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span id={`api-secret-error-${i}`} aria-live="polite" className="text-red-500 text-xs">{errors.apiSecrets && errors.apiSecrets[i]?.message}</span>
            <span className="text-xs text-muted-foreground">{charCount(watch(`apiSecrets.${i}`), 75)}</span>
          </div>
        </div>
      ))}
      <div>
        <Button
          type="button"
          className="mb-2 w-full"
          variant="default"
          onClick={handleAddSecret}
          disabled={apiSecrets.length >= maxSecrets}
        >
          Add additional API secret
        </Button>
      </div>
      <div className="mb-2 sm:mb-0">
        <label htmlFor="environment" className="block mb-1 font-medium">Environment</label>
        <div className="relative">
          <Input
            id="environment"
            type="text"
            placeholder="e.g. production, staging"
            maxLength={50}
            aria-invalid={!!errors.environment}
            aria-describedby={errors.environment ? "environment-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("environment", {
              required: "Environment is required",
              maxLength: { value: 50, message: "Environment cannot exceed 50 characters." },
            })}
          />
          {(!errors.environment && watch("environment")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="environment-error" aria-live="polite" className="text-red-500 text-xs">{errors.environment?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("environment"), 50)}</span>
        </div>
      </div>
      <div className="mb-2 sm:mb-0">
        <label htmlFor="project" className="block mb-1 font-medium">Project</label>
        <div className="relative">
          <Input
            id="project"
            type="text"
            placeholder="Project name"
            maxLength={50}
            aria-invalid={!!errors.project}
            aria-describedby={errors.project ? "project-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("project", {
              required: "Project is required",
              maxLength: { value: 50, message: "Project cannot exceed 50 characters." },
            })}
          />
          {(!errors.project && watch("project")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="project-error" aria-live="polite" className="text-red-500 text-xs">{errors.project?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("project"), 50)}</span>
        </div>
      </div>
      <div className="mb-2 sm:mb-0">
        <label htmlFor="team" className="block mb-1 font-medium">Team</label>
        <div className="relative">
          <Input
            id="team"
            type="text"
            placeholder="Team name"
            maxLength={50}
            aria-invalid={!!errors.team}
            aria-describedby={errors.team ? "team-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("team", {
              required: "Team is required",
              maxLength: { value: 50, message: "Team cannot exceed 50 characters." },
            })}
          />
          {(!errors.team && watch("team")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="team-error" aria-live="polite" className="text-red-500 text-xs">{errors.team?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("team"), 50)}</span>
        </div>
      </div>
      <div className="mb-2 sm:mb-0">
        <label htmlFor="provider" className="block mb-1 font-medium">Provider</label>
        <div className="relative">
          <Input
            id="provider"
            type="text"
            placeholder="Provider (e.g. OpenAI, Azure)"
            maxLength={50}
            aria-invalid={!!errors.provider}
            aria-describedby={errors.provider ? "provider-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("provider", {
              required: "Provider is required",
              maxLength: { value: 50, message: "Provider cannot exceed 50 characters." },
            })}
          />
          {(!errors.provider && watch("provider")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="provider-error" aria-live="polite" className="text-red-500 text-xs">{errors.provider?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("provider"), 50)}</span>
        </div>
      </div>
      <div className="mb-2 sm:mb-0">
        <label htmlFor="model-type" className="block mb-1 font-medium">Model Type</label>
        <div className="relative">
          <Input
            id="model-type"
            type="text"
            placeholder="Model type (e.g. GPT-4)"
            maxLength={50}
            aria-invalid={!!errors.modelType}
            aria-describedby={errors.modelType ? "model-type-error" : undefined}
            onFocus={e => e.target.select()}
            {...register("modelType", {
              required: "Model Type is required",
              maxLength: { value: 50, message: "Model Type cannot exceed 50 characters." },
            })}
          />
          {(!errors.modelType && watch("modelType")) && (
            <span className="absolute right-2 top-2 text-green-500">✓</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span id="model-type-error" aria-live="polite" className="text-red-500 text-xs">{errors.modelType?.message}</span>
          <span className="text-xs text-muted-foreground">{charCount(watch("modelType"), 50)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="reminder-to-upgrade"
          checked={watch("reminderToUpgrade")}
          onCheckedChange={val => setValue("reminderToUpgrade", !!val)}
        />
        <label htmlFor="reminder-to-upgrade" className="font-medium">Reminder to upgrade</label>
      </div>
      <Button type="submit" disabled={isSubmitting || !isValid} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      {submitResult && (
        <div className={submitResult.success ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
          {submitResult.success ? "API Key saved!" : submitResult.error || "Error saving API Key."}
        </div>
      )}
    </form>
  )
} 