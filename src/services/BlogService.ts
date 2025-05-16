import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/blogs'; // Adjust this to your backend URL

export interface Blog {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
}

export class BlogService {
  static async getAllBlogs(): Promise<Blog[]> {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }

  static async getBlogById(id: string): Promise<Blog> {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog with id ${id}:`, error);
      throw error;
    }
  }

  static async createBlog(blog: Partial<Blog>): Promise<Blog> {
    try {
      const response = await axios.post(BASE_URL, blog);
      return response.data;
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  }

  static async updateBlog(id: string, blog: Partial<Blog>): Promise<Blog> {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, blog);
      return response.data;
    } catch (error) {
      console.error(`Error updating blog with id ${id}:`, error);
      throw error;
    }
  }

  static async deleteBlog(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting blog with id ${id}:`, error);
      throw error;
    }
  }
} 