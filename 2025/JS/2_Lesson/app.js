const name = 'John';
const age = 30;
const job = 'web developer';
const city = 'Miami';
let html;

function hello() {
    return 'hello';
}

// With template strings / literal
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
</ul>
`;

document.body.innerHTML = html;