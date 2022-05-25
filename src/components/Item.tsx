import React, { useState } from 'react';

export enum VariantCollection {
    bordered = 'bordered',
    borderless = 'borderless'
}

interface ItemProps {
    width: string;
    height?: string;
    children: JSX.Element[] | JSX.Element;
    variant: VariantCollection;
    onClick: (num: number) => void
}
// type React.ReactChild = string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>
// JSX.Element[] | JSX.Element
// React.ReactElement | React.ReactNode

const Item: React.FC<ItemProps> = ({width, height, variant, onClick, children}) => {
    const [state, setState] = useState(1)
    return (
        <div style={{width, 
        height, 
        background: 'green', 
        border: variant === VariantCollection.bordered ? '4px solid blue' : '0px'}} 
        onClick={()=> onClick(state)}>
            Wake up, Neo...
            {children}
        </div>
    );
};

export default Item;