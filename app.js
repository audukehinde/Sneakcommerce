const wrapper = document.querySelector(".slider-wrapper");
const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  })
})

