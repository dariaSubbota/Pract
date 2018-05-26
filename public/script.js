if (!localStorage.getItem('posts')) {
    var photoPosts = [
        {
            id: '1',
            description: 'Теперь я узнал КАК может быть по настоящему холодно',
            createdAt: new Date('2018-01-01T15:00:00'),
            author: 'Северный мишка',
            photoLink: 'UI/images/tn.jpg',
            likes: ['Отпускная', 'Тлен'],
            hashtags: ['#холод']
        },
        {
            id: '2',
            description: 'Все мерзнут в холодном Минске, а мы на море',
            createdAt: new Date('2018-01-12T12:31:55'),
            author: 'Отпускная',
            photoLink: 'UI/images/002.jpg',
            likes: ['Северный мишка'],
            hashtags: ['#вОтпуске']
        },
        {
            id: '3',
            description: 'Первая прогулочка с новым другом',
            createdAt: new Date('2018-07-02T13:41:32'),
            author: 'Милашка',
            photoLink: 'UI/images/003.jpg',
            likes: ['Путешественник'],
            hashtags: ['#первыйВыход']
        },
        {
            id: '4',
            description: 'Вот и кончилось тепло, добро пожаловать дожди',
            createdAt: new Date('2017-01-10T13:44:00'),
            author: 'Тлен',
            photoLink: 'UI/images/010.jpg',
            likes: ['Астроном'],
            hashtags: ['#осень']
        },
        {
            id: '5',
            description: 'Самый лучший подарок на 18-летие',
            createdAt: new Date('2018-12-12T10:43:10'),
            author: 'Мечтательница',
            photoLink: 'UI/images/011.jpg',
            likes: ['Мария Антуанэтта', 'Астроном'],
            hashtags: ['#подарок']
        },
        {
            id: '6',
            description: 'Решил вспомнить прошлое ',
            createdAt: new Date('2015-03-17T02:10:05'),
            author: 'Путешественник',
            photoLink: 'UI/images/004.jpg',
            likes: ['Астроном', 'Дзен'],
            hashtags: ['#прошлое']
        },
        {
            id: '7',
            description: 'Все фазы лунного цикла, выглядит замечательно',
            createdAt: new Date('2018-01-12T24:00:00'),
            author: 'Астроном',
            photoLink: 'UI/images/025.jpg',
            likes: ['Северный мишка'],
            hashtags: ['#впечатления']
        },
        {
            id: '8',
            description: 'Решила вспомнить детство',
            createdAt: new Date('2018-07-04T16:07:15'),
            author: 'Мария Антуанэтта',
            photoLink: 'UI/images/023.jpg',
            likes: ['Мария Антуанэтта', 'Астроном'],
            hashtags: ['#детскийВострог']
        },
        {
            id: '9',
            description: 'Решила все бросить и попутешествовать',
            createdAt: new Date('2010-09-19T16:00:03'),
            author: 'Дзен',
            photoLink: 'UI/images/021.jpg',
            likes: ['Мария Антуанэтта', 'Астроном'],
            hashtags: ['#путешествие']
        },
        {
            id: '10',
            description: 'Море впечатлений',
            createdAt: new Date('2010-09-18T16:01:56'),
            author: 'Дзен',
            photoLink: 'UI/images/020.jpg',
            likes: ['Мария Антуанэтта'],
            hashtags: ['#путешествие']
        }
    ];
    window.localStorage.setItem('id', 10);
    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
}
var photoPosts = [];

