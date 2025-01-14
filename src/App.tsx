import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { SideBar } from './components/SideBar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabriel-assana.png',
      name: "Gabriel Assana",
      role: "Desenvolvedor Front-End"
    },
    content: [
      { type: 'paragraph' as const, content: 'Fala galeraa 👋' },
      { type: 'paragraph'as const, content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link' as const, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:42:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      { type: 'paragraph' as const, content: 'Fala galeraa 👋' },
      { type: 'paragraph' as const, content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link' as const, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:44:00'),
  },
]

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt} />)}
        </main>
      </div>
    </>
  )
}

export default App