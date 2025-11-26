import type { EventCard } from "../types"

type Props = {
  event: EventCard
  quantity: number
  unitPrice: number
  ticketLabel: string
  sector: string
  onBack: () => void
  onContinue: () => void
}

const inputStyle =
  "w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"

export function InfoPage({
  event,
  quantity,
  unitPrice,
  ticketLabel,
  sector,
  onBack,
  onContinue,
}: Props) {
  const subtotal = unitPrice * quantity
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
              <h1 className="text-3xl font-semibold text-slate-900">Informações</h1>
              <div className="mt-3 flex gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <span>Pedido</span>
                <span className="text-slate-900">Informações</span>
                <span>Pagamento</span>
              </div>
            </div>

            <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-amber-100 backdrop-blur">
              <h2 className="text-sm font-semibold text-slate-900">Dados de contato</h2>
              <div className="mt-4 grid gap-3">
                <input className={inputStyle} placeholder="Email" />
                <input className={inputStyle} placeholder="Telefone" />
              </div>

              <h3 className="mt-6 text-sm font-semibold text-slate-900">Endereço</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input className={inputStyle} placeholder="Nome" />
                <input className={inputStyle} placeholder="Sobrenome" />
              </div>
              <div className="mt-3 grid gap-3">
                <input className={inputStyle} placeholder="País" />
                <input className={inputStyle} placeholder="Estado / Região" />
                <input className={inputStyle} placeholder="Endereço" />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr,0.8fr]">
                <input className={inputStyle} placeholder="Cidade" />
                <input className={inputStyle} placeholder="CEP" />
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg">
                <div className="flex flex-col">
                  <span>Segurança garantida</span>
                  <span className="text-xs text-slate-200">Checkout protegido e sem filas</span>
                </div>
                <button
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:brightness-105"
                  onClick={onContinue}
                >
                  Ir para pagamento →
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-amber-100 backdrop-blur">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Seu pedido</p>
                <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                <p className="text-sm text-slate-600">{event.subtitle}</p>
                <p className="text-xs text-slate-500">{sector}</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
                {event.type}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-amber-100">
              <div className="h-16 w-20 overflow-hidden rounded-xl">
                <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{ticketLabel}</p>
                <p className="text-xs text-slate-600">Ingresso digital · assento garantido</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-white px-2 py-1 ring-1 ring-amber-100">
                    {quantity}x
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 ring-1 ring-amber-100">
                    Check-in antecipado
                  </span>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-900">
                R$ {(unitPrice * quantity).toFixed(2)}
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
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
              <p className="font-semibold">Revisar antes de pagar</p>
              <p>Confirme titular, documento e e-mail para receber o QR Code instantaneamente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
