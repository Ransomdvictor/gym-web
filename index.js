import AOS from 'aos';
import 'aos/dist/aos.css';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 50,
  duration: 400,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// Initialize the map after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('mapid');

  if (!mapElement) {
    console.warn('Map container #mapid was not found.');
    return;
  }

  const mymap = L.map('mapid').setView([51.404, -0.09], 13);

  // OpenStreetMap tiles - no Mapbox token required
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);
});
