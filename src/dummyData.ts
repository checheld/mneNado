export const executors = [
	{
		id: '1',
		name: 'Гильермо Бильермо',
		rating: 4.3,
		photo: 'https://bit.ly/code-beast',
		about: `Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Языкового, рекламных своих предупредила он речью жаренные если жизни большого дал там грустный коварных что. Языкового использовало грустный несколько за?
			Безорфографичный букв которое журчит текстами рекламных сбить, одна там рот речью, заманивший семантика? Знаках снова страна, грустный, пор буквенных ты гор всемогущая свой они, рукописи взобравшись парадигматическая свою проектах решила?
			Страна агентство последний вдали всеми, семь предложения от всех предупреждал рукопись океана несколько точках даль ipsum, свое, то заголовок. Своего путь жаренные своих? Буквенных они заглавных коварный большой сбить. Свое, своего?
			Они ты необходимыми агентство пояс злых, там переписали. Дал журчит дорогу ipsum продолжил собрал, рекламных назад ручеек правилами строчка прямо агентство выйти. Оксмокс пунктуация океана одна, текстами раз безорфографичный заглавных.
			Все, первую семантика! Всемогущая напоивший рыбными всеми он последний подзаголовок злых дал, текстов журчит. Раз гор рыбными от всех языком, вопроса свою дороге большой наш, свое продолжил ручеек океана залетают имеет.
			Которое повстречался злых что, коварный власти скатился послушавшись если? Использовало родного, путь рукописи текста запятой обеспечивает, диких своего вскоре ведущими над раз запятых. Ipsum свое текстами своего безорфографичный большой свою?
			Снова, маленький подпоясал дороге курсивных оксмокс о встретил! Переписывается пояс большой, диких оксмокс букв на берегу, текстами там назад маленький парадигматическая щеке переписали. Рукопись рот грамматики предупредила бросил продолжил на берегу выйти.
			Маленькая скатился меня заглавных рот деревни коварных ее инициал не океана ты, заголовок назад они своего предупреждал раз. Жизни большого что маленькая подпоясал всеми, собрал свою языкового правилами языком свое.
			Семь, грамматики его ручеек своего дорогу переписывается первую маленькая имеет несколько составитель ее пунктуация не возвращайся заглавных коварный единственное текстами последний залетают страну обеспечивает необходимыми текстов однажды парадигматическая курсивных. Которой?
			Рукопись о он которое последний алфавит города языкового ему ручеек использовало lorem встретил она строчка единственное злых власти гор, грамматики но по всей заголовок за родного путь. То повстречался семантика языкового.`,
		taskCategories: ['Написание текстов', 'Ретушь', 'Курьерские услуги'],
		pricelist: [
			{ service: 'Написание текста', price: '500руб.' },
			{ service: 'Глубокая ретушь 1 фото', price: '500руб.' },
		],
	},
	{
		id: '2',
		rating: 4.5,
		name: 'Анна Анна',
		photo: undefined,
		about:
			'Грустный, домах речью! Послушавшись парадигматическая единственное, имеет если предупреждал образ всеми рот алфавит по всей предупредила от всех. Лучше, дороге курсивных имени великий это дорогу? То приставка снова но переписывается жизни страна.',
		taskCategories: ['Письменный перевод', 'Услуги няни'],
		pricelist: [
			{ service: 'Написание текста', price: '500руб.' },
			{ service: 'Выгул чупакабры', price: '1500руб.' },
		],
	},
	{
		id: '3',
		name: 'Некто',
		photo: undefined,
		about:
			'Даль о страна, на берегу толку обеспечивает которой, пояс использовало великий имени большой путь реторический? Это пояс злых заманивший, но грустный меня, семантика запятых обеспечивает приставка даль деревни, всемогущая рот ему.',
		taskCategories: ['Письменный перевод', 'Услуги няни'],
		pricelist: [
			{ service: 'Написание текста', price: '500руб.' },
			{ service: 'Глубокая ретушь 1 фото', price: '500руб.' },
		],
	},
];

export const categories = [
	{ category_id: 1, name: 'Курьерские услуги' },
	{ category_id: 2, name: 'Ремонт и строительство' },
	{ category_id: 3, name: 'Грузоперевозки' },
	{ category_id: 4, name: 'Уборка и помощь по хозяйству' },
	{ category_id: 5, name: 'Красота и здоровье' },
	{ category_id: 6, name: 'Ремонт цифровой техники' },
	{ category_id: 7, name: 'Юридическая и бухгалтерская помощь' },
	{ category_id: 8, name: 'Репетиторы и обучение' },
	{ category_id: 9, name: 'Ремонт транспорта' },
	{ category_id: 10, name: 'Фото и видео' },
	{ category_id: 11, name: 'Установка и ремонт техники' },
];

