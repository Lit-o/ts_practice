import React from 'react';

interface ItemProps {
    width: string;
    height?: string
}

const Item = ({width, height}: ItemProps) => {
    return (
        <div style={{width, height, background: 'green'}}>
            Wake up, Neo...
        </div>
    );
};

export default Item;