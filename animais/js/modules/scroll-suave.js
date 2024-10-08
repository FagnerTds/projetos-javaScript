// scroll suve para os links internos
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    }
    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}
