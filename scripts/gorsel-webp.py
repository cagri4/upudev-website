#!/usr/bin/env python3
"""
Görselleri önceden boyutlandırılmış WebP'ye çevirir (19 Kas 2026 — Vercel Image Optimization KAPALI, images.unoptimized).
Her görsel için sayfada gösterildiği en büyük CSS genişliğinin 1x/2x (ve gerekirse ara) genişliklerinde
<ad>-<w>.webp üretir. Şeffaflık (RGBA) WebP alpha ile korunur. Kaynak PNG'ler yerinde kalır (OG/ajans kaynağı).

Yeni görsel eklerken: VARIANTS'a satır ekle → `python3 scripts/gorsel-webp.py` → COPADAM (src/content/ai-team-landing.ts)'a
genişlikleri yaz → <StaticImage> ile kullan. next/image optimizer'a geri dönme (Hobby kota → 402, kırık görsel).
"""
import os, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public")
Q = 82

# kaynak (public'e göre) -> hedef genişlikler (px). Gerekçe: gösterilen en büyük CSS genişliği x2.
VARIANTS = {
    # Robotlar h-[260px] w-auto → CSS genişlik = w*260/573; 1x ve 2x
    "robots/copadam/robot-order.png": [154, 308],
    "robots/copadam/robot-boekhoud.png": [162, 324],
    "robots/copadam/robot-vraag-soluk.png": [98, 196],
    "robots/copadam/robot-planner.png": [172, 344],
    "robots/copadam/robot-teller.png": [163, 326],
    "robots/copadam/robot-etiketbeheerder.png": [184, 368],
    # Landing hero max 500px, demo 420px, mobil 92vw
    "robots/copadam/team-hand-in-hand.png": [500, 720, 1000],
    # '…en elk ander' max 560px
    "robots/copadam/team-plus-vraag.png": [560, 800, 1120],
    # Hikâye kartı 300px
    "robots/copadam/hero-s1-bestellingen-dikey-4x5.png": [300, 600],
    # Hikâye bandı: lg 520px, tablet tek sütun ~920px
    "robots/copadam/hero-s5-prijsverschil-band-yatay.png": [520, 920, 1840],
    # Ana sayfa hero: ≥900px 600px, mobil 92vw
    "robots/copadam/hero-desk.png": [600, 900, 1200],
    # Sistem logoları 32px → 2x
    "logos/systems/e-boekhouden.png": [64],
    "logos/systems/higgsfield.png": [64],
}

def main():
    for rel, widths in VARIANTS.items():
        src = os.path.join(ROOT, rel)
        im = Image.open(src)
        im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
        base = os.path.splitext(src)[0]
        for w in widths:
            w2 = min(w, im.width)
            h2 = round(im.height * w2 / im.width)
            out = f"{base}-{w}.webp"
            im.resize((w2, h2), Image.LANCZOS).save(out, "WEBP", quality=Q, method=6)
            print(f"{os.path.relpath(out, ROOT)}  {w2}x{h2}  {os.path.getsize(out)//1024} KB")

if __name__ == "__main__":
    sys.exit(main())
