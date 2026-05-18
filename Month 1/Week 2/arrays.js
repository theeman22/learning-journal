
const users = [
    { name: "John", role: "admin", active: true },
    { name: "Jane", role: "user", active: false },
    { name: "Jim", role: "editor", active: true },
    { name: "Jill", role: "writer", active: false },
    { name: "Jack", role: "user", active: true },
    { name: "Joe", role: "user", active: false },
    { name: "Jabroni", role: "reviewer", active: true },
    { name: "Jam", role: "tester", active: false },
    { name: "Jimmy", role: "tester", active: true },
    { name: "Johnathan", role: "user", active: false },
]



const activeUsers = users.filter(user => user.active);
console.log("Active Users: ", activeUsers);

const allNames = users.map(user => user.name);
console.log("All names: ", allNames);




const activeCount = users.reduce((total, user) => {
    if (user.active) return total + 1;
    return total;
  }, 0);
  console.log("Active users: ", activeCount);