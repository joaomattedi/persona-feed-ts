import { Post, IPost } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts: IPost[] = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/joaomattedi.png",
      name: "João Mattedi",
      role: "FullStack Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2024-03-06 20:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl: "https://github.com/joaomattedi.png",
      name: "Julia Albano",
      role: "UX/UI Designer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2024-03-07 18:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

