import { ArrowRight } from 'lucide-react'
import { useEnrollmentStore } from '@/stores/use-enrollment-store'

export function FloatingRegisterButton() {
  const openEnrollment = useEnrollmentStore((s) => s.open)

  return (
    <button
      type="button"
      onClick={() => openEnrollment()}
      className="hp-floating-register"
      aria-label="Register for free internship"
    >
      <span className="hp-floating-register__pulse" aria-hidden />
      Register
      <ArrowRight className="size-4" />
    </button>
  )
}
