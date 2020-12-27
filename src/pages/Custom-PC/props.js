import React, {useState, useEffect} from 'react';
import product1 from "../../assets/images/product/img-1.png";
import product2 from "../../assets/images/product/img-2.png";
import product3 from "../../assets/images/product/img-3.png";
import product4 from "../../assets/images/product/img-4.png";
import product5 from "../../assets/images/product/img-5.png";
import product6 from "../../assets/images/product/img-6.png";

function useViewModel(props) {
    const [products, setProducts] = useState([
        { id: 1, image: product1, name: "Half sleeve T-shirt", link: "#", rating: 5, oldPrice: 500, newPrice: 450, isOffer: true, offer: -25 },
        { id: 2, image: product2, name: "Light blue T-shirt", link: "#", rating: 4, oldPrice: 240, newPrice: 225, isOffer: false, offer: 0 },
        { id: 3, image: product3, name: "Black Color T-shirt", link: "#", rating: 4, oldPrice: 175, newPrice: 152, isOffer: true, offer: -20 },
        { id: 4, image: product4, name: "Hoodie (Blue)", link: "#", rating: 4, oldPrice: 150, newPrice: 145, isOffer: false, offer: 0 },
        { id: 5, image: product5, name: "Half sleeve T-Shirt", link: "#", rating: 4, oldPrice: 145, newPrice: 138, isOffer: true, offer: -22 },
        { id: 6, image: product6, name: "Green color T-shirt", link: "#", rating: 4, oldPrice: 138, newPrice: 135, isOffer: true, offer: -28 },
    ]);

    useEffect(() => {
        const url = new URLSearchParams(window.location.search).get('category');

    });

    return {
        products, setProducts,
    }
}

export default useViewModel;