import { useState } from "react"
import { InfoPage } from "./components/InfoPage"
import { LandingPage } from "./components/LandingPage"
import { OrderPage } from "./components/OrderPage"
import { PaymentPage } from "./components/PaymentPage"
import type { EventCard } from "./types"

type View = "landing" | "order" | "info" | "payment"

type Order = {
  event: EventCard
  quantity: number
  unitPrice: number
  ticketLabel: string
  sector: string
}

function App() {
  const [view, setView] = useState<View>("landing")
  const [order, setOrder] = useState<Order | null>(null)

  const handleBuy = (event: EventCard) => {
    const unitPrice = event.price ?? 250
    setOrder({
      event,
      quantity: 1,
      unitPrice,
      ticketLabel: "Pista Premium",
      sector: "Frente do palco",
    })
    setView("order")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const updateOrder = (updates: Partial<Order>) => {
    setOrder((prev) => (prev ? { ...prev, ...updates } : prev))
  }

  const handleConfirm = () => {
    // Aqui poderia integrar gateway ou mostrar confirmação final
    alert("Pagamento confirmado! Seu QR Code será enviado em instantes.")
    setView("landing")
    setOrder(null)
  }

  if (view === "order" && order) {
    return (
      <OrderPage
        event={order.event}
        quantity={order.quantity}
        selection={{
          label: order.ticketLabel,
          price: order.unitPrice,
          sector: order.sector,
        }}
        onQuantityChange={(quantity) => updateOrder({ quantity })}
        onSelectionChange={(selection) =>
          updateOrder({
            ticketLabel: selection.label,
            unitPrice: selection.price,
            sector: selection.sector,
          })
        }
        onBack={() => setView("landing")}
        onNext={() => setView("info")}
      />
    )
  }

  if (view === "info" && order) {
    return (
      <InfoPage
        event={order.event}
        quantity={order.quantity}
        unitPrice={order.unitPrice}
        ticketLabel={order.ticketLabel}
        sector={order.sector}
        onBack={() => setView("order")}
        onContinue={() => setView("payment")}
      />
    )
  }

  if (view === "payment" && order) {
    return (
      <PaymentPage
        event={order.event}
        quantity={order.quantity}
        unitPrice={order.unitPrice}
        ticketLabel={order.ticketLabel}
        sector={order.sector}
        onBack={() => setView("info")}
        onConfirm={handleConfirm}
      />
    )
  }

  return <LandingPage onBuy={handleBuy} />
}

export default App
