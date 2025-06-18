
  var swiper = new Swiper(".index-mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides:true,
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 100,
      }
    },
  });
  var swiper = new Swiper(".index-mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides:true,
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 50,
      }
    },
  });

  var swiper = new Swiper(".blog-mySwiper-1", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
    var swiper = new Swiper(".land-mySwiper-1", {
      loop: true,
      autoplay:true,
      navigation: {
        nextEl: ".swiper-button-next-slider",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".land-mySwiper-2", {
        loop: true,
        autoplay:true,
        
        navigation: {
          nextEl: ".swiper-button-next-slider",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper = new Swiper(".read-blog-mySwiper-1", {
        slidesPerView: 1,
        loop:true,
        spaceBetween: 30,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });

      var swiper = new Swiper(".result-mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          }
        },
      });
    
  setInterval(function () {
    let hour = document.querySelector(".hour")
    let newDate = new Date()
    let today = document.querySelector(".day")
    let hours = newDate.getHours()
    let min = newDate.getMinutes()
    let months = ["January", "February", "March", "April", "May", "June", "July", "Audgust", "September"]
    let month = months[newDate.getMonth()]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[newDate.getDay()]
    console.log(day)
    today.innerHTML = day + "," + " " + newDate.getDay() + " " + month + newDate.getFullYear()
    hour.innerHTML = hours + ":" + min
  }, 1000)
  let nav2cross = document.querySelector(".nav-2-btn")
  let nav2 = document.querySelector(".nav-2")
  let nav2open = document.querySelector(".nav-2-open")
  nav2cross.addEventListener("click", function () {
    document.body.classList.remove("nav2")
  })
  nav2open.addEventListener("click", function () {
    document.body.classList.add("nav2")
  })
  if (document.querySelector(".gallery-filter")) {
    const filterContainer = document.querySelector(".gallery-filter"),
      galleryItems = document.querySelectorAll(".gallery-item");

    filterContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
          if (item.classList.contains(filterValue) || filterValue === 'all') {
            item.classList.remove("hide");
            item.classList.add("show");
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });
      }
    });
  }

  window.onload = getMyLocation;

var map;
function getMyLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocation);
} else {
  alert('Oops, no geolocation support');
}
}

//This function is inokved asynchronously by the HTML5 geolocation API.
function displayLocation(position) {
//The latitude and longitude values obtained from HTML 5 API.
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

//Creating a new object for using latitude and longitude values with Google map.
var latLng = new google.maps.LatLng(latitude, longitude);

showMap(latLng);

addNearByPlaces(latLng);
createMarker(latLng);

//Also setting the latitude and longitude values in another div.
var div = document.getElementById('location');
div.innerHTML = 'You are at Latitude: ' + latitude + ', Longitude: ' + longitude;
}

function showMap(latLng) {
//Setting up the map options like zoom level, map type.
var mapOptions = {
  center: latLng,
  zoom: 18,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

//Creating the Map instance and assigning the HTML div element to render it in.
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function addNearByPlaces(latLng) {

var nearByService = new google.maps.places.PlacesService(map);

var request = {
  location: latLng,
  radius: 1000,
  types: ['food', 'bakery', 'cafe', 'grocery_or_supermarket', 'meal_delivery','restaurant', 'meal_takeaway', 'shopping_mall']
};

nearByService.nearbySearch(request, handleNearBySearchResults);
}

function handleNearBySearchResults(results, status) {
if (status == google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
    var place = results[i];
    createMarker(place.geometry.location, place);
  }
}
}

function createMarker(latLng, placeResult) {
var markerOptions = {
  position: latLng,
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true
}
//Setting up the marker object to mark the location on the map canvas.
var marker = new google.maps.Marker(markerOptions);

if (placeResult) {
  var content = placeResult.name+'<br/>'+placeResult.vicinity+'<br/>'+placeResult.types;
  addInfoWindow(marker, latLng, content);
}
else {
  var content = 'You are here: ' + latLng.lat() + ', ' + latLng.lng();
  addInfoWindow(marker, latLng, content);
}

}

function addInfoWindow(marker, latLng, content) {
var infoWindowOptions = {
  content: content,
  position: latLng
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

google.maps.event.addListener(marker, 'click', function() {
  infoWindow.open(map);
});
}
function myDate() {
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var day = weekdays[a.getDay()];
    return {
      week : {
        dayName : day,
        date: a.getDate(),
        month() {
          var a = new Date();
          var monthName = new Array(7);
          monthName[0] = "January";
          monthName[1] = "February";
          monthName[2] = "March";
          monthName[3] = "April";
          monthName[4] = "May";
          monthName[5] = "June";
          monthName[6] = "July";
          monthName[7] = "August";
          monthName[8] = "September";
          monthName[9] = "October";
          monthName[10] = "November";
          monthName[11] = "December";
          return  monthName[a.getMonth()];
        },
        year: a.getFullYear(),
      }
    }
  }


