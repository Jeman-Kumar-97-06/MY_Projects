import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        // Fetch products from the server
        axios
            .get("http://localhost:5000/api/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handleReviewSubmit = (productId, review) => {
        // Submit a new review for a product
        axios
            .post(
`http://localhost:5000/api/products/${productId}/review`, review)
            .then((response) => {
                // Update the products in the state with the new review
                const updatedProducts = products.map((product) =>
                    product._id === productId ? response.data : product
                );
                setProducts(updatedProducts);
            })
            .catch((error) => console.error(error));
    };

    const handleAddProduct = () => {
        // Submit a new product
        console.log("i am called");

        axios
            .post("http://localhost:5000/api/products", newProduct)
            .then((response) => {
                // Update the products in the state with the new product
                setProducts([...products, response.data]);

                // Clear the newProduct state for the next entry
                setNewProduct({ name: "", description: "", image: "" });
            })
            .catch((error) => console.error(error));
    };

    const handleProductDelete = (productId) => {
        // Send a DELETE request to the server
        axios
            .delete(`http://localhost:5000/api/products/${productId}`)
            .then((response) => {
                // Update the products in the state after successful deletion
                console.log(
                    "The Producted deleted successfully was:",
                    response.data.deletedProduct
                );
                const updatedProducts = products.filter(
                    (product) => product._id !== productId
                );
                setProducts(updatedProducts);
            })
            .catch((error) =>
                console.error(
                    `Error deleting product with ID 
                    ${productId}:`, error)
            );
    };
    return (
        <div className="outer-cont">
            <h1
                style={
                    {
                        marginTop: "10px",
                        color: "white"
                    }}>
                GFG
            </h1>
            <h2>Product Review Platform</h2>

            <div className="add-container">
                <h3>Add a New Product:</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddProduct();
                    }}>
                    <label>
                        Name:{" "}
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct(
                                    {
                                        ...newProduct,
                                        name: e.target.value
                                    }
                                )
                            }
                            required
                        />
                    </label>

                    <label>
                        Description:{" "}
                        <input
                            type="text"
                            name="description"
                            value={newProduct.description}
                            onChange={(e) =>
                                setNewProduct(
                                    {
                                        ...newProduct,
                                        description: e.target.value
                                    }
                                )
                            }
                            required
                        />
                    </label>

                    <label>
                        {" "}
                        Image URL:{" "}
                        <input
                            type="text"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) =>
                                setNewProduct(
                                    {
                                        ...newProduct,
                                        image: e.target.value
                                    })
                            }
                            required
                        />
                    </label>

                    <button className="add-btn"
                        type="submit">
                        Add Product
                    </button>
                </form>
            </div>

            <div className="cards">
                {products.map((product) => (
                    <div key={product._id}
                        className="product-card">
                        <h2>{product.name}</h2>

                        <button
                            className="delete-btn"
                            onClick={
                                () =>
                                    handleProductDelete(product._id)
                            }>
                            Delete Product
                        </button>

                        <img src={product.image}
                            style={{ width: "300px" }} alt="" />

                        <p>{product.description}</p>
                        <h3>Reviews:</h3>
                        <ul>
                            {product.reviews.map((review, index) => (
                                <li key={index}>
                                    <strong>{review.user}</strong>
                                    -
                                    {review.rating}/5:{" "}
                                    {review.comment}
                                </li>
                            ))}
                        </ul>
                        <h3>Add a Review:</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const user = e.target.elements.user.value;
                                const rating = e.target.elements.rating.value;
                                const comment = e.target.elements.comment.value;
                                handleReviewSubmit(product._id, 
                                { user, rating, comment });
                            }}>
                            <label>
                                User: <input type="text" name="user" required />
                            </label>
                            <label>
                                Rating:{" "}
                                <input type="number"
                                    name="rating" min="1"
                                    max="5" required />
                            </label>
                            <label>
                                Comment: <textarea name="comment" required>
                                </textarea>
                            </label>
                            <button type="submit">
                                Submit Review
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;