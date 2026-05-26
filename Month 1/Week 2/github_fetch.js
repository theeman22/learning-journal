
async function fetchGithubData() {
    try {
      const response = await fetch('https://api.github.com/users/torvalds');

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Name:", data.name);
      console.log("Followers:", data.followers);
      console.log("Public Repos:", data.public_repos);

    } catch (error) {
      console.log("Something went wrong:", error.message);
    }
  }

  fetchGithubData();