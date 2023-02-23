import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

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
