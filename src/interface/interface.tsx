import type React from "react";

export interface ISEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  type?: string;
  favicon?: string;
}

export interface ISocialLink {
  id: number,
  url: string,
  name: string,
  icon: React.ReactElement,
}

export interface IFootersLinks {
  id?: number,
  title: string,
  links: { // For differents links
      url: string;
      name: string;
  }[],
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}
