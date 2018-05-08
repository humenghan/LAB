const countries = [
    {
        name: "Canada",
        continent: "North America",
        cities: ["Calgary", "Montreal", "Toronto"],
        photos: ["canada1.jpg", "canada2.jpg", "canada3.jpg"]
    },
    {
        name: "United States",
        continent: "North America",
        cities: ["Boston", "Chicago", "New York", "Seattle", "Washington"],
        photos: ["us1.jpg", "us2.jpg"]
    },
    {
        name: "Italy",
        continent: "Europe",
        cities: ["Florence", "Milan", "Naples", "Rome"],
        photos: ["italy1.jpg", "italy2.jpg", "italy3.jpg", "italy4.jpg", "italy5.jpg", "italy6.jpg"]
    },
    {
        name: "Spain",
        continent: "Europe",
        cities: ["Almeria", "Barcelona", "Madrid"],
        photos: ["spain1.jpg", "spain2.jpg"]
    }
];

window.onload = function () {

    let item = document.getElementsByClassName("justify");

    for (let i = 0; i < 4; i++) {
        item[0].innerHTML += "<div class='item'><h2>" + countries[i].name + "</h2><p>" + countries[i].continent + "</p>"
            +"<div class='inner-box'><h3>Cities</h3>" + city(i) +"</div>"  + photo(i) + "<button type='button'>Visit</button></div>"
    }

    function city(j) {
        let length = countries[j].cities.length;
        let cityArray = new Array(length);
        for (let i = 0; i < length; i++) {
            cityArray[i] = "<li>" + (countries[j].cities)[i] + "</li>"
        }
        return "<ul>" + cityArray.join("") + "</ul>";
    }

    function photo(j) {
        let length = countries[j].photos.length;
        let photoArray = new Array(length);
        for (let i = 0; i < length; i++) {
           let src0 = "images/"+ (countries[j].photos)[i]
            photoArray[i] ="<img class='photo' src = " + src0 + ">"
        }
        return "<div class='inner-box'><h3>Popular Photos</h3>" + photoArray.join("") +"</div>";
    }

};