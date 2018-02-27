var photoPosts = [
    {
        id: '1',
        descriprion: 'Теперь я узнал КАК может быть по настоящему холодно',
        createdAt: new Date('2018-01-01T15:00:00'),
        author: 'Северный мишка',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/tn.jpg',
        likes: ['Отпускная', 'Тлен'],
        hashtags: ['#холод']
    },
    {
        id: '2',
        descriprion: 'Все мерзнут в холодном Минске, а мы на море',
        createdAt: new Date('2018-01-12T12:31:55'),
        author: 'Отпускная',
        photoLink: 'hhttps://fishki.net/picsw/092011/20/bonus/foto/002.jpg',
        likes: ['Северный мишка'],
        hashtags: ['#вОтпуске']
    },
    {
        id: '3',
        descriprion: 'Первая прогулочка с новым другом',
        createdAt: new Date('2018-07-02T13:41:32'),
        author: 'Милашка',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/003.jpg',
        likes: ['Путешественник'],
        hashtags: ['#первыйВыход']
    },
    {
        id: '4',
        descriprion: 'Вот и кончилось тепло, добро пожаловать дожди',
        createdAt: new Date('2017-01-10T13:44:00'),
        author: 'Тлен',
        photoLink: 'https://www.stihi.ru/pics/2009/04/20/801.jpg',
        likes: ['Астроном'],
        hashtags: ['#осень']
    },
    {
        id: '5',
        descriprion: 'Самый лучший подарок на 18-летие',
        createdAt: new Date('2018-12-12T10:43:10'),
        author: 'Мечтательница',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/011.jpg',
        likes: ['Мария Антуанэтта', 'Астроном'],
        hashtags: ['#подарок']
    },
    {
        id: '6',
        descriprion: 'Решил вспомнить прошлое ',
        createdAt: new Date('2015-03-17T02:10:05'),
        author: 'Путешественник',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/004.jpg',
        likes: ['Астроном', 'Дзен'],
        hashtags: ['#прошлое']
    },
    {
        id: '7',
        descriprion: 'Все фазы лунного цикла, выглядит замечательно',
        createdAt: new Date('2018-01-12T24:00:00'),
        author: 'Астроном',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/025.jpg',
        likes: ['Северный мишка'],
        hashtags: ['#впечатления']
    },
    {
        id: '8',
        descriprion: 'Решила вспомнить детство',
        createdAt: new Date('2018-07-04T16:07:15'),
        author: 'Мария Антуанэтта',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/023.jpg',
        likes: ['Мария Антуанэтта', 'Астроном'],
        hashtags: ['#детскийВострог']
    },
    {
        id: '9',
        descriprion: 'Решила все бросить и попутешествовать',
        createdAt: new Date('2010-09-19T16:00:03'),
        author: 'Дзен',
        photoLink: 'ttps://fishki.net/picsw/092011/20/bonus/foto/021.jpg',
        likes: ['Мария Антуанэтта', 'Астроном'],
        hashtags: ['#путешествие']
    },
    {
        id: '10',
        descriprion: 'Море впечатлений',
        createdAt: new Date('2010-09-18T16:01:56'),
        author: 'Дзен',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/020.jpg',
        likes: ['Мария Антуанэтта'],
        hashtags: ['#путешествие']
    },
    {
        id: '11',
        descriprion: 'Улыбнитесь))))',
        createdAt: new Date('2018-09-01T15:30:01'),
        author: 'Натуралист',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/059.jpg',
        likes: ['Белый волк'],
        hashtags: ['#первыйДень']
    },
    {
        id: '12',
        descriprion: 'Первое погружение и уже столько впечатлений',
        createdAt: new Date('2018-01-01T22:10:00'),
        author: 'Русалочка',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/053.jpg',
        likes: ['Белый волк', 'РОзовый единорог'],
        hashtags: ['#море']
    },
    {
        id: '13',
        descriprion: 'Осваиваем новые места',
        createdAt: new Date('2014-10-01T09:10:01'),
        author: 'Белый волк',
        photoLink: 'http://olpictures.ru/photocache/5e/5e9df095bda964ecb1dd385be03fb64e.jpg',
        likes: ['Русалочка'],
        hashtags: ['#осень']
    },
    {
        id: '14',
        descriprion: 'Какаое же это волшебное место...',
        createdAt: new Date('2017-07-21T17:47:00'),
        author: 'Розовый единорог',
        photoLink: 'https://traveller-eu.ru/sites/default/files/inline-images/2017-05-14%2005.23.13%201.jpg',
        likes: ['Белый волк', 'РОзовый единорог'],
        hashtags: ['#Париж']
    },
    {
        id: '15',
        descriprion: 'Ееееее.....Мы сделали это',
        createdAt: new Date('2016-08-01T17:59:00'),
        author: 'Первооткрыватель',
        photoLink: 'https://look.com.ua/pic/201503/1600x900/look.com.ua-117285.jpg',
        likes: ['Русалочка'],
        hashtags: ['#свобода']
    },
    {
        id: '16',
        descriprion: 'Вот и пришла волшебная, осенняя пора',
        createdAt: new Date('2018-10-01T15:00:00'),
        author: 'Лесная фея',
        photoLink: 'https://img.fonwall.ru/o/tz/alleya-doroga-listva-geltaya.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#мечты']
    },
    {
        id: '17',
        descriprion: 'Вечеринка прошла на славу',
        createdAt: new Date('2018-09-01T14:55:54'),
        author: 'Пряник',
        photoLink: 'http://www.ejin.ru/wp-content/uploads/2017/09/6-1255.jpg',
        likes: ['Белый волк'],
        hashtags: ['#веселье']
    },
    {
        id: '18',
        descriprion: 'Путешествуем по запутанным тропинкам городского парка',
        createdAt: new Date('2018-05-01T11:14:10'),
        author: 'Выпускница',
        photoLink: 'https://get.wallhere.com/photo/bridge-Sun-beams-light-morning-river-park-fairy-tale-679959.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#мост']
    },
    {
        id: '19',
        descriprion: 'Отличный подарок на 8 марта от любимых',
        createdAt: new Date('2018-03-08T09:00:00'),
        author: 'Счастливая',
        photoLink: 'http://www.zwalls.ru/pic/201309/1280x1024/zwalls.ru-8511.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#вкуснятина']
    },
    {
        id: '20',
        descriprion: 'Час уговоров и вот результат',
        createdAt: new Date('2018-06-01T15:01:56'),
        author: 'Фотограф',
        photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg',
        likes: ['Розовый единорог'],
        hashtags: ['#котяра']
    }
];

