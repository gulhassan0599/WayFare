const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 10, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "Red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h5 class="text-uppercase small fw-bold mb-2" style="letter-spacing: 0.08em; color: var(--color-ink-soft);">${listing.title}</h5>
      <p class="text-uppercase small fw-bold mb-2" style="letter-spacing: 0.08em; color: var(--color-ink-soft);">${listing.location}</p>`,
    ),
  )
  .addTo(map);


