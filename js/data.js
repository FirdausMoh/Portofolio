/**
 * =====================================================================
 *  PORTFOLIO DATA — BILINGUAL (Indonesia / English)
 * =====================================================================
 *  Setiap teks yang perlu diterjemahkan ditulis dengan:
 *      L("teks Indonesia", "English text")
 *  Field non-teks (gambar, link, nama tools, dll) ditulis biasa.
 *
 *  Bahasa default = English. Ganti dengan setPortfolioLang("id" | "en").
 *  Pilihan bahasa disimpan di localStorage.
 * =====================================================================
 */

/* ------------------------- i18n helpers ------------------------- */
const L = (id, en) => ({ id, en });

function localizePortfolio(node, lang) {
  if (Array.isArray(node)) return node.map(n => localizePortfolio(n, lang));
  if (node && typeof node === "object") {
    const keys = Object.keys(node);
    if (keys.length === 2 && "id" in node && "en" in node) return node[lang];
    const out = {};
    keys.forEach(k => (out[k] = localizePortfolio(node[k], lang)));
    return out;
  }
  return node;
}

/* ------------------------- RAW DATA ------------------------- */
const PORTFOLIO_DATA_RAW = {

  profile: {
    name: "Moh Fahri Firdaus",
    role: "Currently as IT Designer & BI Developer",
    tagline: "Data Analyst & Visualization | UI/UX & Web Developer | Graphic Design",
    location: "Surabaya, Jawa Timur",
    email: "fahriwork58@email.com",     // TODO: ganti dengan email aktif
    phone: "+62 822 2985 0927",
    linkedin: "https://linkedin.com/in/mohfahri",  // TODO
    instagram: "https://instagram.com/",  // TODO
    github: "https://github.com/",        // TODO
    cvFile: "https://drive.google.com/file/d/1azjSUlM4QKJT6XMl_nWY581ZZr9ijLeu/view?usp=drivesdk",

    photo: "assets/profile/profile.jpeg",
    heroHeadline: L("Mengubah data menjadi Insight bisnis.", "Turning data into business insight."),
    bio: L(
      "Lulusan Ilmu Komputer dari Telkom University dengan kompetensi di bidang Business Intelligence, Analisis & Visualisasi Data, Pengembangan Aplikasi & Web, UI/UX, serta Desain Grafis. Saat ini bekerja sebagai IT Design Specialist (BI & Data Visualization), dengan fokus mengubah data operasional menjadi dashboard intuitif dengan Power BI, guna mendukung pemangku kepentingan dalam melakukan pengambilan keputusan yang tepat dan menyusun strategi bisnis.\n\n Selain mengembangkan solusi Business Intelligence, saya memiliki pengalaman dalam digitalisasi dan pengembangan sistem internal, termasuk pembuatan aplikasi absensi karyawan menggunakan AppSheet dan pengembangan solusi berbasis web menggunakan Laravel. Saya juga berpengalaman dalam mengelola, memproses, dan menganalisis data ERP untuk mendukung kebutuhan operasional serta menyediakan informasi yang lebih terstruktur bagi proses bisnis. Saya mampu mengintegrasikan data, teknologi, dan kebutuhan bisnis untuk menghadirkan solusi yang meningkatkan efisiensi operasional serta mendukung transformasi digital perusahaan.",
      "Computer Science graduate from Telkom University with expertise in Business Intelligence, Data Analysis & Visualization, Application & Web Development, UI/UX, and Graphic Design. Currently working as an IT Design Specialist (BI & Data Visualization), focused on turning operational data into intuitive Power BI dashboards that help stakeholders make sound decisions and shape business strategy.\n\n Beyond Business Intelligence solutions, I have experience in digitalizing and developing internal systems, including an employee attendance app built with AppSheet and web-based solutions built with Laravel. I am also experienced in managing, processing, and analyzing ERP data to support operational needs and provide more structured information for business processes. I integrate data, technology, and business requirements to deliver solutions that improve operational efficiency and support the company's digital transformation."
    ),
    focusAreas: [
      { title: L("Data Analyst & BI Developer", "Data Analyst & BI Developer") },
      { title: L("Graphic Design", "Graphic Design") },
      { title: L("Web and Mobile Dev", "Web and Mobile Dev") }
    ],
    stats: [
      {
        value: " Computer Science",
        suffix: " | 3.65/4.00",
        label: L(
          "Telkom University (2021-2025) | Fast Track (Selesai dalam 7 Semester)",
          "Telkom University (2021-2025) | Fast Track (Completed in 7 Semesters)"
        )
      }
    ]
  },

  experience: [
    {
      role: "IT Designer & BI Developer",
      company: "PT. ProVitex Nutrition",
      period: L("Okt 2025 — Sekarang", "Oct 2025 — Present"),
      image: "assets/experience/exp-provitex.png",
      bullets: [
        L("Business Intelligence & Analytics: pengembangan dashboard Power BI, visualisasi & storytelling data, pelaporan operasional dengan Microsoft Office.",
          "Business Intelligence & Analytics: Power BI dashboard development, data visualization & storytelling, and operational reporting with Microsoft Office."),
        L("App Development: membangun aplikasi mobile internal menggunakan AppSheet.",
          "App Development: building internal mobile applications with AppSheet."),
        L("Graphic Design: desain visual korporat, komunikasi visual, dan pembuatan aset grafis.",
          "Graphic Design: corporate visual design, visual communication, and graphic asset creation."),
        L("Data Management: input dan pengelolaan data ERP Accurate.",
          "Data Management: data entry and management in Accurate ERP.")
      ]
    },
    {
      role: "Information Technology Staff Intern",
      company: "PT PLN (Persero)",
      period: "2024",
      image: "assets/experience/image.png",
      bullets: [
        L("User-Centered Design (UCD): wireframing, high-fidelity prototyping, interactive mockups, information architecture.",
          "User-Centered Design (UCD): wireframing, high-fidelity prototyping, interactive mockups, information architecture."),
        L("Usability & UX Strategy: usability testing, user flow mapping, workflow optimization.",
          "Usability & UX Strategy: usability testing, user flow mapping, workflow optimization."),
        L("Technical Collaboration: developer handoff, translasi desain UI/UX, penyelarasan spesifikasi fungsional.",
          "Technical Collaboration: developer handoff, translating UI/UX designs, and aligning functional specifications.")
      ]
    }
  ],

  education: {
    school: "Telkom University",
    degree: L("S1 Computer Science", "Bachelor of Computer Science"),
    period: L("Okt 2021 — Feb 2025 (jalur akselerasi, 3.5 tahun)", "Oct 2021 — Feb 2025 (accelerated track, 3.5 years)"),
    gpa: "3.65 / 4.00",
    finalProject: "Usability Evaluation and Redesign of the UI/UX of the Suara Surabaya Mobile Application with Heuristic Evaluation and Double Diamond Model.",
    certification: "English Proficiency : Professional Proficiency (EPRT® Certified)"
  },

  organizations: [
    {
      role: L("Staf Divisi Kewirausahaan", "Entrepreneurship Division Staff"),
      org: "HMSI — Telkom University",
      period: L("Jan 2024 — Jan 2025", "Jan 2024 — Jan 2025"),
      image: "assets/education/org-hmsi.jpeg",
      bullets: [
        L("Mengelola penjualan merchandise dan jaket angkatan secara end-to-end, mencakup sourcing, pricing, branding, promosi, dan eksekusi penjualan. Mengembangkan strategi marketing kreatif berbasis kebutuhan pasar serta mengoordinasikan pelaksanaannya",
          "Managed class merchandise and jacket sales end-to-end, covering sourcing, pricing, branding, promotion, and sales execution. Developed creative, market-driven marketing strategies and coordinated their implementation.")
      ]
    },
    {
      role: L("Panitia Pelaksana", "Organizing Committee"),
      org: "LOYALISM — Telkom University",
      period: L("Jun 2021 — Mar 2022", "Jun 2021 — Mar 2022"),
      image: "assets/education/org-loyalism.jpeg",
      bullets: [
        L("Mengkoordinasikan juri, peserta, dan tim pelaksana secara efektif, serta merancang alur, jadwal, mekanisme, dan SOP kompetisi. Menetapkan aturan dan panduan yang terstruktur dan transparan, dengan mengoptimalkan leadership, komunikasi, teamwork, problem solving, dan decision-making untuk memastikan kompetisi berjalan efektif dan profesional.",
          "Effectively coordinated judges, participants, and the organizing team, and designed the competition flow, schedule, mechanisms, and SOPs. Set structured and transparent rules and guidelines, applying leadership, communication, teamwork, problem solving, and decision-making to ensure an effective and professional competition.")
      ]
    },
    {
      role: L("Peserta Campus Outreach", "Campus Outreach Participant"),
      org: "ITTelkom Surabaya",
      period: L("Apr 2022", "Apr 2022"),
      image: "assets/education/org-hmsi.jpg",
      bullets: [
        L("Dipercaya mewakili Kampus dalam kegiatan sosialisasi dan pemasaran, memimpin interaksi dengan calon mahasiswa, menyampaikan informasi secara percaya diri dan persuasif, serta berkontribusi dalam meningkatkan brand awareness, engagement, dan minat calon mahasiswa terhadap institusi.",
          "Trusted to represent the campus in outreach and marketing activities, leading interactions with prospective students, delivering information confidently and persuasively, and contributing to brand awareness, engagement, and prospective students' interest in the institution.")
      ]
    }
  ],

  certifications: [
    {
      title: "Professional Proficiency",
      issuer: "EPRT® Certified — Telkom University",
      image: "assets/certifications/cert-eprt.jpg"
    },
    {
      title: L("Karya Tulis Ilmiah Nasional", "National Scientific Writing Competition"),
      issuer: L("Peserta Tahap Full Paper Lomba Karya Tulis Ilmiah", "Full Paper Stage Participant, Scientific Writing Competition"),
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

  skills: [
    {
      group: "Data & BI Development",
      items: ["Power BI", "DAX", "Python", "SQL", "ERP Accurate", "Excel Analytics", "Pivot Table", "Data Storytelling"]
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

  /* category: "bi" | "uiux" | "design" */
  projects: [
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Production Performance & Raw Material Analytics Dashboard",
      images: [{ src: "assets/projects/bi/production-dashboard-2.jpg", caption: L("Detail: Monitoring Produksi & Stok Bahan Baku", "Detail: Production & Raw Material Stock Monitoring") }],
      challenge: L(
        "1. Visibilitas operasional yang terpecah-pecah Tim produksi dan purchasing kesulitan memantau kondisi operasional secara real-time; kapasitas gudang yang terisi, status kedaluwarsa bahan baku per batch, hingga pencapaian target produksi bulanan tersebar di sumber yang berbeda-beda dan tidak terpusat. 2. Gudang produksi dan logistik tidak saling terhubung Informasi stok di gudang produksi dan gudang logistik terpisah satu sama lain. Saat bahan baku di gudang produksi menipis mendadak, tidak ada cara cepat untuk memastikan apakah stok pengganti tersedia di gudang logistik. 3. Purchasing bereaksi, bukan merencanakan Tanpa visibilitas lintas gudang, divisi purchasing sering kali baru mengetahui kekurangan bahan baku saat produksi sudah mendesak — memicu pembelian mendadak yang tidak terencana dan berisiko mengganggu jadwal produksi.",
        "1. Fragmented operational visibility The production and purchasing teams struggled to monitor operations in real time; warehouse capacity, raw material expiry status per batch, and monthly production target achievement were scattered across different, uncentralized sources. 2. Production and logistics warehouses were disconnected Stock information in the production warehouse and the logistics warehouse was kept separately. When raw materials in the production warehouse suddenly ran low, there was no quick way to confirm whether replacement stock was available in the logistics warehouse. 3. Purchasing reacted instead of planning Without cross-warehouse visibility, purchasing often learned about raw material shortages only when production was already urgent — triggering unplanned emergency purchases and risking production schedule disruptions."
      ),
      solution: L(
        "1. Dashboard terpusat untuk seluruh monitoring produksi Membangun dashboard Power BI yang mengonsolidasikan kapasitas gudang, status kedaluwarsa bahan baku per batch number (aman / hampir kedaluwarsa / kedaluwarsa), pencapaian target produksi bulanan dalam bentuk gauge, tren produksi per jenis produk, waste produksi, dan run hour mesin — semua dalam satu tampilan. 2. Toggle interaktif gudang produksi ↔ gudang logistik Fitur utama dashboard ini adalah tombol switch yang memungkinkan tim langsung membandingkan stok antara gudang produksi dan gudang logistik. Saat ada kebutuhan mendesak, tim bisa langsung cek apakah stok pengganti tersedia di logistik sebelum memutuskan membeli baru. 3. Forecasting bahan baku berbasis data historis Dashboard menghitung proyeksi kebutuhan bahan baku dari rata-rata kuantitas produksi bulanan, membantu purchasing merencanakan pembelian sebelum stok benar-benar habis — bukan menunggu sampai kondisi darurat.",
        "1. Centralized dashboard for all production monitoring Built a Power BI dashboard that consolidates warehouse capacity, raw material expiry status per batch number (safe / near expiry / expired), monthly production target achievement as gauges, production trends per product type, production waste, and machine run hours — all in one view. 2. Interactive production ↔ logistics warehouse toggle The dashboard's key feature is a switch button that lets the team compare stock between the production and logistics warehouses instantly. When urgent needs arise, the team can check whether replacement stock is available in logistics before deciding to buy new. 3. Raw material forecasting based on historical data The dashboard calculates projected raw material needs from average monthly production quantities, helping purchasing plan purchases before stock actually runs out — instead of waiting for an emergency."
      ),
      impact: L(
        "1. Respons cepat saat lonjakan produksi Saat produksi meningkat tajam di bulan Maret, tim dapat langsung menggunakan fitur toggle untuk mengecek ketersediaan bahan baku di gudang logistik dan mengambil stok yang dibutuhkan tanpa menunggu proses pembelian baru — mencegah potensi keterlambatan produksi akibat kekurangan bahan baku mendadak. 2. Purchasing beralih dari reaktif ke proaktif Dengan forecasting berbasis data produksi, divisi purchasing kini dapat merencanakan pembelian bahan baku pengganti lebih awal, mengurangi ketergantungan pada pembelian mendadak yang biasanya lebih mahal dan berisiko telat datang. 3. Minim risiko kerugian akibat bahan baku kedaluwarsa Visibilitas status kedaluwarsa per batch secara real-time membantu tim memprioritaskan penggunaan bahan baku yang mendekati masa kedaluwarsa terlebih dahulu (prinsip FEFO — First Expired, First Out), menekan potensi bahan baku terbuang percuma.",
        "1. Fast response to production surges When production rose sharply in March, the team could use the toggle to check raw material availability in the logistics warehouse and draw the stock needed without waiting for a new purchase — preventing potential production delays from sudden shortages. 2. Purchasing shifted from reactive to proactive With production-based forecasting, the purchasing division can now plan replacement raw material purchases earlier, reducing reliance on emergency purchases that are usually more expensive and risk arriving late. 3. Minimal losses from expired raw materials Real-time expiry status per batch helps the team prioritize raw materials nearing expiry first (the FEFO principle — First Expired, First Out), reducing wasted materials."
      ),
      Link2: "https://docs.google.com/presentation/d/1oh3TBam8nze9T5NoJVCoCSFKvOiA4BR2/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Sales & Customer Analytics Dashboard",
      images: [
        { src: "assets/projects/bi/sales-dashboard-2.jpg", caption: L("Detail: Tren Penjualan & Insight Pelanggan", "Detail: Sales Trends & Customer Insights") },
        { src: "assets/projects/bi/sales-dashboard.jpg", caption: L("Tampilan Dashboard Utama — Order per Bulan", "Main Dashboard View — Orders per Month") },
      ],
      challenge: L(
        "1. Perbandingan tren tahunan tidak praktis — Data penjualan tersebar per pelanggan tanpa ringkasan yang bisa langsung membandingkan performa tahun ke tahun (2024 vs 2025 vs 2026), sehingga tren pertumbuhan atau penurunan revenue sulit terlihat cepat. 2. Performa tim & sales individu tidak termonitor — Belum ada breakdown yang jelas untuk melihat kontribusi revenue masing-masing tim sales maupun performa tiap technical sales secara individual. 3. Retensi pelanggan tidak terpantau — Pola pembelian berulang (repeat order) tiap customer tidak dianalisis, sehingga saat ada pelanggan rutin yang tiba-tiba berhenti membeli, tim tidak menyadarinya sampai terlambat untuk ditindaklanjuti. 4. Persiapan rapat evaluasi memakan waktu — Rapat pembahasan sales bulanan memerlukan rekap manual dari berbagai sumber data untuk membahas performa produk, tim, dan pelanggan utama.",
        "1. Impractical year-over-year comparison — Sales data was scattered per customer with no summary that could directly compare year-to-year performance (2024 vs 2025 vs 2026), making revenue growth or decline hard to spot quickly. 2. Team & individual sales performance not monitored — There was no clear breakdown of each sales team's revenue contribution or each technical sales person's individual performance. 3. Customer retention not tracked — Repeat order patterns per customer were not analyzed, so when a regular customer suddenly stopped buying, the team didn't notice until it was too late to follow up. 4. Evaluation meeting preparation was time-consuming — Monthly sales review meetings required manual recaps from multiple data sources to discuss product, team, and key customer performance."
      ),
      solution: L(
        "1. Dashboard revenue tahunan komparatif — Menyajikan total revenue 2024, 2025, dan 2026 secara berdampingan, lengkap dengan persentase increase/decrease antar tahun (2024 vs 2025, 2025 vs 2026). 2. Grafik batang perbandingan bulanan year-over-year — Setiap bulan ditampilkan berdampingan dengan bulan yang sama di tahun sebelumnya (Januari 2024 vs Januari 2025, dst), lengkap dengan label persentase kenaikan/penurunan pada tiap batang. 3. Breakdown multi-dimensi — Menampilkan top technical sales berdasarkan revenue, top customer, performa per produk, dan per vendor/principal, yang bisa difilter sesuai kebutuhan analisis. 4. Fitur Repeat Order untuk retensi pelanggan — Tombol khusus yang menampilkan pola pembelian tiap customer per bulan, membantu mengidentifikasi customer dengan siklus pembelian rutin yang tiba-tiba berhenti agar bisa langsung di-follow up oleh tim technical sales. 5. Fitur pendukung analisis produk & vendor — Dilengkapi Product Rules, Product Chart, dan Top 5 Principal untuk mendalami performa tiap kategori produk dan vendor. 6. Materi presentasi untuk rapat evaluasi sales — Selain dashboard, turut menyiapkan materi presentasi khusus rapat pembahasan sales, mencakup revenue penjualan premiks & raw material per tim sales (1, 2, 3) beserta increase/decrease-nya, performa omset tiap sales dalam tim, serta ringkasan top customer dan top product.",
        "1. Comparative annual revenue dashboard — Presents total revenue for 2024, 2025, and 2026 side by side, with increase/decrease percentages between years (2024 vs 2025, 2025 vs 2026). 2. Month-over-month year-over-year bar chart — Each month is shown next to the same month of the previous year (January 2024 vs January 2025, etc.), with percentage change labels on every bar. 3. Multi-dimensional breakdown — Shows top technical sales by revenue, top customers, performance per product, and per vendor/principal, filterable to suit the analysis. 4. Repeat Order feature for customer retention — A dedicated button showing each customer's monthly purchase pattern, helping identify customers with regular purchase cycles who suddenly stopped so the technical sales team can follow up right away. 5. Product & vendor analysis support — Includes Product Rules, Product Chart, and Top 5 Principals to dig into the performance of each product category and vendor. 6. Presentation material for sales evaluation meetings — Besides the dashboard, I also prepared presentation material for sales review meetings, covering premix & raw material sales revenue per sales team (1, 2, 3) with their increase/decrease, each salesperson's turnover within the team, and a summary of top customers and top products."
      ),
      impact: L(
        "1. Evaluasi tren tahunan jadi instan — Manajemen dapat langsung melihat pertumbuhan atau penurunan revenue antar tahun dan antar bulan tanpa rekap manual, mempercepat pengambilan keputusan strategis. 2. Retensi pelanggan jadi proaktif, bukan reaktif — Analisis repeat order memungkinkan tim technical sales menindaklanjuti pelanggan yang pola pembeliannya mulai berubah sebelum benar-benar berhenti membeli, berpotensi menyelamatkan revenue yang sebelumnya hilang tanpa disadari. 3. Rapat evaluasi sales lebih terstruktur — Materi presentasi berbasis data yang sudah disiapkan mempercepat pembahasan performa tim sales, produk, dan customer utama dalam rapat bulanan, menjadikan diskusi lebih fokus pada strategi tindak lanjut.",
        "1. Instant annual trend evaluation — Management can immediately see revenue growth or decline across years and months without manual recaps, speeding up strategic decision-making. 2. Customer retention became proactive, not reactive — Repeat order analysis lets the technical sales team follow up with customers whose purchase patterns begin to change before they stop buying entirely, potentially saving revenue that was previously lost unnoticed. 3. More structured sales review meetings — Prepared data-driven presentation material speeds up discussion of sales team, product, and key customer performance in monthly meetings, keeping the discussion focused on follow-up strategy."
      ),
      Link2: "https://docs.google.com/presentation/d/1kSWy8ogqle_i0LHsz9KofFkzjCEyNFj7/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "bi",
      tag: "Data Analyst & BI Dev",
      title: "Finance and operational Analytics Dashboard",
      images: [
        { src: "assets/projects/bi/Toggle Interaktif (5).jpg", caption: L("Modul Gross Profit", "Gross Profit Module") },
        { src: "assets/projects/bi/Toggle Interaktif (6).jpg", caption: L("Modul CashFlow", "Cash Flow Module") },
        { src: "assets/projects/bi/Toggle Interaktif (7).jpg", caption: L("Modul Credit Check Customers", "Customer Credit Check Module") },
      ],
      challenge: L(
        "1. Profitabilitas tidak terlihat granular — Perusahaan hanya mengetahui total penjualan, tanpa breakdown margin keuntungan (gross profit margin) per produk, per pelanggan, atau per bulan, sehingga sulit mengetahui produk atau customer mana yang benar-benar menguntungkan. 2. Arus kas tidak termonitor real-time — Pemasukan dan pengeluaran kas tercatat terpisah per kategori beban (HRD, marketing, operasional, dll), tanpa ringkasan yang menunjukkan tren arus kas bulanan dan apakah cash flow perusahaan sedang sehat atau defisit. 3. Risiko piutang tidak terpantau proaktif — Status pembayaran pelanggan (lunas, jatuh tempo, overdue) tidak terpusat, sehingga tim finance kesulitan mengidentifikasi customer dengan risiko piutang tinggi sebelum invoice benar-benar terlambat dibayar.",
        "1. Profitability not visible at a granular level — The company only knew total sales, without a gross profit margin breakdown per product, per customer, or per month, making it hard to tell which products or customers were truly profitable. 2. Cash flow not monitored in real time — Cash inflows and outflows were recorded separately per expense category (HR, marketing, operations, etc.), with no summary showing monthly cash flow trends or whether the company's cash flow was healthy or in deficit. 3. Receivables risk not proactively monitored — Customer payment status (paid, due, overdue) was not centralized, so the finance team struggled to identify high-risk customers before invoices were actually paid late."
      ),
      solution: L(
        "1. Modul Gross Profit — Menyajikan revenue, HPP, quantity terjual, dan Gross Profit Margin (GPM) secara real-time, dilengkapi tren margin bulanan dalam grafik batang dan breakdown performa tiap customer dari sisi total selling vs HPP. 2. Modul Cash Flow — Menampilkan total inflow dan outflow kas beserta persentase pertumbuhannya, tren arus kas bulanan, serta rincian arus kas per kategori beban (HRD, marketing, office, dll) dan aktivitas (operasi aset/liabilitas). 3. Modul Credit Check — Memantau total piutang, jumlah invoice, dan persentase piutang terhadap total penjualan, dengan visual proporsi invoice overdue vs on-time, serta tabel detail histori pembayaran tiap customer lengkap dengan tanggal jatuh tempo. 4. Ketiga modul terintegrasi dalam satu dashboard FA (Finance & Accounting) yang bisa berpindah antar tampilan melalui navigasi toggle, memudahkan tim finance menganalisis kesehatan bisnis dari tiga sudut pandang sekaligus.",
        "1. Gross Profit module — Presents revenue, COGS, quantity sold, and Gross Profit Margin (GPM) in real time, with monthly margin trends in bar charts and a per-customer performance breakdown of total selling vs COGS. 2. Cash Flow module — Shows total cash inflow and outflow with growth percentages, monthly cash flow trends, and cash flow details per expense category (HR, marketing, office, etc.) and activity (asset/liability operations). 3. Credit Check module — Monitors total receivables, invoice count, and receivables as a percentage of total sales, with visuals of overdue vs on-time invoice proportions and a detailed payment history table per customer including due dates. 4. All three modules are integrated into a single FA (Finance & Accounting) dashboard that can switch between views via toggle navigation, letting the finance team analyze business health from three perspectives at once."
      ),
      impact: L(
        "1. Keputusan bisnis berbasis margin, bukan cuma omset — Manajemen dapat melihat produk dan customer mana yang benar-benar memberi keuntungan terbaik, bukan hanya yang bervolume tinggi. 2. Kesehatan arus kas lebih terpantau — Tren inflow-outflow bulanan yang jelas membantu tim finance mendeteksi lebih awal potensi defisit kas sebelum menjadi masalah likuiditas. 3. Penagihan piutang jadi lebih terarah — Visibilitas invoice overdue memudahkan tim finance memprioritaskan follow-up penagihan ke customer dengan risiko piutang tertinggi.",
        "1. Margin-based business decisions, not just revenue — Management can see which products and customers truly deliver the best profit, not just the highest volume. 2. Better cash flow monitoring — Clear monthly inflow-outflow trends help the finance team detect potential cash deficits early, before they become liquidity problems. 3. More targeted receivables collection — Visibility into overdue invoices helps the finance team prioritize collection follow-ups with the highest-risk customers."
      ),
      Link2: "https://docs.google.com/presentation/d/1WqVvGStmjVuPs7rlEEdKD6iVmqUTItxe/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true"
    },
    {
      category: "uiux",
      tag: "UI/UX & App Dev",
      title: "Technical Sales Monitoring & Visit Tracking System — AppSheet",
      images: [
        { src: "assets/projects/uiux/Nama Karyawan (3).png", caption: L("Aplikasi Tracking dan Absensi Technical Sales", "Technical Sales Tracking & Attendance App") },
      ],
      challenge: L(
        "1. Sulitnya melakukan pemantauan aktivitas tim Technical Sales secara real-time di lapangan, terutama terkait verifikasi kehadiran (absensi) dan validasi lokasi kunjungan.\n2. Terbatasnya visibilitas terhadap perkembangan status interaksi dengan customer, baik pelanggan lama, pelanggan baru, maupun calon customer (prospek).\n3. Pelaporan harian manual yang lambat dan berisiko tinggi terhadap ketidakakuratan data riwayat kunjungan serta status pipeline penjualan.",
        "1. Difficulty monitoring the Technical Sales team's field activities in real time, especially attendance verification and visit location validation.\n2. Limited visibility into the status of customer interactions, whether with existing customers, new customers, or prospects.\n3. Slow manual daily reporting that is highly prone to inaccuracies in visit history and sales pipeline status."
      ),
      solution: L(
        "1. Mengembangkan fitur presensi dan check-in berbasis Geolocation (GPS) beserta lampiran foto langsung untuk memvalidasi kehadiran sales di lokasi customer secara real-time.\n2. Merancang modul 'Project Pipeline' dan log kunjungan terstruktur untuk mengelompokkan serta memantau progres hubungan dengan customer lama, baru, maupun calon customer.\n3. Membangun aplikasi no-code berbasis Google AppSheet yang terintegrasi langsung dengan database Google Sheets untuk menyinkronkan data pemantauan secara otomatis dan efisien.",
        "1. Developed a Geolocation (GPS)-based attendance and check-in feature with live photo attachments to validate sales presence at customer locations in real time.\n2. Designed a 'Project Pipeline' module and structured visit logs to group and track relationship progress with existing customers, new customers, and prospects.\n3. Built a no-code app on Google AppSheet integrated directly with a Google Sheets database to synchronize monitoring data automatically and efficiently."
      ),
      impact: L(
        "1. Meningkatkan akurasi dan transparansi verifikasi kehadiran tim Technical Sales di lapangan hingga 100% menggunakan pelacakan koordinat GPS.\n2. Mempercepat proses pemantauan status pipeline customer sehingga manajemen dapat mengambil keputusan strategi penjualan secara lebih responsif.\n3. Mengeliminasi rekap data manual dan memangkas waktu pelaporan harian tim lapangan, menciptakan alur kerja monitoring yang lebih rapi dan terorganisasi.",
        "1. Improved the accuracy and transparency of field attendance verification for the Technical Sales team up to 100% using GPS coordinate tracking.\n2. Sped up customer pipeline status monitoring so management can make sales strategy decisions more responsively.\n3. Eliminated manual data recaps and cut daily reporting time for the field team, creating a tidier, more organized monitoring workflow."
      ),
    },
    {
      category: "uiux",
      tag: "UI/UX & App Dev",
      title: "Mobile App Redesign — Suara Surabaya Mobile",
      images: [
        { src: "assets/projects/uiux/SS2.png", caption: L("Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio", "Suara Surabaya Mobile App Redesign: Splash Screen, Home and Radio") },
        { src: "assets/projects/uiux/SS1.png", caption: L("Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio", "Suara Surabaya Mobile App Redesign: Splash Screen, Home and Radio") },
        { src: "assets/projects/uiux/SS3.png", caption: L("Redesign Aplikasi Suara Surabaya Mobile : Splash Screen, Home dan Radio", "Suara Surabaya Mobile App Redesign: Splash Screen, Home and Radio") }
      ],
      challenge: L(
        "Suara Surabaya, media lokal Kota Surabaya, berhadapan dengan masalah usability yang menghambat kenyamanan penggunanya — tercermin dari skor System Usability Scale (SUS) awal yang hanya 47.3 dari 100, jauh di bawah standar minimum industri (68). Evaluasi heuristik menemukan sejumlah pain point pada navigasi dan alur informasi yang berisiko menurunkan kepercayaan pengguna terhadap platform.",
        "Suara Surabaya, a local media outlet in Surabaya, faced usability problems that hurt user comfort — reflected in an initial System Usability Scale (SUS) score of only 47.3 out of 100, far below the industry minimum standard (68). Heuristic evaluation uncovered several pain points in navigation and information flow that risked lowering users' trust in the platform."
      ),
      solution: L(
        "Menggunakan metodologi Double Diamond, saya memetakan pain point pengguna melalui Heuristic Evaluation, lalu merancang solusi end-to-end di Figma — mulai dari wireframe, information architecture, hingga prototype high-fidelity. Solusi desain ini kemudian dibangun menjadi prototype fungsional berbasis Apache Cordova untuk keperluan pengujian usability, dan divalidasi langsung ke pengguna melalui pengujian System Usability Scale (SUS).",
        "Using the Double Diamond methodology, I mapped user pain points through Heuristic Evaluation, then designed an end-to-end solution in Figma — from wireframes and information architecture to a high-fidelity prototype. The design was then built into a functional Apache Cordova prototype for usability testing, and validated directly with users through System Usability Scale (SUS) testing."
      ),
      impact: L(
        "Skor SUS meningkat signifikan dari 47.3 menjadi 73.25 (+55%), melampaui ambang batas usability yang baik secara industri. Hasil pengujian pasca-redesign menunjukkan peningkatan di semua aspek: Ease of Use 88.33, Learnability 89, System Integration 89.5, dan User Confidence 84. Peningkatan ini diharapkan dapat diimplementasikan sehingga Suara Surabaya Mobile dapat menjadi platform media lokal yang lebih mudah diakses dan dipercaya penggunanya.",
        "The SUS score rose significantly from 47.3 to 73.25 (+55%), surpassing the industry threshold for good usability. Post-redesign testing showed improvement across all aspects: Ease of Use 88.33, Learnability 89, System Integration 89.5, and User Confidence 84. It is hoped this improvement can be implemented so Suara Surabaya Mobile becomes a local media platform that is easier to access and more trusted by its users."
      ),
      Link: "https://www.figma.com/proto/jVFnK9pjyPXS8flG0C9Ywa/Untitled?node-id=1-588&t=Pui5fNz1kuZjvoqE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1048",
      Link2: "https://drive.google.com/file/d/1aVwpQ3g0fU0JrUrWBs0mdNHzmfN3Gc4j/view?usp=sharing",
    },
    {
      category: "uiux",
      tag: "UI/UX & Web",
      title: "Inventory Application Design — PLN UID Jawa Timur",
      images: [
        { src: "assets/projects/uiux/pln-inv.png", caption: L("Dashboard Inventori — Ringkasan Stok", "Inventory Dashboard — Stock Summary") },
      ],
      challenge: L(
        "Tim lapangan PLN UID Jawa Timur masih mengalami hambatan dalam pencatatan dan pemantauan inventori, yang berisiko memperlambat operasional dan menyulitkan pelacakan stok secara real-time. Dibutuhkan sistem digital berbasis web yang tidak hanya fungsional, tapi juga intuitif untuk dipakai tim non-teknis di lapangan.",
        "The PLN UID Jawa Timur field team still faced obstacles in recording and monitoring inventory, which risked slowing operations and made real-time stock tracking difficult. A web-based digital system was needed that is not only functional but also intuitive for non-technical field teams."
      ),
      solution: L(
        "Sebagai UI/UX Designer & Developer Intern, saya menerapkan pendekatan User-Centered Design (UCD) — mulai dari riset kebutuhan pengguna, penyusunan wireframe, hingga high-fidelity design dan prototype interaktif di Figma. Desain difokuskan pada usability agar mudah dipelajari tim lapangan yang beragam latar belakang teknisnya. Saya berkolaborasi langsung dengan tim developer melalui proses developer handoff, menerjemahkan desain menjadi spesifikasi teknis yang selaras dengan standar implementasi sistem.",
        "As a UI/UX Designer & Developer Intern, I applied a User-Centered Design (UCD) approach — from user needs research and wireframing to high-fidelity design and an interactive prototype in Figma. The design focused on usability so it is easy to learn for field teams with diverse technical backgrounds. I collaborated directly with the developer team through developer handoff, translating the design into technical specifications aligned with system implementation standards."
      ),
      impact: L(
        "Desain yang dihasilkan menjadi fondasi resmi untuk pengembangan aplikasi inventori PLN UID Jawa Timur, dengan struktur antarmuka yang sudah divalidasi dari sisi usability sebelum masuk tahap development. Kolaborasi erat antara desain dan tim developer memastikan hasil akhir aplikasi tetap selaras dengan kebutuhan pengguna di lapangan, bukan sekadar tampilan visual.",
        "The resulting design became the official foundation for developing the PLN UID Jawa Timur inventory application, with an interface structure validated for usability before development began. Close collaboration between design and the developer team ensured the final application stayed aligned with field users' needs, not just visual appearance."
      ),
      Link2: "https://docs.google.com/presentation/d/1o-JpyLMx9Cr8ViX7gOlB0s4ndCssx_9s/edit?usp=sharing&ouid=116256117308600244457&rtpof=true&sd=true",
      Link: "https://www.figma.com/proto/a0VL9UMT9BVMdjqpnw4ACX/KERJA-PRAKTEK?node-id=1-6627&t=yU0lDLi1jprx5AW7-1&scaling=contain&content-scaling=fixed&page-id=1%3A5461"
    },
    {
      category: "uiux",
      tag: L("UI/UX Design · Proyek Kelompok (Scrum)", "UI/UX Design · Group Project (Scrum)"),
      title: "POS Application Development — Subur Jaya Building Store",
      images: [
        { src: "assets/projects/uiux/sjpos.png", caption: "Mockup" },
        { src: "assets/projects/uiux/sjpos1.png", caption: "Main Dashboard" },
        { src: "assets/projects/uiux/sjpos2.png", caption: "Point of Sales" },
        { src: "assets/projects/uiux/sjpos3.png", caption: "Product Catalog" }
      ],
      challenge: L(
        "Toko bangunan Subur Jaya masih mengandalkan pencatatan transaksi dan stok secara manual, menyebabkan proses kasir lambat dan rawan selisih data inventori. Tim kami ditugaskan merancang solusi POS digital dalam kerangka kerja Scrum sebagai proyek mata kuliah, dengan pembagian peran developer dan UI/UX designer.",
        "Subur Jaya building store still relied on manual transaction and stock recording, causing slow checkout and inventory data discrepancies. Our team was tasked with designing a digital POS solution within a Scrum framework as a course project, with roles divided between developers and UI/UX designers."
      ),
      solution: L(
        "Sebagai UI/UX Designer dalam tim, saya bertanggung jawab merancang alur kerja kasir dari riset kebutuhan pengguna, wireframe, hingga high-fidelity prototype di Figma — memastikan alur transaksi dan pencarian stok terasa cepat dan minim kesalahan input. Desain ini didiskusikan dan divalidasi bersama tim melalui sprint review, lalu diimplementasikan developer tim menjadi aplikasi web berbasis Laravel, dengan kolaborasi version control via GitHub.",
        "As the team's UI/UX Designer, I was responsible for designing the cashier workflow from user needs research and wireframes to a high-fidelity prototype in Figma — ensuring transaction flow and stock search feel fast with minimal input errors. The design was discussed and validated with the team through sprint reviews, then implemented by the team's developers as a Laravel-based web app, with version control collaboration via GitHub."
      ),
      impact: L(
        "Melalui proses Scrum dengan beberapa sprint iterasi desain-ke-development, tim berhasil menghadirkan aplikasi POS berbasis web yang mempercepat proses transaksi dan pengelolaan inventori toko. Proyek ini menjadi pengalaman langsung menerapkan kolaborasi desainer-developer dalam siklus pengembangan produk yang agile.",
        "Through the Scrum process with several design-to-development sprint iterations, the team delivered a web-based POS application that speeds up transactions and store inventory management. This project was hands-on experience in applying designer-developer collaboration in an agile product development cycle."
      ),
      Link: "https://www.figma.com/proto/h4P76JkazOu1udcWYg8MjZ/23_-Moh.-Fahri-Firdaus-s-team-library?node-id=412-372&p=f&t=usdboiTvVxgSJYsl-1&scaling=scale-down&content-scaling=fixed&page-id=412%3A2&starting-point-node-id=412%3A382",
    },
    {
      category: "uiux",
      tag: L("App dev · Proyek Kelompok (Scrum)", "App dev · Group Project (Scrum)"),
      title: "E-Commerce App for Building Materials — RyApp Subur Jaya",
      images: [
        { src: "assets/projects/uiux/ryapp-ecommerce.jpg", caption: L("Alur Aplikasi: Login → Splash → Katalog Produk", "App Flow: Login → Splash → Product Catalog") }
      ],
      challenge: L(
        "Subur Jaya membutuhkan kanal penjualan digital untuk produk material bangunan, namun belum memiliki platform yang mendukung transaksi online secara langsung. Tim kami ditugaskan merancang dan membangun solusinya sebagai proyek mata kuliah dengan kerangka kerja Scrum, dan saya berperan sebagai Ketua Tim sekaligus Front-End Developer.",
        "Subur Jaya needed a digital sales channel for building material products but had no platform supporting direct online transactions. Our team was tasked with designing and building the solution as a course project using a Scrum framework, and I served as Team Lead and Front-End Developer."
      ),
      solution: L(
        "Sebagai ketua tim, saya memimpin perencanaan sprint dan pembagian tugas, seperti merancang UI/UX aplikasi mobile dari user flow hingga high-fidelity design di Figma. Saya juga turun langsung membangun front-end aplikasi menggunakan React Native, mengimplementasikan alur manajemen produk, autentikasi, keranjang, dan transaksi, dengan integrasi Firebase untuk kebutuhan data dan autentikasi pengguna.",
        "As team lead, I led sprint planning and task distribution, including designing the mobile app UI/UX from user flow to high-fidelity design in Figma. I also built the app's front end with React Native, implementing product management, authentication, cart, and transaction flows, with Firebase integration for data and user authentication."
      ),
      impact: L(
        "Melalui beberapa sprint iterasi, tim berhasil menghasilkan prototipe aplikasi e-commerce yang fungsional untuk mendukung penjualan material bangunan Subur Jaya — mencakup alur belanja end-to-end dari autentikasi hingga transaksi. Proyek ini menjadi pengalaman langsung merangkap peran mobile developer, sekaligus pemimpin tim dalam siklus pengembangan produk yang agile.",
        "Through several sprint iterations, the team produced a functional e-commerce app prototype to support Subur Jaya's building material sales — covering the end-to-end shopping flow from authentication to transaction. This project was hands-on experience as a mobile developer and team leader in an agile product development cycle."
      ),
      Link2: "https://github.com/FirdausMoh/E-COMMERCE-TOKO-BANGUNAN.git",
      Link: "https://drive.google.com/file/d/1cNMCCZ2Dc4RCERX8uJmB8SAgug7bTIwd/view?usp=sharing",
    },
    {
      category: "uiux",
      tag: "UI/UX",
      title: "Mobile EduTech Application UI/UX Design",
      images: [
        { src: "assets/projects/uiux/iPhone 16 (1).png", caption: L("Onboarding & Daftar Kursus", "Onboarding & Course List") },
        { src: "assets/projects/uiux/Free iPhone Air.png", caption: L("Detail: Halaman Materi & Video Pembelajaran", "Detail: Learning Material & Video Page") }
      ],
      challenge: L(
        "Aplikasi belajar digital untuk materi programming, UI/UX, dan bisnis digital membutuhkan alur belajar yang jelas dan konsisten agar pengguna tidak kebingungan berpindah antar topik. Tim kami ditugaskan merancang solusinya sebagai proyek mata kuliah dengan kerangka kerja Scrum.",
        "A digital learning app for programming, UI/UX, and digital business content needed a clear, consistent learning flow so users don't get confused moving between topics. Our team was tasked with designing the solution as a course project using a Scrum framework."
      ),
      solution: L(
        "Sebagai UI/UX Designer dalam tim, saya merancang user flow, wireframe, dan high-fidelity design di Figma untuk memastikan alur belajar antar topik terasa jelas dan tidak membingungkan pengguna. Saya juga menyusun design system lengkap — palet warna, tipografi, dan komponen UI — agar seluruh tampilan aplikasi konsisten dan mudah dikembangkan lebih lanjut oleh tim.",
        "As the team's UI/UX Designer, I designed the user flow, wireframes, and high-fidelity designs in Figma to make the learning flow between topics clear and unconfusing. I also built a complete design system — color palette, typography, and UI components — so the whole app looks consistent and is easy for the team to extend."
      ),
      impact: L(
        "Melalui beberapa sprint iterasi bersama tim, kami menghasilkan pengalaman belajar yang interaktif dengan desain yang konsisten dan siap dikembangkan lebih lanjut. Proyek ini menjadi pengalaman langsung menerapkan proses desain terstruktur dalam kerja tim berbasis Scrum.",
        "Through several sprint iterations with the team, we produced an interactive learning experience with a consistent design that is ready for further development. This project was hands-on experience applying a structured design process in Scrum-based teamwork."
      ),
      Link: "https://www.figma.com/proto/zRE2bhxQ6ny7wCBhO2IWTf/Edutech-Digital-IT-Learning?node-id=1-2196&t=ccHtCiLc866f3GDZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A117"
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Recruitment Campaign Design",
      images: [
        { src: "assets/projects/design/loker.png", caption: L("Poster Lowongan", "Job Vacancy Poster") },
        { src: "assets/projects/design/loker (2).png", caption: L("Poster Lowongan", "Job Vacancy Poster") },
        { src: "assets/projects/design/loker (3).png", caption: L("Poster Lowongan", "Job Vacancy Poster") },
      ],
      challenge: L(
        "Divisi HR membutuhkan materi visual rekrutmen yang informatif dan sesuai identitas brand perusahaan.",
        "The HR division needed recruitment visuals that are informative and aligned with the company's brand identity."
      ),
      solution: L(
        "Merancang serangkaian poster lowongan kerja dengan struktur informasi yang jelas dan konsisten dengan brand guideline.",
        "Designed a series of job vacancy posters with clear information structure, consistent with the brand guidelines."
      ),
      impact: L(
        "Materi rekrutmen tampil lebih profesional dan mudah dipahami calon pelamar.",
        "Recruitment materials look more professional and are easier for applicants to understand."
      )
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Social Media Campaign Design",
      images: [
        { src: "assets/projects/design/Desain Sosmed.png", caption: "Social Media Feed" },
      ],
      challenge: L(
        "Perusahaan membutuhkan konten media sosial untuk momen-momen penting secara konsisten dan tepat waktu.",
        "The company needed social media content for important moments, delivered consistently and on time."
      ),
      solution: L(
        "Mendesain rangkaian konten media sosial untuk berbagai momentum dengan gaya visual yang seragam.",
        "Designed a series of social media content for various occasions with a uniform visual style."
      ),
      impact: L(
        "Kehadiran brand di media sosial menjadi lebih konsisten dan menarik secara visual.",
        "The brand's social media presence became more consistent and visually appealing."
      )
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Brosur Company Product",
      images: [
        { src: "assets/projects/design/product-concsaver.jpg", caption: L("Poster Promosi Produk — ConcSaver", "Product Promotion Poster — ConcSaver") },
        { src: "assets/projects/design/product-concsaver (2).png", caption: "Product Shot — ConcSaver" },
        { src: "assets/projects/design/brochure-toxiclean.jpg", caption: L("Brosur Teknis — ToxClean", "Technical Brochure — ToxClean") },
      ],
      challenge: L(
        "1. Tim Technical Sales membutuhkan media edukasi visual yang informatif dan profesional untuk mempermudah penjelasan produk baru kepada customer.\n2. Sulitnya menyampaikan informasi teknis produk secara ringkas namun menarik, baik saat melakukan pendekatan ke calon customer (prospek) maupun retensi ke customer lama.\n3. Kurangnya materi promosi terstandarisasi yang dapat langsung membangun kepercayaan (trust) dan mempercepat konversi penjualan di lapangan.",
        "1. The Technical Sales team needed informative, professional visual education media to make it easier to explain new products to customers.\n2. It was hard to convey technical product information concisely yet attractively, both when approaching prospects and retaining existing customers.\n3. There was a lack of standardized promotional material that could build trust immediately and speed up sales conversion in the field."
      ),
      solution: L(
        "1. Merancang brosur cetak dan digital berkonsep clean serta profesional yang menonjolkan nilai jual utama (value proposition) produk baru secara intuitif.\n2. Menyusun hierarki visual dan tata letak informasi teknis yang tersistematis agar pesan mudah dipahami dalam waktu singkat oleh customer baru maupun lama.\n3. Menyelaraskan elemen branding, warna, dan tipografi perusahaan untuk memperkuat citra profesionalisme tim Technical Sales saat kunjungan lapangan.",
        "1. Designed clean, professional print and digital brochures that intuitively highlight the new product's main value proposition.\n2. Structured a visual hierarchy and systematic technical information layout so the message is quickly understood by new and existing customers.\n3. Aligned the company's branding, colors, and typography to reinforce the Technical Sales team's professional image during field visits."
      ),
      impact: L(
        "1. Menyediakan *sales kit* yang efektif untuk meningkatkan rasa percaya diri dan efisiensi komunikasi tim Technical Sales saat presentasi produk.\n2. Membantu mempercepat penetrasi produk baru ke calon customer (prospek) melalui penyampaian informasi produk yang jelas dan persuasif.\n3. Memperkuat hubungan bisnis dengan customer lama melalui penawaran lini produk baru yang dikemas secara eksklusif dan informatif.",
        "1. Provided an effective *sales kit* that boosts the Technical Sales team's confidence and communication efficiency during product presentations.\n2. Helped accelerate new product penetration to prospects through clear and persuasive product information.\n3. Strengthened business relationships with existing customers through new product lines presented in an exclusive and informative way."
      ),
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Stiker Produk & Label Kemasan",
      images: [
        { src: "assets/projects/design/product bag.png", caption: "Product Design" },
        { src: "assets/projects/design/label-sammix.jpg", caption: L("Stiker Label Produk", "Product Label Sticker") },
        { src: "assets/projects/design/label-po1.jpg", caption: L("Stiker Label Produk", "Product Label Sticker") },
      ],
      challenge: L(
        "1. Kebutuhan label kemasan yang tidak hanya menarik secara visual, tetapi juga wajib memuat informasi teknis produk secara rinci, jelas, dan sesuai standar industri.\n2. Keterbatasan area/ruang pada stiker kemasan untuk menata elemen branding, komposisi, petunjuk penggunaan, serta informasi legalitas tanpa terlihat padat dan berantakan.\n3. Kurangnya daya tarik visual pada kemasan produk terdahulu yang berpotensi menurunkan daya saing di mata customer lama maupun calon customer.",
        "1. Packaging labels needed to be visually appealing while also carrying detailed, clear technical product information that meets industry standards.\n2. Limited space on packaging stickers to arrange branding, composition, usage instructions, and legal information without looking crowded or messy.\n3. The previous packaging lacked visual appeal, potentially reducing competitiveness in the eyes of existing and prospective customers."
      ),
      solution: L(
        "1. Merancang tata letak (layout) label stiker terstruktur dengan hierarki visual yang jelas antara nama produk, fungsi utama, dan detail instruksi teknis.\n2. Mengoptimalkan tipografi, ikon grafis intuitif, dan kontras warna untuk memastikan informasi penting mudah dibaca meskipun dalam ukuran kemasan yang terbatas.\n3. Mengintegrasikan identitas visual brand (logo, skema warna, dan elemen khas) guna memperkuat *brand recognition* dan memberikan kesan produk yang profesional serta terpercaya.",
        "1. Designed a structured sticker label layout with a clear visual hierarchy between product name, main function, and technical instruction details.\n2. Optimized typography, intuitive graphic icons, and color contrast so key information stays readable even at limited packaging sizes.\n3. Integrated the brand's visual identity (logo, color scheme, and signature elements) to strengthen *brand recognition* and give a professional, trustworthy product impression."
      ),
      impact: L(
        "1. Meningkatkan nilai estetika dan daya tarik produk saat dipajang atau dipresentasikan oleh tim Technical Sales kepada customer.\n2. Memudahkan customer dan pengguna di lapangan dalam memahami petunjuk penggunaan serta informasi penting produk secara akurat dan cepat.\n3. Memperkuat citra dan profesionalisme brand perusahaan melalui kemasan produk yang konsisten, informatif, dan berstandar tinggi.",
        "1. Increased the product's aesthetic value and appeal when displayed or presented by the Technical Sales team to customers.\n2. Made it easier for customers and field users to understand usage instructions and key product information accurately and quickly.\n3. Strengthened the company's brand image and professionalism through consistent, informative, high-standard product packaging."
      ),
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Corporate Business Card Design",
      images: [
        { src: "assets/projects/design/CardName.png", caption: L("Kartu Nama Karyawan", "Employee Business Card") },
      ],
      challenge: L(
        "Kebutuhan akan media personal branding yang praktis dan elegan bagi tim untuk membagikan informasi kontak perusahaan secara cepat kepada calon customer.",
        "The team needed a practical and elegant personal branding medium to quickly share company contact information with prospective customers."
      ),
      solution: L(
        "1. Merancang desain kartu nama yang minimalis dan modern dengan tata letak informasi kontak yang terstruktur dan mudah dibaca.\n2. Mengintegrasikan kode QR untuk mempermudah digitalisasi kontak secara instan ke dalam smartphone calon customer.\n3. Menyesuaikan elemen grafis, tipografi, dan skema warna sesuai dengan pedoman identitas visual (brand guideline) perusahaan.",
        "1. Designed a minimalist, modern business card with a structured, easy-to-read contact information layout.\n2. Integrated a QR code to instantly digitize contact details into a prospective customer's smartphone.\n3. Adapted graphic elements, typography, and color scheme to the company's visual identity guidelines (brand guideline)."
      ),
      impact: L(
        "1. Meningkatkan profesionalisme dan rasa percaya diri tim saat berinteraksi serta membangun jaringan bisnis di lapangan.\n2. Memudahkan calon customer dan mitra bisnis dalam menyimpan data kontak secara akurat dan cepat.\n3. Memperkuat kesan pertama (first impression) yang positif dan kredibel terhadap identitas perusahaan.",
        "1. Boosted the team's professionalism and confidence when interacting and building business networks in the field.\n2. Made it easier for prospective customers and business partners to save contact details accurately and quickly.\n3. Strengthened a positive, credible first impression of the company's identity."
      ),
    },
    {
      category: "design",
      tag: "Graphic Design & Branding",
      title: "Company Philosophy Wall Graphic Design",
      images: [
        { src: "assets/projects/design/wall.jpg", caption: "Product Design" },
      ],
      challenge: L(
        "1. Kebutuhan untuk memvisualisasikan nilai-nilai inti dan filosofi perusahaan pada dinding kantor agar dapat dihayati oleh internal karyawan serta menginspirasi tamu/klien.\n2. Menata teks filosofi yang bernilai strategis menjadi karya seni dinding (wall graphic) yang estetis tanpa terlihat kaku atau berlebihan.\n3. Mengintegrasikan elemen estetika visual yang harmonis dengan interior ruang kerja profesional.",
        "1. The need to visualize the company's core values and philosophy on the office wall so employees can internalize them and guests/clients are inspired.\n2. Turning strategically valuable philosophy text into aesthetic wall graphics without looking stiff or excessive.\n3. Integrating harmonious visual aesthetics with a professional workspace interior."
      ),
      solution: L(
        "1. Merancang instalasi grafis dinding dengan komposisi tipografi yang tegas, dinamis, dan mudah dibaca dari jarak jauh.\n2. Mengombinasikan slogan filosofi utama perusahaan dengan elemen visual dekoratif yang selaras dengan identitas branding perusahaan.\n3. Menyusun tata letak yang proporsional dan adaptif terhadap dimensi dinding ruang kantor guna menciptakan poin fokus (focal point) yang menarik.",
        "1. Designed a wall graphic installation with bold, dynamic typography that is readable from a distance.\n2. Combined the company's main philosophy slogan with decorative visual elements aligned with its branding identity.\n3. Built a proportional layout adaptive to the office wall's dimensions to create an attractive focal point."
      ),
      impact: L(
        "1. Menciptakan lingkungan kerja yang representatif dan memperkuat budaya serta nilai-nilai perusahaan (corporate culture) bagi seluruh karyawan.\n2. Meningkatkan daya tarik estetika interior kantor saat menerima kunjungan dari klien, mitra, maupun calon customer.\n3. Memperkuat penyampaian pesan visi dan komitmen perusahaan secara visual kepada setiap pengunjung.",
        "1. Created a representative work environment and strengthened the company's culture and values for all employees.\n2. Enhanced the office interior's aesthetic appeal when receiving visits from clients, partners, and prospective customers.\n3. Strengthened the visual delivery of the company's vision and commitment to every visitor."
      ),
    },
  ],

  whyMe: [
    {
      title: "End-to-End Skill Integration",
      desc: L(
        "Mampu menjembatani analisis data teknis dengan desain visual yang estetik dan antarmuka yang ramah pengguna.",
        "Able to bridge technical data analysis with aesthetic visual design and user-friendly interfaces."
      )
    },
    {
      title: "Fast Track & Proven Execution",
      desc: L(
        "Lulusan akselerasi 3.5 tahun dengan IPK 3.65 serta rekam jejak aktif di industri dan organisasi nasional.",
        "Accelerated 3.5-year graduate with a 3.65 GPA and an active track record in industry and national organizations."
      )
    },
    {
      title: "Business Value Oriented",
      desc: L(
        "Berfokus menciptakan solusi IT dan dashboard yang mendorong efisiensi operasional dan mendukung keputusan bisnis.",
        "Focused on creating IT solutions and dashboards that drive operational efficiency and support business decisions."
      )
    }
  ]
};

/* ------------------------- LANGUAGE SWITCH ------------------------- */
const PORTFOLIO_DEFAULT_LANG = "en";

function getPortfolioLang() {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "id" || saved === "en") return saved;
  } catch (e) { /* storage unavailable */ }
  return PORTFOLIO_DEFAULT_LANG;
}

// PORTFOLIO_DATA tetap dipakai oleh kode render kamu seperti biasa.
let PORTFOLIO_DATA = localizePortfolio(PORTFOLIO_DATA_RAW, getPortfolioLang());

function setPortfolioLang(lang) {
  if (lang !== "id" && lang !== "en") return;
  try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  PORTFOLIO_DATA = localizePortfolio(PORTFOLIO_DATA_RAW, lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent("portfolio-lang-change", { detail: { lang } }));
}
