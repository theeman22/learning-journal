interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' |'editor' | 'viewer';
}

interface Product {
    id: number;
    name: string;
    price: number;
}



function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

const users: User[] = [
    { id: 1, name: "John", email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane", email: "jane@example.com", role: "editor" },
    { id: 3, name: "Jim", email: "jim@example.com", role: "viewer" },
];

const products: Product[] = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }, 
];

console.log("User found:", getById(users, 1));
console.log("Product found:", getById(products, 1));
console.log("Not found:", getById(users, 999));