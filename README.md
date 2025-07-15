# 📝 Next.js  Todo Boilerplate 

A modern, responsive **Todo Dashboard** built with:

- **Next.js 13+ (App Router)**
- **TypeScript**
- **Zustand** for global state management
- **Axios** with custom API client
- **Tailwind CSS** for styling
- **Reusable components** (Button, Modal, etc.)

---

## 🚀 Features

✅ Create todos with `title`, `userId`, and `completed` status  
✅ Display todos in a responsive grid layout  
✅ Custom `AlertModal` with animation (bottom-to-top transition)  
✅ Global state via `Zustand`  
✅ Axios abstraction for API handling  
✅ Fully responsive & accessible UI

---

## 📁 Folder Structure

├── app/
│ └── page.tsx # Main Todo Dashboard Page
├── components/
│ ├── AddTodoButton.tsx # Reusable styled button
│ ├── AlertModal.tsx # Animated alert modal
│ └── ConfirmButton.tsx # Shared confirm button
├── constants/
│ └── index.ts # Constants like STR_NULL
├── libs/
│ └── axios.ts # Axios instance + helpers
├── stores/
│ └── todoStore.ts # Zustand store
└── styles/
└── globals.css # TailwindCSS entry


## 🛠 Tech Stack

| Tech        | Description                             |
|-------------|-----------------------------------------|
| Next.js     | React Framework                         |
| TypeScript  | Static Typing                           |
| Zustand     | Lightweight state management            |
| Axios       | API abstraction layer                   |
| Tailwind CSS| Utility-first CSS framework             |

---

## 🔧 Custom API Integration

> Uses `https://jsonplaceholder.typicode.com/todos` for demo purposes.

- `GET /todos/1` → Fetches one todo on mount  
- `POST /todos` → Creates new todo  
- `id` is manually generated client-side to avoid static `201` from placeholder API

---

## 💡 Components

### ✅ AddTodoButton
Reusable styled button used for "Add Todo" action.

### ✅ AlertModal
- Custom modal with `backdrop`, `transition`, and `click-to-dismiss`
- Used for validation errors (e.g., title required)

---

## 📱 Responsive Layout

- `lg:grid-cols-4` layout
- Todos displayed in 1~4 columns based on screen size
- Create form is fixed on the right side (or bottom on mobile)

---

## 🧪 Future Improvements

- [ ] Delete / Toggle todos  
- [ ] Persist data via localStorage or backend  
- [ ] Toast notifications  
- [ ] Unit & E2E tests  
- [ ] Dark mode support  

---

## 🧑‍💻 Getting Started

```bash
git clone https://github.com/divetocode/nextjs-zustand-todo-boilerplate.git
cd nextjs-zustand-todo-boilerplate
npm install
npm run dev

