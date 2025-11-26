import type { EventCard } from "../types"

type TicketSelection = {
  label: string
  price: number
  sector: string
}

type Props = {
  event: EventCard
  quantity: number
  selection: TicketSelection
  onQuantityChange: (value: number) => void
  onSelectionChange: (value: TicketSelection) => void
  onNext: () => void
  onBack: () => void
}

export function OrderPage({
  event,
  quantity,
  selection,
  onQuantityChange,
  onSelectionChange,
  onNext,
  onBack,
}: Props) {
  const base = event.price ?? 250
  const sectors: TicketSelection[] = [
    { label: "Pista Premium", price: base + 70, sector: "Frente do palco" },
    { label: "VIP Lounge", price: base + 120, sector: "Camarote lateral" },
    { label: "Cadeira Superior", price: base - 30, sector: "Anel superior" },
    { label: "Arquibancada", price: base - 60, sector: "Arquibancada" },
  ]

  const subtotal = selection.price * quantity
  const fee = Math.max(8, Math.round(subtotal * 0.04))
  const total = subtotal + fee

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-white" />
        <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full bg-gradient-to-br from-amber-200 via-white to-transparent opacity-60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tl from-white via-amber-100 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10 lg:py-14">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900"
        >
          ← Voltar
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Checkout</p>
              <h1 className="text-3xl font-semibold text-slate-900">Pedido</h1>
              <div className="mt-3 flex gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <span className="text-slate-900">Pedido</span>
                <span>Informações</span>
                <span>Pagamento</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-100">
              <img
                src={event.image}
                alt={event.title}
                className="h-20 w-20 rounded-2xl object-cover ring-1 ring-amber-100"
              />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{event.title}</p>
                <p className="text-xs text-slate-600">{event.subtitle}</p>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
                  {event.type}
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
              <p className="text-sm font-semibold text-slate-900">Selecione o setor</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {sectors.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => onSelectionChange(option)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selection.label === option.label
                        ? "border-amber-300 bg-amber-50 text-amber-900 shadow-sm"
                        : "border-amber-100 bg-white text-slate-800 hover:border-amber-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{option.label}</p>
                        <p className="text-xs text-slate-600">{option.sector}</p>
                      </div>
                      <p className="text-sm font-semibold text-slate-900">R$ {option.price}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-amber-100">
                <p className="text-sm font-semibold text-slate-900">Mapa interativo</p>
                <div className="mt-3 overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-white p-6">
                  <div className="mx-auto grid max-w-2xl gap-4">
                    <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold">
                      {sectors.map((option) => {
                        const active = selection.label === option.label
                        return (
                          <button
                            key={option.label}
                            onClick={() => onSelectionChange(option)}
                            className={`rounded-full px-3 py-1 ring-1 transition ${
                              active
                                ? "bg-amber-500 text-slate-900 ring-amber-500 shadow"
                                : "bg-white text-slate-800 ring-amber-100 hover:bg-amber-50"
                            }`}
                          >
                            {option.label}
                          </button>
                        )
                      })}
                    </div>

                    <div className="relative mx-auto flex aspect-[3/2] w-full max-w-xl items-center justify-center rounded-3xl bg-slate-100">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white shadow">
                        Palco
                      </div>
                      {sectors.map((area, idx) => {
                        const layers = [
                          { h: "90%", w: "94%", color: "bg-slate-100 ring-slate-200" },
                          { h: "78%", w: "82%", color: "bg-slate-200 ring-slate-300" },
                          { h: "60%", w: "65%", color: "bg-slate-900/90 ring-amber-200 text-amber-50" },
                          { h: "42%", w: "48%", color: "bg-white ring-slate-200" },
                        ]
                        const layer = layers[idx] ?? layers[layers.length - 1]
                        const active = selection.label === area.label
                        return (
                          <button
                            key={area.label}
                            onClick={() => onSelectionChange(area)}
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 transition focus:outline-none focus-visible:ring-4 ${layer.color} ${
                              active ? "ring-amber-400 shadow-lg shadow-amber-200/50" : ""
                            }`}
                            style={{ height: layer.h, width: layer.w }}
                            aria-label={`Selecionar ${area.label}`}
                          >
                            <span
                              className={`pointer-events-none flex h-full w-full items-center justify-center text-xs font-semibold ${
                                idx === 2 ? "text-amber-50" : "text-slate-800"
                              }`}
                            >
                              {area.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 sm:grid-cols-4">
                      {sectors.map((option) => (
                        <button
                          key={option.label}
                          onClick={() => onSelectionChange(option)}
                          className={`rounded-xl border bg-white px-3 py-2 text-left transition ${
                            selection.label === option.label
                              ? "border-amber-300 shadow-sm"
                              : "border-amber-100 hover:border-amber-200"
                          }`}
                        >
                          <p className="font-semibold text-slate-900">{option.label}</p>
                          <p>R$ {option.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 ring-1 ring-amber-100">
                  <span className="text-sm font-semibold text-slate-900">Quantidade</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                      className="h-8 w-8 rounded-full border border-amber-200 text-lg font-semibold text-amber-800 hover:border-amber-300"
                      aria-label="Diminuir"
                    >
                      –
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onQuantityChange(quantity + 1)}
                      className="h-8 w-8 rounded-full border border-amber-200 text-lg font-semibold text-amber-800 hover:border-amber-300"
                      aria-label="Aumentar"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_-16px_rgba(245,158,11,0.9)] hover:brightness-105"
                  onClick={onNext}
                >
                  Continuar para informações →
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-amber-100 backdrop-blur">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Seu pedido</p>
                <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                <p className="text-sm text-slate-600">{selection.label}</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
                {event.type}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <span>Setor</span>
                <span className="font-semibold text-slate-900">{selection.sector}</span>
              </div>
              <div className="flex justify-between">
                <span>Valor unitário</span>
                <span className="font-semibold text-slate-900">R$ {selection.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantidade</span>
                <span className="font-semibold text-slate-900">{quantity}x</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Taxa do site</span>
                <span className="font-semibold text-slate-900">R$ {fee.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-amber-100 pt-3 text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 rounded-2xl bg-amber-50 p-4 text-sm text-slate-800 ring-1 ring-amber-100">
              <p className="font-semibold">Escolha o setor e continue</p>
              <p>Você ainda poderá revisar os dados pessoais e o pagamento na etapa seguinte.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
