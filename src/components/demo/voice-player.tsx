"use client";

import { useEffect, useRef, useState } from "react";
import { pushEvent } from "@/lib/analytics";

function fmt(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Büyük, mobil öncelikli ses oynatıcı (kişiye özel demo sayfaları).
 * Native <audio> + büyük play/pause + tıklanabilir ilerleme çubuğu.
 * Olaylar: <prefix>_audio_play (ilk oynatma) ve <prefix>_audio_complete.
 */
export function VoicePlayer({
  src,
  durationHint,
  label,
  pagePath,
}: {
  src: string;
  /** Saniye — metadata yüklenmeden önce gösterilir. */
  durationHint: number;
  label: string;
  pagePath: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(durationHint);
  const playedOnce = useRef(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    const onMeta = () => Number.isFinite(a.duration) && setDuration(a.duration);
    const onPlay = () => {
      setPlaying(true);
      if (!playedOnce.current) {
        playedOnce.current = true;
        pushEvent({ event: "demo_mcc_audio_play", page_path: pagePath });
      }
    };
    const onPause = () => setPlaying(false);
    const onEnd = () => {
      setPlaying(false);
      pushEvent({ event: "demo_mcc_audio_complete", page_path: pagePath });
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onEnd);
    };
  }, [pagePath]);

  function toggle() {
    const a = ref.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const a = ref.current;
    if (!a || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    a.currentTime = ratio * duration;
    setTime(a.currentTime);
  }

  const pct = duration ? Math.min(100, (time / duration) * 100) : 0;

  return (
    <div className="rounded-3xl bg-[#122d54] p-5 text-white shadow-lg md:p-7">
      <audio ref={ref} src={src} preload="metadata" />
      <div className="flex items-center gap-4 md:gap-6">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pauzeer" : label}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#2AA79A] text-white shadow-md transition hover:bg-[#238c81] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8FD8CE] md:h-24 md:w-24"
        >
          {playing ? (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-1">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold md:text-lg">{label}</p>
          <div
            role="slider"
            aria-label="Positie"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(time)}
            tabIndex={0}
            onClick={seek}
            className="mt-3 h-3 w-full cursor-pointer rounded-full bg-white/20"
          >
            <div className="h-3 rounded-full bg-[#8FD8CE] transition-[width] duration-200" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 font-mono text-sm text-white/75">
            {fmt(time)} / {fmt(duration)}
          </p>
        </div>
      </div>
    </div>
  );
}
