async function fetchGithubData() {
    const response = await fetch('https://api.github.com/users/torvalds');
    const data = await response.json();
    console.log("Name:", data.name);
    console.log("Followers:", data.followers);
    console.log("Public Repos:", data.public_repos);
}

fetchGithubData();