let photoPost1 = {
    id: '21',
    description: 'Как красиво!',
    createdAt: new Date('2018-03-02T21:00:00'),
    author: 'Снежный барс',
    photoLink: 'https://storge.pic2.me/c/1360x800/547/57cc656e4798d.jpg',
    likes: ['Фотограф', 'Выпускница'],
    hashtags: ['#природа']
};
let photoPost2 = {
    id: '5',
    descriprion: 'Самый лучший подарок на 18-летие',
    createdAt: new Date('2018-12-12T10:43:10'),
    author: 'Мечтательница',
    photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/011.jpg',
    likes: ['MarkL', 'Bobby'],
    hashtags: ['#подарок']
};
let photoPost3 = {
    id: '17',
    createdAt: new Date('2018-09-01T14:55:54'),
    author: 'Пряник',
    photoLink: 'http://www.ejin.ru/wp-content/uploads/2017/09/6-1255.jpg',
    hashtags: ['#веселье']
};

let editPhoto1 = {
    description: 'Упс, ошибочка.'
};

let result = (function () {
    return {
        getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
            if (typeof skip !== 'number' || typeof top !== 'number') {
                console.log("typeError in getPhotoPosts");
                return;
            }
            if (filterConfig === undefined) {
                return photoPosts.slice(skip, skip + top);
            } else {
                if (typeof filterConfig !== 'object') {
                    console.log('typeError in getPhotoPosts');
                    return;
                }
                let photoFilterResult = photoPosts;
                if (filterConfig.author) {
                    photoFilterResult = photoFilterResult.filter(elem => elem.author === filterConfig.author);
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
                return photoFilterResult.slice(skip, skip + top);
            }



            return photoPosts;
        },
         compareDates: function(a,b) {
        return b.createdAt-a.createdAt;
         },
        getPhotoPost: function (id) {
            return photoPosts.find(elem => elem.id == id);
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
                photoPosts.push(photoPost);
                photoPosts.sort((elem1, elem2) => elem2.createdAt - elem1.createdAt);
                return true;

            }
        else {
                console.log("Is not valid photoPost");
                return false;
            }
        },
        validateEditedPost: function (post) {
            if (post.description)
                if (post.description.length === 0 || post.description.length > 200 || typeof post.description !== 'string') return false;
            if (post.author)
                if (typeof post.author !== 'string' || post.author.length === 0) return false;
            if (post.hashtags)
                if (!(post.hashtags instanceof Array)) return false;
            if (post.photoLink)
                if (typeof post.photoLink !== 'string' || post.photoLink.length === 0) return false;
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
                let index = photoPosts.findIndex(elem => elem.id == id);
                if (index !== -1) {
                    if (photoPost.description) photoPosts[index].description = photoPost.description;
                    if (photoPost.photoLink) photoPosts[index].photoLink = photoPost.photoLink;
                    if (photoPost.hashtags) photoPosts[index].hashtags = photoPost.hashtags;
                    return true;
                }
            }
            return false;
        },
        removePhotoPost: function (id) {
            let index = photoPosts.findIndex(elem => elem.id == id);
            if (index !== -1) {
                photoPosts.splice(index, 1);
                return true;
            } else return false;
        }



    }
})();

