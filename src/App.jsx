import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Fernando Silva" content="Text_1" />
          <Post author="Fernando Silva" content="Text_2" />
        </main>
      </div>
    </>
  );
}
