
import { create } from "zustand";
import { getRequest, postRequest } from "@/libs/axios";
import { URL_CREATE_TODO, URL_FETCH_TODO_1 } from "@/constants";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todoList: Todo[];
  loading: boolean;
  error: string | null;
  fetchTodo: () => Promise<void>;
  createTodo: (title: string, completed: boolean, userId: number) => Promise<void>;
};

export const TodoStore = create<TodoStore>((set) => ({
  todoList: [],
  loading: false,
  error: null,

  fetchTodo: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getRequest<Todo>(URL_FETCH_TODO_1);
      // 고유 ID 부여
      const localId = Date.now();
      const todoWithCustomId = { ...data, id: localId };
      set((state) => ({ todoList: [...state.todoList, todoWithCustomId] }));
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch todo" });
    } finally {
      set({ loading: false });
    }
  },

  createTodo: async (title, completed, userId) => {
    set({ loading: true, error: null });
    try {
      const data = await postRequest<Todo>(URL_CREATE_TODO, {
        title,
        completed,
        userId,
      });

      // 실제 ID는 무조건 201이므로, 고유 ID 생성
      const localId = Date.now() + Math.floor(Math.random() * 1000);
      const todoWithCustomId = { ...data, id: localId };

      set((state) => ({ todoList: [...state.todoList, todoWithCustomId] }));
    } catch (error: any) {
      set({ error: error.message || "Failed to create todo" });
    } finally {
      set({ loading: false });
    }
  },
}));