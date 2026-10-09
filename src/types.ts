export interface Review {
  _id: string;
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface IFormData {
  name: string;
  image: string;
  description: string;
  type: string;
  category: string;
  price: string;
  rating: string;
}
export interface IFoodItem {
  _id?: string;
  customer?: string;
  // eslint-disable-next-line camelcase
  public_id?: string;
  name: string;
  image: string;
  description: string;
  type: string;
  category: string;
  price: number;
  rating: number;
  reviews?: Array<Review>;
  _v?: number;
}

export interface IArticle {
  _id?: string;
  name: string;
  image: string;
  description: string;
  type: string;
  category: string;
  price: number;
  rating: number;
  _v: number;
}

export interface IAuthData {
  name: string;
  email: string;
  phone?: string;
  id?: string;
  role?: string;
  status?: string;
  token?: string;
  image?: string;
  password?: string;
}

export interface IDashboardStats {
  totalUser: number;
  totalOrder: number;
  totalProduct: number;
  totalStore: number;
}

export enum Role {
  // eslint-disable-next-line no-unused-vars
  Admin = "admin",
  // eslint-disable-next-line no-unused-vars
  User = "user",
}
