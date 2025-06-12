export interface HistoryItem {
  address: string;
  material: string;
  date: string;
  coins: number;
}

export interface PromoItem {
  value: string;
  color: string;
  date: string;
  link: string;
  showQR: boolean;
}

export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  city: string;
  coins: number;
  history: HistoryItem[];
  promos: PromoItem[];
} 