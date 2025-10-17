import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        // Si on est arrivé à la date cible
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // On met à jour tout de suite une première fois
    updateCountdown();

    // Puis chaque seconde
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-5 text-center auto-cols-max">
      <div className="flex flex-col bg-neutral p-2 rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": timeLeft.days, "--digits":2 }} aria-live="polite">
            {timeLeft.days}
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col bg-neutral p-2 rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": timeLeft.hours, "--digits":2 }} aria-live="polite">
            {timeLeft.hours}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col bg-neutral p-2 rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": timeLeft.minutes, "--digits":2 }} aria-live="polite">
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col bg-neutral p-2 rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": timeLeft.seconds, "--digits":2 }} aria-live="polite">
            {timeLeft.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
  );
}
