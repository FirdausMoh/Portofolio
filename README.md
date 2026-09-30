# Portofolio Moh Fahri Firdaus — Website

Website portofolio pribadi, dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa proses build). Bisa langsung dibuka di browser atau di-hosting di mana saja.

## Struktur Folder

```
site/
├── index.html          -> struktur halaman (JARANG perlu diubah)
├── css/
│   └── style.css        -> semua styling/tampilan
├── js/
│   ├── data.js           -> ISI KONTEN WEBSITE (di sinilah kamu akan paling sering edit)
│   └── main.js           -> logic render & interaksi (jarang perlu diubah)
└── assets/
    ├── profile/           -> foto profil
    ├── experience/         -> foto pengalaman kerja
    ├── education/          -> foto organisasi/kegiatan kampus
    ├── certifications/      -> gambar sertifikat
    └── projects/
        ├── bi/               -> gambar proyek Data & BI
        ├── uiux/              -> gambar proyek UI/UX & Web/App
        └── design/            -> gambar proyek Desain Grafis
```

## Cara Melihat Website di Komputer Sendiri

Karena website ini pakai JavaScript untuk mengambil data (`fetch`-style loading gambar dsb), sebagian browser akan memblokir jika kamu buka `index.html` langsung lewat double-click (`file://`). Cara paling aman:

1. Install [VS Code](https://code.visualstudio.com/) lalu pasang extension **Live Server**, atau
2. Kalau punya Python terinstall, buka folder `site` di terminal lalu jalankan:
   ```
   python -m http.server 8000
   ```
   lalu buka `http://localhost:8000` di browser.

## Cara Update Konten (Paling Sering Dipakai)

Semua isi tulisan dan daftar konten ada di **`js/data.js`**. Buka file itu dengan text editor apa pun (VS Code, Notepad++, dsb), lalu edit bagian yang relevan. Setiap bagian sudah diberi komentar penjelasan di dalam file.

### Menambah Proyek Baru

Setiap proyek diklik akan membuka **pop-up detail** berisi carousel foto (bisa banyak gambar, geser kiri/kanan) plus Tantangan/Solusi/Hasil.

**Format gambar** — tiap gambar di array `images` boleh ditulis dengan 2 cara:

```js
// Cara 1: tanpa caption
"assets/projects/bi/dashboard.jpg"

// Cara 2: DENGAN caption (muncul di bawah gambar di pop-up) — disarankan
{ src: "assets/projects/bi/dashboard.jpg", caption: "Tampilan Dashboard Utama" }
```

Dua cara ini boleh dicampur dalam satu proyek yang sama.

Langkah menambah proyek baru:

1. Simpan gambar proyek ke folder yang sesuai kategori — boleh lebih dari satu file untuk satu proyek, contoh:
   `assets/projects/bi/nama-proyek-baru-1.jpg`, `assets/projects/bi/nama-proyek-baru-2.jpg`
2. Buka `js/data.js`, cari array `projects: [ ... ]`
3. Tambahkan objek baru di dalam array, contoh:
   ```js
   {
     category: "bi",   // pilih salah satu: "bi" | "uiux" | "design"
     tag: "Data Analyst & BI Dev",
     title: "Judul Proyek Baru",
     images: [
       { src: "assets/projects/bi/nama-proyek-baru-1.jpg", caption: "Tampilan Dashboard Utama" },
       { src: "assets/projects/bi/nama-proyek-baru-2.jpg", caption: "Detail: Breakdown per Wilayah" }
     ],
     challenge: "Tantangan yang dihadapi...",
     solution: "Solusi yang kamu buat...",
     impact: "Hasil/dampak dari solusi tersebut..."
   },
   ```
4. Simpan file, refresh browser — proyek baru otomatis muncul di grid, filter kategori, dan pop-up carousel-nya lengkap dengan caption.

**Menambah gambar ke proyek yang sudah ada** — tinggal tambahkan baris baru di dalam array `images` milik proyek tersebut, tidak ada batas jumlah gambar.

**Tips memilih gambar untuk proyek BI/Dashboard:**
- Sertakan tampilan dashboard utuh (overview) DAN 1 zoom-in ke bagian insight menarik
- Boleh sertakan foto saat dashboard dipresentasikan di rapat — ini bagus untuk menunjukkan dashboard-nya beneran dipakai
- Kalau datanya sensitif (nama customer, angka revenue perusahaan), sebaiknya di-blur dulu sebelum dipakai di portofolio publik

**Tips memilih gambar untuk proyek UI/UX/App:**
- Urutkan gambar sesuai alur pengguna (misal: onboarding → home → detail), bukan acak — carousel akan mengikuti urutan array `images`
- Kalau ada wireframe/low-fidelity, sertakan sebagai gambar pertama sebelum high-fidelity — ini menunjukkan proses berpikir, bukan cuma hasil akhir

### Menambah Pengalaman Kerja

Cari `experience: [ ... ]` di `data.js`, tambahkan objek baru di posisi PALING ATAS array (supaya tampil paling awal di timeline):
```js
{
  role: "Jabatan",
  company: "Nama Perusahaan",
  period: "2026 — Sekarang",
  image: "assets/experience/nama-file.jpg",
  bullets: [
    "Poin tanggung jawab 1",
    "Poin tanggung jawab 2"
  ]
},
```

### Menambah Sertifikat

Cari `certifications: [ ... ]`, tambahkan:
```js
{
  title: "Nama Sertifikat",
  issuer: "Nama Penerbit",
  image: "assets/certifications/nama-file.jpg"
},
```
Kalau belum ada gambarnya, isi `image: ""` — kartu tetap tampil tanpa gambar.

### Mengganti Foto Profil

Ganti file `assets/profile/profile.png` dengan foto baru (nama file sama), atau ubah path-nya di `data.js` bagian `profile.photo`.

### Mengubah Info Kontak

Di `data.js` bagian `profile`, update:
- `email` — akan otomatis dipakai tombol "Kirim Email"
- `linkedin`, `instagram`, `github` — link sosial media
- `cvFile` — file CV sudah ada di `assets/cv/CV-Moh-Fahri-Firdaus.pdf` dan tombol "Unduh CV" sudah aktif. Kalau mau ganti CV di kemudian hari: taruh file PDF baru di folder `assets/cv/`, lalu sesuaikan nama file pada `cvFile` di `data.js`

## Warna & Font (Kalau Ingin Ubah Tampilan)

Buka `css/style.css`, paling atas ada bagian `:root { ... }` — semua warna dan ukuran radius diatur lewat variabel di sana, jadi cukup ubah satu tempat untuk mengubah keseluruhan tema warna website.

## Cara Publish/Hosting Website

Beberapa opsi termudah dan gratis:

1. **Netlify Drop** — buka [app.netlify.com/drop](https://app.netlify.com/drop), tinggal drag & drop folder `site` ke browser, langsung online.
2. **GitHub Pages** — upload folder `site` ke repository GitHub, aktifkan GitHub Pages di Settings.
3. **Vercel** — import folder lewat [vercel.com](https://vercel.com), pilih "Other" sebagai framework (karena ini HTML statis).

Setelah online, kamu tetap bisa update kapan pun dengan mengedit `data.js` lalu upload ulang (atau langsung `git push` kalau pakai GitHub Pages).

## Catatan

- Font yang dipakai (Space Grotesk & Inter) diambil dari Google Fonts lewat internet — pastikan koneksi internet aktif saat website diakses. Kalau ingin offline-safe, font akan otomatis fallback ke font sistem.
- Semua gambar sudah dikompres agar ringan saat loading.