console.log('Все посты:');
console.log(result.getPhotoPosts(0, 20).sort(result.compareDates));
console.log("Фильтр по автору: {author: 'Дзен'}");
console.log(result.getPhotoPosts(0, 10, { author: 'Дзен' }));
console.log("Фильтр по автору и хэштегу: {author: 'Лесная фея',hashtags: ['#мечты']}");
console.log(result.getPhotoPosts(0, 10, { author: 'Лесная фея',hashtags: ['#мечты'] }));
console.log("Фильтр по всем параметрам: {author: 'Лесная фея', createdAt: new Date('2018-10-01T15:00:00'),hashtags: ['#мечты']}");
console.log(result.getPhotoPosts(0, 10, {author: 'Лесная фея', createdAt: new Date('2018-10-01T15:00:00'),hashtags: ['#мечты'] }));
console.log("Фильтр с неправильным вводом: '2018-02-24'");
console.log(result.getPhotoPosts(0, 10, '2018-02-24'));
console.log("Посты: skip = 12");
console.log(result.getPhotoPosts(12));

console.log("getPhotoPost(10)");
console.log(result.getPhotoPost(10));
console.log("getPhotoPost that does not exist: getPhotoPost(21)");
console.log(result.getPhotoPost(21));

console.log("isValid: {id: '20',escriprion: 'Час уговоров и вот результат', createdAt: new Date('2018-06-01T15:01:56'), author: 'Фотограф', photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg', likes: ['Розовый единорог'], hashtags: ['#котяра']}");
console.log(result.validatePhotoPost({id: '20',escriprion: 'Час уговоров и вот результат', createdAt: new Date('2018-06-01T15:01:56'), author: 'Фотограф', photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg', likes: ['Розовый единорог'], hashtags: ['#котяра'] }));
console.log("isValid: {id: '20',escriprion: 'Час уговоров и вот результат', createdAt: '2018-06-01T15:01:56', author: 'Фотограф', photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg', likes: ['Розовый единорог'], hashtags: ['#котяра']}");
console.log(result.validatePhotoPost({id: '20',escriprion: 'Час уговоров и вот результат', createdAt: '2018-06-01T15:01:56', author: 'Фотограф', photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg', likes: ['Розовый единорог'], hashtags: ['#котяра']}));
console.log("isValid: ...hastags:'модник'");
console.log(result.validatePhotoPost({id: '20',escriprion: 'Час уговоров и вот результат', createdAt: '2018-06-01T15:01:56', author: 'Фотограф', photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg', likes: ['Розовый единорог'], hashtags: 'модник'}));

console.log("add valid photoPost: photoPost1");
console.log(result.addPhotoPost(photoPost1));
console.log("add not valid photoPost: photoPost2 -- id already exists");
console.log(result.addPhotoPost(photoPost2));
console.log("add not valid photoPost: photoPost3 -- not all fields");
console.log(result.addPhotoPost(photoPost3));
console.log("Posts after that:");
console.log(result.getPhotoPosts(0, 15));

console.log("edit valid: 10, {description: 'hey it is changed',hashtags: ['tag1', 'tag2']}");
console.log(result.editPhotoPost(10, { description: 'hey it is changed', hashtags: ['tag1', 'tag2'] }));
console.log("edit not valid: editPhoto1 -- description>200");
console.log(result.editPhotoPost(3, editPhoto1));
console.log("edit not valid: {photoLink: 13}");
console.log(result.editPhotoPost(5, { photoLink: 13 }));
console.log("edit valid: 2, {createdAt: new Date('2018-02-28T21:00:00'),author: 'YanPark'}");
console.log(result.editPhotoPost(2, { createdAt: new Date('2018-02-28T21:00:00'), author: 'YanPark' }));
console.log("Posts after that:");
console.log(result.getPhotoPosts(0, 15));

console.log("remove -- id=5");
console.log(result.removePhotoPost(5));
console.log("remove -- id=1");
console.log(result.removePhotoPost(1));
console.log("remove -- id=23 -- does not exist");
console.log(result.removePhotoPost(23));
console.log("Posts after that:");
console.log(result.getPhotoPosts(0, 18));