const btn = document.querySelector('.container__btn');
const cart = document.querySelector('.container__cart');

btn.addEventListener('click', () => {
  if (window.getComputedStyle(cart).display === "none") {
    cart.style.display = "flex";
    setTimeout(() => {
      const articles = document.querySelectorAll('.container__cart__article');
      const articles_arr = Array.from(articles);
      const up = document.querySelector('.container__cart__up');
      const down = document.querySelector('.container__cart__down');

      let counter = 0;
      down.style.backgroundColor = "#fcfcfc";
      down.style.color = "#ccc";

      up.addEventListener('click', () => {
        if (counter == 0 || counter == 1) {
          articles_arr[counter].style.display = "none";
          articles_arr[counter + 3].style.display = "flex";
          counter++;
          console.log(counter);

          down.style.backgroundColor = "#f9f9f9";
          down.style.color = "#151515";
        }

        if (counter == 2) {
          up.style.backgroundColor = "#fcfcfc";
          up.style.color = "#ccc";
        }
      });

      down.addEventListener('click', () => {
        if (counter == 2 || counter == 1) {
          articles_arr[counter + 2].style.display = "none";
          articles_arr[counter - 1].style.display = "flex";
          counter--;
          console.log(counter);

          up.style.backgroundColor = "#f9f9f9";
          up.style.color = "#151515";
        }

        if (counter == 0) {
          down.style.backgroundColor = "#fcfcfc";
          down.style.color = "#ccc";
        }
      });
    }, 50);
  } else {
    cart.style.display = "none";
  }
})



  


