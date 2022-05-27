import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item, { VariantCollection } from './components/Item';
import ItemList from './components/ItemList';
import { IUser } from './types/types';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        fetchUsers()
    }, [])

    async function fetchUsers () {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div style={{background: 'black', height: '100vh'}}>
            <Item width='200px' height='250px' variant={VariantCollection.bordered} onClick={(num)=>{alert(num)}}>
                <button>Wake Up</button>
            </Item>
            <ItemList users={users}/>
        </div>
    );
};

export default App;