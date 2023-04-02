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

  const isCommentEmpty = newComment.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment() {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(newCommentList);
  }

  function handleInvalidComment() {
    event.target.setCustomValidity('This field is mandatory');
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
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
          onChange={handleNewComment}
          onInvalid={handleInvalidComment}
          required
        />
        <footer>
          <button type="submit" disabled={isCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
