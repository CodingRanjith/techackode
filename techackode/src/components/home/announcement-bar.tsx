import { Megaphone } from 'lucide-react'
import { announcementMessages } from '@/data/class-enrollment'

export function AnnouncementBar() {
  const items = [...announcementMessages, ...announcementMessages]

  return (
    <div className="hp-announcement" role="region" aria-label="Program announcements">
      <div className="hp-announcement__inner">
        <span className="hp-announcement__badge">
          <Megaphone className="size-3.5" aria-hidden />
          Live
        </span>
        <div className="hp-announcement__track-wrap">
          <div className="hp-announcement__track">
            {items.map((message, index) => (
              <span key={`${message}-${index}`} className="hp-announcement__item">
                {message}
                <span className="hp-announcement__dot" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
