import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikes() {
    setLikes((state) => {
      return state + 1;
    });
  }

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

            <button onClick={handleDeleteComment} title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikes}>
            <ThumbsUp />
            Like <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
