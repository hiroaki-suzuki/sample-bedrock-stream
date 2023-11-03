import {
  ConversationRole,
  Message,
  useConversationStore,
} from '../store/useConversationStore.ts'

export function ChatMessage() {
  const messages: Message[] = useConversationStore(state => state.messages)

  return (
    <div className="h-[77vh] overflow-y-scroll">
      {messages.map((message, i) => {
        const roleColor = roleColorClass(message.role)

        return (
          <div key={i} className={`px-10 py-2 ${roleColor}`}>
            {message.texts.map((text, j) => {
              return (
                <p key={j} className="pb-5">
                  {text}
                </p>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

function roleColorClass(role: ConversationRole): string {
  return role === 'assistant' ? 'bg-sky-50' : ''
}
