// ==========================================
// PROJECT DATA FOR DETAILED MODAL
// ==========================================
const projectsData = {
   "hospital-quality-system": {
      categoryBadge: "Hospital Quality System",
      title: "Sistem Monitoring Mutu Rumah Sakit",
      desc: "Sistem aplikasi internal komprehensif yang dirancang khusus untuk mempermudah pemantauan, pengukuran, dan analisis 82+ Indikator Mutu Nasional (IMN), Indikator Mutu Prioritas Rumah Sakit (IMPRS), serta Insiden Keselamatan Pasien (IKP) secara terintegrasi dan real-time per unit/ruangan guna mendukung proses akreditasi dan evaluasi mutu rumah sakit.",
      tech: ["Node.js", "Express.js", "Prisma ORM", "MariaDB", "JavaScript", "JWT", "ExcelJS"],
      features: [
         "Manajemen Profil & Identitas Visual RS (Kode Fasyankes, Logo, & Data Wilayah)",
         "Kelola & Pengaturan 82+ Indikator Mutu Unit (Filter Per Unit/Ruangan & Status Aktif/Non-Aktif)",
         "Pencatatan & Validasi Data Indikator Mutu Real-Time dengan Target Standard (IMN, IMPRS, IKP)",
         "Perhitungan Kepatuhan Mutu (Compliance Rate) & Rekapitulasi Otomatis Berbasis Periode (Bulan/Tahun)",
         "Import Data Massal via Excel dengan Validasi Skema Template & Normalisasi Tipe Data",
         "Sistem Otorisasi Hak Akses (Role-Based Access Control) & Log Audit Trail Keamanan"
      ],
      impact: "Mendigitalisasi pelaporan indikator mutu secara terpusat (paperless), memotong waktu audit laporan bulanan dari 5 hari menjadi instan, serta memastikan kesiapan data akreditasi nasional 100% real-time.",
      gallery: [
         {
            src: "assets/mutu-profil.png",
            title: "Kelola Informasi & Profil Rumah Sakit",
            caption: "Modul pengaturan profil utama RS (Kode Fasyankes, Identitas Visual, Logo), manajemen periode, hak akses user, import data massal Excel, dan log Audit Trail."
         },
         {
            src: "assets/mutu-indikator.png",
            title: "Kelola & Konfigurasi Indikator Mutu Unit",
            caption: "Interface pengaturan 82+ indikator mutu per unit/ruangan (seperti Unit Khusus ANNISA, Farmasi, SIMRS, IGD, ICU) lengkap dengan pencarian, filter status aktif, dan standar kepatuhan."
         }
      ]
   },
   "server-monitoring": {
      categoryBadge: "Monitoring & DevOps",
      title: "Monitoring Server & Alerting Telegram",
      desc: "Infrastruktur pemantauan performa server Linux dan Windows secara terpusat dan real-time di lingkungan Rumah Sakit Islam Karawang. Menggabungkan Prometheus untuk pengumpulan metrik, node_exporter dan windows_exporter pada server target, dashboard interaktif Grafana, serta bot Telegram otomatis untuk respon insiden secepat mungkin.",
      tech: ["Grafana", "Prometheus", "node_exporter", "windows_exporter", "Telegram Bot API", "Alertmanager", "Linux / Bash"],
      features: [
         "Monitoring Utilisasi CPU, RAM, Disk I/O, & Network Traffic Server SIMRS",
         "Pemantauan Ketersediaan Layanan Kritis (Database MariaDB, Web Server, Active Directory)",
         "Alert Rules Cerdas: Notifikasi Otomatis ke Grup Telegram IT saat Disk > 85% atau Server Down",
         "Dashboard Grafana Visual untuk Evaluasi SLA Ketersediaan Sistem (Target Uptime 99.9%)",
         "Deteksi Anomali Beban Server Secara Preventif Tanpa Menunggu Keluhan Pengguna"
      ],
      impact: "Mempercepat deteksi gangguan server dari rata-rata 30 menit (menunggu laporan staf medis/kasir) menjadi di bawah 10 detik via alert Telegram, sehingga potensi downtime SIMRS dapat dicegah secara dini.",
      gallery: [
         {
            src: "assets/pr-monitoring.svg",
            title: "Dashboard Grafana Server Infrastructure & Alerting Bot",
            caption: "Tampilan visual metrik utilisasi node Linux/Windows dan integrasi pengiriman notifikasi gangguan otomatis ke Telegram IT Staff."
         }
      ]
   },
   "it-reporting": {
      categoryBadge: "Internal Web App",
      title: "Sistem Pelaporan Internal IT",
      desc: "Web app internal yang dirancang khusus untuk mempermudah operasional unit IT Rumah Sakit. Sistem ini menangani pencatatan aktivitas harian IT Support, pengajuan lemburan staf, log maintenance server, monitoring backup database SIMRS, dan tracking aktivitas teknis lainnya secara real-time.",
      tech: ["PHP", "JavaScript", "MySQL", "Tailwind CSS", "AdminLTE"],
      features: [
         "Logbook Kegiatan IT Support Harian & Tiket Kendala Pengguna",
         "Sistem Pengajuan & Verifikasi Lembur Staf IT",
         "Monitoring Status Keberhasilan Backup Database SIMRS Harian",
         "Jurnal Maintenance & Troubleshooting Perangkat Server/Jaringan",
         "Rekapitulasi Otomatis Laporan Kinerja Bulanan Divisi IT"
      ],
      impact: "Mempersingkat waktu pembuatan rekap laporan bulanan divisi IT dari 3 hari menjadi kurang dari 15 menit, serta meningkatkan akurasi pengawasan backup server SIMRS hingga 100%."
   },
   "medical-kpi": {
      categoryBadge: "Evaluation Tool",
      title: "Sistem Penilaian & Mutu Perawat",
      desc: "Sistem internal rumah sakit untuk pengukuran dan penilaian indeks performansi (KPI) tenaga keperawatan secara objektif, aman, dan efisien guna menjamin kepatuhan standard operasional prosedur medis dan keperawatan.",
      tech: ["Laravel", "PHP", "JavaScript", "MariaDB", "Bootstrap 5", "Dompdf"],
      features: [
         "Kuesioner Penilaian Kinerja Tenaga Keperawatan Multi-parameter",
         "Kalkulasi Otomatis Indeks Kinerja Bulanan & Tahunan",
         "Ekspor Laporan Evaluasi Kinerja ke Format PDF & Excel",
         "Keamanan Data dengan Role-based Access Control (RBAC)",
         "Notifikasi & Reminder Evaluasi Kinerja Otomatis di Dashboard"
      ],
      impact: "Mendigitalisasi proses penilaian kinerja yang sebelumnya manual berbasis kertas (paperless), mempercepat evaluasi berkala dari 2 minggu menjadi 2 hari, serta meminimalisir deviasi perhitungan manual."
   },
   "hospital-web": {
      categoryBadge: "Public Website",
      title: "Website Resmi Rumah Sakit",
      desc: "Platform portal informasi publik resmi rumah sakit yang menyajikan profil, fasilitas medis, jadwal dokter spesialis dinamis, layanan unggulan, artikel kesehatan, serta kontak terpadu bagi pasien dan masyarakat.",
      tech: ["Bootstrap 5", "PHP", "Laravel", "PostgreSQL / MySQL", "JavaScript"],
      features: [
         "Pencarian & Filter Jadwal Praktek Dokter Spesialis Interaktif",
         "Integrasi Direct WhatsApp untuk Pendaftaran & Informasi Pasien",
         "Portal Edukasi Kesehatan & Berita Rumah Sakit",
         "Optimasi SEO & Kecepatan Akses Mobile-Friendly",
         "Halaman Pengaduan Layanan & Lokasi Fasyankes Terintegrasi"
      ],
      impact: "Meningkatkan akses informasi pasien hingga 50% dan mempermudah calon pasien memeriksa jadwal praktek dokter secara mandiri sehingga mengurangi beban antrean informasi fisik."
   },
   "web-cms": {
      categoryBadge: "Dashboard / CMS",
      title: "Web App Manajemen Data Website",
      desc: "Dashboard Content Management System (CMS) internal yang dikembangkan untuk mempermudah tim Humas dan Pemasaran dalam memperbarui data website rumah sakit, memantau statistik kunjungan, serta merespon pesan masyarakat.",
      tech: ["PHP", "Laravel", "MariaDB", "Chart.js", "CSS Grid/Flexbox"],
      features: [
         "Manajemen Konten Berita, Pengumuman, & Artikel Edukasi Kesehatan",
         "Pengelola Data Dokter, Spesialisasi, Poliklinik, & Jadwal Praktek",
         "Visualisasi Statistik Pengunjung Web Real-time dengan Chart.js",
         "Kotak Masuk Pesan Pengunjung & Formulir Unduhan Informasi",
         "Hak Akses Bertingkat (Super Admin IT & Tim Humas/Editor)"
      ],
      impact: "Mempercepat proses pembaruan jadwal dokter dan publikasi berita kesehatan dari yang semula membutuhkan 1 hari kerja (menunggu staf IT) menjadi hanya 5 menit secara mandiri oleh tim Humas."
   }
};