export const subcategories = [
	{ sub_category_id: 1, name: 'Купить и доставить', category: 1 },
	{ sub_category_id: 2, name: 'Срочная доставка', category: 1 },
	{ sub_category_id: 3, name: 'Доставка продуктов', category: 1 },
	{ sub_category_id: 4, name: 'Доставка еды из ресторанов', category: 1 },
	{ sub_category_id: 5, name: 'Другая посылка', category: 1 },
	{ sub_category_id: 6, name: 'Мастер на час', category: 2 },
	{ sub_category_id: 7, name: 'Ремонт под ключ', category: 2 },
	{ sub_category_id: 8, name: 'Сантехнические работы', category: 2 },
	{ sub_category_id: 9, name: 'Электромонтажные работы', category: 2 },
	{ sub_category_id: 10, name: 'Отделочные работы', category: 2 },
	{ sub_category_id: 11, name: 'Перевозка вещей, переезды', category: 3 },
	{ sub_category_id: 12, name: 'Пассажирские перевозки', category: 3 },
	{ sub_category_id: 13, name: 'Вывоз мусора', category: 3 },
	{ sub_category_id: 14, name: 'Эвакуаторы', category: 3 },
	{ sub_category_id: 15, name: 'Междугородные перевозки', category: 3 },
	{ sub_category_id: 16, name: 'Генеральная уборка', category: 4 },
	{ sub_category_id: 17, name: 'Поддерживающая уборка', category: 4 },
	{ sub_category_id: 18, name: 'Приготовление еды', category: 4 },
	{
		sub_category_id: 19,
		name: 'Работы в саду, огороде, на участке',
		category: 4,
	},
	{ sub_category_id: 20, name: 'Уход за животными', category: 4 },
	{ sub_category_id: 21, name: 'Сиделки', category: 4 },
	{ sub_category_id: 22, name: 'Няни', category: 4 },
	{ sub_category_id: 23, name: 'Что-то другое', category: 4 },
	{ sub_category_id: 24, name: 'Ремонт компьютеров и ноутбуков', category: 6 },
	{ sub_category_id: 25, name: 'Ремонт и замена комплектующих', category: 6 },
	{
		sub_category_id: 3,
		name: 'Установка операц.систем и программ',
		category: 6,
	},
	{ sub_category_id: 26, name: 'Фотосъемка', category: 10 },
	{ sub_category_id: 27, name: 'Видеосъемка', category: 10 },
	{ sub_category_id: 28, name: 'Обработка фотографий', category: 10 },
	{ sub_category_id: 29, name: 'Оцифровка', category: 10 },
	{ sub_category_id: 30, name: 'Создание видео под ключ', category: 10 },
	{ sub_category_id: 31, name: 'Холодильники', category: 11 },
	{ sub_category_id: 32, name: 'Стиральные машины', category: 11 },
	{ sub_category_id: 33, name: 'Электрические плиты и панели', category: 11 },
	{ sub_category_id: 34, name: 'Газовые плиты', category: 11 },
	{ sub_category_id: 35, name: 'Климатическая техника', category: 11 },
	{ sub_category_id: 36, name: 'Водонагреватели', category: 11 },
	{ sub_category_id: 37, name: 'Массаж', category: 5 },
	{ sub_category_id: 38, name: 'Ногтевой сервис', category: 5 },
	{ sub_category_id: 39, name: 'Парикмахерские услуги', category: 5 },
	{ sub_category_id: 40, name: 'Услуги визажиста', category: 5 },
	{ sub_category_id: 41, name: 'Брови и ресницы', category: 5 },
	{ sub_category_id: 42, name: 'Бухгалтерские услуги', category: 7 },
	{ sub_category_id: 43, name: 'Нотариальные услуги', category: 7 },
	{ sub_category_id: 44, name: 'Услуги адвоката', category: 7 },
	{ sub_category_id: 45, name: 'Услуги юриста', category: 7 },
	{ sub_category_id: 46, name: 'Иностранные языки', category: 8 },
	{ sub_category_id: 47, name: 'Математика и физика', category: 8 },
	{ sub_category_id: 48, name: 'История и обществознание', category: 8 },
	{ sub_category_id: 49, name: 'Русский язык и литература', category: 8 },
	{ sub_category_id: 50, name: 'Автоинструкторы', category: 8 },
	{ sub_category_id: 51, name: 'Шиномонтаж', category: 9 },
	{ sub_category_id: 52, name: 'Автоэлектрика', category: 9 },
	{
		sub_category_id: 53,
		name: 'Техническое обслуживание автомобиля',
		category: 9,
	},
	{
		sub_category_id: 54,
		name: 'Обслуживание системы кондиционирования',
		category: 9,
	},
	{ sub_category_id: 55, name: 'Кузовной ремонт', category: 9 },
];

export const budgets = [
	{
		value: 0,
		label: 'до 500 ₽',
	},
	{
		value: 20,
		label: 'до 1000 ₽',
	},
	{
		value: 30,
		label: 'до 1500 ₽',
	},
	{
		value: 40,
		label: 'до 2000 ₽',
	},
	{
		value: 100,
		label: 'более 2000 ₽',
	},
];
