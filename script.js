// ==========================================
// PROJECT DATA FOR DETAILED MODAL
// ==========================================
const projectsData = {
   "it-reporting": {
      title: "Sistem Pelaporan Internal IT",
      desc: "Web app internal yang dirancang khusus untuk mempermudah operasional unit IT Rumah Sakit. Sistem ini menangani pencatatan aktivitas harian IT Support, pengajuan lemburan, log maintenance server, monitoring backup database SIMRS, dan tracking aktivitas teknis lainnya secara real-time.",
      tech: ["PHP", "JavaScript", "MySQL", "Tailwind CSS", "AdminLTE"],
      features: [
         "Logbook Kegiatan IT Support Harian",
         "Sistem Pengajuan & Persetujuan Lembur Staf",
         "Monitoring Status Backup Database Harian",
         "Jurnal Maintenance & Troubleshooting Server",
         "Dashboard Statistik Laporan Kendala (Ticketing)"
      ],
      impact: "Mempersingkat waktu pembuatan rekap laporan bulanan divisi IT dari 3 hari menjadi kurang dari 15 menit, serta meningkatkan akurasi pengawasan backup server SIMRS hingga 100%."
   },
   "hospital-web": {
      title: "Website Resmi Rumah Sakit",
      desc: "Platform informasi publik resmi rumah sakit yang menyajikan profil, fasilitas medis, informasi layanan unggulan, artikel kesehatan, serta jadwal dokter yang terintegrasi secara dinamis untuk memudahkan calon pasien.",
      tech: ["Laravel", "PHP", "Bootstrap 5", "JavaScript", "WhatsApp API", "Mysql"],
      features: [
         "Pencarian & Filter Jadwal Dokter Interaktif",
         "Integrasi Direct WhatsApp Pendaftaran Online",
         "Portal Edukasi Kesehatan & Berita Rumah Sakit",
         "Optimasi SEO & Kecepatan Akses Mobile-Friendly",
         "Halaman Pengaduan & Kontak Pelanggan"
      ],
      impact: "Meningkatkan kunjungan website hingga 50% dan mempermudah pasien mendapatkan informasi jadwal dokter secara mandiri sehingga mengurangi beban antrean call center fisik."
   },
   "web-cms": {
      title: "Web App Manajemen Data Website",
      desc: "Dashboard Content Management System (CMS) internal yang dikembangkan untuk mempermudah tim Humas/Pemasaran dalam memperbarui data website rumah sakit, memantau statistik kunjungan, serta membalas pesan masuk dari pengunjung.",
      tech: ["PHP", "Laravel", "MariaDB", "Chart.js", "CSS Grid/Flexbox", "Mysql"],
      features: [
         "Manajemen Artikel & Pengumuman Rumah Sakit",
         "Pengelola Data Dokter, Spesialisasi, & Jadwal Praktek",
         "Visualisasi Statistik Pengunjung (Menggunakan Chart.js)",
         "Kotak Masuk & Pengelola Formulir Pendaftaran Unduhan",
         "Manajemen Akses Multi-user (Super Admin & Editor)"
      ],
      impact: "Mempercepat proses publikasi jadwal dokter baru dan berita kesehatan dari yang semula membutuhkan waktu 1 hari kerja (menunggu IT) menjadi hanya 5 menit secara mandiri oleh tim Humas."
   },
   "medical-kpi": {
      title: "Sistem Penilaian & Pelaporan Tenaga Medis",
      desc: "Sistem penilaian kinerja internal untuk mengukur indeks performansi (KPI) tenaga medis, perawat, dan staf pendukung di lingkungan rumah sakit secara objektif, aman, dan efisien.",
      tech: ["PHP Native", "JavaScript", "MariaDB", "Bootstrap 5", "PDF Engine (Dompdf)"],
      features: [
         "Kuesioner Penilaian Kinerja Karyawan Multi-faktor",
         "Kalkulasi Otomatis Indeks Kinerja Bulanan & Tahunan",
         "Ekspor Laporan Kinerja ke Format PDF & Excel",
         "Keamanan Data dengan Role-based Access Control (RBAC)",
         "Reminder Evaluasi Kinerja via Notifikasi Dashboard"
      ],
      impact: "Mendigitalisasi proses penilaian kinerja yang sebelumnya manual menggunakan kertas (paperless), mempercepat evaluasi HRD dari 2 minggu menjadi 2 hari, serta meminimalisir kesalahan perhitungan indeks."
   },
   "hospital-quality-system": {
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
   }
};

