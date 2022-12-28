console.log('Before');

const user = getUser(1, (user) => {
    console.log('User', user);
    getRepos(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
    });    
});

console.log('After');

// Callbacks
// Promises
// Async/await

function getUser (id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'mosh'});
    }, 2000);
}

function getRepos (username, callback) {
    setTimeout(() => {
        console.log('Getting all linked GitHub repositories...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
