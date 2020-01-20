export interface Entry {
    id: string;
    title: string;
    date: Date;
    content: string;
    tags: string[];
    isFavorite: boolean;
  }