function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const button = document.getElementById("menu-toggle");
  const bars = button.querySelectorAll(".bar");

  // Toggle sidebar visibility
  if (sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");

    // Change button to X
    bars[0].classList.add("rotate-45");
    bars[1].classList.add("opacity-0");
    bars[2].classList.add("-rotate-45");
  } else {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("-translate-x-full");

    // Change button back to hamburger
    bars[0].classList.remove("rotate-45");
    bars[1].classList.remove("opacity-0");
    bars[2].classList.remove("-rotate-45");
  }
}

// fungsi nav menampilkan content berdasarkan nav yang dipilih
function showContent(section) {
  // Menyembunyikan semua konten
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => {
    sec.classList.add("hidden");
  });

  // Menampilkan konten yang dipilih
  const activeSection = document.getElementById(section);
  activeSection.classList.remove("hidden");

  // Mengatur tombol aktif
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeButton = document.getElementById(section + "-btn");
  activeButton.classList.add("active");
}

// Memanggil fungsi untuk menampilkan home saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showContent("home");
});

// fungsi untuk mengecilkan sidebar
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-sidebar");
const sidebarContent = document.querySelectorAll(".sidebar-content");
const verifiedIcons = document.querySelectorAll(".verified");
const coffeeIcons = document.querySelectorAll(".coffe");
let isCollapsed = false;

toggleButton.addEventListener("click", () => {
  if (isCollapsed) {
    sidebar.style.width = "256px"; // Lebar semula
    sidebar.style.transition = "width 1s ease";

    // Menampilkan elemen <p> dan mengembalikan margin ikon
    sidebarContent.forEach((p) => {
      p.style.opacity = "1";
      p.style.display = "block";
    });

    // Mengembalikan margin kiri ikon verifikasi
    verifiedIcons.forEach((icon) => {
      icon.style.marginLeft = "5px";
      icon.style.transition = "margin-left 1s ease";
    });

    // Mengembalikan margin kiri ikon kopi
    coffeeIcons.forEach((icon) => {
      icon.style.marginLeft = "5px";
      icon.style.transition = "margin-left 1s ease";
    });
  } else {
    sidebar.style.width = "80px";
    sidebar.style.transition = "width 1s ease";

    // Menyembunyikan elemen <p>
    sidebarContent.forEach((p) => {
      p.style.opacity = "0";
      setTimeout(() => {
        p.style.display = "opacity 0";
      }, 300);
    });

    // Mengubah margin kiri ikon verifikasi
    verifiedIcons.forEach((icon) => {
      icon.style.marginLeft = "-150px";
      icon.style.transition = "margin-left 0.3s ease";
    });

    // Mengubah margin kiri ikon kopi
    coffeeIcons.forEach((icon) => {
      icon.style.marginLeft = "-40px";
      icon.style.transition = "margin-left 0.3s ease";
    });
  }
  isCollapsed = !isCollapsed;
});
