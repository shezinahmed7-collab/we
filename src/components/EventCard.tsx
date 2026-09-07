import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Check } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';

interface EventCardProps {
  event: WeddingEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [downloadedIcal, setDownloadedIcal] = useState(false);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = (): string => {
    if (event.calUrl && event.calUrl !== '#' && !event.calUrl.startsWith('https://calendar.google.com')) {
      return event.calUrl;
    }
    const title = encodeURIComponent(event.calendarDetails?.title || event.name);
    const details = encodeURIComponent(event.calendarDetails?.description || event.description);
    const location = encodeURIComponent(event.calendarDetails?.location || `${event.venue}, ${event.address}`);
    const start = event.calendarDetails?.startDate || "20261203T061900Z";
    const end = event.calendarDetails?.endDate || "20261203T073000Z";

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  // Generate and download .ics iCalendar file for Apple / Outlook
  const downloadIcsFile = () => {
    const title = event.calendarDetails?.title || event.name;
    const details = event.calendarDetails?.description || event.description;
    const location = event.calendarDetails?.location || `${event.venue}, ${event.address}`;
    const start = event.calendarDetails?.startDate || "20261203T061900Z";
    const end = event.calendarDetails?.endDate || "20261203T073000Z";

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Digital Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${details}`,
      `LOCATION:${location}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedIcal(true);
    setTimeout(() => setDownloadedIcal(false), 3000);
  };

  return (
    <div className="invitation-card p-6 sm:p-7 flex flex-col justify-between border border-wedding-accent/25 hover:border-wedding-accent/50 transition-all duration-300 hover:shadow-luxury bg-wedding-card">
      <div>
        {/* Day & Date Header */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-wedding-accent/15">
          <span className="font-sans text-xs uppercase tracking-widest-luxury text-wedding-accent font-semibold">
            {event.day}
          </span>
          <span className="font-serif italic text-sm text-wedding-muted">
            {event.date}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="font-serif text-2xl sm:text-2xl text-wedding-text font-normal mb-2 leading-tight">
          {event.name}
        </h3>

        {/* Time & Venue */}
        <div className="space-y-1.5 my-3 text-xs sm:text-sm text-wedding-muted">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-wedding-accent shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-wedding-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-wedding-text">{event.venue}</p>
              <p className="text-[11px] text-wedding-muted/90">{event.address}</p>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="font-sans text-xs text-wedding-text/80 leading-relaxed my-4 border-t border-wedding-accent/10 pt-3">
          {event.description}
        </p>
      </div>

      {/* Action Buttons: View Map and Add to Calendar using clean Lucide icons */}
      <div className="pt-4 border-t border-wedding-accent/15 flex flex-wrap items-center gap-2">
        {event.mapsUrl && (
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-wedding-text bg-wedding-bg hover:bg-wedding-accent/15 border border-wedding-accent/30 rounded-none transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-wedding-accent" />
            <span>View Map</span>
            <ExternalLink className="w-3.5 h-3.5 text-wedding-muted ml-0.5" />
          </a>
        )}

        <div className="flex-1 min-w-[140px] flex gap-1">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-wedding-accent-dark bg-wedding-accent/10 hover:bg-wedding-accent/20 border border-wedding-accent/30 rounded-none transition-colors"
            title="Add to Google Calendar"
          >
            <Calendar className="w-3.5 h-3.5 text-wedding-accent mr-0.5" />
            <span>Add to Calendar</span>
          </a>

          <button
            onClick={downloadIcsFile}
            className="px-2.5 py-2.5 text-xs font-medium text-wedding-accent-dark bg-wedding-accent/10 hover:bg-wedding-accent/20 border border-wedding-accent/30 rounded-none transition-colors cursor-pointer"
            title="Download .ics for Apple / Outlook"
          >
            {downloadedIcal ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <CalendarPlus className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
