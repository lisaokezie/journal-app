export interface Entry {
    id: string;
    title: string;
    date: Date;
    content: string;
    tags: string[];
    location: string;
    isFavorite: boolean;
  }