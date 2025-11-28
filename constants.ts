
import { Project, Service, MenuItem, Slide } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Творения', href: '#work' },
  { label: 'Путь', href: '#process' },
  { label: 'Дары', href: '#services' },
  { label: 'Связь', href: '#contact' },
];

// Palette from user
// --black-font: #0f0f0f;
// --green: #001514;
// --whitee: white;
// --white: #fdfdfd;
// --dark-cyan-zimo: #019e9f;
// --orange: #fcad17;
// --light-grey-zimo: #cfcfcf;
// --dark-cyan: #0d9697;
// --white-smoke: #eee;
// --blushing-silk: #ffd6d3;
// --candlelight-peach: #f6f2ea;
// --blue: #384e77;
// --black: #001614;
// --grey: gray;

export const HORIZONTAL_SLIDES: Slide[] = [
  {
    id: 1,
    title: 'ОЗАРЕНИЕ',
    subtitle: 'ЭТАП 01',
    description: 'Мы погружаемся в глубины вашего сознания, чтобы найти скрытые истины вашего бренда.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=10',
    colors: {
      background: '#001514', // --green / --black
      text: '#fdfdfd', // --white
      subtext: '#cfcfcf' // --light-grey-zimo
    }
  },
  {
    id: 2,
    title: 'ПРЕДНАЧЕРТАНИЕ',
    subtitle: 'ЭТАП 02',
    description: 'Определение кармического пути и позиционирования для достижения высшей цели.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=11',
    colors: {
      background: '#019e9f', // --dark-cyan-zimo
      text: '#fdfdfd',
      subtext: '#e0f2f1'
    }
  },
  {
    id: 3,
    title: 'ВОПЛОЩЕНИЕ',
    subtitle: 'ЭТАП 03',
    description: 'Создание визуальных проекций, говорящих на языке души и выделяющих вас из хаоса.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=12',
    colors: {
      background: '#fcad17', // --orange
      text: '#0f0f0f', // --black-font
      subtext: '#333333'
    }
  },
  {
    id: 4,
    title: 'ЭНЕРГИЯ',
    subtitle: 'ЭТАП 04',
    description: 'Наполнение статичных форм жизнью через потоковую анимацию и микро-взаимодействия.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=13',
    colors: {
      background: '#384e77', // --blue
      text: '#fdfdfd',
      subtext: '#cfcfcf'
    }
  },
  {
    id: 5,
    title: 'МАТЕРИАЛИЗАЦИЯ',
    subtitle: 'ЭТАП 05',
    description: 'Написание чистого кода, превращающего ментальные образы в функциональную реальность.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=14',
    colors: {
      background: '#f6f2ea', // --candlelight-peach
      text: '#0f0f0f',
      subtext: '#555555'
    }
  },
  {
    id: 6,
    title: 'СЛОВО',
    subtitle: 'ЭТАП 06',
    description: 'Наполнение структуры сакральным смыслом и голосом, который резонирует с аудиторией.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=15',
    colors: {
      background: '#ffd6d3', // --blushing-silk
      text: '#0f0f0f',
      subtext: '#444444'
    }
  },
  {
    id: 7,
    title: 'ТРАНСФОРМАЦИЯ',
    subtitle: 'ЭТАП 07',
    description: 'Выход в мир с точностью намерения, последующий анализ и духовный рост проекта.',
    image: 'https://picsum.photos/1920/1080?grayscale&random=16',
    colors: {
      background: '#0d9697', // --dark-cyan
      text: '#fdfdfd',
      subtext: '#e0f2f1'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Эфирные Видения',
    category: 'Арт-Дирекшн',
    image: 'https://picsum.photos/800/600?grayscale&random=1',
    year: '2024'
  },
  {
    id: 2,
    title: 'Неоновый Синтаксис',
    category: 'Веб-Дизайн',
    image: 'https://picsum.photos/800/1000?grayscale&random=2',
    year: '2023'
  },
  {
    id: 3,
    title: 'Поток Обсидиана',
    category: 'Айдентика',
    image: 'https://picsum.photos/800/800?grayscale&random=3',
    year: '2023'
  },
  {
    id: 4,
    title: 'Кинетическая Пустота',
    category: 'Моушн',
    image: 'https://picsum.photos/800/600?grayscale&random=4',
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Цифровой Опыт',
    description: 'Мы создаем иммерсивные веб-пространства, объединяющие эстетику с функциональностью.',
    tags: ['Веб-Дизайн', 'Разработка', 'WebGL', 'Интерактив']
  },
  {
    id: 2,
    title: 'Айдентика Души',
    description: 'Создание визуальных систем, которые передают суть и обеспечивают узнаваемость на уровне подсознания.',
    tags: ['Стратегия', 'Визуальный Образ', 'Типографика', 'Гайдлайны']
  },
  {
    id: 3,
    title: 'Творческий Поток',
    description: 'Направление нарратива через визуальное повествование и художественное руководство.',
    tags: ['Арт-Дирекшн', 'Создание Контента', 'Фотография', 'Фильм']
  }
];
