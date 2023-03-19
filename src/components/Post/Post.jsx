import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/FernandoAdelinoSilva.png"
          />
          <div className={styles.authorInfo}>
            <strong>Fernando Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="February 02" dateTime="2023-02-02 08:00:00">
          1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hey All,</p>
        <p>This is my first post on this blog,</p>
        <p>Thanks.</p>
        <p>
          <a href="#">github.com/FernandoAdelinoSilva</a>
        </p>
        <p>
          <a href="#">#Code</a> <a href="#">#React</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Provide Your Feedback</strong>
        <textarea placeholder="Leave a Comment" />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
