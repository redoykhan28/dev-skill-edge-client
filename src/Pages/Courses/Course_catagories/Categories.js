import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Catagories.css'

const Categories = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://skill-edge-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            {
                category.map(cat => <p className='text-start' key={cat.id}><NavLink className={({ isActive }) => isActive ? 'btn cat-btn' : 'text-decoration-none text-secondary'} to={`/coursePerCat/${cat.id}`}>{cat.name}</NavLink></p>)
            }
        </div>
    );
};

export default Categories;