// ==========================================
// NAVBAR & MOBILE MENU & SCROLL SPY
// ==========================================
function initNavbar() {
   const navbar = document.getElementById("navbar");
   const navToggle = document.getElementById("nav-toggle");
   const navMenu = document.getElementById("nav-menu");
   const navLinks = document.querySelectorAll(".nav-link");

   if (!navbar) return;

   // Glassmorphism effect when scrolled
   window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
         navbar.classList.add("scrolled");
      } else {
         navbar.classList.remove("scrolled");
      }
      highlightActiveNavLink();
   });

   // Mobile Menu Toggle
   if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
         navMenu.classList.toggle("open");
         const isOpen = navMenu.classList.contains("open");
         navToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });

      // Close menu when clicking link
      navLinks.forEach(link => {
         link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            if (navToggle) {
               navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
         });
      });
   }

   // Scroll Spy
   function highlightActiveNavLink() {
      const scrollPos = window.scrollY + 120;
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      
      sections.forEach(id => {
         const section = document.getElementById(id);
         if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
               navLinks.forEach(link => {
                  link.classList.remove("active");
                  if (link.getAttribute("href") === `#${id}`) {
                     link.classList.add("active");
                  }
               });
            }
         }
      });
   }
}

// ==========================================
// PROJECT CATEGORY FILTER
// ==========================================
function initProjectFilter() {
   const filterButtons = document.querySelectorAll(".filter-btn");
   const projectCards = document.querySelectorAll(".projects-grid .card");

   if (!filterButtons.length || !projectCards.length) return;

   filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
         // Active state button
         filterButtons.forEach(b => b.classList.remove("active"));
         btn.classList.add("active");

         const filterValue = btn.getAttribute("data-filter");

         projectCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            
            if (filterValue === "all" || cardCategory === filterValue) {
               card.style.display = "flex";
               setTimeout(() => {
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0)";
               }, 20);
            } else {
               card.style.opacity = "0";
               card.style.transform = "translateY(15px)";
               setTimeout(() => {
                  card.style.display = "none";
               }, 250);
            }
         });
      });
   });
}

