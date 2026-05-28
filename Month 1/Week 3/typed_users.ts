interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' |'editor' | 'viewer';
}


const user: User[] = [
    { id: 1, name: "John", role: "admin", email: 'john@example.com' },
    { id: 2, name: "Jane", role: "editor", email: 'jane@example.com' },
    { id: 3, name: "Jim", role: "editor", email: 'jim@example.com' },
    { id: 4, name: "Jill", role: "viewer", email: 'jill@example.com' },
    { id: 5, name: "Jack", role: "editor", email: 'jack@example.com' },
];

  // tsc error: Type '"superadmin"' is not assignable to type '"admin" | "editor" | "viewer"'
  // const badUser: User = {
  //     id: 99,
  //     name: "Bad User",
  //     email: "bad@example.com",
  //     role: "superadmin"  // ❌ intentional type error
  // };
console.log(user);