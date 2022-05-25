import React from 'react';
import Item from './components/Item';

const App = () => {
    return (
        <div>
            <Item width='200px' height='250px'>
                <button>Wake Up</button>
            </Item>
        </div>
    );
};

export default App;