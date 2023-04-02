import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post, IPost } from './components/Post/Post';

import styles from './App.module.css';
import './global.css';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/FernandoAdelinoSilva.png',
      name: 'Fernando Silva',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey All,' },
      { type: 'paragraph', content: 'This is my first post on this blog' },
      { type: 'paragraph', content: 'Thanks.' },
      { type: 'link', content: 'github.com/FernandoAdelinoSilva' },
    ],
    publishedAt: new Date('2023-03-26 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/FernandoAdelinoSilva.png',
      name: 'Fernando Silva',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey All,' },
      { type: 'paragraph', content: 'This is my second post on this blog' },
      { type: 'paragraph', content: 'Thanks.' },
      { type: 'link', content: 'github.com/FernandoAdelinoSilva' },
    ],
    publishedAt: new Date('2023-03-27 10:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
