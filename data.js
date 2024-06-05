import bcrypt from 'bcrypt';

const data = {
    products: [
        {
            // _id: '1',
            name: "Nike slim shirt",
            slug: "nike-slim-shirt",
            category: "Shirts",
            image: "/images/p1.jpg",
            price: 120,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "high quality shirt",
        },
        {
            // _id: '2',
            name: "Adidas Fit Shirt",
            slug: "adidas-fit-shirt",
            category: "Shirts",
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 0,
            brand: "Adidas",
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: "Nike Slim Pant",
            slug: "nike-slim-pant",
            category: "Pants",
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 15,
            brand: "Nike",
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            // _id: '4',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
    users: [
        {
            name: 'John Doe',
            email: 'john@example.com',
            password: bcrypt.hashSync('123456',10),
            isAdmin : true,
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            password: bcrypt.hashSync('password',10),
            isAdmin : false,
        },    
    ],
};

export default data;
