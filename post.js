const https = require('https');

async function getNewAccessToken() {
    const data = `client_id=${process.env.G_CLIENT_ID}&client_secret=${process.env.G_CLIENT_SECRET}&refresh_token=${process.env.G_REFRESH_TOKEN}&grant_type=refresh_token`;
    return new Promise((resolve) => {
        const req = https.request({hostname: 'oauth2.googleapis.com', path: '/token', method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}}, (res) => {
            let body = '';
            res.on('data', (d) => { body += d; });
            res.on('end', () => { resolve(JSON.parse(body).access_token); });
        });
        req.write(data); req.end();
    });
}

async function postToBlogger(movie, token) {
    const postData = JSON.stringify({
        kind: "blogger#post",
        title: movie.title,
        content: `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/><p>${movie.overview}</p>`
    });
    const options = {
        hostname: 'www.googleapis.com',
        path: `/blogger/v3/blogs/${process.env.BLOG_ID}/posts/`,
        method: 'POST',
        headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}
    };
    const req = https.request(options, (res) => {
        console.log(`Posted: ${movie.title} - Status: ${res.statusCode}`);
    });
    req.write(postData); req.end();
}

(async () => {
    const token = await getNewAccessToken();
    https.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            JSON.parse(data).results.forEach(m => postToBlogger(m, token));
        });
    });
})();