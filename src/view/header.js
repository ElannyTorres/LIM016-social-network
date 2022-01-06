export default () => {
  const header = `
    <header>
        <ul>
            <li><a href="#/profile">Profile</a></li>
            <li><a href="#/timeLine">Home</a>                </li>                    <li><a href="#/signUp">Log Out</a></li>
            <li>
                <i class="fas fa-ellipsis-v"></i>
            </li>
        </ul>
    </header>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'headerGrid');
  divElement.innerHTML = header;

  return divElement;
};
