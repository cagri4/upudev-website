/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

/**
 * Önceden boyutlandırılmış WebP görsel (19 Kas 2026 — Vercel Image Optimization kapalı, images.unoptimized).
 * Dosyalar `scripts/gorsel-webp.py` ile üretilir: <base>-<w>.webp. srcSet genişlik tanımlayıcılı;
 * width/height verilir (CLS yok). next/image optimizer KULLANMA: Hobby kotası dolunca 402 → kırık görsel.
 */
export type StaticImageSource = {
  /** Uzantısız yol, ör. "/robots/copadam/robot-order" */
  base: string;
  /** Üretilmiş WebP genişlikleri (küçükten büyüğe). */
  widths: readonly number[];
  /** Yerleşim oranı için 1x CSS boyutu. */
  w: number;
  h: number;
};

export function StaticImage({
  img,
  alt,
  sizes,
  className,
  style,
  priority = false,
}: {
  img: StaticImageSource;
  alt: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}) {
  const largest = img.widths[img.widths.length - 1];
  return (
    <img
      src={`${img.base}-${largest}.webp`}
      srcSet={img.widths.map((w) => `${img.base}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