window.funcModule = (function () {
    return {
        getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
            if (typeof skip !== 'number' || typeof top !== 'number') {
                console.log("typeError in getPhotoPosts");
                return;
            }
            photoPosts = JSON.parse(window.localStorage.posts, function (key, value) {
                if (key === 'createdAt') return new Date(value);
                return value;
            });
            if (filterConfig === undefined) {
                if (photoPosts.slice(skip + top).length === 0) {
                    document.querySelector('.load-more-button').style.display = 'none';
                }
                return photoPosts.slice(skip, skip + top);
            } else {
                if (typeof filterConfig !== 'object') {
                    console.log('typeError in getPhotoPosts');
                    return;
                }
                let photoFilterResult = photoPosts;
                if (filterConfig.authors) {
                    photoFilterResult = photoFilterResult.filter(elem => filterConfig.authors.includes(elem.author));
                }
                if (filterConfig.createdAt) {
                    photoFilterResult = photoFilterResult.filter(elem =>
                        elem.createdAt.getFullYear() === filterConfig.createdAt.getFullYear() &&
                        elem.createdAt.getMonth() === filterConfig.createdAt.getMonth() &&
                        elem.createdAt.getDate() === filterConfig.createdAt.getDate());
                }
                if (filterConfig.hashtags) {
                    photoFilterResult = photoFilterResult.filter(elem => {
                        return filterConfig.hashtags.every((tag) => {
                            return elem.hashtags.includes(tag);
                        });
                    });
                }
                if (photoFilterResult.slice(skip, skip + top).length <= 8 && photoFilterResult.slice(skip + top).length === 0) {
                    document.querySelector('.load-more-button').style.display = 'none';
                }
                return photoFilterResult.slice(skip, skip + top);
            }
        },
        getPhotoPost: function (id) {
            return photoPosts.find(elem => elem.id === id);
        },
        validatePhotoPost: function (photoPost) {
            if (typeof photoPost.description !== 'string' || photoPost.description.length > 200 || photoPost.description.length === 0) return false;
            if (typeof photoPost.author !== 'string' || photoPost.author.length === 0) return false;
            if (typeof photoPost.id !== 'string' || photoPost.id.length === 0) return false;
            if (!(photoPost.hashtags instanceof Array)) return false;
            if (!(photoPost.likes instanceof Array)) return false;
            if (!(photoPost.createdAt instanceof Date)) return false;
            if (typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0) return false;
            return true;
        },
        addPhotoPost: function (photoPost) {
            if (this.validatePhotoPost(photoPost) && photoPosts.findIndex(elem => elem.id === photoPost.id) === -1) {
                photoPosts = JSON.parse(window.localStorage.posts, function (key, value) {
                    if (key === 'createdAt') return new Date(value);
                    return value;
                });
                photoPosts.push(photoPost);
                photoPosts.sort((elem1, elem2) => elem2.createdAt - elem1.createdAt);
                localStorage.setItem('posts', JSON.stringify(photoPosts));
                return true;
            }
            else {
                console.log("Is not valid photoPost");
                return false;
            }
        },
        validateEditedPost: function (post) {
            if (post.description.length === 0 || post.description.length > 200 || typeof post.description !== 'string') return false;
            if (typeof post.photoLink !== 'string' || post.photoLink.length === 0) return false;
            if (post.author)
                if (typeof post.author !== 'string' || post.author.length === 0) return false;
            if (post.hashtags)
                if (!(post.hashtags instanceof Array)) return false;
            if (post.likes)
                if (!(post.likes instanceof Array)) return false;
            if (post.createdAt)
                if (!(post.createdAt instanceof Date)) return false;
            if (post.id)
                if (typeof post.id !== 'string' || post.id.length === 0) return false;
            return true;
        },
        editPhotoPost: function (id, photoPost) {
            if (this.validateEditedPost(photoPost)) {
                let index = photoPosts.findIndex(elem => elem.id === id);
                if (index !== -1) {
                    photoPosts = JSON.parse(window.localStorage.posts, function (key, value) {
                        if (key === 'createdAt') return new Date(value);
                        return value;
                    });
                    if (photoPost.description) { photoPosts[index].description = photoPost.description; }
                    if (photoPost.hashtags) { photoPosts[index].hashtags = photoPost.hashtags; }
                    if (photoPost.photoLink) { photoPosts[index].photoLink = photoPost.photoLink; }
                    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
                    return true;
                }
            }
            return false;
        },
        removePhotoPost: function (id) {
            let index = photoPosts.findIndex(elem => elem.id === id);
            if (index !== -1) {
                photoPosts = JSON.parse(window.localStorage.posts, function (key, value) {
                    if (key === 'createdAt') return new Date(value);
                    return value;
                });
                photoPosts.splice(index, 1);
                window.localStorage.setItem('posts', JSON.stringify(photoPosts));
                return true;
            } else return false;
        }
    }
})();