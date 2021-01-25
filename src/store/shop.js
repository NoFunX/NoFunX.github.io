export default {
    state: {
        products: [
            {
                id: 1,
                guitar: 'Fender Stratocaster',
                desc: 'Гитары Fender Stratocaster - это целая веха в рок-музыке. На разработанной Лео Фендером в далеком 1954 году гитаре выросло уже несколько поколений рок-звезд. Стратокастер стал фирменным символом многих виртуозов - Джимми Хендрикса, Ингви Мальмстина, Эрика Клэптона, Дэвида Гилмора... Сегодня модели, произведенные в 50-х, разлетаются с аукционов за сотни тысяч долларов. А Gold Leaf Stratocaster с золотым покрытием, сделанная для Эрика Клэптона в честь 50-летия компании Фендер, и вовсе стала одной из самых дорогих гитар в мире - ее купили на аукционе за $455 550',
                price: '149 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/a1.jpg'),
                gallery: [
                    {title: 'first strat', img: require('D:/женя/учеба/guitar-shop/src/assets/img/a1.jpg')},
                    {title: 'second strat', img: require('D:/женя/учеба/guitar-shop/src/assets/img/a2.jpg')},
                    {title: 'third strat', img: require('D:/женя/учеба/guitar-shop/src/assets/img/a3.jpg')},
                ],
                stars: "Джимми Хендрикс, Ингви Мальмстин, Эрика Клэптон"
            },

            {   
                id: 2,
                guitar: 'Fender Telecaster',
                desc: 'Вот она - легенда рок-н-ролла, гитара, воспитавшая целые поколения рок-звезд, инструмент, стоявший у истоков самого понятия "электрогитара"! Стоит ли писать хвалебные оды инструменту, на котором играло столько знаменитостей, что на Википедии есть специальная статья с их списком? Это электрогитара со сплошным корпусом и двумя звукоснимателями, изготовленная компанией Fender. Её простая, но эффективная конструкция и революционное звучание задали новые направления в изготовлении электрогитар и популярной музыке. Представленная для распространения как Broadcaster осенью 1949 г., это была первая гитара подобного рода, производившаяся в значительных масштабах. Начало её коммерческого производства может быть отнесено к весне 1950 г., когда модели Fender Esquire появились в продаже. С тех самых пор и по настоящее время не прекращается производство Telecaster в той или иной форме, что делает её одной из основных в мире электрогитар со сплошным корпусом.',
                price: '142 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/b1.jpg'),
                gallery: [
                    {title: 'first telec', img: require('D:/женя/учеба/guitar-shop/src/assets/img/b1.jpg')},
                    {title: 'second telec', img: require('D:/женя/учеба/guitar-shop/src/assets/img/b2.jpg')},
                    {title: 'third telec', img: require('D:/женя/учеба/guitar-shop/src/assets/img/b3.jpg')},
                ],
                                
                stars: "Кит Ричардс, Дж.Харрисон"
            },

            {   
                id: 3,
                guitar: 'Fender Mustang',
                desc: 'Fender Mustang — модель электрогитары, производство которой началось в 1964 году. Данный инструмент представлял собой доработанные версии «студенческих» моделей Musicmaster и Duo-Sonic, выпускаемых компанией Fender в 1956 году. Выпускалась до 1982 года. С 1990 года выпускается вновь. В 1960-е гг. Fender Mustang был востребован в сёрф-роке, а с начала 1990-х гг. — в альтернативной музыке. Ранние модели Mustang считаются редкими коллекционными экземплярами. Mustang комплектуется двумя синглами и специально разработанным механизмом тремоло со съемной ручкой',
                price: '100 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/c1.jpg'),
                gallery: [
                    {title: 'first mustang', img: require('D:/женя/учеба/guitar-shop/src/assets/img/c1.jpg')},
                    {title: 'second mustang', img: require('D:/женя/учеба/guitar-shop/src/assets/img/c2.jpg')},
                    {title: 'third mustang', img: require('D:/женя/учеба/guitar-shop/src/assets/img/c3.jpg')},
                ],
                stars: 'Курт Кобейн'
            },

            {   
                id: 4,
                guitar: 'Fender Jazzmaster',
                desc: 'Fender Jazzmaster — одна из самых интересных гитар Fender. Конечно, она не так популярна, как stratocaster и telecaster, но в определённых музыкальных кругах звучание Fender Jazzmaster является эталоном крутого гитарного звука. Это модель электрогитары, разработанная в 1958 году и выпускаемая до сих пор. Одна из особенностей данного инструмента заключается в возможности работы в 2-х режимах — «lead» и «rhythm»',
                price: '122 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/d1.jpg'),
                gallery: [
                    {title: 'first jazz', img: require('D:/женя/учеба/guitar-shop/src/assets/img/d1.jpg')},
                    {title: 'second jazz', img: require('D:/женя/учеба/guitar-shop/src/assets/img/d2.jpg')},
                    {title: 'third jazz', img: require('D:/женя/учеба/guitar-shop/src/assets/img/d3.jpg')},
                ],
                stars: 'Тёрстон Мур, Ли Ранальдо'
            },

            {   
                id: 5,
                guitar: 'Fender Jaguar',
                desc: 'Модель электрогитары, разработанная в 1962 году на основе Fender Jazzmaster и выпускаемая до сих пор. Основные изменения коснулись звукоснимателей и длины мензуры, на накладке появились металлические части. Jaguar, наравне с Jazzmaster, Stratocaster и гитарами Mosrite',
                price: '140 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/e1.jpg'),
                gallery: [
                    {title: 'first jaguar', img: require('D:/женя/учеба/guitar-shop/src/assets/img/e1.jpg')},
                    {title: 'second jaguar', img: require('D:/женя/учеба/guitar-shop/src/assets/img/e2.jpg')},
                    {title: 'third jaguar', img: require('D:/женя/учеба/guitar-shop/src/assets/img/e3.jpg')},
                ],
                stars: 'Джон Фрушанте, Том Верлен, Джонни Марр'
            },

            {
                id: 6,
                guitar: 'Gibson Les Paul',
                desc: ' Это первая электрогитара с цельным корпусом от компании Gibson, один из символов рок-музыки и одна из самых долгоживущих и популярных моделей музыкальных инструментов в мире. Модель была разработана в начале 1950 года Тедом Маккарти совместно с гитаристом Лесом Полом. Это серьезный профессиональный инструмент, на котором играла целая плеяда рок-звезд. ',
                price: '170 000 руб',
                img: require('D:/женя/учеба/guitar-shop/src/assets/img/f1.png'),
                gallery: [
                    {title: 'first gibson', img: require('D:/женя/учеба/guitar-shop/src/assets/img/f1.png')},
                    {title: 'second gibson', img: require('D:/женя/учеба/guitar-shop/src/assets/img/f3.png')},
                ],
                stars: 'Джимми Пейдж, Боб Марли, Эрик Клэптон'
            },




        ]

        
    },
    mutation: {},
    action: {},
    getters: {
        getProducts: state=>{
            return state.products
        },

        getProductsById: (state)=>(id)=>{
            return state.products.find(product=>product.id == id)
        }
    }
}