// ==========================================
// THEME SWITCHER (LIGHT / DARK)
// ==========================================
function initTheme() {
   const themeToggle = document.getElementById("theme-toggle");
   if (!themeToggle) return;

   const currentTheme = localStorage.getItem("theme") || "dark";
   
   if (currentTheme === "light") {
      document.body.classList.add("light-mode");
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
   } else {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
   }

   themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      
      let theme = "dark";
      if (document.body.classList.contains("light-mode")) {
         theme = "light";
         themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
         themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
      localStorage.setItem("theme", theme);
   });
}

// ==========================================
// DESIGN STYLE SWITCHER (MODERN / NEO-BRUTALISM)
// ==========================================
function initStyleSwitcher() {
   const styleToggle = document.getElementById("style-toggle");
   if (!styleToggle) return;

   const currentStyle = localStorage.getItem("portfolio-style") || "modern";
   if (currentStyle === "neo-brutalist") {
      document.body.classList.add("neo-brutalist");
      styleToggle.innerHTML = '<i class="fas fa-cube"></i>';
      styleToggle.classList.add("active-neo");
      styleToggle.title = "Style: Neo-Brutalism (Klik untuk kembali ke Modern)";
   } else {
      document.body.classList.remove("neo-brutalist");
      styleToggle.innerHTML = '<i class="fas fa-cubes"></i>';
      styleToggle.classList.remove("active-neo");
      styleToggle.title = "Style: Modern Glass (Klik untuk switch ke Neo-Brutalism)";
   }

   styleToggle.addEventListener("click", () => {
      document.body.classList.toggle("neo-brutalist");
      
      let style = "modern";
      if (document.body.classList.contains("neo-brutalist")) {
         style = "neo-brutalist";
         styleToggle.innerHTML = '<i class="fas fa-cube"></i>';
         styleToggle.classList.add("active-neo");
         styleToggle.title = "Style: Neo-Brutalism (Klik untuk kembali ke Modern)";
      } else {
         styleToggle.innerHTML = '<i class="fas fa-cubes"></i>';
         styleToggle.classList.remove("active-neo");
         styleToggle.title = "Style: Modern Glass (Klik untuk switch ke Neo-Brutalism)";
      }
      localStorage.setItem("portfolio-style", style);
   });
}

