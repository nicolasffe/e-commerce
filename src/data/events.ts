import type { EventCard } from "../types"

export const nextConcerts: EventCard[] = [
  {
    id: "snoop",
    title: "Snoop Dogg",
    subtitle: "Tour 2025 · Los Angeles, CA",
    image: "https://images.pexels.com/photos/1647161/pexels-photo-1647161.jpeg",
    tag: "Destaque",
    price: 280,
    type: "show",
  },
  {
    id: "andrea-lavoe",
    title: "Andrea Lavoe",
    subtitle: "Live in NYC · 12 Jul",
    image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
    price: 240,
    type: "show",
  },
  {
    id: "trigonofy",
    title: "Trigonofy",
    subtitle: "World Tour · Madrid",
    image: "https://images.pexels.com/photos/1647161/pexels-photo-1647161.jpeg",
    price: 210,
    type: "show",
  },
  {
    id: "prof-woods",
    title: "Prof. Woods",
    subtitle: "Exclusive Show · Chicago",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    price: 230,
    type: "show",
  },
  {
    id: "future-beats",
    title: "Future Beats",
    subtitle: "Neon Nights · Tokyo",
    image: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
    price: 260,
    type: "show",
  },
  {
    id: "luna-waves",
    title: "Luna & The Waves",
    subtitle: "Sunset Sessions · Barcelona",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    price: 190,
    type: "show",
  },
]

export const sportsTickets: EventCard[] = [
  {
    id: "football",
    title: "Football",
    subtitle: "League Finals",
    image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
    price: 320,
    type: "sport",
  },
  {
    id: "nba",
    title: "NBA",
    subtitle: "Playoffs",
    image: "https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg",
    price: 350,
    type: "sport",
  },
  {
    id: "nfl",
    title: "NFL",
    subtitle: "Regular Season",
    image: "https://images.pexels.com/photos/161820/american-football-football-player-tackle-sport-161820.jpeg",
    price: 290,
    type: "sport",
  },
  {
    id: "nhl",
    title: "NHL",
    subtitle: "Winter Classic",
    image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
    price: 270,
    type: "sport",
  },
  {
    id: "formula-e",
    title: "Formula E",
    subtitle: "E-Prix São Paulo",
    image: "https://images.pexels.com/photos/159515/race-car-racing-speed-race-159515.jpeg",
    price: 310,
    type: "sport",
  },
  {
    id: "tennis-masters",
    title: "Tenis Masters",
    subtitle: "Quadra central",
    image: "https://images.pexels.com/photos/1405355/pexels-photo-1405355.jpeg",
    price: 220,
    type: "sport",
  },
]

export const festivals: EventCard[] = [
  {
    id: "summerfest",
    title: "Summerfest",
    subtitle: "15 Jul · Miami, FL",
    image: "https://images.pexels.com/photos/1647161/pexels-photo-1647161.jpeg",
    price: 180,
    type: "festival",
  },
  {
    id: "rock-in-rio",
    title: "Rock in Rio",
    subtitle: "10 Ago · Rio de Janeiro",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    price: 420,
    type: "festival",
  },
  {
    id: "tomorrowland",
    title: "Tomorrowland",
    subtitle: "01 Set · Belgium",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    price: 520,
    type: "festival",
  },
  {
    id: "aurora-lights",
    title: "Aurora Lights",
    subtitle: "18 Set · Oslo",
    image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
    price: 260,
    type: "festival",
  },
  {
    id: "desert-echoes",
    title: "Desert Echoes",
    subtitle: "30 Out · Nevada",
    image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
    price: 240,
    type: "festival",
  },
]

export const highlight = nextConcerts[0]
