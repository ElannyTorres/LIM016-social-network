export default () => {
  const newPost = `
    <section class="newPostSection">
        <form id="postForm" name="postForm" class="createPostContainer">
            <textarea rows="2" id="textDescription" class="textToCreate" placeholder="¿Qué deseas compartir?" autofocus></textarea>
            <div class="btnsToCreate">
                <ul>
                    <li><button class="btnPicture"><i class="fas fa-image"></i></button></li>
                    <li><button type="submit" id="btnShare" class="btnShare">Compartir</button></li>
                </ul>
            </div>
        </form>
    </section>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'newPostGrid');
  divElement.innerHTML = newPost;

  return divElement;
};
