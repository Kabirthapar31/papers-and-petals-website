/*
 * Basic client-side script for the Papers & Petals site
 *
 * This script contains minimal JavaScript to enhance the user experience.
 * Currently, it provides a simple toggle for the mobile navigation menu.
 * More interactive functionality (quick view modals, filters, etc.) can be
 * added later as needed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toggle the mobile navigation drawer when the hamburger icon is clicked
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});