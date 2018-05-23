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
    },
    {
        id: '11',
        description: 'Улыбнитесь))))',
        createdAt: new Date('2018-09-01T15:30:01'),
        author: 'Натуралист',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/059.jpg',
        likes: ['Белый волк'],
        hashtags: ['#первыйДень']
    },
    {
        id: '12',
        description: 'Первое погружение и уже столько впечатлений',
        createdAt: new Date('2018-01-01T22:10:00'),
        author: 'Русалочка',
        photoLink: 'https://fishki.net/picsw/092011/20/bonus/foto/053.jpg',
        likes: ['Белый волк', 'РОзовый единорог'],
        hashtags: ['#море']
    },
    {
        id: '13',
        description: 'Осваиваем новые места',
        createdAt: new Date('2014-10-01T09:10:01'),
        author: 'Белый волк',
        photoLink: 'http://olpictures.ru/photocache/5e/5e9df095bda964ecb1dd385be03fb64e.jpg',
        likes: ['Русалочка'],
        hashtags: ['#осень']
    },
    {
        id: '14',
        description: 'Какаое же это волшебное место...',
        createdAt: new Date('2017-07-21T17:47:00'),
        author: 'Розовый единорог',
        photoLink: 'https://traveller-eu.ru/sites/default/files/inline-images/2017-05-14%2005.23.13%201.jpg',
        likes: ['Белый волк', 'РОзовый единорог'],
        hashtags: ['#Париж']
    },
    {
        id: '15',
        description: 'Ееееее.....Мы сделали это',
        createdAt: new Date('2016-08-01T17:59:00'),
        author: 'Первооткрыватель',
        photoLink: 'https://look.com.ua/pic/201503/1600x900/look.com.ua-117285.jpg',
        likes: ['Русалочка'],
        hashtags: ['#свобода']
    },
    {
        id: '16',
        description: 'Вот и пришла волшебная, осенняя пора',
        createdAt: new Date('2018-10-01T15:00:00'),
        author: 'Лесная фея',
        photoLink: 'https://img.fonwall.ru/o/tz/alleya-doroga-listva-geltaya.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#мечты']
    },
    {
        id: '17',
        description: 'Вечеринка прошла на славу',
        createdAt: new Date('2018-09-01T14:55:54'),
        author: 'Пряник',
        photoLink: 'http://www.ejin.ru/wp-content/uploads/2017/09/6-1255.jpg',
        likes: ['Белый волк'],
        hashtags: ['#веселье']
    },
    {
        id: '18',
        description: 'Путешествуем по запутанным тропинкам городского парка',
        createdAt: new Date('2018-05-01T11:14:10'),
        author: 'Выпускница',
        photoLink: 'https://get.wallhere.com/photo/bridge-Sun-beams-light-morning-river-park-fairy-tale-679959.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#мост']
    },
    {
        id: '19',
        description: 'Отличный подарок на 8 марта от любимых',
        createdAt: new Date('2018-03-08T09:00:00'),
        author: 'Счастливая',
        photoLink: 'http://www.zwalls.ru/pic/201309/1280x1024/zwalls.ru-8511.jpg',
        likes: ['Белый волк', 'Розовый единорог'],
        hashtags: ['#вкуснятина']
    },
    {
        id: '20',
        description: 'Час уговоров и вот результат',
        createdAt: new Date('2018-06-01T15:01:56'),
        author: 'Фотограф',
        photoLink: 'http://dreempics.com/img/picture/Apr/14/d91f44db9d23bf44227a0179142f9359/4.jpg',
        likes: ['Розовый единорог'],
        hashtags: ['#котяра']
    }
];
window.funcModule = (function () {
    return {
        getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
            let result;
            if (typeof skip !== 'number' || typeof top !== 'number') {
                console.log("Error in getPhotoPosts");
                return;
            }
            if (filterConfig === undefined || arguments.length < 3 || filterConfig === {}) {
                return photoPosts.slice(skip, skip + top);
            }
            else {
                if (typeof filterConfig !== 'object') {
                    console.log('Error in getPhotoPosts');
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
            return photoPosts.sort((elem1, elem2) => elem2.createdAt - elem1.createdAt);
        },
        getPhotoPost: function (id) {
            return photoPosts.find(elem => elem.id === id);
        },
        validatePhotoPost: function (photoPost) {
            if (typeof photoPost.description !== 'string' || photoPost.description.length > 200 || photoPost.description.length === 0)
                return false;
            if (typeof photoPost.author !== 'string' || photoPost.author.length === 0)
                return false;
            if (typeof photoPost.id !== 'string' || photoPost.id.length === 0)
                return false;
            if (!(photoPost.hashtags instanceof Array))
                return false;
            if (!(photoPost.likes instanceof Array))
                return false;
            if (!(photoPost.createdAt instanceof Date))
                return false;
            if (typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0)
                return false;
            return true;
        },
        addPhotoPost: function (photoPost) {
            if (this.validatePhotoPost(photoPost) && photoPosts.findIndex(elem => elem.id === photoPost.id) === -1) {
                photoPosts.push(photoPost);
                photoPosts.sort((elem1, elem2) => elem2.createdAt - elem1.createdAt);
                return true;

            }
            else {
                console.log("Not valid");
                return false;
            }
        },
        validateEditedPost: function (post) {
            if (post.descriprion)
                if (post.description.length === 0 || post.description.length > 200 || typeof post.description !== 'string')
                    return false;
            if (post.author)
                if (typeof post.author !== 'string' || post.author.length === 0)
                    return false;
            if (post.hashtags)
                if (!(post.hashtags instanceof Array))
                    return false;
            if (post.photoLink)
                if (typeof post.photoLink !== 'string' || post.photoLink.length === 0)
                    return false;
            if (post.likes)
                if (!(post.likes instanceof Array))
                    return false;
            if (post.createdAt)
                if (!(post.createdAt instanceof Date))
                    return false;
            if (post.id)
                if (typeof post.id !== 'string' || post.id.length === 0)
                    return false;
            return true;
        },
        editPhotoPost: function (id, photoPost) {
            if (this.validateEditedPost(photoPost)) {
                let index = photoPosts.findIndex(elem => elem.id === id);
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
            let index = photoPosts.findIndex(elem => elem.id === id);
            if (index !== -1) {
                photoPosts.splice(index, 1);
                return true;
            } else return false;
        }


    }
})();