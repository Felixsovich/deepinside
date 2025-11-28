
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
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
  image: string;
  colors: {
    background: string;
    text: string;
    subtext: string;
  }
}
