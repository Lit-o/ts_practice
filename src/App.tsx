import React from 'react';
import Item, { VariantCollection } from './components/Item';

const App = () => {
    return (
        <div>
            <Item width='200px' height='250px' variant={VariantCollection.bordered} onClick={(num)=>{alert(num)}}>
                <button>Wake Up</button>
            </Item>
        </div>
    );
};

export default App;