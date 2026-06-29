import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle,
  ChevronRight,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Link2,
  Megaphone,
  Palette,
  Shield,
  Smartphone,
  Terminal,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/common/container'
import { AnimatedCounter } from '@/components/home/motion'
import { SectionShell } from '@/components/home/ui'
import {
  batchInfo,
  classPromo,
  internshipTracks,
  platformStats,
} from '@/data/class-enrollment'
import { useEnrollmentStore } from '@/stores/use-enrollment-store'

const trackIconMap: Record<string, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  shield: Shield,
  brain: Brain,
  cloud: Cloud,
  chart: TrendingUp,
  palette: Palette,
  megaphone: Megaphone,
  building: Building2,
  check: CheckCircle,
  terminal: Terminal,
  coffee: Coffee,
  link: Link2,
  cpu: Cpu,
  zap: Zap,
}

function formatStat(value: number) {
  return value.toLocaleString('en-IN')
}

export function ClassPromoSection() {
  const openEnrollment = useEnrollmentStore((s) => s.open)

  return (
    <SectionShell id="class-enrollment" bg="mesh" cinematic="section" className="hp-class-promo">
      <Container className="relative hp-section-y">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hp-class-promo__urgency"
        >
          <span className="hp-class-promo__urgency-pulse" aria-hidden />
          <p>
            <strong>URGENT:</strong> Batch starting soon — only{' '}
            <span className="hp-class-promo__seats">{batchInfo.seatsLeft}</span> seats left across
            all domains. <button type="button" onClick={() => openEnrollment()}>Apply now</button>
          </p>
        </motion.div>

        <div className="hp-class-promo__hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hp-eyebrow">{classPromo.eyebrow}</span>
            <h2 className="hp-h-section hp-h-section--lg mt-4">
              {classPromo.title}
              <span className="block hp-gradient-text--accent mt-2">{classPromo.titleHighlight}</span>
            </h2>
            <p className="hp-subtitle-section mt-5 max-w-2xl">{classPromo.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {classPromo.trustPills.map((pill) => (
                <span key={pill} className="hp-class-promo__pill">
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openEnrollment()}
                className="hp-btn-primary"
              >
                {classPromo.ctas.primary.label}
                <ArrowRight className="size-4" />
              </button>
              <a href={classPromo.ctas.secondary.href} className="hp-btn-ghost">
                {classPromo.ctas.secondary.label}
                <ChevronRight className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hp-class-promo__stats"
          >
            {platformStats.map((stat, index) => (
              <div key={stat.id} className="hp-class-promo__stat-card">
                <span className="hp-class-promo__stat-badge">{stat.badge}</span>
                <p className="hp-class-promo__stat-value">
                  <AnimatedCounter value={stat.value} format />
                </p>
                <p className="hp-class-promo__stat-label">{stat.label}</p>
                <p className="hp-class-promo__stat-desc">{stat.description}</p>
                {index === 0 && (
                  <span className="hp-class-promo__live-dot">
                    <span className="hp-class-promo__live-ping" aria-hidden />
                    Live now
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <div id="internship-tracks" className="hp-class-promo__tracks mt-16 sm:mt-20">
          <div className="text-center">
            <span className="hp-eyebrow">Internship Tracks</span>
            <h3 className="hp-h-section hp-h-section--center mx-auto mt-4">
              Choose Your Domain — 15+ Industry-Aligned Tracks
            </h3>
            <p className="hp-subtitle-section hp-subtitle-section--center mx-auto">
              Each track includes mentor guidance, weekly tasks, and a verified completion
              certificate. Pick one domain or explore multiple during your internship.
            </p>
          </div>

          <div className="hp-class-promo__tracks-grid mt-10">
            {internshipTracks.map((track, index) => {
              const Icon = trackIconMap[track.icon] ?? Code2
              return (
                <motion.article
                  key={track.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="hp-class-promo__track-card"
                >
                  <div className="hp-class-promo__track-head">
                    <span className="hp-class-promo__track-icon">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h4 className="hp-h-card">{track.title}</h4>
                      <p className="hp-class-promo__track-meta">
                        {track.duration} · {track.level}
                      </p>
                    </div>
                  </div>
                  <p className="hp-body-sm mt-3 flex-1">{track.description}</p>
                  <button
                    type="button"
                    onClick={() => openEnrollment()}
                    className="hp-class-promo__track-cta"
                  >
                    Register for this track
                    <ArrowRight className="size-3.5" />
                  </button>
                </motion.article>
              )
            })}
          </div>

          <div className="hp-class-promo__cta-band mt-12">
            <div>
              <p className="hp-class-promo__cta-band-title">
                {batchInfo.selectionEndsLabel} — only {batchInfo.seatsLeft} seats remaining
              </p>
              <p className="hp-body-sm mt-1">
                Join {formatStat(50000)}+ learners. Instant offer letter on approval.
              </p>
            </div>
            <button type="button" onClick={() => openEnrollment()} className="hp-btn-primary shrink-0">
              Register Free
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
