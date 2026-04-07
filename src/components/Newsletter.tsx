export function Newsletter() {
  return (
    <section className="rounded-[2rem] bg-stone-900 p-8 text-cream shadow-xl sm:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-200">
            Cozy inbox notes
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
            Pantry-friendly recipes, eventually in your inbox.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-stone-200">
            This form is styled for now and ready to connect to your email platform later.
          </p>
        </div>
        <form className="rounded-3xl bg-white/10 p-4" action="#">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 text-stone-900 outline-none placeholder:text-stone-400 focus:ring-4 focus:ring-amber-200/40"
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
            <button
              className="min-h-12 rounded-full bg-amber-300 px-6 font-bold text-stone-900 transition hover:bg-amber-200"
              type="button"
            >
              Join later
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
