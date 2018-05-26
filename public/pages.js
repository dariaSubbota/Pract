window.getHTML = (function () {
    return {
        /**
         * @return {string}
         */
        HeaderFooter: function () {
            return `
            <header>
                <a href="#" onclick="reloadMain()" class="logo">
                    <i class="fa fa-camera-retro camera2 fa-5x"></i>
                    <a class="posit">Positgramm</a>
                </a>
                <div class="add-photo">
                    <a class="add-button" onclick="setAddPostPage()" href="#">Добавить фото</a>
                </div>
                <div class="user-name">
                    <div class="user-name-full"></div>
                    <a class="sign" href="#" onclick="setLogInPage();">
                        <i class="fa fa-sign-in signicon2 fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
            </header>
            
            <footer>
                "Positgramm"||Суббота Дарья(2 курс 8 группа)||daria.subbota@icloud.com||Дата изменения: 26.05.18
            </footer>`;
        },
        /**
         * @return {string}
         */
        MainPage: function () {
            return `
            <div class="search">
                <div class="search-author-hashtag">
                    <input type="text" maxlength="50" placeholder="Автор" onkeyup="filterByEnter();" class="input1">
                    <input type="text" maxlength="50" placeholder="Хэштеги" onkeyup="filterByEnter();" class="input2">
                </div>
                <div class="search-date">
                        <input maxlength="20" type="date" class="input3">
                </div>
                <input type="submit" class ="Ok" value="Search" onclick="setFilterConfig();"></input>
            </div>
            <div class="content">
            </div>
            <button class="load-more-button" onclick="loadMore(this);">Загрузить еще</button>
            `;
        },
        /**
         * @return {string}
         */
        QuestionPage: function () {
            return `
                <div class="question-inner">
                    <p>Вы хотите удалить данный пост?</p>
                    <div class="choose">
                        <button onclick="deleteOk()" class="delete-button">Удалить</button>
                        <button onclick="deleteCancel()" class="cancel-button">Отмена</button> 
                    </div>
                </div>
            `;
        },
        /**
         * @return {string}
         */
        AgreePage: function () {
            return `
                <div class="agreement-block">
                    <p class="agree-info">Проверьте корректность <br>введенных данных</p>
                    <button onclick="agreeOk()" class="agree-button">Хорошо</button> 
                </div>
            `;
        },
        /**
         * @return {string}
         */
        AddPostPage: function () {
            return `
            <div class="add-form">
                <div class="photo-form">
                    <div class="addphoto-image">
                        <img src="UI/images/addPhoto.jpg" class="addphoto-image-size">
                            <a href="#" onclick="">
                                <div class="plus" onclick="getFile()">
                                    <input type="file" id="img-upload" onchange="updateImageDisplay();" accept="image/*" required />
                                    <span>+</span>
                                </div>
                            </a>
                        </img>   
                    </div>
                    <input class="image-link-input" type="text" onchange="setImageLink();" placeholder="ссылка">
                </div>
                <div class="description-form">
                    <span class="to-do-info">Описание:</span>
                    <textarea id="text-form"  onkeypress="return rewatch(this);" rows="6" maxlength="180"></textarea>
                    <a href="#" class="submit-button" onclick="addPhoto();">Добавить</a>
                </div>
            </div>
            `;
        },
        /**
         * @return {string}
         */
        EditPostPage: function () {
            return `
            <div class="add-form">
                <div class="photo-form">
                    <div class="addphoto-image">
                        <img src="" class="addphoto-image-size">
                            <a href="#" onclick="">
                                <div class="plus" onclick="getFile()">
                                    <input type="file" id="img-upload" onchange="updateImageDisplay();" accept="image/*" required />
                                    <span>+</span>
                                </div>
                            </a>
                        </img>
                    </div>
                    <input class="image-link-input" type="text" onchange="setImageLink();" placeholder="ссылка">
                </div>
                <div class="description-form">
                    <span class="to-do-info">Описание:</span>
                    <textarea id="text-form"  onkeypress="return rewatch(this);" rows="6" maxlength="180"></textarea>
                    <a href="#" class="submit-button" onclick="editPhoto();">Сохранить</a>
                </div>
            </div>
            `;
        },
        /**
         * @return {string}
         */
        LogInPage: function () {
            return `
            <i class="main">
                <i class="fa fa-camera-retro camera2 fa-5x" onclick="setMainPage();"/></i>
                <div class="input-block">
                    <div class="text-log-in"><span>ВХОД</span></div>
                    <form onsubmit="signIn()">
                        <input class="input-name" type="text" id="input_name" pattern="^[А-ЯЁа-яёa-zA-Z][А-ЯЁа-яёa-zA-Z0-9-_\.]{2,20}$" title="Вы ввели запрещенный символ! Только латиница и цифры." placeholder="Логин" required>
                        <input class="input-password" id="input_password" type="password" maxlength="30" minlength="4" placeholder="Пароль" required>    
                        <div type="submit" class="for-button">
                            <button type='submit'>Войти</button>
                        </div>
                    </form>
                </div>
            </div>`;
        }
    }
})();
function setMainPage() {
    document.body.innerHTML = getHTML.HeaderFooter();
    let mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    mainContainer.innerHTML = getHTML.MainPage();
    document.body.insertBefore(mainContainer, document.querySelector('footer'));
    domModule.setContent();
    getPhotoPosts();
}
function setLogInPage() {
    document.body.innerHTML = getHTML.LogInPage();
    domModule.setFilter();
}
function setAddPostPage() {
    document.querySelector('.add-button').style.display = 'none';
    document.querySelector('.sign').setAttribute('onclick', 'logOutFromAddEdit()');
    document.querySelector('.main-container').className = 'add-main-container';
    document.querySelector('.add-main-container').innerHTML = getHTML.AddPostPage();
    document.querySelector('.logo').setAttribute('onclick', 'setMainPageFromAddEdit()');
    domModule.setFilter();
}
function setMainPageFromAddEdit() {
    document.querySelector('.add-main-container').className = 'main-container';
    document.querySelector('.main-container').innerHTML = getHTML.MainPage();
    document.querySelector('.add-button').style.display = 'flex';
    document.querySelector('.logo').setAttribute('onclick', 'reloadMain()');
    document.querySelector('.sign').setAttribute('onclick', 'logOut();');
    domModule.setContent();
    getPhotoPosts();
}
function setEditPostPage(post) {
    const photoPost = post.parentNode.parentNode;
    const photoLink = photoPost.querySelector('.image-position').src;
    const description = photoPost.querySelector('.text-info').innerHTML.replace(/<br>/g, '\n');
    document.querySelector('.add-button').style.display = 'none';
    document.querySelector('.main-container').className = 'add-main-container';
    document.querySelector('.add-main-container').innerHTML = getHTML.EditPostPage();
    document.querySelector('.add-form').id = post.parentNode.parentNode.id;
    document.querySelector('.sign').setAttribute('onclick', 'logOutFromAddEdit()');
    document.querySelector('.addphoto-image-size').src = photoLink;
    document.querySelector('.logo').setAttribute('onclick', 'setMainPageFromAddEdit()');
    document.getElementById('text-form').innerHTML = description;
    document.getElementById('img-upload').value = '';
}
function setQuestionPage() {
    let question = document.createElement('div');
    question.className = 'question';
    question.innerHTML = getHTML.QuestionPage();
    document.querySelector('.main-container').appendChild(question);
}
function setAgreementPage() {
    let agreement = document.createElement('div');
    agreement.className = 'agreement';
    agreement.innerHTML = getHTML.AgreePage();
    document.querySelector('.add-main-container').appendChild(agreement);
}
function setAgreementPageinMain() {
    let agreement = document.createElement('div');
    agreement.className = 'agreement';
    agreement.innerHTML = getHTML.AgreePage();
    document.querySelector('.main-container').appendChild(agreement);
    document.querySelector('.agree-info').textContent = "Войдите в систему";
}