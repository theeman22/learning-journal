const user = {
    profile: {
        name: "Ethan Greenberg",
        email: "ethan@example.com",
    },
    permissions: ["read", "write", "delete"],
}
console.log("name:",user.profile.name);
console.log("permissions:",user.permissions);
console.log("First permission:", user.permissions[0]);

{
const {profile, permissions} = user;
console.log("name:",profile.name);
console.log("permissions:",permissions);
}

{
const {profile: {name}, permissions: [firstPermission]} = user;
console.log("name:",name);
console.log("First permission:", firstPermission);
}

{
function getUserInfo({profile: {name}, permissions: [firstPermission]}) {
    return {name, firstPermission};
}
    const {name, firstPermission} = getUserInfo(user);
    console.log("name:",name);
    console.log("first permission:",firstPermission);
}
{   
function getUserSummary({ profile: { name, email }, permissions }) {
    return `User: ${name} | Email: ${email} | Permissions: ${permissions.join(", ")}`;
}
    console.log(getUserSummary(user));
}