// ==========================================
// SCROLL-TRIGGERED FADE IN ANIMATIONS
// ==========================================
function initScrollAnimations() {
   const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.12
   };

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
         }
      });
   }, observerOptions);

   const fadeElements = document.querySelectorAll(".fade-in");
   fadeElements.forEach(el => observer.observe(el));
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================
function initStatsCounter() {
   const statsSection = document.querySelector(".stats-container");
   if (!statsSection) return;

   const counters = document.querySelectorAll(".stat-number");

   const startCounting = () => {
      counters.forEach(counter => {
         const target = parseFloat(counter.getAttribute("data-target"));
         const suffix = counter.getAttribute("data-suffix") || "";
         const isDecimal = target % 1 !== 0;
         
         let count = 0;
         const updateCount = () => {
            const increment = target / 35;
            if (count < target) {
               count += increment;
               if (count > target) count = target;
               
               if (isDecimal) {
                  counter.innerText = count.toFixed(1) + suffix;
               } else {
                  counter.innerText = Math.floor(count) + suffix;
               }
               setTimeout(updateCount, 25);
            } else {
               if (isDecimal) {
                  counter.innerText = target.toFixed(1) + suffix;
               } else {
                  counter.innerText = target + suffix;
               }
            }
         };
         updateCount();
      });
   };

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.4 });

   observer.observe(statsSection);
}

// ==========================================
// INTERACTIVE PORTFOLIO MODAL
// ==========================================
function initProjectModal() {
   const modal = document.getElementById("project-modal");
   const closeBtn = document.querySelector(".modal-close");
   const cards = document.querySelectorAll(".card");
   
   if (!modal || !closeBtn) return;

   cards.forEach(card => {
      card.addEventListener("click", () => {
         const projectId = card.getAttribute("data-project-id");
         const data = projectsData[projectId];
         
         if (data) {
            // Modal badge category
            const badgeEl = document.getElementById("modal-category-badge");
            if (badgeEl) {
               badgeEl.innerText = data.categoryBadge || "Detail Project";
            }

            // Modal text
            document.getElementById("modal-title").innerText = data.title;
            document.getElementById("modal-desc").innerText = data.desc;
            document.getElementById("modal-impact-desc").innerText = data.impact;
            
            // Modal gallery
            const galleryContainer = document.getElementById("modal-gallery");
            if (galleryContainer) {
               galleryContainer.innerHTML = "";
               if (data.gallery && data.gallery.length > 0) {
                  galleryContainer.style.display = "block";
                  
                  const galleryHeader = document.createElement("div");
                  galleryHeader.className = "modal-gallery-title";
                  galleryHeader.innerHTML = `<i class="fas fa-images text-primary"></i> Preview Sistem & Interface`;
                  galleryContainer.appendChild(galleryHeader);

                  const galleryGrid = document.createElement("div");
                  galleryGrid.className = "modal-gallery-grid";
                  
                  data.gallery.forEach(imgData => {
                     const item = document.createElement("div");
                     item.className = "gallery-item";
                     item.innerHTML = `
                        <div class="gallery-img-wrapper" onclick="window.open('${imgData.src}', '_blank')" title="Klik untuk membuka gambar ukuran penuh">
                           <img src="${imgData.src}" alt="${imgData.title}" />
                           <span class="gallery-zoom-badge"><i class="fas fa-search-plus"></i> Perbesar</span>
                        </div>
                        <div class="gallery-info">
                           <h5>${imgData.title}</h5>
                           <p>${imgData.caption}</p>
                        </div>
                     `;
                     galleryGrid.appendChild(item);
                  });
                  galleryContainer.appendChild(galleryGrid);
               } else {
                  galleryContainer.style.display = "none";
               }
            }

            // Generate list features
            const featuresContainer = document.getElementById("modal-features-list");
            featuresContainer.innerHTML = "";
            data.features.forEach(feat => {
               const li = document.createElement("li");
               li.innerHTML = `<i class="fas fa-check-circle text-primary"></i> <span>${feat}</span>`;
               featuresContainer.appendChild(li);
            });

            // Generate tech tags
            const techContainer = document.getElementById("modal-tech-tags");
            techContainer.innerHTML = "";
            data.tech.forEach(t => {
               const span = document.createElement("span");
               span.className = "tech-tag";
               span.innerText = t;
               techContainer.appendChild(span);
            });

            // Show modal
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
         }
      });
   });

   const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
   };

   closeBtn.addEventListener("click", closeModal);
   
   modal.addEventListener("click", (e) => {
      if (e.target === modal) {
         closeModal();
      }
   });

   window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
         closeModal();
      }
   });
}

