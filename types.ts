export interface MenuItem {
  label: string;
  href: string;
}

export interface SlideColors {
  background: string;
  text: string;
  subtext: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string; // Картинка
  html?: string;  // iframe (оставляем для совместимости)
  colors: SlideColors;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  // Вот эти новые поля, из-за которых была ошибка:
  shortDesc?: string; // Вопросительный знак значит "не обязательно", но мы их заполнили
  fullStory?: string;
  html?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
}