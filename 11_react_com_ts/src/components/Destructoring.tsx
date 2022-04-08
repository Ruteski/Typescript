import React from 'react';

interface IProps {
   title: string;
   content: string;
   commentsQty: number;
   tags: string[];
}

const Destructoring = ({ title, content, commentsQty, tags}: IProps) => {
   return(
      <div>
         <h1>{title}</h1>
         <p>{content}</p>
         <p>Quantidade de comentarios: {commentsQty}</p>
         <div>
            {tags.map((tag) => (
               <span>#{tag}</span>
            ))}
         </div>
      </div>
   )
}

export default Destructoring;