const carsElem = document.querySelector(".cars");
const carsList = document.querySelector(".carsList");
const carsTemplateText = document.querySelector(".carsTemplateText").innerHTML;
const carsTemplate = Handlebars.compile(carsTemplateText);

const brandsElem = document.querySelector(".brands");
const brandsList = document.querySelector(".brandsList");
const brandsTemplateText = document.querySelector(".brandsTemplateText").innerHTML;
const brandsTemplate = Handlebars.compile(brandsTemplateText);


const colorsElem = document.querySelector(".colors");
const colorsList = document.querySelector(".colorsList");
const colorsTemplateText = document.querySelector(".colorsTemplateText").innerHTML;
const colorsTemplate = Handlebars.compile(colorsTemplateText);

axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function(results) {
        colorsList.innerHTML = colorsTemplate({
            colors: results.data
        });
    });

axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function(results) {
        brandsList.innerHTML = brandsTemplate({
            brands: results.data
        });
    });

axios
    .get("http://api-tutor.herokuapp.com/v1/cars/model")
    .then(function(results) {
        carsList.innerHTML = carsTemplate({
            cars: results.data
        });
    });