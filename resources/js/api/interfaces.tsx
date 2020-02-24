export interface Tag {
  id: number;
  name: string;
  slug: string | null;
};

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  intro: string;
  content: string;
  published_at: string;
  tags: Tag[];
};

