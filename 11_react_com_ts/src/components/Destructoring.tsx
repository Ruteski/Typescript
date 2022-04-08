import React from 'react';

interface IProps {
   title: string;
   content: string;
   commentsQty: number;
   tags: string[];
   // enum
   category: Category;
}

export enum Category {
   JS = 'JavaScript',
   TS = 'Typescript',
   P = 'Python'
}

const Destructoring = ({ title, content, commentsQty, tags, category}: IProps) => {
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
         <h4>Categoria: {category}</h4>
      </div>
   )
}

export default Destructoring;