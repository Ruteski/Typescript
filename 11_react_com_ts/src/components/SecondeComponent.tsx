import React from 'react';

interface IProps {
   name: string;
}

const SecondeComponent = (props: IProps) => {
   return(
      <div>
         <p>Meu segundo componente</p>
         <p>O nome dele é {props.name}</p>
      </div>
   )
}

export default SecondeComponent;