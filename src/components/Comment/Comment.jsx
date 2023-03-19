import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/FernandoAdelinoSilva.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Silva</strong>
              <time title="February 02" dateTime="2023-02-02 08:00:00">
                1h ago
              </time>
            </div>
            <button title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Good Work</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
