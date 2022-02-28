let progress_bar = document.querySelector(".progress_bar");
let progress_value = 0;
let intervel = setInterval(() => {
  if (progress_value <= 100) {
    progress_bar.style.width = `${progress_value}%`;
    progress_value += 1;
  } else {
    clearInterval(intervel);
  }
}, 50);
