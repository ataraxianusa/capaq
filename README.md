# ♑♒ CapAq — Pria Capricorn × Wanita Aquarius

> Deep research tentang kompatibilitas **Pria Capricorn Januari × Wanita Aquarius Januari** —
> bilingual (Bahasa Indonesia / English), siap publikasi di **GitHub Pages**.

![status](https://img.shields.io/badge/built%20with-riset%2C%20kopi%20%26%20vibe%20weekend-F4D99B)

## Isi Artikel

1. **TL;DR** — verdict 30 detik + skor keseluruhan
2. **Gambaran Besar** — elemen Tanah × Udara, Saturnus × Uranus
3. **Dia** — profil Pria Capricorn Januari (dekan, gaya cinta, sisi gelap)
4. **Dia (2)** — profil Wanita Aquarius Januari (Uranus murni, cusp, sisi gelap)
5. **Keajaiban** — 5 alasan kenapa mereka cocok
6. **Benturan** — 5 area konflik utama
7. **Keintiman** — tempo di kamar & di hati
8. **Pernikahan** — potensi jangka panjang + dua aturan emas
9. **Kartu Skor** — metrik per kategori dengan animasi
10. **Pasangan Selebriti** — contoh nyata
11. **Tips Langgeng** — 6 strategi praktis
12. **Putusan Akhir & Sumber**

Fitur: tombol **ID / EN** untuk ganti bahasa, tema kosmik responsif,
meter kompatibilitas beranimasi, smooth-scroll nav, dan halaman puisi
khusus (`janji.html`).

## Halaman Puisi: `janji.html`

Selain artikel analisis, situs ini punya **halaman puisi khusus** — dua surat
antara tanah dan angin — dengan **URL tersendiri** yang bisa dibagikan langsung:

- **Surat 1 — "Janji"** — dari JM, sang angin (♒ Aquarius), untuk ICS, sang Capricorn (♑) — 📍 Pare · 8 Agustus 2026 · 23:34 WIB
- **Surat 2 — "Balasan Sang Tanah"** — balasan dari ICS, sang tanah (♑), untuk JM, sang angin (♒) — 📍 Surabaya · 9 Agustus 2026 · 04:03 WIB

URL: `https://USERNAME.github.io/CapAq/janji.html`

Fitur halaman:

- **Bilingual penuh** — tombol **ID/EN** yang sama dengan halaman utama;
  preferensi bahasa tersimpan di `localStorage` (key `capaq-lang`), jadi
  pilihan bahasa nyambung antar halaman. Judul tab browser ikut berganti
  (halaman menyuplai judulnya sendiri via `window.CAPAQ_TITLES`).
- **Tampilan surat** — kartu full-screen dengan animasi partikel angin
  (biru-aqua untuk JM, emas untuk balasan ICS), watermark zodiak ♒ ♑,
  dan pembatas elegan di antara dua surat.
- **Navigasi bolak-balik** — link "📖 Buka versi layar penuh" dari section
  puisi di `index.html`, tombol floating "← Kembali ke Analisis" (muncul
  setelah scroll; tersembunyi dari tab order saat tak terlihat), dan link
  di footer.
- **Siap dibagikan** — `og:image` & Twitter card sudah terpasang, jadi
  preview WhatsApp/Telegram menampilkan thumbnail.
- **Deploy otomatis** — workflow yang sama (`.github/workflows/deploy.yml`)
  meng-upload semua file di root, jadi `janji.html` ikut live tanpa konfigurasi tambahan.

## Cara Publikasi ke GitHub Pages

### Opsi A — Auto-deploy via GitHub Actions (disarankan)

1. Buat repository baru di GitHub (mis. `CapAq`), **public** (agar Pages gratis & publik).
2. Push semua file ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "chore: initial commit — CapAq compatibility site"
   git branch -M main
   git remote add origin git@github.com:USERNAME/CapAq.git
   git push -u origin main
   ```
3. Buka **Settings → Pages** di repo-mu.
4. Di bagian **Source**, pilih **"GitHub Actions"**.
5. Selesai! Workflow `.github/workflows/deploy.yml` akan otomatis build & deploy
   setiap kali kamu push ke `main`.
6. Situs live di: `https://USERNAME.github.io/CapAq/`

### Opsi B — Manual (tanpa workflow)

1. Push repo (langkah 1–2 di atas).
2. **Settings → Pages → Source: "Deploy from a branch"** → pilih `main` / `/(root)`.
3. Klik **Save**. Tunggu beberapa menit, situs live di `https://USERNAME.github.io/CapAq/`.

> **Kustom domain?** Taruh file `CNAME` berisi `namadomainmu.com` di root repo,
> lalu set DNS A record / CNAME sesuai dokumentasi GitHub.

## Struktur File

```
.
├── index.html          # Artikel lengkap bilingual (konten utama)
├── janji.html          # Halaman puisi khusus: Janji (JM) & Balasan Sang Tanah (ICS)
├── styles.css          # Tema kosmik
├── script.js           # Toggle bahasa ID/EN + animasi
├── README.md           # Panduan ini
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy ke GitHub Pages
```

## Sumber Riset

Elite Daily · TODAY · ZodiacSign.com · Marriage.com · Psychic World · AskNebula ·
Psychic Source · GaneshaSpeaks · Cafe Astrology · Bustle · Tarot.com ·
Cosmopolitan · RUSSH · Astrosofa · Medium

> ⚠️ **Disclaimer:** Astrologi adalah lensa untuk refleksi & hiburan, bukan sains.
> Kompatibilitas dibangun oleh dua orang yang mau berusaha, bukan dua tanggal lahir.
