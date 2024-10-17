import React from 'react';
import ProductGallery from './components/productGallery'; 
import Header from './components/header';

const App = () => {
    return (
        <div className="App">
            <Header /> {/* Afficher le Header */}
            <ProductGallery /> {/* Affiche la galerie de produits */}
        </div>
    );
};

export default App;
