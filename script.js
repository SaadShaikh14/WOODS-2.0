const header = document.querySelector("header")
const menuIcon = document.querySelector("#menu-icon")
const mobileMenu = document.querySelector("#mobile-menu")

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 150)
})

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation() // Prevent the click from immediately closing the menu
  mobileMenu.classList.toggle("open")
  menuIcon.classList.toggle("bx-x")
})

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
    menuIcon.classList.remove("bx-x")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("open") && !mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    mobileMenu.classList.remove("open")
    menuIcon.classList.remove("bx-x")
  }
})

// Prevent clicks inside the mobile menu from closing it
mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation()
})

