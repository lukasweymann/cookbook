function mySurprise() {

    var randomRecipe = Math.round(Math.random() * 11) + 1;

    

    window.location.href = `cookbook-master/recipes/recipe${randomRecipe}.html`;
}

function mySurpriseRecipe() {

    var randomRecipe = Math.round(Math.random() * 11) + 1;



    window.location.href = `recipe${randomRecipe}.html`;
}

function mySurpriseLandingPages() {

    var randomRecipe = Math.round(Math.random() * 11) + 1;



    window.location.href = `../recipes/recipe${randomRecipe}.html`;
}