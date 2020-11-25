const colorsElem = document.querySelector(".colors");
const colorsList = document.querySelector(".colorsList");
const colorsTemplateText = document.querySelector(".colorsTemplateText").innerHTML;
const colorSelection = document.querySelector(".colorSelection");
const colorsTemplate = Handlebars.compile(colorsTemplateText);

const brandsElem = document.querySelector(".brands");
const brandsList = document.querySelector(".brandsList");
const brandsTemplateText = document.querySelector(".brandsTemplateText").innerHTML;
const brandsTemplate = Handlebars.compile(brandsTemplateText);
const brandSelection = document.querySelector(".brandSelection");
const filterButton = document.querySelector(".button")

const brandsListFilter = document.querySelector(".brandsListFilter");
const colorsListFilter = document.querySelector(".colorsListFilter");
const brandsFilterTemplateText = document.querySelector(".brandsFilterTemplateText").innerHTML;
const colorsFilterTemplateText = document.querySelector(".colorsFilterTemplateText").innerHTML;
const brandsFilterTemplate = Handlebars.compile(brandsFilterTemplateText);
const colorsFilterTemplate = Handlebars.compile(colorsFilterTemplateText);

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

function filterCars() {

    let colors = colorSelection.value;
    let brands = brandSelection.value;

    axios
        .get("http://api-tutor.herokuapp.com/v1/cars/make/" + brands + "/color/" + colors)
        .then(function(results) {
            brandsListFilter.innerHTML = brandsFilterTemplate({
                brandsFilter: results.data
            });
        });

}


filterButton.addEventListener('click', filterCars);