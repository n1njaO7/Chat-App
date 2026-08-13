
export type ChatMessage =
  | { type: "chat"; username: string; text: string; timestamp: number }
  | { type: "system"; text: string; timestamp: number };