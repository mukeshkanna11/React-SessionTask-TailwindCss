import React from 'react';

function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99', image: '/Assests/image.png' },
    { id: 2, name: 'Smart Watch', price: '$199', image: '/Assests/Watch.webp' },
    { id: 3, name: 'Gaming Mouse', price: '$49', image: '/Assests/mouse.webp' },
    { id: 4, name: 'Bluetooth Speaker', price: '$129', image: '/Assests/blue.webp' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">My E-Shop</h1>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/" className="hover:text-gray-300">Products</a></li>
              <li><a href="/" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 p-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Best Tech Store!</h2>
        <p className="text-lg text-gray-600 mb-8">Find the best products at unbeatable prices.</p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">Shop Now</button>
      </section>

      {/* Product Grid */}
      <main className="flex-1 p-6 bg-gray-100">
        <section className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My E-Shop. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
