export default () => {
  const footer = `
    <footer>
        <div id="sectionsContainerFooter">
        <ul>
            <li><a href="#/profile">Profile</a></li>
            <li><a href="#/timeLine">Home</a></li>
            <li><a href="#/signUp">Log Out</a></li>
            <li>
              <i class="fas fa-ellipsis-v"></i>
            </li>
        </ul>
        </div>
    </footer>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = footer;

  return divElement;
};
