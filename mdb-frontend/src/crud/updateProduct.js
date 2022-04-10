import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    });

    const { name, description, category, price } = product;
    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

        useEffect(() => {
            loadProduct();
        }, []);

        const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`http://localhost:5000/products/${id}`, product)
            navigate('/products')
        };


        const loadProduct = async () => {
            const result = await axios.get(`http://localhost:5000/products/${id}`)
            setProduct(result.data);
        };

        return (
            <div className="container w-50 p-5">
                <h3 className="h3">UpdateProduct</h3>
                <hr className="mb-5"></hr>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-dark mb-4"> 
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input type="text" className="form-control" name="name" value={name} placeholder="name" onChange={e => onInputChange(e)} />     
                   
                    </div>
                    <div className="form-dark mb-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" value={description} placeholder="description" onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-dark mb-4">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" name="category" value={category} placeholder="category" onChange={e => onInputChange(e)} />
                    </div>
                    <div  className="form-dark mb-4">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" value={price} placeholder="price" onChange={e => onInputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-success btn-block mb-4">Update Product</button>
                </form>
            </div>
        )
    }


export default UpdateProduct;