// ==========================================
// RETRO-MODERN TERMINAL INTERACTIVE
// ==========================================
function initTerminal() {
   const terminalBody = document.getElementById("terminal-results");
   const terminalInput = document.getElementById("terminal-input-field");
   
   if (!terminalBody || !terminalInput) return;

   // Sambutan terminal
   const welcomeText = `
Farhan Terminal v2.1.0 [Karawang, Indonesia]
Status: ACTIVE @ RS Islam Karawang (SIMRS 24 Jam)
Ketik '<span class="cmd-highlight">help</span>' untuk daftar perintah, atau '<span class="cmd-highlight">cv</span>' untuk unduh CV.
`;
   printToTerminal(welcomeText, "sys-msg");

   terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
         const command = terminalInput.value.trim().toLowerCase();
         terminalInput.value = "";
         
         printToTerminal(`guest@portfolio:~$ ${command}`, "user-cmd");
         
         if (command) {
            handleCommand(command);
         }
         
         const container = document.getElementById("terminal-body-container");
         container.scrollTop = container.scrollHeight;
      }
   });

   function printToTerminal(text, className = "") {
      const p = document.createElement("p");
      if (className) p.className = className;
      p.innerHTML = text.replace(/\n/g, "<br>");
      terminalBody.appendChild(p);
   }

   function handleCommand(cmd) {
      switch (cmd) {
         case "help":
            printToTerminal(`
Perintah yang tersedia:
  <span class="cmd-highlight">cv</span>          - Buka & unduh Curriculum Vitae (PDF).
  <span class="cmd-highlight">exp</span>         - Tampilkan riwayat pengalaman kerja (RSI Karawang & UBP).
  <span class="cmd-highlight">edu</span>         - Tampilkan latar belakang pendidikan & predikat kelulusan.
  <span class="cmd-highlight">skills</span>      - Tampilkan keahlian IT, Server, Jaringan, & Web Dev.
  <span class="cmd-highlight">monitoring</span>  - Ringkasan infrastruktur monitoring Grafana + Prometheus.
  <span class="cmd-highlight">projects</span>    - Daftar sistem & aplikasi yang pernah dibangun.
  <span class="cmd-highlight">stats</span>       - Metrik operasional IT di Rumah Sakit.
  <span class="cmd-highlight">contact</span>     - Informasi kontak resmi (WhatsApp, Email, LinkedIn).
  <span class="cmd-highlight">style</span>       - Switch gaya desain (Modern Glass ⇋ Neo-Brutalism).
  <span class="cmd-highlight">matrix</span>      - Jalankan efek visual konsol.
  <span class="cmd-highlight">clear</span>       - Bersihkan layar terminal.
            `, "sys-response");
            break;

         case "cv":
         case "download-cv":
            printToTerminal(`
Membuka dokumen CV Farhan Aldiansyah Poetra...
<span class="cmd-highlight">✓ File: Farhan_Aldiansyah_Poetra_CV.pdf</span>
Jika tab baru tidak terbuka otomatis, silakan unduh via link berikut:
<a href="assets/Farhan_Aldiansyah_Poetra_CV.pdf" target="_blank" download class="term-link">[ Klik di Sini untuk Unduh CV ]</a>
            `, "sys-response");
            window.open("assets/Farhan_Aldiansyah_Poetra_CV.pdf", "_blank");
            break;

         case "exp":
         case "experience":
            printToTerminal(`
<strong>=== Riwayat Pengalaman Kerja ===</strong>
1. <strong>Staff IT — Rumah Sakit Islam Karawang (2023 – 2026)</strong>
   • Maintenance rutin SIMRS operasional 24 Jam & SLA tanggap cepat.
   • Pengelolaan server Linux/Windows & jaringan LAN/WAN rumah sakit.
   • Monitoring server Grafana + Prometheus dengan alert Telegram bot.
   • Rancang bangun Sistem Laporan Staff, Mutu Perawat, dan Web RS.
2. <strong>Staff IT (Magang) — Universitas Buana Perjuangan (2021 – 2022)</strong>
   • Pemeliharaan basis data sistem E-Learning kampus.
   • Evaluasi performa sistem pembelajaran daring & desain visual.
            `, "sys-response");
            break;

         case "edu":
         case "education":
            printToTerminal(`
<strong>=== Pendidikan Akademik ===</strong>
• <strong>S1 Teknik Informatika</strong> (2018 – 2022)
  Universitas Buana Perjuangan Karawang
  <span class="cmd-highlight">Predikat: Dengan Pujian / Cum Laude (IPK 3.62 / 4.00)</span>
• <strong>SMA KORPI Karawang</strong> (2015 – 2018)
            `, "sys-response");
            break;

         case "monitoring":
            printToTerminal(`
<strong>=== Stack Monitoring & Alerting Server ===</strong>
• Collector: Prometheus + node_exporter (Linux) + windows_exporter
• Visualizer: Grafana Dashboard (CPU, RAM, Disk I/O, Network, Service)
• Alerting: Alertmanager terintegrasi Telegram Bot ke IT Staff grup
• Target: Server Database SIMRS, Web Server RS, Active Directory
• Keuntungan: Notifikasi insiden terkirim dalam &lt;10 detik!
            `, "sys-response");
            break;
            
         case "skills":
            printToTerminal(`
<strong>=== Keahlian Teknis IT & Dev ===</strong>
1. <strong>Server & OS:</strong> Linux, Windows Server, Active Directory, DB Backup.
2. <strong>Monitoring:</strong> Grafana, Prometheus, Telegram Bot Alerting.
3. <strong>Jaringan:</strong> Mikrotik RouterOS, LAN/WAN RS, Firewall, Troubleshooting.
4. <strong>Web Dev:</strong> PHP (Native & Laravel), Node.js, Express, JavaScript, MySQL, PostgreSQL.
5. <strong>SIMRS:</strong> Helpdesk 24 Jam, Integrasi BPJS, SLA Cepat, Dokumentasi PRD.
            `, "sys-response");
            break;
            
         case "projects":
            printToTerminal(`
<strong>=== Portofolio Project Terpilih ===</strong>
1. Sistem Monitoring Mutu RS (82+ Indikator IMN, IMPRS, IKP) [Node.js, Prisma]
2. Monitoring Server & Alert Telegram [Grafana, Prometheus, Linux]
3. Sistem Pelaporan Internal IT [PHP, MySQL, AdminLTE]
4. Sistem Penilaian & Mutu Perawat [Laravel, MariaDB, Dompdf]
5. Website Resmi Rumah Sakit [Bootstrap 5, PHP, PostgreSQL]
6. Web App Manajemen Data Website (CMS) [Laravel, MariaDB, Chart.js]
            `, "sys-response");
            break;
            
         case "stats":
            printToTerminal(`
<strong>=== Metrik Operasional IT di Rumah Sakit ===</strong>
• Server & SIMRS Uptime : 99.9%
• SLA Respon Insiden    : &lt; 15 menit
• Alerting Delay        : &lt; 10 detik (via Telegram Bot)
• Perangkat Dimaintain  : 100+ unit (PC, Server, Printer, Jaringan)
• Aplikasi RS Dibangun  : 6+ sistem operasional aktif
            `, "sys-response");
            break;
            
         case "contact":
            printToTerminal(`
<strong>=== Informasi Kontak Resmi ===</strong>
• Lokasi   : Karawang, Jawa Barat, Indonesia
• WhatsApp : <a href="https://wa.me/6285174236839" target="_blank" class="term-link">0851-7423-6839 (+6285174236839)</a>
• Email    : <a href="mailto:farhanpoetra011@gmail.com" class="term-link">farhanpoetra011@gmail.com</a>
• GitHub   : <a href="https://github.com/farhanaldyy" target="_blank" class="term-link">github.com/farhanaldyy</a>
• LinkedIn : <a href="https://www.linkedin.com/in/farhan-aldiansyah-31b265220/" target="_blank" class="term-link">linkedin.com/in/farhan-aldiansyah</a>
            `, "sys-response");
            break;

         case "matrix":
            printToTerminal(`
<span style="color:#00ff66;font-family:monospace;letter-spacing:2px;">
01000110 01000001 01010010 01001000 01000001 01001110<br>
[✓] Initializing SIMRS Core Nodes... OK<br>
[✓] Prometheus scraping active: 100% targets UP<br>
[✓] Telegram Alert Bot: CONNECTED
</span>
            `, "sys-response");
            break;

         case "style":
         case "neo":
         case "brutalism":
            document.body.classList.toggle("neo-brutalist");
            const isNeo = document.body.classList.contains("neo-brutalist");
            const style = isNeo ? "neo-brutalist" : "modern";
            localStorage.setItem("portfolio-style", style);
            
            const styleBtn = document.getElementById("style-toggle");
            if (styleBtn) {
               styleBtn.innerHTML = isNeo ? '<i class="fas fa-cube"></i>' : '<i class="fas fa-cubes"></i>';
               styleBtn.classList.toggle("active-neo", isNeo);
               styleBtn.title = isNeo ? "Style: Neo-Brutalism (Klik untuk kembali ke Modern)" : "Style: Modern Glass (Klik untuk switch ke Neo-Brutalism)";
            }
            printToTerminal(`Gaya desain diganti ke: <strong>${isNeo ? "NEO-BRUTALISM ⚡" : "MODERN GLASS ✨"}</strong>`, "sys-response");
            break;
            
         case "clear":
            terminalBody.innerHTML = "";
            break;
            
         default:
            printToTerminal(`Perintah tidak dikenal: '${cmd}'. Ketik '<span class="cmd-highlight">help</span>' untuk panduan.`, "sys-error");
            break;
      }
   }
}

// ==========================================
// COPY TO CLIPBOARD EMAIL
// ==========================================
function initCopyEmail() {
   const copyBtn = document.getElementById("copy-email-btn");
   if (!copyBtn) return;

   copyBtn.addEventListener("click", () => {
      const email = "farhanpoetra011@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
         const tooltip = copyBtn.querySelector(".tooltip");
         if (tooltip) tooltip.classList.add("show");
         
         const icon = copyBtn.querySelector("i");
         if (icon) icon.className = "fas fa-check text-accent";
         
         setTimeout(() => {
            if (tooltip) tooltip.classList.remove("show");
            if (icon) icon.className = "far fa-copy";
         }, 2000);
      }).catch(err => {
         console.error("Gagal menyalin email: ", err);
      });
   });
}

// ==========================================
// INITIALIZATION ON DOM CONTENT LOADED
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
   initTheme();
   initStyleSwitcher();
   initNavbar();
   initProjectFilter();
   initScrollAnimations();
   initStatsCounter();
   initProjectModal();
   initTerminal();
   initCopyEmail();
});