import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-16 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Lageplan mit Raumstatus und Buchungsinformationen
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Willkommen im New Home des ICF Münchens
          </h1>
      
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/Raumplan"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Lageplan öffnen
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
