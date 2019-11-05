// TOGGLE HAMBURGER MENU TO OPEN AND CLOSE MOBILE NAVIGATION MENU
document
  .querySelector(".hamburger-menu__icon")
  .addEventListener("click", function() {
    document.querySelector(".menu__backdrop").classList.toggle("remove-nav");
  });

// TOGGLE TAB MENU

const tabPanels = [...document.querySelectorAll(".tab__panel")];

tabPanels.forEach(panel =>
  panel.addEventListener("click", function() {
    if (this.dataset.tab) {
      const tabContents = [...document.querySelectorAll(".tab__content-panel")];
      tabContents.forEach(tabContent => {
        tabContent.classList.remove("display-tab");
        this.classList.remove("red-border");
        tabContent.classList.remove("tab__content-panel-1");
        if (tabContent.id === this.dataset.tab) {
          tabContent.classList.add("display-tab");
        }
      });
    }
  })
);

// TOGGLE ACCORDIAN

// const accordianConts = [...document.querySelectorAll(".accordian__panel--content")];
const accordianConts = [
  ...document.querySelectorAll(".accordian__panel--icon")
];

accordianConts.forEach(accordian =>
  accordian.addEventListener("click", function() {
    if (this.dataset.faq) {
      const contents = document.querySelectorAll(".accordian__panel--content");
      contents.forEach(content => {
        if (this.dataset.faq === content.id) {
          content.classList.toggle("accordian__display");
        }
      });
    }
  })
);
