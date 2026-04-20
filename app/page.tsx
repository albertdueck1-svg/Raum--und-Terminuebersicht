import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-16 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Raumbuchungssystem
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Willkommen in deiner ersten Next.js Buchungsapp
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Hier bauen wir Schritt fuer Schritt eine Uebersicht fuer Raeume,
            Buchungen und den interaktiven Lageplan auf.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/Raumplan"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Lageplan öffnen
            </Link>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
            >
              Next.js Doku
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <h2 className="text-xl font-semibold">Lageplan</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Zeigt das PDF des Gebaeudes mit farbigen Overlays fuer Raeume.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <h2 className="text-xl font-semibold">Buchungen</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Spaeter koennen hier Zeiten, Personen und Status angezeigt werden.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <h2 className="text-xl font-semibold">Naechster Schritt</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Als Nächstes koennen wir Klickbereiche, Tooltips oder echte
              Raumdaten anbinden.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
