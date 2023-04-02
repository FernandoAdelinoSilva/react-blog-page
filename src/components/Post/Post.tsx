import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IContent {
  type: string;
  content: string;
}

interface IProps {
  author: IAuthor;
  publishedAt: Date;
  content: IContent[];
}

export function Post({ author, publishedAt, content }: IProps) {
  const [comments, setComments] = useState(['Good Work, Amazing']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "LLLL d '-' HH:mm");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);

  const isCommentEmpty = newComment.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('This field is mandatory');
  }

  function deleteComment(commentToDelete: string) {
    const newCommentList = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(newCommentList);
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
