export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  html?: string; // Опциональное поле для HTML iframe
}

export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  html?: string; // Опциональное поле для HTML iframe
  image?: string; // Теперь опциональное - может быть либо HTML, либо image
  colors: {
    background: string;
    text: string;
    subtext: string;
  };
}