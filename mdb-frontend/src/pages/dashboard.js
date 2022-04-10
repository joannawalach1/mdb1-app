import React from 'react';
import Products from './products';
import Category from './category';

const Dashboard = () => {
  return (
    <div className="container-fluid p-5">
        <h2 className="h2">Dashboard</h2>
        <Products />
        <Category />
    </div>
  )
}

export default Dashboard