import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Clock, X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import {
  AUTO_POPUP_DELAY_MS,
  batchInfo,
  enrollmentFormFields,
  ENROLLMENT_DISMISS_KEY,
  internshipTracks,
} from '@/data/class-enrollment'
import { useEnrollmentStore } from '@/stores/use-enrollment-store'

const fieldClass =
  'w-full rounded-xl border border-[var(--hp-border)] bg-white px-4 py-3 text-sm text-[var(--hp-ink)] outline-none transition placeholder:text-[var(--hp-soft)] focus:border-[var(--hp-navy)] focus:ring-2 focus:ring-[var(--hp-accent-soft)]'

export function EnrollmentModal() {
  const { isOpen, source, open, close } = useEnrollmentStore()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(ENROLLMENT_DISMISS_KEY) === 'true') return

    const timer = window.setTimeout(() => {
      if (!useEnrollmentStore.getState().isOpen) {
        open('auto')
      }
    }, AUTO_POPUP_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [open])

  function handleClose() {
    sessionStorage.setItem(ENROLLMENT_DISMISS_KEY, 'true')
    close()
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    sessionStorage.setItem(ENROLLMENT_DISMISS_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="hp-enroll-modal" role="dialog" aria-modal="true" aria-labelledby="enroll-title">
          <motion.button
            type="button"
            className="hp-enroll-modal__backdrop"
            aria-label="Close registration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="hp-enroll-modal__panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              className="hp-enroll-modal__close"
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="hp-enroll-modal__urgent">
              <AlertTriangle className="size-4 shrink-0" aria-hidden />
              <span>
                Only <strong>{batchInfo.seatsLeft} seats left</strong> — batch starts{' '}
                <strong>{batchInfo.startDate}</strong>
              </span>
            </div>

            {source === 'auto' && (
              <p className="hp-enroll-modal__auto-hint">
                <Clock className="inline size-3.5 -mt-0.5 mr-1" aria-hidden />
                Limited slots — register here before selection closes
              </p>
            )}

            {submitted ? (
              <div className="hp-enroll-modal__success">
                <span className="hp-enroll-modal__success-icon">
                  <CheckCircle2 className="size-8" strokeWidth={1.75} />
                </span>
                <h2 id="enroll-title" className="hp-enroll-modal__title">
                  Application Received!
                </h2>
                <p className="hp-enroll-modal__subtitle">
                  Your spot is reserved pending verification. Check your email for your offer letter
                  within 24 hours.
                </p>
                <button type="button" className="hp-btn-primary w-full justify-center" onClick={handleClose}>
                  Continue Exploring
                </button>
              </div>
            ) : (
              <>
                <h2 id="enroll-title" className="hp-enroll-modal__title">
                  Register for Free Internship
                </h2>
                <p className="hp-enroll-modal__subtitle">
                  Secure your domain before the batch fills. No payment required — 100% virtual
                  program.
                </p>

                <form onSubmit={handleSubmit} className="hp-enroll-modal__form">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {enrollmentFormFields.map((field) => (
                      <div
                        key={field.name}
                        className={field.name === 'college' || field.name === 'domain' ? 'sm:col-span-2' : undefined}
                      >
                        <label htmlFor={`enroll-${field.name}`} className="hp-enroll-modal__label">
                          {field.label}
                          {field.required && <span className="text-red-500"> *</span>}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            id={`enroll-${field.name}`}
                            name={field.name}
                            required={field.required}
                            className={fieldClass}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select your preferred domain
                            </option>
                            {internshipTracks.map((track) => (
                              <option key={track.id} value={track.id}>
                                {track.title}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={`enroll-${field.name}`}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            className={fieldClass}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="hp-btn-primary mt-2 w-full justify-center">
                    Apply Before Selection Closes
                  </button>
                  <p className="hp-enroll-modal__fine-print">
                    By registering, you agree to receive program updates from Techackode Edutech.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
