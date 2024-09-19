import axios from 'axios';

const API_URL = 'https://localhost/3000';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Falha ao buscar usuários:', error);
    throw error;
  }
};

export const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await axios.get<User>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Falha ao buscar usuário com ID ${id}:`, error);
    throw error;
  }
};