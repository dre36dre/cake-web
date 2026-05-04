export interface AuthResponse {
  access_token?: string;
  token: string;
  role?: 'admin' | 'cliente';
}