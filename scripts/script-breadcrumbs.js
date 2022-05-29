const linkCurrent = document.querySelector('.breadcrumbs__link_current');
const updateBreadCrumps = () => {
  const block = document.querySelector(".content:not(.hidden)")
  const text = block.querySelector(".content__title").textContent
  linkCurrent.textContent = text
  if (text === "Курс завершен") {
    document.querySelector(".breadcrumbs > ul > li:nth-child(3)").style.display = 'none'
  }
}
updateBreadCrumps()

const frowardButton = document.querySelector("#button_forward")


