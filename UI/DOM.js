let postForAdd = {
    id: '21',
    description: 'Как красиво!',
    createdAt: new Date('2018-03-02T21:00:00'),
    author: 'Снежный барс',
    photoLink: 'https://storge.pic2.me/c/1360x800/547/57cc656e4798d.jpg',
    likes: ['Фотограф', 'Выпускница'],
    hashtags: ['#природа']
}
let postForEdit = {
    likes: ['Фотограф', 'Выпускница'],
    hashtags: ['#природа']
}

var options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

window.domModul = (function () {
    let user = 'Тлен';

    let content = document.getElementsByClassName("postsFlex")[0];
    return {
        changeUser: function (username) {
            if (username === null || typeof username === undefined) {
                user = username;
                document.getElementsByClassName('welcome')[0].style.display = 'none';
                document.getElementsByClassName('add')[0].style.display = 'none';
            }
            else {
                if (user === null) {
                    document.getElementsByClassName('add')[0].style.display = 'flex';
                }
                user = username;
                let nameFull = document.getElementsByClassName('welcome')[0];
                if (document.body.clientWidth < 830)
                    nameFull.style.display = 'none';
                else if (user.length > 13) {
                    nameFull.style.display = 'flex';
                    nameFull.style.width = '200px';
                    nameFull.textContent = user;
                }
            }
            getPhotoPosts()
            return true;
        },
        createPost: function (post) {
            let div = document.createElement('div');
            div.id = post.id;
            div.className = "photoFlex";
            let heart = '<div class="likeInfo"><a class="button heart" href="#" ></a>' + post.likes.length + '</div>';
            if (user) {
                post.likes.forEach((elem) => {
                    if (elem === user)
                       heart = '<div class="likeInfo"><a class="button heart" href="#" ></a>' + post.likes.length + '</div>';
                });
            }
            let isOwner = '<div class="editDelete"><a class="button tick" href="#"></a>' +
                '<a class="button cross" href="#"></a></div>';
            div.innerHTML = '<img class="image" src="' + post.photoLink + '" alt="photo"></div>' +heart

                + '<div class="info">' + post.author + ' | ' + post.createdAt.toLocaleString("ru", options)+'<p>'+ post.description + '</p></div>';
            if (user === post.author)
                div.innerHTML =div.innerHTML+isOwner;
            return div;
        },
        addPost: function (post) {
            if (func.addPhotoPost(post)) {
                content.innerHTML = null;
                this.getPosts();
                return true;
            }
            return false;
        },
        getPosts: function (skip = 0, top = 10, filterConfig) {
            let posts = func.getPhotoPosts(skip, top, filterConfig);
            posts.forEach((elem) => {
                content.appendChild(this.createPost(elem));
            });
        },
        editPost: function (id, post) {
            if (func.editPhotoPost(id, post)) {
                content.replaceChild(this.createPost(func.getPhotoPost(id)), document.getElementById(id));
                return true;
            }
            return false;
        },
        removePost: function (id) {
            if (func.removePhotoPost(id)) {
                content.removeChild(document.getElementById(id));
                let count = document.getElementsByClassName('photoFlex').length;
                this.getPosts(count, 1);
                return true;
            }
            return false;
        }
    }
})();
function getPhotoPosts(skip = 0, top = 10, filterConfig) {
    let content = document.getElementsByClassName('postsFlex')[0];
    document.body.removeChild(document.body.children[0]);
    //content.innerHTML = ";
    domModul.getPosts(skip, top, filterConfig);
}

function addPhotoPost(post) {
    if (domModul.addPost(post))
        return true;
    return false;
}

function editPhotoPost(id, post) {
    if (domModul.editPost(id, post))
        return true;
    return false
}

function removePhotoPost(id) {
    if (domModul.removePost(id))
        return true;
    return false;
}

getPhotoPosts();
console.log("You can try:");
console.log("domModul.changeUser(null);");
console.log("domModul.changeUser('Милашка');");
console.log("addPhotoPost(postForAdd);");
console.log("removePhotoPost(5);");
console.log("editPhotoPost(2, postForEdit);");
console.log("getPhotoPosts(undefined, undefined, {hashtags: ['#природа']});");