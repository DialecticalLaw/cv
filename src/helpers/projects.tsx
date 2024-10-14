export interface ProjectInfo {
  title: string;
  shortDesc: string;
  fullDesc: string;
  labels: string[];
  deployLink: string;
  serverLink: string;
  videoLink: string | null;
  imageLink: string;
}

export const projects: ProjectInfo[] = [
  {
    title: 'Library',
    shortDesc: 'Лендинг библиотеки',
    fullDesc:
      'Лэндинг для подбора и продажи книг, приглашающий пользователей погрузиться в мир литературы. Дизайн, вдохновленный уютом библиотеки, создает атмосферу, способствующую чтению, а интерактивные элементы делают процесс поиска и покупки увлекательным.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/library/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/5ksoqtu4fso3mlinpg3xv/library.mp4?rlkey=akj6coy2n5lxs9sqn0a85xp6k&st=01tzh0vv&dl=0&raw=1',
    imageLink: '/pictures/library.jpg',
  },
  {
    title: 'Image Gallery',
    shortDesc: 'Поиск изображений через API',
    fullDesc:
      'Приложение, позволяющее исследовать богатый мир бесплатных фотографий. Используя Unsplash API, приложение динамически загружает и отображает изображения по выбранной тематике, превращая поиск в увлекательный процесс.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/image-galery/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/jmz8n4p08obuizu504uqa/image_gallery.mp4?rlkey=yr19hco87b8f7unwp1xu5n69g&st=34bgeeps&dl=0&raw=1',
    imageLink: '/pictures/image_gallery.jpg',
  },
  {
    title: 'Audio player',
    shortDesc: 'Музыкальный плеер',
    fullDesc:
      'Аудиоплеер, предлагающий насладиться прослушиванием музыки с приятным интерфейсом. Каждому треку соответствует уникальное фоновое изображение, создающее атмосферу. Можно легко управлять воспроизведением и переключаться между треками одним нажатием кнопки, что делает процесс наслаждения музыкой комфортным и ненавязчивым.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/audio-player/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/txpwmyx07jyutuxymbj6u/audio_player.mp4?rlkey=o2jopic3827jtkpbsgtftjohb&st=dwwlzx6d&dl=0&raw=1',
    imageLink: '/pictures/audio_player.jpg',
  },
  {
    title: '2048',
    shortDesc: 'Игра по слиянию чисел',
    fullDesc:
      '"2048" — это увлекательная игра, которая позволяет игрокам погрузиться в мир чисел и стратегии. Реализован стандартный игровой процесс, где слияние плиток становится ключом к достижению заветного числа 2048. Для повышения вовлеченности игроков добавлена функция отображения результатов последних 10 игр, что позволяет отслеживать успехи, а звуковое оформление создает атмосферу и делает игровой процесс более захватывающим, добавляя эмоции в каждое действие.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/random-game/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/ynjhcpmc0lnqt897cgwvi/2048.mp4?rlkey=pgi1kbq6xeqqm8wk6auywa60q&st=6hmz6b9q&dl=0&raw=1',
    imageLink: '/pictures/2048.png',
  },
  {
    title: 'Coffee House',
    shortDesc: 'Уютный лендинг кафе',
    fullDesc:
      'Уютный лендинг для кафе, предлагающий посетителей насладиться атмосферой комфорта и уюта. Сайт состоит из двух страниц, каждая из которых оформлена с заботой о деталях, создавая визуально привлекательный интерфейс. Адаптивный дизайн обеспечивает удобный доступ с различных устройств, а интерактивные элементы позволяют пользователям легко ознакомиться с меню и услугами.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/coffee-house/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/occ036xrz6imwh6t1h247/coffee_house.mp4?rlkey=8nld46e9nowrfvzi528t3ld25&st=7fk3d85e&dl=0&raw=1',
    imageLink: '/pictures/coffee_house.jpg',
  },
  {
    title: 'Hangman',
    shortDesc: 'Игра "Виселица"',
    fullDesc:
      'Интерактивная версия классической игры в виселицу. Игроки пытаются угадать слово по буквам, прежде чем их "герой" окажется в опасности.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/hangman/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/vg5eycovq7zhy2bhyr1bz/hangman.mp4?rlkey=2yiain3xkus6f3pchxcs5u9rx&st=sivbzzrm&dl=0&raw=1',
    imageLink: '/pictures/hangman.jpg',
  },
  {
    title: 'Nonograms',
    shortDesc: 'Японская головоломка',
    fullDesc:
      'Игра-головоломка, в которой нужно найти спрятанную картинку, посмотрев на подсказки с цифрами. Цифры указаны в верхней и левой частях сетки. Каждое число в этих таблицах определяет блок черных ячеек. Число обозначает непрерывную линию черных ячеек, и они расположены в том же порядке, что и линии.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/nonograms/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/m4tdu7wn5nypjtjx8klse/nonograms.mp4?rlkey=5t6wvaj07ey1plqa0e94fc06h&st=fn4vqzdb&dl=0&raw=1',
    imageLink: '/pictures/nonograms.jpg',
  },
  {
    title: 'Async Race',
    shortDesc: 'Управление коллекцией машин',
    fullDesc:
      '"Async Race" представляет собой приложение, позволяющее пользователям управлять коллекцией радиоуправляемых автомобилей и участвовать в захватывающих гонках. Главный экран — "Гараж" — включает панель для создания и редактирования автомобилей, где пользователи могут задавать имя и выбирать цвет. Здесь доступны кнопки для запуска гонок, создания случайных автомобилей и управления элементами управления для каждого автомобиля. Элементы управления гонками позволяют пользователям запускать и останавливать соревнования, а раздел "Победители" показывает таблицу с результатами, отражающую номера автомобилей, имена, количество побед и их лучшее время. Система пагинации облегчает просмотр большого количества автомобилей, обеспечивая удобство использования приложения.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/async-race/',
    serverLink: 'https://github.com/mikhama/async-race-api',
    videoLink:
      'https://www.dropbox.com/scl/fi/ggb0g0kdqe0e4q72wf768/async_race.mp4?rlkey=uysiwjyoxiuip6c03kqo0oqsg&st=2igz7t56&dl=0&raw=1',
    imageLink: '/pictures/async_race.jpg',
  },
  {
    title: 'Puzzle',
    shortDesc: 'Интерактивное изучение английского',
    fullDesc:
      'Интерактивная мини-игра, направленная на развитие навыков владения английским языком. Игроки собирают предложения из перепутанных слов, вдохновленные обучением Lingualeo Phrase Constructor. В игре представлены различные уровни сложности, варианты подсказок и уникальная игра-головоломка с иллюстрациями.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/rss-puzzle/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/py0cu0x5nvvicxw990tow/puzzle.mp4?rlkey=vg7y649zzuuvh4cp6omj6oko8&st=llh1ch6c&dl=0&raw=1',
    imageLink: '/pictures/puzzle.jpg',
  },
  {
    title: 'Chat',
    shortDesc: 'Чат. Просто чат.',
    fullDesc:
      'Приложение для обмена сообщениями, которое включает в себя все необходимые функции для удобного общения. Пользователи могут отправлять, удалять и редактировать сообщения, а также отслеживать статус доставки каждого сообщения и видеть, кто из участников онлайне. Это создает динамичную и интерактивную атмосферу общения. Для корректной работы приложения необходимо запустить локальный сервер, ссылка на который указана ниже.',
    labels: [],
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/fun-chat/',
    serverLink: 'https://github.com/rolling-scopes-school/fun-chat-server/tree/main',
    videoLink:
      'https://www.dropbox.com/scl/fi/lq4sou0g9oa6ruu2tx0lb/chat.mp4?rlkey=u2vfwlyg6c0tbfbpv1z6s870a&st=h5di0d76&dl=0&raw=1',
    imageLink: '/pictures/chat.jpg',
  },
  {
    title: "Sloths's Galactic Store",
    shortDesc: 'Межгалактический интернет-магазин',
    fullDesc: `Добро пожаловать на нашу платформу электронной коммерции! Мы создали систему онлайн-покупок, которая воспроизводит опыт работы в реальном мире в цифровой среде. Наше приложение предоставляет пользователям простой и интерактивный интерфейс от поиска товара до оформления заказа 🚀. 
Наша платформа предлагает широкий ассортимент товаров с разных планет ⋆⭒.⋆🪐 ⋆⭒.⋆, которые пользователи могут просматривать и добавлять в свою корзину 🛒. Подробные описания продуктов и их характеристики помогают пользователям принимать обоснованные решения о покупке. Приложение включает в себя такие функции, как регистрация, вход в систему, поиск товаров и сортировка, для удобства пользователей.`,
    labels: [],
    deployLink: 'https://sloths-galactic-store.netlify.app/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/1swe7286q23555kw77ujp/sloths_galactic_store.mp4?rlkey=7teq6mywjecdwt7uhy6fj2jvh&st=3re2ti87&dl=0&raw=1',
    imageLink: '/pictures/sloths_galactic_store.jpg',
  },
  {
    title: 'CV',
    shortDesc: 'Портфолио. Вы уже в нём :)',
    fullDesc:
      'Это портфолио было сделано с целью собрать воедино все мои проекты, сделанные до этого и подвести итоги обучения (которое, конечно, не заканчивается, ведь разработчик должен обучаться всегда). Проект основан на React и NextJS. В нём не использовались никакие сторонние UI решения.',
    labels: [],
    deployLink: '',
    serverLink: '',
    videoLink: null,
    imageLink: '',
  },
];
