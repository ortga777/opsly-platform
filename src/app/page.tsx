import {
  ArrowRight,
  BarChart3,
  Check,
  CircleCheck,
  Command,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Revenue", value: "$48,290", change: "+12.8%" },
  { label: "Orders", value: "1,284", change: "+8.4%" },
  { label: "Tasks done", value: "94.2%", change: "+5.1%" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl bg-white text-black shadow-[0_0_35px_rgba(139,124,255,.22)]">
            <Sparkles size={18} strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight">opsly</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#product" className="transition hover:text-white">Product</a>
          <a href="#intelligence" className="transition hover:text-white">Intelligence</a>
          <a href="#workflow" className="transition hover:text-white">Workflow</a>
        </div>

        <button className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[.08]">
          Sign in
        </button>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-zinc-300">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Built for the next generation of businesses
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-[-.055em] text-white sm:text-6xl lg:text-8xl">
            Simple operations.
            <span className="block bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Smarter businesses.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
            One intelligent workspace for the work that keeps your business moving —
            tasks, sales, products, people, and decisions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
              Start for free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="rounded-full border border-white/10 bg-white/[.035] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[.07]">
              Explore the workspace
            </button>
          </div>
        </div>

        <div id="product" className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(139,124,255,.13),transparent_60%)] blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]/95 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-white/[.07] px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                </div>
                <span className="ml-3 text-xs text-zinc-500">Workspace / Overview</span>
              </div>
              <div className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 sm:flex">
                <Command size={13} /> K
              </div>
            </div>

            <div className="grid lg:grid-cols-[190px_1fr]">
              <aside className="hidden border-r border-white/[.07] p-4 lg:block">
                <div className="mb-6 px-2 text-xs font-medium uppercase tracking-widest text-zinc-600">Workspace</div>
                <div className="space-y-1">
                  {["Overview", "Tasks", "Sales", "Products", "Team"].map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs ${index === 0 ? "bg-white/[.07] text-white" : "text-zinc-500"}`}
                    >
                      <span className="size-1.5 rounded-full bg-current opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl border border-white/[.07] bg-white/[.025] p-3">
                  <div className="mb-2 flex items-center gap-2 text-xs text-zinc-300">
                    <Sparkles size={13} /> Opsly AI
                  </div>
                  <p className="text-[11px] leading-5 text-zinc-600">Ask anything about your operations.</p>
                </div>
              </aside>

              <div className="p-5 sm:p-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">Tuesday, September 24</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight">Good morning.</h2>
                  </div>
                  <div className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-500 sm:block">Last 30 days</div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-4">
                      <p className="text-xs text-zinc-500">{metric.label}</p>
                      <div className="mt-2 flex items-end justify-between gap-2">
                        <strong className="text-xl tracking-tight">{metric.value}</strong>
                        <span className="text-[11px] text-emerald-400">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-[1.45fr_.9fr]">
                  <div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-500">Business activity</p>
                        <p className="mt-1 text-sm font-medium">Revenue performance</p>
                      </div>
                      <BarChart3 size={16} className="text-zinc-600" />
                    </div>
                    <div className="mt-7 flex h-36 items-end gap-2">
                      {[34, 48, 43, 61, 56, 72, 66, 79, 74, 91, 84, 96].map((height, index) => (
                        <div key={index} className="group flex flex-1 items-end">
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-violet-500/20 to-violet-300/70 transition group-hover:from-violet-500/40 group-hover:to-violet-200"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="intelligence" className="rounded-2xl border border-violet-400/15 bg-violet-400/[.045] p-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-violet-200">
                      <Sparkles size={14} /> Opsly AI
                    </div>
                    <p className="mt-4 text-sm font-medium leading-6 text-zinc-200">
                      Your operations look healthy, but 3 tasks may impact this week&apos;s sales.
                    </p>
                    <div className="mt-4 space-y-2 text-xs text-zinc-500">
                      <div className="flex items-center gap-2"><CircleCheck size={13} className="text-emerald-400" /> 12 tasks completed today</div>
                      <div className="flex items-center gap-2"><CircleCheck size={13} className="text-emerald-400" /> Inventory stable</div>
                      <div className="flex items-center gap-2"><Zap size={13} className="text-amber-300" /> 3 items need attention</div>
                    </div>
                    <button className="mt-5 flex items-center gap-1 text-xs font-medium text-white">
                      Review insights <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="border-t border-white/[.06]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3 lg:px-8">
          {[
            [Layers3, "One workspace", "Keep the operational pieces of your business connected instead of scattered across tools."],
            [Sparkles, "Intelligence built in", "Turn business activity into useful signals, summaries and next actions."],
            [Check, "Action over noise", "Opsly is designed to help teams decide what matters and move it forward."],
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="rounded-2xl border border-white/[.07] bg-white/[.02] p-6">
              <div className="mb-5 grid size-10 place-items-center rounded-xl bg-white/[.06] text-zinc-200">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[.06] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
          <span>© 2026 Opsly. Built for smarter operations.</span>
          <span>Simple operations. Smarter businesses.</span>
        </div>
      </footer>
    </main>
  );
}
