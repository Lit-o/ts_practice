import React, { FC } from 'react';
import { IUser } from '../types/types';

interface ItemListProps {
    // users: IUser[]
    users: Array<IUser>
}

const ItemList: FC<ItemListProps> = ({users}) => {
    // users[0].address.city
    return (
        <div>
            {users.map(user => { 
                return (
                <div key={user.id} style={{padding: 10, border: '1px solid green', color: 'green'}}>
                    {user.id} {user.name} live in {user.address.city} on {user.address.street} street 
                </div>
                )                
            }
            )}
        </div>
    );
};

export default ItemList;