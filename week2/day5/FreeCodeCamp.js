// https://github.com/freeCodeCamp/freeCodeCamp

// Octokit.js
// https://github.com/octokit/core.js#readme
// const freeCodeCamp = new FreeCodeCamp({
    
//     auth: 'personal-access-token123'
//   })
  
//   await freeCodeCamp.request('GET /repos/{owner}/{repo}/issues', {
//     owner: 'OWNER',
//     repo: 'REPO'
//   })

// console.log(octokit);

const response = await fetch('https://github.com/freeCodeCamp/freeCodeCamp');
const myJson = await response.json();
console.log(JSON.stringify(myJson));
