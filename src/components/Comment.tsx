import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Commment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1);
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/gabriel-assana.png" 
        alt=""
       />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Assana</strong>
              <time
                title='06 de Junho de 2022 às 15h30'
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDelete}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer><button onClick={handleLikeComment}><ThumbsUp /> Aplaudir <span>{likeCount}</span></button></footer>
      </div>
    </div>
  )
}