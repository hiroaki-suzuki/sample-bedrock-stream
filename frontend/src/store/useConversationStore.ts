import { create } from 'zustand'

export type ConversationRole = 'human' | 'assistant'

export type Message = {
  role: ConversationRole
  texts: string[]
}

interface ConversationStore {
  messages: Message[]
  postMessage: (message: string) => void
}

export const useConversationStore = create<ConversationStore>()(set => ({
  messages: [],
  postMessage: async message => {
    const msg: Message = { role: 'human', texts: [message] }
    const answer: Message = { role: 'assistant', texts: ['ほげふがほげふが'] }

    set(state => ({ messages: [...state.messages, msg, answer] }))
  },
}))
