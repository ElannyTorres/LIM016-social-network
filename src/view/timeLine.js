export default () => {
  const viewTimeLine = `
  <section class="timeLineSection">
    <h1>TimeLine</h1>
  </section>
  `;

  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'viewTimeLineGrid');
  divElem.innerHTML = viewTimeLine;

  return divElem;
};
