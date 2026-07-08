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
                if (json.access_token) {
                    resolve(json.access_token);
                } else {
                    console.error("Token Error Response:", body);
                    reject(new Error("Failed to get access token"));
                }
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
        content: `<div class="separator" style="text-align: center;"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" border="0" /></div><p>${movie.overview}</p>`
    });

    const options = {
        hostname: 'www.googleapis.com',
        path: `/blogger/v3/blogs/${process.env.BLOG_ID}/posts/`,
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' 
        }
    };

    return new Promise((resolve) => {
        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => { responseData += chunk; });
            res.on('end', () => {
                console.log(`Posted: ${movie.title} - Status: ${res.statusCode}`);
                if (res.statusCode !== 200) {
                    console.log("Error Detail:", responseData);
                }
                resolve();
            });
        });
        req.on('error', (e) => {
            console.error(`Request error: ${e.message}`);
            resolve();
        });
        req.write(postData);
        req.end();
    });
}

(async () => {
    try {
        console.log("Process started...");
        const token = await getNewAccessToken();
        console.log("Token obtained.");

        const options = {
            hostname: 'api.themoviedb.org',
            path: `/3/movie/popular?api_key=${process.env.TMDB_KEY}`,
            method: 'GET'
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', async () => {
                const parsed = JSON.parse(data);
                if (parsed.results) {
                    console.log(`Found ${parsed.results.length} movies.`);
                    for (const movie of parsed.results) {
                        await postToBlogger(movie, token);
                    }
                } else {
                    console.log("API Error / No Data:", data);
                }
            });
        });
        req.on('error', (e) => console.error("Request Error:", e));
        req.end();

    } catch (e) {
        console.error("Critical Error: ", e);
    }
})();
