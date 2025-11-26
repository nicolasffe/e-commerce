export type EventKind = "show" | "sport" | "festival"

export type EventCard = {
  id: string
  title: string
  subtitle?: string
  image: string
  tag?: string
  price?: number
  type: EventKind
}
