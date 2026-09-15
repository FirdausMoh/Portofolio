/**
 * =====================================================================
 *  DATA PORTOFOLIO
 * =====================================================================
 *  Semua isi website (teks, pengalaman, proyek, sertifikat) diatur di
 *  file ini. Untuk MENAMBAH atau MENGUBAH konten, cukup edit array/objek
 *  di bawah — kamu TIDAK perlu menyentuh file HTML atau CSS sama sekali.
 *
 *  Setelah menyimpan file ini, cukup refresh halaman website untuk
 *  melihat perubahan.
 *
 *  Struktur tiap bagian dijelaskan lewat komentar di atasnya.
 * =====================================================================
 */

const PORTFOLIO_DATA = {

  /* -------------------------------------------------------------------
   * 1. PROFIL — identitas utama yang tampil di Hero & Footer
   * ---------------------------------------------------------------- */
  profile: {
    name: "Moh Fahri Firdaus",
    role: "Currently as IT Designer & BI Developer",
    tagline: "Data Analyst & Visualization | UI/UX & Web Developer | Graphic Design",
    location: "Surabaya, Jawa Timur",
    email: "fahriwork58@email.com",     // TODO: ganti dengan email aktif
    phone: "+62 822 2985 0927",           // TODO: ganti dengan nomor aktif
    linkedin: "https://linkedin.com/in/mohfahri",  // TODO
    instagram: "https://instagram.com/",  // TODO
    github: "https://github.com/",        // TODO
    cvFile: "assets/cv/assets/cv/Moh_Fahri_Firdaus_Data_Visualization.pdf",
  
    photo: "assets/profile/profile.jpeg",
    heroHeadline: "Mengubah data menjadi Insight bisnis.",
    bio: "Lulusan Ilmu Komputer dari Telkom University dengan kompetensi di bidang Business Intelligence, Analisis & Visualisasi Data, Pengembangan Aplikasi & Web, UI/UX, serta Desain Grafis. Saat ini bekerja sebagai IT Design Specialist (BI & Data Visualization), dengan fokus mengubah data operasional menjadi dashboard intuitif dengan Power BI, guna mendukung pemangku kepentingan dalam melakukan pengambilan keputusan yang tepat dan menyusun strategi bisnis.\n\n Selain mengembangkan solusi Business Intelligence, saya memiliki pengalaman dalam digitalisasi dan pengembangan sistem internal, termasuk pembuatan aplikasi absensi karyawan menggunakan AppSheet dan pengembangan solusi berbasis web menggunakan Laravel. Saya juga berpengalaman dalam mengelola, memproses, dan menganalisis data ERP untuk mendukung kebutuhan operasional serta menyediakan informasi yang lebih terstruktur bagi proses bisnis. Saya mampu mengintegrasikan data, teknologi, dan kebutuhan bisnis untuk menghadirkan solusi yang meningkatkan efisiensi operasional serta mendukung transformasi digital perusahaan.",
    focusAreas: [
      {
        title: "Data Analyst & BI Developer",
        
      },
      {
        title: "Graphic Design",
      },
      {
        title: "Web and Mobile Dev",
      }
    ],
    stats: [
      { value: " Computer Science", suffix: " | 3.65/4.00", label: "Telkom University (2021-2025) | Fast Track (Completed in 7 Semesters)" },
    ]
  },

  /* -------------------------------------------------------------------
   * 2. PENGALAMAN KERJA
   *  Tambahkan objek baru di paling atas array agar tampil paling awal.
   * ---------------------------------------------------------------- */
  experience: [
    {
      role: "IT Designer & BI Developer",
      company: "PT. ProVitex Nutrition",
      period: "Oct 2025 — Sekarang",
      image: "assets/experience/exp-provitex.png",
      bullets: [
        "Business Intelligence & Analytics: pengembangan dashboard Power BI, visualisasi & storytelling data, pelaporan operasional dengan Microsoft Office.",
        "App Development: membangun aplikasi mobile internal menggunakan AppSheet.",
        "Graphic Design: desain visual korporat, komunikasi visual, dan pembuatan aset grafis.",
        "Data Management: input dan pengelolaan data ERP Accurate."
      ]
    },
    {
      role: "Information Technology Staff Intern",
      company: "PT PLN (Persero)",
      period: "2024",
      image: "assets/experience/image.png",
      bullets: [
        "User-Centered Design (UCD): wireframing, high-fidelity prototyping, interactive mockups, information architecture.",
        "Usability & UX Strategy: usability testing, user flow mapping, workflow optimization.",
        "Technical Collaboration: developer handoff, translasi desain UI/UX, penyelarasan spesifikasi fungsional."
      ]
    }
  ],

  /* -------------------------------------------------------------------
   * 3. PENDIDIKAN
   * ---------------------------------------------------------------- */
  education: {
    school: "Telkom University",
    degree: "S1 Computer Science",
    period: "Okt 2021 — Feb 2025 (jalur akselerasi, 3.5 tahun)",
    gpa: "3.65 / 4.00",
    finalProject: "Usability Evaluation and Redesign of the UI/UX of the Suara Surabaya Mobile Application with Heuristic Evaluation and Double Diamond Model.",
    certification: "English Proficiency : Professional Proficiency (EPRT® Certified)"
  },

  /* -------------------------------------------------------------------
   * 4. ORGANISASI & KEPANITIAAN
   * ---------------------------------------------------------------- */
  organizations: [
    {
      role: "Entrepreneurship Division Staff",
      org: "HMSI — Telkom University",
      period: "Jan 2024 — Jan 2025",
      image: "assets/education/org-hmsi.jpeg",
      bullets: [
        "Mengelola penjualan merchandise dan jaket angkatan secara end-to-end, mencakup sourcing, pricing, branding, promosi, dan eksekusi penjualan. Mengembangkan strategi marketing kreatif berbasis kebutuhan pasar serta mengoordinasikan pelaksanaannya"
      ]
    },
    {
      role: "Organizing Committee",
      org: "LOYALISM — Telkom University",
      period: "Jun 2021 — Mar 2022",
      image: "assets/education/org-loyalism.jpeg",
      bullets: [
        "Mengkoordinasikan juri, peserta, dan tim pelaksana secara efektif, serta merancang alur, jadwal, mekanisme, dan SOP kompetisi. Menetapkan aturan dan panduan yang terstruktur dan transparan, dengan mengoptimalkan leadership, komunikasi, teamwork, problem solving, dan decision-making untuk memastikan kompetisi berjalan efektif dan profesional."
      ]
    },
    {
      role: "Campus Outreach Participant",
      org: "ITTelkom Surabaya",
      period: "Apr 2022",
      image: "assets/education/org-hmsi.jpg",
      bullets: [
        "Dipercaya mewakili Kampus dalam kegiatan sosialisasi dan pemasaran, memimpin interaksi dengan calon mahasiswa, menyampaikan informasi secara percaya diri dan persuasif, serta berkontribusi dalam meningkatkan brand awareness, engagement, dan minat calon mahasiswa terhadap institusi."
      ]
    }
  ],

  /* -------------------------------------------------------------------
   * 5. SERTIFIKASI
   *  "image" boleh dikosongkan ("") jika belum ada file sertifikatnya.
   * ---------------------------------------------------------------- */
  certifications: [
    {
      title: "Professional Proficiency",
      issuer: "EPRT® Certified — Telkom University",
      image: "assets/certifications/cert-eprt.jpg"
    },{
      title: "Karya Tulis Ilmiah Nsional",
      issuer: "Peserta Tahap Full  Paper Lmba Karya Tulis Ilmiah",
      image: "assets/certifications/FP LOYALISM.png"
    },
    {
      title: "Visualization, Reporting and Dashboard",
      issuer: "MySkill",
      image: "assets/certifications/cert-powerbi-viz.jpg"
    },
    {
      title: "Data Analytic in Power BI",
      issuer: "MySkill",
      image: "assets/certifications/cert-powerbi-data.jpg"
    },
    {
      title: "Guide to Learn Python with AI",
      issuer: "DQLab",
      image: "assets/certifications/cert-dqlab.jpg"
    }
  ],

  /* -------------------------------------------------------------------
   * 6. SKILL & TOOLS
   * ---------------------------------------------------------------- */
  skills: [
    {
      group: "Data & BI Development",
      items: ["Power BI", "DAX", "Python", "SQL", "ERP Accurate","Excel Analytics", "Pivot Table", "Data Storytelling"]
    },
    {
      group: "UI/UX & Web/App Dev",
      items: ["Figma", "Laravel", "React Native", "AppSheet", "Cordova", "GitHub"]
    },
    {
      group: "Graphic Design & Branding",
      items: ["Canva", "Visual Identity", "Social Media Design", "Packaging Design"]
    },
    {
      group: "Software & Tools",
      items: ["Power BI", "Python", "SQL", "MS Office (Excel, Word & Power Point)", "Canva", "Figma", "Accurate"]
    }
  ],

  /* -------------------------------------------------------------------
   * 7. PROYEK / PORTOFOLIO
   * ---------------------------------------------------------------
   *  category harus salah satu dari: "bi" | "uiux" | "design"
   *
   *  "images" adalah ARRAY — boleh isi 1 gambar atau banyak gambar.
   *  Setiap gambar bisa ditulis dengan 2 cara:
   *
   *    1) String biasa (tanpa caption):
   *       "assets/projects/bi/dashboard.jpg"
   *
   *    2) Object (DENGAN caption yang muncul di bawah gambar saat
   *       carousel dibuka) — cara ini yang disarankan:
   *       { src: "assets/projects/bi/dashboard.jpg", caption: "Tampilan Dashboard Utama" }
   *
   *  Dua cara ini boleh dicampur dalam satu array yang sama.
   *  Semua gambar akan tampil sebagai carousel di pop-up detail ketika
   *  kartu proyek diklik. Gambar pertama dipakai sebagai thumbnail kartu.
   *
   *  Untuk menambah proyek baru:
   *    1. Taruh gambar di assets/projects/<kategori>/namafile.jpg
   *       (boleh lebih dari satu file untuk satu proyek)
   *    2. Tambahkan objek baru di array projects (contoh format di bawah)
   *
   *  Untuk menambah gambar ke proyek yang SUDAH ADA, tinggal tambahkan
   *  baris baru di dalam array "images" milik proyek tersebut.
   * ---------------------------------------------------------------- */
  projects: [
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Production Performance & Raw Material Analytics Dashboard",
      images: [{ src: "assets/projects/bi/production-dashboard-2.jpg", caption: "Detail: Monitoring Produksi & Stok Bahan Baku" }],
      challenge: "1. Visibilitas operasional yang terpecah-pecah Tim produksi dan purchasing kesulitan memantau kondisi operasional secara real-time; kapasitas gudang yang terisi, status kedaluwarsa bahan baku per batch, hingga pencapaian target produksi bulanan tersebar di sumber yang berbeda-beda dan tidak terpusat. 2. Gudang produksi dan logistik tidak saling terhubung Informasi stok di gudang produksi dan gudang logistik terpisah satu sama lain. Saat bahan baku di gudang produksi menipis mendadak, tidak ada cara cepat untuk memastikan apakah stok pengganti tersedia di gudang logistik. 3. Purchasing bereaksi, bukan merencanakan Tanpa visibilitas lintas gudang, divisi purchasing sering kali baru mengetahui kekurangan bahan baku saat produksi sudah mendesak — memicu pembelian mendadak yang tidak terencana dan berisiko mengganggu jadwal produksi.",
      solution: "1. Dashboard terpusat untuk seluruh monitoring produksi Membangun dashboard Power BI yang mengonsolidasikan kapasitas gudang, status kedaluwarsa bahan baku per batch number (aman / hampir kedaluwarsa / kedaluwarsa), pencapaian target produksi bulanan dalam bentuk gauge, tren produksi per jenis produk, waste produksi, dan run hour mesin — semua dalam satu tampilan. 2. Toggle interaktif gudang produksi ↔ gudang logistik Fitur utama dashboard ini adalah tombol switch yang memungkinkan tim langsung membandingkan stok antara gudang produksi dan gudang logistik. Saat ada kebutuhan mendesak, tim bisa langsung cek apakah stok pengganti tersedia di logistik sebelum memutuskan membeli baru. 3. Forecasting bahan baku berbasis data historis Dashboard menghitung proyeksi kebutuhan bahan baku dari rata-rata kuantitas produksi bulanan, membantu purchasing merencanakan pembelian sebelum stok benar-benar habis — bukan menunggu sampai kondisi darurat.",
      impact: "1. Respons cepat saat lonjakan produksi Saat produksi meningkat tajam di bulan Maret, tim dapat langsung menggunakan fitur toggle untuk mengecek ketersediaan bahan baku di gudang logistik dan mengambil stok yang dibutuhkan tanpa menunggu proses pembelian baru — mencegah potensi keterlambatan produksi akibat kekurangan bahan baku mendadak. 2. Purchasing beralih dari reaktif ke proaktif Dengan forecasting berbasis data produksi, divisi purchasing kini dapat merencanakan pembelian bahan baku pengganti lebih awal, mengurangi ketergantungan pada pembelian mendadak yang biasanya lebih mahal dan berisiko telat datang. 3. Minim risiko kerugian akibat bahan baku kedaluwarsa Visibilitas status kedaluwarsa per batch secara real-time membantu tim memprioritaskan penggunaan bahan baku yang mendekati masa kedaluwarsa terlebih dahulu (prinsip FEFO — First Expired, First Out), menekan potensi bahan baku terbuang percuma.",
      Link2: "https://docs.google.com/presentation/d/1oh3TBam8nze9T5NoJVCoCSFKvOiA4BR2/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Sales & Customer Analytics Dashboard",
      images: [
        { src: "assets/projects/bi/sales-dashboard-2.jpg", caption: "Detail: Tren Penjualan & Insight Pelanggan" },
        { src: "assets/projects/bi/sales-dashboard.jpg", caption: "Tampilan Dashboard Utama — Order per Bulan" },

      ],
      challenge: "1. Perbandingan tren tahunan tidak praktis — Data penjualan tersebar per pelanggan tanpa ringkasan yang bisa langsung membandingkan performa tahun ke tahun (2024 vs 2025 vs 2026), sehingga tren pertumbuhan atau penurunan revenue sulit terlihat cepat. 2. Performa tim & sales individu tidak termonitor — Belum ada breakdown yang jelas untuk melihat kontribusi revenue masing-masing tim sales maupun performa tiap technical sales secara individual. 3. Retensi pelanggan tidak terpantau — Pola pembelian berulang (repeat order) tiap customer tidak dianalisis, sehingga saat ada pelanggan rutin yang tiba-tiba berhenti membeli, tim tidak menyadarinya sampai terlambat untuk ditindaklanjuti. 4. Persiapan rapat evaluasi memakan waktu — Rapat pembahasan sales bulanan memerlukan rekap manual dari berbagai sumber data untuk membahas performa produk, tim, dan pelanggan utama.",
      solution: "1. Dashboard revenue tahunan komparatif — Menyajikan total revenue 2024, 2025, dan 2026 secara berdampingan, lengkap dengan persentase increase/decrease antar tahun (2024 vs 2025, 2025 vs 2026). 2. Grafik batang perbandingan bulanan year-over-year — Setiap bulan ditampilkan berdampingan dengan bulan yang sama di tahun sebelumnya (Januari 2024 vs Januari 2025, dst), lengkap dengan label persentase kenaikan/penurunan pada tiap batang. 3. Breakdown multi-dimensi — Menampilkan top technical sales berdasarkan revenue, top customer, performa per produk, dan per vendor/principal, yang bisa difilter sesuai kebutuhan analisis. 4. Fitur Repeat Order untuk retensi pelanggan — Tombol khusus yang menampilkan pola pembelian tiap customer per bulan, membantu mengidentifikasi customer dengan siklus pembelian rutin yang tiba-tiba berhenti agar bisa langsung di-follow up oleh tim technical sales. 5. Fitur pendukung analisis produk & vendor — Dilengkapi Product Rules, Product Chart, dan Top 5 Principal untuk mendalami performa tiap kategori produk dan vendor. 6. Materi presentasi untuk rapat evaluasi sales — Selain dashboard, turut menyiapkan materi presentasi khusus rapat pembahasan sales, mencakup revenue penjualan premiks & raw material per tim sales (1, 2, 3) beserta increase/decrease-nya, performa omset tiap sales dalam tim, serta ringkasan top customer dan top product.",
      impact: "1. Evaluasi tren tahunan jadi instan — Manajemen dapat langsung melihat pertumbuhan atau penurunan revenue antar tahun dan antar bulan tanpa rekap manual, mempercepat pengambilan keputusan strategis. 2. Retensi pelanggan jadi proaktif, bukan reaktif — Analisis repeat order memungkinkan tim technical sales menindaklanjuti pelanggan yang pola pembeliannya mulai berubah sebelum benar-benar berhenti membeli, berpotensi menyelamatkan revenue yang sebelumnya hilang tanpa disadari. 3. Rapat evaluasi sales lebih terstruktur — Materi presentasi berbasis data yang sudah disiapkan mempercepat pembahasan performa tim sales, produk, dan customer utama dalam rapat bulanan, menjadikan diskusi lebih fokus pada strategi tindak lanjut.",
      Link2: "https://docs.google.com/presentation/d/1kSWy8ogqle_i0LHsz9KofFkzjCEyNFj7/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Finance and operational Analytics Dashboard",
      images: [
        { src: "assets/projects/bi/Toggle Interaktif (5).jpg", caption: "Modul Gross Profit" },
        { src: "assets/projects/bi/Toggle Interaktif (6).jpg", caption: "Modul CashFlow" },
        { src: "assets/projects/bi/Toggle Interaktif (7).jpg", caption: "Modul Credit Check Customers" },
      ],
      challenge: "1. Profitabilitas tidak terlihat granular — Perusahaan hanya mengetahui total penjualan, tanpa breakdown margin keuntungan (gross profit margin) per produk, per pelanggan, atau per bulan, sehingga sulit mengetahui produk atau customer mana yang benar-benar menguntungkan. 2. Arus kas tidak termonitor real-time — Pemasukan dan pengeluaran kas tercatat terpisah per kategori beban (HRD, marketing, operasional, dll), tanpa ringkasan yang menunjukkan tren arus kas bulanan dan apakah cash flow perusahaan sedang sehat atau defisit. 3. Risiko piutang tidak terpantau proaktif — Status pembayaran pelanggan (lunas, jatuh tempo, overdue) tidak terpusat, sehingga tim finance kesulitan mengidentifikasi customer dengan risiko piutang tinggi sebelum invoice benar-benar terlambat dibayar.",
      solution: "1. Modul Gross Profit — Menyajikan revenue, HPP, quantity terjual, dan Gross Profit Margin (GPM) secara real-time, dilengkapi tren margin bulanan dalam grafik batang dan breakdown performa tiap customer dari sisi total selling vs HPP. 2. Modul Cash Flow — Menampilkan total inflow dan outflow kas beserta persentase pertumbuhannya, tren arus kas bulanan, serta rincian arus kas per kategori beban (HRD, marketing, office, dll) dan aktivitas (operasi aset/liabilitas). 3. Modul Credit Check — Memantau total piutang, jumlah invoice, dan persentase piutang terhadap total penjualan, dengan visual proporsi invoice overdue vs on-time, serta tabel detail histori pembayaran tiap customer lengkap dengan tanggal jatuh tempo. 4. Ketiga modul terintegrasi dalam satu dashboard FA (Finance & Accounting) yang bisa berpindah antar tampilan melalui navigasi toggle, memudahkan tim finance menganalisis kesehatan bisnis dari tiga sudut pandang sekaligus.",
      impact: "1. Keputusan bisnis berbasis margin, bukan cuma omset — Manajemen dapat melihat produk dan customer mana yang benar-benar memberi keuntungan terbaik, bukan hanya yang bervolume tinggi.2. Kesehatan arus kas lebih terpantau — Tren inflow-outflow bulanan yang jelas membantu tim finance mendeteksi lebih awal potensi defisit kas sebelum menjadi masalah likuiditas. 3. Penagihan piutang jadi lebih terarah — Visibilitas invoice overdue memudahkan tim finance memprioritaskan follow-up penagihan ke customer dengan risiko piutang tertinggi.",
      Link2: "https://docs.google.com/presentation/d/1WqVvGStmjVuPs7rlEEdKD6iVmqUTItxe/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "uiux",
      tag: "UI/UX & App Dev",
      title: "Technical Sales Monitoring & Visit Tracking System — AppSheet",
      images: [
        { src: "assets/projects/uiux/Nama Karyawan (3).png", caption: "Aplikasi Tracking dan Absensi Technical Sales" },
      ],
      challenge: "1. Sulitnya melakukan pemantauan aktivitas tim Technical Sales secara real-time di lapangan, terutama terkait verifikasi kehadiran (absensi) dan validasi lokasi kunjungan.\n2. Terbatasnya visibilitas terhadap perkembangan status interaksi dengan customer, baik pelanggan lama, pelanggan baru, maupun calon customer (prospek).\n3. Pelaporan harian manual yang lambat dan berisiko tinggi terhadap ketidakakuratan data riwayat kunjungan serta status pipeline penjualan.",
  solution: "1. Mengembangkan fitur presensi dan check-in berbasis Geolocation (GPS) beserta lampiran foto langsung untuk memvalidasi kehadiran sales di lokasi customer secara real-time.\n2. Merancang modul 'Project Pipeline' dan log kunjungan terstruktur untuk mengelompokkan serta memantau progres hubungan dengan customer lama, baru, maupun calon customer.\n3. Membangun aplikasi no-code berbasis Google AppSheet yang terintegrasi langsung dengan database Google Sheets untuk menyinkronkan data pemantauan secara otomatis dan efisien.",
  impact: "1. Meningkatkan akurasi dan transparansi verifikasi kehadiran tim Technical Sales di lapangan hingga 100% menggunakan pelacakan koordinat GPS.\n2. Mempercepat proses pemantauan status pipeline customer sehingga manajemen dapat mengambil keputusan strategi penjualan secara lebih responsif.\n3. Mengeliminasi rekap data manual dan memangkas waktu pelaporan harian tim lapangan, menciptakan alur kerja monitoring yang lebih rapi dan terorganisasi.",
    },
    {
      category: "uiux",
      tag: "UI/UX & App Dev",
      title: "Mobile App Redesign — Suara Surabaya Mobile",
      images: [
        { src: "assets/projects/uiux/SS2.png", caption: "Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio" },
        { src: "assets/projects/uiux/SS1.png", caption: "Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio" },
        { src: "assets/projects/uiux/SS3.png", caption: "Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio" }
      ],
      challenge: "Suara Surabaya, media lokal Kota Surabaya, berhadapan dengan masalah usability yang menghambat kenyamanan penggunanya — tercermin dari skor System Usability Scale (SUS) awal yang hanya 47.3 dari 100, jauh di bawah standar minimum industri (68). Evaluasi heuristik menemukan sejumlah pain point pada navigasi dan alur informasi yang berisiko menurunkan kepercayaan pengguna terhadap platform.",
      solution: "Menggunakan metodologi Double Diamond, saya memetakan pain point pengguna melalui Heuristic Evaluation, lalu merancang solusi end-to-end di Figma — mulai dari wireframe, information architecture, hingga prototype high-fidelity. Solusi desain ini kemudian dibangun menjadi prototype fungsional berbasis Apache Cordova untuk keperluan pengujian usability, dan divalidasi langsung ke pengguna melalui pengujian System Usability Scale (SUS).",
      impact: "Skor SUS meningkat signifikan dari 47.3 menjadi 73.25 (+55%), melampaui ambang batas usability yang baik secara industri. Hasil pengujian pasca-redesign menunjukkan peningkatan di semua aspek: Ease of Use 88.33, Learnability 89, System Integration 89.5, dan User Confidence 84. Peningkatan ini diharapkan dapat diimplementasikan sehingga Suara Surabaya Mobiledapat menjadi platform media lokal yang lebih mudah diakses dan dipercaya penggunanya.",
      Link : "https://www.figma.com/proto/jVFnK9pjyPXS8flG0C9Ywa/Untitled?node-id=1-588&t=Pui5fNz1kuZjvoqE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1048",
      Link2 : "https://drive.google.com/file/d/1aVwpQ3g0fU0JrUrWBs0mdNHzmfN3Gc4j/view?usp=sharing",
    },
    {
      category: "uiux",
      tag: "UI/UX & Web",
      title: "Inventory Application Design — PLN UID Jawa Timur",
      images: [
        { src: "assets/projects/uiux/pln-inv.png", caption: "Dashboard Inventori — Ringkasan Stok" },
      ],
      challenge: "Tim lapangan PLN UID Jawa Timur masih mengalami hambatan dalam pencatatan dan pemantauan inventori, yang berisiko memperlambat operasional dan menyulitkan pelacakan stok secara real-time. Dibutuhkan sistem digital berbasis web yang tidak hanya fungsional, tapi juga intuitif untuk dipakai tim non-teknis di lapangan.",
      solution: "Sebagai UI/UX Designer & Developer Intern, saya menerapkan pendekatan User-Centered Design (UCD) — mulai dari riset kebutuhan pengguna, penyusunan wireframe, hingga high-fidelity design dan prototype interaktif di Figma. Desain difokuskan pada usability agar mudah dipelajari tim lapangan yang beragam latar belakang teknisnya. Saya berkolaborasi langsung dengan tim developer melalui proses developer handoff, menerjemahkan desain menjadi spesifikasi teknis yang selaras dengan standar implementasi sistem.",
      impact: "Desain yang dihasilkan menjadi fondasi resmi untuk pengembangan aplikasi inventori PLN UID Jawa Timur, dengan struktur antarmuka yang sudah divalidasi dari sisi usability sebelum masuk tahap development. Kolaborasi erat antara desain dan tim developer memastikan hasil akhir aplikasi tetap selaras dengan kebutuhan pengguna di lapangan, bukan sekadar tampilan visual.",
      Link2 : "https://docs.google.com/presentation/d/1o-JpyLMx9Cr8ViX7gOlB0s4ndCssx_9s/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true",
      Link : "https://www.figma.com/proto/a0VL9UMT9BVMdjqpnw4ACX/KERJA-PRAKTEK?node-id=1-6627&t=yU0lDLi1jprx5AW7-1&scaling=contain&content-scaling=fixed&page-id=1%3A5461"
    },
    {
      category: "uiux",
      tag: "UI/UX Design · Proyek Kelompok (Scrum)",
      title: "POS Application Development — Subur Jaya Building Store",
      images: [
        { src: "assets/projects/uiux/sjpos.png", caption: "Mockup" },
        { src: "assets/projects/uiux/sjpos1.png", caption: "Main DashBoard" },
        { src: "assets/projects/uiux/sjpos2.png", caption: "Point of Sales" },
        { src: "assets/projects/uiux/sjpos3.png", caption: "Catalog Product" }

      ],
      challenge: "Toko bangunan Subur Jaya masih mengandalkan pencatatan transaksi dan stok secara manual, menyebabkan proses kasir lambat dan rawan selisih data inventori. Tim kami ditugaskan merancang solusi POS digital dalam kerangka kerja Scrum sebagai proyek mata kuliah, dengan pembagian peran developer dan UI/UX designer.",
      solution: "Sebagai UI/UX Designer dalam tim, saya bertanggung jawab merancang alur kerja kasir dari riset kebutuhan pengguna, wireframe, hingga high-fidelity prototype di Figma — memastikan alur transaksi dan pencarian stok terasa cepat dan minim kesalahan input. Desain ini didiskusikan dan divalidasi bersama tim melalui sprint review, lalu diimplementasikan developer tim menjadi aplikasi web berbasis Laravel, dengan kolaborasi version control via GitHub.",
      impact: "Melalui proses Scrum dengan beberapa sprint iterasi desain-ke-development, tim berhasil menghadirkan aplikasi POS berbasis web yang mempercepat proses transaksi dan pengelolaan inventori toko. Proyek ini menjadi pengalaman langsung menerapkan kolaborasi desainer-developer dalam siklus pengembangan produk yang agile.",
      Link : "https://www.figma.com/proto/h4P76JkazOu1udcWYg8MjZ/23_-Moh.-Fahri-Firdaus-s-team-library?node-id=412-372&p=f&t=usdboiTvVxgSJYsl-1&scaling=scale-down&content-scaling=fixed&page-id=412%3A2&starting-point-node-id=412%3A382",
    },
    {
      category: "uiux",
      tag: "App dev · Proyek Kelompok (Scrum)",
      title: "E-Commerce App for Building Materials — RyApp Subur Jaya",
      images: [
        { src: "assets/projects/uiux/ryapp-ecommerce.jpg", caption: "Alur Aplikasi: Login → Splash → Katalog Produk" }
      ],
      challenge: "Subur Jaya membutuhkan kanal penjualan digital untuk produk material bangunan, namun belum memiliki platform yang mendukung transaksi online secara langsung. Tim kami ditugaskan merancang dan membangun solusinya sebagai proyek mata kuliah dengan kerangka kerja Scrum, dan saya berperan sebagai Ketua Tim sekaligus Front-End Developer.",
      solution: "Sebagai ketua tim, saya memimpin perencanaan sprint dan pembagian tugas, seperti merancang UI/UX aplikasi mobile dari user flow hingga high-fidelity design di Figma. Saya juga turun langsung membangun front-end aplikasi menggunakan React Native, mengimplementasikan alur manajemen produk, autentikasi, keranjang, dan transaksi, dengan integrasi Firebase untuk kebutuhan data dan autentikasi pengguna.",
      impact: "Melalui beberapa sprint iterasi, tim berhasil menghasilkan prototipe aplikasi e-commerce yang fungsional untuk mendukung penjualan material bangunan Subur Jaya — mencakup alur belanja end-to-end dari autentikasi hingga transaksi. Proyek ini menjadi pengalaman langsung merangkap peran mobile developer, sekaligus pemimpin tim dalam siklus pengembangan produk yang agile.",
      Link2 : "https://github.com/FirdausMoh/E-COMMERCE-TOKO-BANGUNAN.git",
      Link : "https://drive.google.com/file/d/1cNMCCZ2Dc4RCERX8uJmB8SAgug7bTIwd/view?usp=sharing",
    },
    {
      category: "uiux",
      tag: "UI/UX",
      title: "Mobile EduTech Application UI/UX Design",
      images: [
        { src: "assets/projects/uiux/iPhone 16 (1).png", caption: "Onboarding & Daftar Kursus" },
        { src: "assets/projects/uiux/Free iPhone Air.png", caption: "Detail: Halaman Materi & Video Pembelajaran" }
      ],
      challenge: "Aplikasi belajar digital untuk materi programming, UI/UX, dan bisnis digital membutuhkan alur belajar yang jelas dan konsisten agar pengguna tidak kebingungan berpindah antar topik. Tim kami ditugaskan merancang solusinya sebagai proyek mata kuliah dengan kerangka kerja Scrum.",
      solution: "Sebagai UI/UX Designer dalam tim, saya merancang user flow, wireframe, dan high-fidelity design di Figma untuk memastikan alur belajar antar topik terasa jelas dan tidak membingungkan pengguna. Saya juga menyusun design system lengkap — palet warna, tipografi, dan komponen UI — agar seluruh tampilan aplikasi konsisten dan mudah dikembangkan lebih lanjut oleh tim.",
      impact: "Melalui beberapa sprint iterasi bersama tim, kami menghasilkan pengalaman belajar yang interaktif dengan desain yang konsisten dan siap dikembangkan lebih lanjut. Proyek ini menjadi pengalaman langsung menerapkan proses desain terstruktur dalam kerja tim berbasis Scrum.",
      Link : "https://www.figma.com/proto/zRE2bhxQ6ny7wCBhO2IWTf/Edutech-Digital-IT-Learning?node-id=1-2196&t=ccHtCiLc866f3GDZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A117"
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Recruitment Campaign Design",
      images: [
        { src: "assets/projects/design/loker.png", caption: "Poster Lowongan" },
        { src: "assets/projects/design/loker (2).png", caption: "Poster Lowongan" },
        { src: "assets/projects/design/loker (3).png", caption: "Poster Lowongan" },
      ],
      challenge: "Divisi HR membutuhkan materi visual rekrutmen yang informatif dan sesuai identitas brand perusahaan.",
      solution: "Merancang serangkaian poster lowongan kerja dengan struktur informasi yang jelas dan konsisten dengan brand guideline.",
      impact: "Materi rekrutmen tampil lebih profesional dan mudah dipahami calon pelamar."
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Social Media Campaign Design",
      images: [
        { src: "assets/projects/design/Desain Sosmed.png", caption: "Social Media Feed" },
      ],
      challenge: "Perusahaan membutuhkan konten media sosial untuk momen-momen penting secara konsisten dan tepat waktu.",
      solution: "Mendesain rangkaian konten media sosial untuk berbagai momentum dengan gaya visual yang seragam.",
      impact: "Kehadiran brand di media sosial menjadi lebih konsisten dan menarik secara visual."
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Brosur Company Product",
      images: [
        { src: "assets/projects/design/product-concsaver.jpg", caption: "Poster Promosi Produk — ConcSaver" },
        { src: "assets/projects/design/product-concsaver (2).png", caption: "Product Shot — ConcSaver" },
        { src: "assets/projects/design/brochure-toxiclean.jpg", caption: "Brosur Teknis — ToxClean" },
      ],
      challenge: "1. Tim Technical Sales membutuhkan media edukasi visual yang informatif dan profesional untuk mempermudah penjelasan produk baru kepada customer.\n2. Sulitnya menyampaikan informasi teknis produk secara ringkas namun menarik, baik saat melakukan pendekatan ke calon customer (prospek) maupun retensi ke customer lama.\n3. Kurangnya materi promosi terstandarisasi yang dapat langsung membangun kepercayaan (trust) dan mempercepat konversi penjualan di lapangan.",
      solution: "1. Merancang brosur cetak dan digital berkonsep clean serta profesional yang menonjolkan nilai jual utama (value proposition) produk baru secara intuitif.\n2. Menyusun hierarki visual dan tata letak informasi teknis yang tersistematis agar pesan mudah dipahami dalam waktu singkat oleh customer baru maupun lama.\n3. Menyelaraskan elemen branding, warna, dan tipografi perusahaan untuk memperkuat citra profesionalisme tim Technical Sales saat kunjungan lapangan.",
      impact: "1. Menyediakan *sales kit* yang efektif untuk meningkatkan rasa percaya diri dan efisiensi komunikasi tim Technical Sales saat presentasi produk.\n2. Membantu mempercepat penetrasi produk baru ke calon customer (prospek) melalui penyampaian informasi produk yang jelas dan persuasif.\n3. Memperkuat hubungan bisnis dengan customer lama melalui penawaran lini produk baru yang dikemas secara eksklusif dan informatif.",
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Stiker Produk & Label Kemasan",
      images: [
        { src: "assets/projects/design/product bag.png", caption: "Product Design" },
      ],
     challenge: "1. Kebutuhan label kemasan yang tidak hanya menarik secara visual, tetapi juga wajib memuat informasi teknis produk secara rinci, jelas, dan sesuai standar industri.\n2. Keterbatasan area/ruang pada stiker kemasan untuk menata elemen branding, komposisi, petunjuk penggunaan, serta informasi legalitas tanpa terlihat padat dan berantakan.\n3. Kurangnya daya tarik visual pada kemasan produk terdahulu yang berpotensi menurunkan daya saing di mata customer lama maupun calon customer.",
     solution: "1. Merancang tata letak (layout) label stiker terstruktur dengan hierarki visual yang jelas antara nama produk, fungsi utama, dan detail instruksi teknis.\n2. Mengoptimalkan tipografi, ikon grafis intuitif, dan kontras warna untuk memastikan informasi penting mudah dibaca meskipun dalam ukuran kemasan yang terbatas.\n3. Mengintegrasikan identitas visual brand (logo, skema warna, dan elemen khas) guna memperkuat *brand recognition* dan memberikan kesan produk yang profesional serta terpercaya.",
     impact: "1. Meningkatkan nilai estetika dan daya tarik produk saat dipajang atau dipresentasikan oleh tim Technical Sales kepada customer.\n2. Memudahkan customer dan pengguna di lapangan dalam memahami petunjuk penggunaan serta informasi penting produk secara akurat dan cepat.\n3. Memperkuat citra dan profesionalisme brand perusahaan melalui kemasan produk yang konsisten, informatif, dan berstandar tinggi.",
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Corporate Business Card Design",
      images: [
        { src: "assets/projects/design/CardName.png", caption: "Kartu Nama Karyawan" }, 
      ],
     challenge: "Kebutuhan akan media personal branding yang praktis dan elegan bagi tim untuk membagikan informasi kontak perusahaan secara cepat kepada calon customer",
     solution: "Merancang desain kartu nama yang minimalis dan modern dengan tata letak informasi kontak yang terstruktur dan mudah dibaca.\n2. Mengintegrasikan kode QR untuk mempermudah digitalisasi kontak secara instan ke dalam smartphone calon customer.\n3. Menyesuaikan elemen grafis, tipografi, dan skema warna sesuai dengan pedoman identitas visual (brand guideline) perusahaan.",
     impact: "1. Meningkatkan profesionalisme dan rasa percaya diri tim saat berinteraksi serta membangun jaringan bisnis di lapangan.\n2. Memudahkan calon customer dan mitra bisnis dalam menyimpan data kontak secara akurat dan cepat.\n3. Memperkuat kesan pertama (first impression) yang positif dan kredibel terhadap identitas perusahaan.",
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Company Philosophy Wall Graphic Design",
      images: [
        { src: "assets/projects/design/wall.jpg", caption: "Product Design" }, 
      ],
     challenge: "1. Kebutuhan untuk memvisualisasikan nilai-nilai inti dan filosofi perusahaan pada dinding kantor agar dapat dihayati oleh internal karyawan serta menginspirasi tamu/klien.\n2. Menata teks filosofi yang bernilai strategis menjadi karya seni dinding (wall graphic) yang estetis tanpa terlihat kaku atau berlebihan.\n3. Mengintegrasikan elemen estetika visual yang harmonis dengan interior ruang kerja profesional.",
    solution: "1. Merancang instalasi grafis dinding dengan komposisi tipografi yang tegas, dinamis, dan mudah dibaca dari jarak jauh.\n2. Mengombinasikan slogan filosofi utama perusahaan dengan elemen visual dekoratif yang selaras dengan identitas branding perusahaan.\n3. Menyusun tata letak yang proporsional dan adaptif terhadap dimensi dinding ruang kantor guna menciptakan poin fokus (focal point) yang menarik.",
    impact: "1. Menciptakan lingkungan kerja yang representatif dan memperkuat budaya serta nilai-nilai perusahaan (corporate culture) bagi seluruh karyawan.\n2. Meningkatkan daya tarik estetika interior kantor saat menerima kunjungan dari klien, mitra, maupun calon customer.\n3. Memperkuat penyampaian pesan visi dan komitmen perusahaan secara visual kepada setiap pengunjung.",
    },
  ],

  /* -------------------------------------------------------------------
   * 8. MENGAPA MEMILIH SAYA
   * ---------------------------------------------------------------- */
  whyMe: [
    {
      title: "End-to-End Skill Integration",
      desc: "Mampu menjembatani analisis data teknis dengan desain visual yang estetik dan antarmuka yang ramah pengguna."
    },
    {
      title: "Fast Track & Proven Execution",
      desc: "Lulusan akselerasi 3.5 tahun dengan IPK 3.65 serta rekam jejak aktif di industri dan organisasi nasional."
    },
    {
      title: "Business Value Oriented",
      desc: "Berfokus menciptakan solusi IT dan dashboard yang mendorong efisiensi operasional dan mendukung keputusan bisnis."
    }
  ]
};
