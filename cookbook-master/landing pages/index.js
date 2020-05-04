function mySurprise() {

    var randomRecipe = Math.round(Math.random() * 11) + 1;

    window.location.href = `cookbook-master/recipes/recipe${randomRecipe}.html`;
}