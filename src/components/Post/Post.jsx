import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Good Work, Amazing']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "LLLL d '-' HH:mm");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange() {
    setNewComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Provide Your Feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a Comment"
          value={newComment}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
