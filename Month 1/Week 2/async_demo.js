function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Starting async demo");
    await delay(1000);
    console.log("Async demo completed");
}

run();