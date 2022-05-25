import React from 'react';

interface ItemProps {
    width: string;
    height?: string;
    children: JSX.Element[] | JSX.Element
}
// type React.ReactChild = string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>
// JSX.Element[] | JSX.Element
// React.ReactElement | React.ReactNode

const Item: React.FC<ItemProps> = ({width, height, children}) => {
    return (
        <div style={{width, height, background: 'green'}}>
            Wake up, Neo...
            {children}
        </div>
    );
};

export default Item;