
export interface TattooProject {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface AIResponse {
  imageUrl: string | null;
  description: string;
  isLoading: boolean;
  error: string | null;
}
