export default function EditorialBlock() {
  return (
    <section className="px-6 py-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h2 className="text-3xl font-semibold">
          Approach
        </h2>
        <p className="mt-4 text-white/60">
          I focus on building products that balance performance,
          aesthetics, and clarity of interaction.
        </p>
      </div>

      <div className="md:col-span-2 grid grid-cols-2 gap-8">
        <div className="p-6 border border-white/10 rounded-2xl">
          <h3 className="font-medium">Design</h3>
          <p className="mt-2 text-sm text-white/60">
            Minimal, editorial, and expressive layouts.
          </p>
        </div>
        <div className="p-6 border border-white/10 rounded-2xl">
          <h3 className="font-medium">Engineering</h3>
          <p className="mt-2 text-sm text-white/60">
            Clean architecture, scalable UI components.
          </p>
        </div>
      </div>
    </section>
  )
}
