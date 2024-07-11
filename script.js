const arrows = document.querySelectorAll(".arrow"); /* değişken tanımlandı*/
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300); //ekran boyutunu öğrenmek için kullanılır
  let clickCounter = 0;
  const imageItem =
    movieList[i].querySelectorAll("img").length; /* image sayımızı bulduk*/
  arrow.addEventListener("click", function () {
    /* tıklanılan ok ile işlem yapmak için */
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0; /*hata alındı bir kere sona gelince tekrar oka basınca ilerlemiyordu onu düzelttik  */
    }
  });

});
/* dark mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);
ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
/*console.log(window.innerWidth); //ekran boyutunu öğrenmek için kullanılır */
