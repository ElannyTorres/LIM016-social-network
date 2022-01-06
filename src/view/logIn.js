export default () => {
  const viewLogIn = `
    <section id="loginSection" class="">
      <img src="../images/logoimg2.png" class="col-s-1" id="logo" alt="logo" />
      <div>
        <form action="" id="loginForm" class="col-s-2">
          <input type="email" placeholder="E-mail" />
          <br>
          <input type="password" placeholder="Password..." />
          <br>
          <button id="loginBtn"><a href="#/timeLine">Login</a></button>
        </form>
        <br>
        <p>_______________ or _______________</p>
        <br>
        <ul id="otherWayToLogIn">
          <li>Google</li>
          <br>
          <li>Facebook</li>
        </ul>
        <br>
        <div id="signUpBtnContainer">
          <button id="signUpBtn"><a href="#/signUp">Sign Up</a></button>
        </div>
      </div>
    </section>
    `;

  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'viewLogInGrid');
  divElem.innerHTML = viewLogIn;

  return divElem;
};
