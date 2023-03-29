import React from 'react';
import { useGlobalContext } from '../context';
const Container = () => {
    const { data } = useGlobalContext();
    return (
        <div>
            {data.map((item) => {
                const { id, title } = item
            })}
        </div>
    );
}

export default Container;
