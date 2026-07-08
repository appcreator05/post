const https = require('https');

async function getNewAccessToken() {
    const data = `client_id=${process.env.G_CLIENT_ID}&client_secret=${process.env.G_CLIENT_SECRET}&refresh_token=${process.env.G_REFRESH_TOKEN}&grant_type=refresh_token`;
    
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'oauth2.googleapis.com',
            path: '/token',
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }, (res) => {
            let body = '';
            res.on('data', (d) => { body += d; });
            res.on('end', () => {
                const json = JSON.parse(body);
                if (json.access_token) resolve(json.access_token);
                else reject(new Error("Token Error: " + body));
            });
        });
        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

async function postToBlogger(movie, token) {
    const postData = JSON.stringify({
        kind: "blogger#post",
        title: movie.title,
        content: `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/><br/><p>${movie.overview}</p>`
    });

    return new Promise((resolve) => {
        const req = https.request({
            hostname: 'www.googleapis.com',
            path: `/blogger/v3/blogs/${process.env.BLOG_ID}/posts/`,
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json' 
            }
        }, (res) => {
            let response = '';
            res.on('data', (d) => { response += d; });
            res.on('end', () => {
                console.log(`Posted: ${movie.title} - Status: ${res.statusCode}`);
                if (res.statusCode !== 200) console.log("Detail:", response);
                resolve();
            });
        });
        req.write(postData);
        req.end();
    });
}

(async () => {
    try {
        const token = await getNewAccessToken();
        https.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`, (res) => {
            let data = '';
            res.on('data', (d) => { data += d; });
            res.on('end', async () => {
                const movies = JSON.parse(data).results;
                for (const movie of movies) await postToBlogger(movie, token);
            });
        });
    } catch (e) { console.error("Critical Error:", e); }
})();
