import { ArrowRight } from 'lucide-react'
import { stats } from '../data'
import Icon, { type IconName } from './IconMap'
import Reveal from './Reveal'

export default function Stats() {
  return (
    <section id="a-propos" className="bg-[#f7f8fc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-gold-600 font-bold text-sm uppercase tracking-wide">Qui sommes-nous</span>
          <h2 className="font-display font-bold text-navy-950 text-3xl sm:text-4xl mt-3 mb-5 leading-tight">
            Former les leaders de demain, depuis plus de 20 ans
          </h2>
          <p className="text-navy-600 leading-relaxed mb-4">
            Depuis sa création, l'Institut Universitaire d'Abidjan s'engage à offrir une éducation de
            qualité, alliant excellence académique et développement personnel, pour préparer ses
            étudiants à relever les défis du monde contemporain.
          </p>
          <p className="text-navy-600 leading-relaxed mb-8">
            Grâce à des programmes accrédités et des partenariats solides en France et à l'international,
            l'IUA garantit l'insertion professionnelle et le succès de chaque apprenant.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-9">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 shadow-card border border-navy-50">
                <Icon name={s.icon as IconName} size={22} className="text-gold-500 mb-2" />
                <div className="font-display font-extrabold text-navy-950 text-2xl leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-navy-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#facultes"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            Découvrir nos facultés
            <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img src="/assets/amphi-1.jpg" alt="Amphithéâtre de l'IUA" className="w-full h-[420px] object-cover" />
          </div>
          <div className="hidden sm:flex absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-card p-5 items-center gap-3 max-w-[220px]">
            <div className="h-11 w-11 shrink-0 rounded-full bg-gold-100 flex items-center justify-center">
              <Icon name="award" size={20} className="text-gold-600" />
            </div>
            <p className="text-xs text-navy-700 font-medium leading-snug">
              Mention Bien à l'évaluation officielle du MESRS
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