// ==========================================
// THEME SWITCHER
// ==========================================
function initTheme() {
   const themeToggle = document.getElementById("theme-toggle");
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
// SCROLL-TRIGGERED FADE IN ANIMATIONS
// ==========================================
function initScrollAnimations() {
   const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
   };

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Animasi sekali saja
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
   const speed = 200; // Pembagi kecepatan, semakin kecil semakin cepat

   const startCounting = () => {
      counters.forEach(counter => {
         const target = parseFloat(counter.getAttribute("data-target"));
         const suffix = counter.getAttribute("data-suffix") || "";
         const isDecimal = target % 1 !== 0;
         
         let count = 0;
         const updateCount = () => {
            const increment = target / 40;
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

   // Memulai animasi ketika section terlihat di layar
   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.5 });

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
            // Isi konten modal
            document.getElementById("modal-title").innerText = data.title;
            document.getElementById("modal-desc").innerText = data.desc;
            document.getElementById("modal-impact-desc").innerText = data.impact;
            
            // Generate gallery images jika ada
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
                        <div class="gallery-img-wrapper" onclick="window.open('${imgData.src}', '_blank')" title="Klik untuk membuka gambar di tab baru">
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

            // Generate tags teknologi
            const techContainer = document.getElementById("modal-tech-tags");
            techContainer.innerHTML = "";
            data.tech.forEach(t => {
               const span = document.createElement("span");
               span.className = "tech-tag";
               span.innerText = t;
               techContainer.appendChild(span);
            });

            // Tampilkan modal
            modal.classList.add("active");
            document.body.style.overflow = "hidden"; // Disable scroll body
         }
      });
   });

   const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = ""; // Enable scroll body
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
Farhan Terminal v1.2.0 (Type: 'help' to list available commands)
System status: ONLINE | Connection: STABLE
`;
   printToTerminal(welcomeText, "sys-msg");

   terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
         const command = terminalInput.value.trim().toLowerCase();
         terminalInput.value = "";
         
         // Tampilkan kembali baris perintah
         printToTerminal(`guest@portfolio:~$ ${command}`, "user-cmd");
         
         if (command) {
            handleCommand(command);
         }
         
         // Scroll ke paling bawah
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
  <span class="cmd-highlight">about</span>      - Menampilkan deskripsi singkat tentang Farhan.
  <span class="cmd-highlight">skills</span>     - Menampilkan daftar keahlian IT & Web Dev.
  <span class="cmd-highlight">projects</span>   - Menampilkan daftar project yang pernah dibangun.
  <span class="cmd-highlight">stats</span>      - Menampilkan metrik operasional IT di Rumah Sakit.
  <span class="cmd-highlight">contact</span>    - Menampilkan informasi kontak dan media sosial.
  <span class="cmd-highlight">clear</span>      - Membersihkan tampilan terminal.
            `, "sys-response");
            break;
            
         case "about":
            printToTerminal(`
<strong>Farhan Aldiansyah Poetra</strong>
Seorang profesional IT yang berpengalaman di lingkungan kritis Rumah Sakit.
Berfokus pada stabilitas sistem internal, pemeliharaan server/jaringan, 
dan digitalisasi proses kerja medis & administratif.
            `, "sys-response");
            break;
            
         case "skills":
            printToTerminal(`
================ Keahlian IT & Development ================
1. <strong>IT Support:</strong> Troubleshooting SIMRS, Windows/Linux OS, Hardware.
2. <strong>Server & Network:</strong> Active Directory, Mikrotik LAN/WAN, Server Backup.
3. <strong>Web Development:</strong> HTML5, CSS3, JavaScript, PHP, MySQL, Laravel.
===========================================================
            `, "sys-response");
            break;
            
         case "projects":
            printToTerminal(`
<strong>Daftar Project Utama:</strong>
- Sistem Pelaporan Internal IT (Web App)
- Website Resmi Rumah Sakit (Web Profile & Jadwal Dokter)
- Web App Manajemen Data Website (Dashboard Admin/CMS)
- Sistem Penilaian & Pelaporan Tenaga Medis (Aplikasi Evaluasi Kinerja)
- Sistem Monitoring Mutu Rumah Sakit (Web App & Database)
            `, "sys-response");
            break;
            
         case "stats":
            printToTerminal(`
<strong>Metrik Operasional IT:</strong>
- Server Uptime         : 99.9%
- Kecepatan Respon Tiket: &lt; 15 menit
- Perangkat Dimaintain  : 100+ unit (PC, Printer, Jaringan)
- Aplikasi Dikembangkan : 5+ sistem operasional aktif
            `, "sys-response");
            break;
            
         case "contact":
            printToTerminal(`
<strong>Hubungi Farhan:</strong>
- Email: <a href="mailto:farhanaldyp@gmail.com" class="term-link">farhanaldyp@gmail.com</a>
- GitHub: <a href="https://github.com/farhanaldyy" target="_blank" class="term-link">github.com/farhanaldyy</a>
- LinkedIn: <a href="https://www.linkedin.com/in/farhan-aldiansyah-31b265220/" target="_blank" class="term-link">linkedin.com/in/farhanaldy</a>
            `, "sys-response");
            break;
            
         case "clear":
            terminalBody.innerHTML = "";
            break;
            
         default:
            printToTerminal(`Command not found: '${cmd}'. Ketik '<span class="cmd-highlight">help</span>' untuk melihat daftar perintah.`, "sys-error");
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
         tooltip.classList.add("show");
         
         // Ganti icon menjadi checkmark sementara
         const icon = copyBtn.querySelector("i");
         icon.className = "fas fa-check text-accent";
         
         setTimeout(() => {
            tooltip.classList.remove("show");
            icon.className = "far fa-copy";
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
   initScrollAnimations();
   initStatsCounter();
   initProjectModal();
   initTerminal();
   initCopyEmail();
});
