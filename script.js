const districtPlaces = {
  "Coimbatore": [
    { name: "Marudamalai Temple", link: "https://www.google.com/maps/place/Marudamalai+Arulmigu+Subramanya+Swami+Temple/" },
    { name: "VOC Park and Zoo", link: "https://www.google.com/maps/place/VOC+Park+and+Zoo/" },
    { name: "Perur Pateeswarar Temple", link: "https://www.google.com/maps/place/Arulmigu+Patteeswarar+Swamy+Temple,+Perur/" },
    { name: "Gedee Car Museum", link: "https://www.google.com/maps/place/Gedee+Car+Museum/" },
    { name: "Siruvani Waterfalls", link: "https://www.google.com/maps/place/Siruvani+Waterfalls/" }
  ],
  "Chennai": [
    { name: "Marina Beach", link: "https://www.google.com/maps/place/Marina+Beach/" },
    { name: "Kapaleeshwarar Temple", link: "https://www.google.com/maps/place/Kapaleeshwarar+Temple/" },
    { name: "Fort St. George", link: "https://www.google.com/maps/place/Fort+St.+George/" },
    { name: "Valluvar Kottam", link: "https://www.google.com/maps/place/Valluvar+Kottam/" },
    { name: "Guindy National Park", link: "https://www.google.com/maps/place/Guindy+National+Park/" }
  ],
  "Salem": [
    { name: "Yercaud Hills", link: "https://www.google.com/maps/place/Yercaud/" },
    { name: "1008 Lingam Temple", link: "https://www.google.com/maps/place/1008+Lingam+Temple/" },
    { name: "Mookaneri Lake", link: "https://www.google.com/maps/place/Mookaneri+Lake/" },
    { name: "Kottai Mariamman Temple", link: "https://www.google.com/maps/place/Kottai+Mariamman+Temple/" },
    { name: "Poiman Karadu", link: "https://www.google.com/maps/place/Poiman+Karadu/" }
  ],
  "Madurai": [
    { name: "Meenakshi Amman Temple", link: "https://www.google.com/maps/place/Meenakshi+Amman+Temple/" },
    { name: "Thirumalai Nayakkar Palace", link: "https://www.google.com/maps/place/Thirumalai+Nayakkar+Palace/" },
    { name: "Gandhi Memorial Museum", link: "https://www.google.com/maps/place/Gandhi+Memorial+Museum,+Madurai/" },
    { name: "Alagar Kovil", link: "https://www.google.com/maps/place/Alagar+Kovil/" },
    { name: "Pazhamudhir Solai", link: "https://www.google.com/maps/place/Pazhamudhir+Solai/" }
  ]
};

function showLogin() {
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('districtPage').classList.add('hidden');
  document.getElementById('placesPage').classList.add('hidden');
}

function closeLogin() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('districtPage').classList.remove('hidden');
}

function goToPlaces() {
  let district = document.getElementById('districtSelect').value;
  document.getElementById('districtPage').classList.add('hidden');
  document.getElementById('placesPage').classList.remove('hidden');
  document.getElementById('placesTitle').innerText = "Select Places in " + district;
  let placesDiv = document.getElementById('placesList');
  placesDiv.innerHTML = "";
  districtPlaces[district].forEach(place => {
    placesDiv.innerHTML += `<label><input type="checkbox" value="${place.name}" data-link="${place.link}"> <span>${place.name}</span></label>`;
  });
}

function generateRoadmap() {
  let checkboxes = document.querySelectorAll('#placesList input[type=checkbox]:checked');
  let roadmapDiv = document.getElementById('roadmap');
  roadmapDiv.innerHTML = "<h3>Your Travel Roadmap</h3>";

  if (checkboxes.length === 0) {
    roadmapDiv.innerHTML += "<p>No places selected.</p>";
  } else {
    let places = [];
    checkboxes.forEach(cb => {
      places.push({ name: cb.value, link: cb.dataset.link });
    });
    places.sort((a,b)=>a.name.localeCompare(b.name));
    places.forEach((place, index) => {
      roadmapDiv.innerHTML += `<div class='step'>${index+1}. <a href='${place.link}' target='_blank'>${place.name}</a></div>`;
    });
  }

  roadmapDiv.classList.remove('hidden');
}
