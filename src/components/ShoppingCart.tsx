const products = [
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Smartphone', precio: 800 },
    { id: 3, nombre: 'Audífonos', precio: 150 },
];

const ShoppingCart = () => {
    return (
        <div className="shopping-cart-container">
            <div className="cart-badge">
                Cantidad de productos: {products.length}
            </div>
        </div>
    );
};

export default ShoppingCart;
