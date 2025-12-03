import { Project, Service, MenuItem, Slide } from './types';
import img01 from './src/photo/01_I.jpg';

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Творения', href: '#work' },
  { label: 'Путь', href: '#process' },
  { label: 'Дары', href: '#services' },
  { label: 'Связь', href: '#contact' },
];

export const HORIZONTAL_SLIDES: Slide[] = [
  {
    id: 1,
    title: 'ОЗАРЕНИЕ',
    subtitle: 'ЭТАП 01',
    description:
      'Мы погружаемся в глубины вашего сознания, чтобы найти скрытые истины вашего бренда.',
    html: '/VFX/Ex_09102025.html',
    colors: {
      background: '#001514',
      text: '#fdfdfd',
      subtext: '#cfcfcf',
    },
  },
  {
    id: 2,
    title: 'ПРЕДНАЧЕРТАНИЕ',
    subtitle: 'ЭТАП 02',
    description:
      'Определение кармического пути и позиционирования для достижения высшей цели.',
    image: img01,
    colors: {
      background: '#019e9f',
      text: '#fdfdfd',
      subtext: '#e0f2f1',
    },
  },
  {
    id: 3,
    title: 'ВОПЛОЩЕНИЕ',
    subtitle: 'ЭТАП 03',
    description:
      'Создание визуальных проекций, говорящих на языке души и выделяющих вас из хаоса.',
    image: img01,
    colors: {
      background: '#fcad17',
      text: '#0f0f0f',
      subtext: '#333333',
    },
  },
  {
    id: 4,
    title: 'АРХИТЕКТУРА',
    subtitle: 'ЭТАП 04',
    description: 'Построение фундамента и структуры, способной выдержать вес грандиозных замыслов.',
    image: img01,
    colors: {
      background: '#384e77',
      text: '#fdfdfd',
      subtext: '#b0c4de'
    }
  },
  {
    id: 5,
    title: 'МАТЕРИАЛИЗАЦИЯ',
    subtitle: 'ЭТАП 05',
    description: 'Написание чистого кода, превращающего ментальные образы в функциональную реальность.',
    image: img01,
    colors: {
      background: '#f6f2ea',
      text: '#0f0f0f',
      subtext: '#555555'
    }
  },
  {
    id: 6,
    title: 'СЛОВО',
    subtitle: 'ЭТАП 06',
    description: 'Наполнение структуры сакральным смыслом и голосом, который резонирует с аудиторией.',
    image: img01,
    colors: {
      background: '#ffd6d3',
      text: '#0f0f0f',
      subtext: '#444444'
    }
  },
  {
    id: 7,
    title: 'ТРАНСФОРМАЦИЯ',
    subtitle: 'ЭТАП 07',
    description: 'Выход в мир с точностью намерения, последующий анализ и духовный рост проекта.',
    image: img01,
    colors: {
      background: '#0d9697',
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
    image: img01,
    year: '2024',
    html: '/VFX/Ex_09102025.html',
  },
  {
    id: 2,
    title: 'Неоновый Синтаксис',
    category: 'Веб-Дизайн',
    image: img01,
    year: '2023',
  },
  {
    id: 3,
    title: 'Поток Обсидиана',
    category: 'Айдентика',
    image: img01,
    year: '2023',
  },
  {
    id: 4,
    title: 'Кинетическая Пустота',
    category: 'Моушн',
    image: img01,
    year: '2024',
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Цифровой Опыт',
    description:
      'Мы создаем иммерсивные веб-пространства, объединяющие эстетику с функциональностью.',
    tags: ['Веб-Дизайн', 'Разработка', 'WebGL', 'Интерактив'],
  },
  {
    id: 2,
    title: 'Айдентика Души',
    description:
      'Создание визуальных систем, которые передают суть и обеспечивают узнаваемость на уровне подсознания.',
    tags: ['Стратегия', 'Визуальный Образ', 'Типографика', 'Гайдлайны'],
  },
  {
    id: 3,
    title: 'Творческий Поток',
    description:
      'Направление нарратива через визуальное повествование и художественное руководство.',
    tags: ['Арт-Дирекшн', 'Создание Контента', 'Фотография', 'Фильм'],
  },
];