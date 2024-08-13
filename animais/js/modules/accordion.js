/* Clicar na pergunta e aparecer a resposta no faq */
export default function activeAcordion() {
  const activeClass = "ativo";
  const accordionList = document.querySelectorAll(
    '[data-animme="accordion"] dt'
  );
  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
