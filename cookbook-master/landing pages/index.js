function mySurprise() {

    var randomRecipe = Math.round(Math.random() * 11) + 1;

    window.location.href = `../recipes/recipe${randomRecipe}.html`;
}