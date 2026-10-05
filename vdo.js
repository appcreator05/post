// movies.js
const IMAGE_BASE_URL = "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/";

let allMovies = [
    {
    "id": "kajolstorege20",
    "title": "My Best Friend's Wedding 2016",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786340817567.jpg",
    "rating": "5.1",
    "link": "go:dev48",
    "cast": "Shu Qi, William Feng, Victoria Song, Rhydian Vaughan, Gala Gordon, Ye Qing, Lobo Chan, Alice Lee, Christian Louboutin,"
},
{
    "id": "kajolstorege20",
    "title": "Even If This Love Disappears Tonight 2025",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786406735379.jpg",
    "rating": "8.5",
    "link": "go:dev49",
    "cast": "Choo Young-woo, Shin Sia, Cho Yu-jung, Jin Ho-eun, Cho Han-chul, Lee Chae-kyung, Jang Yoo-sang, Yun Ki-chang,"
},
{
    "id": "kajolstorege20",
    "title": "Midnight Sun 2018",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786406792602.jpg",
    "rating": "7.8",
    "link": "go:dev50",
    "cast": "Bella Thorne, Patrick Schwarzenegger, Rob Riggle, Quinn Shephard, Ken Tremblett, Suleka Mathew, Jenn Griffin,"
},
{
    "id": "kajolstorege20",
    "title": "Forbidden Fairytale 2025",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786380050944.jpg",
    "rating": "7.4",
    "link": "go:dev51",
    "cast": "Park Ji-hyun, Choi Si-won, Sung Dong-il, Park Geon-il, Hwang Se-on, Seol Woo-in, Park Cheol-min, Kim Young-ah,"
},
{
    "id": "redchilliesaps",
    "title": "The Kill List 2014",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786381043820.jpg",
    "rating": "5.6",
    "link": "go:dev52",
    "cast": ", No description available.,"
},
{
    "id": "kajolstorege19",
    "title": "Follow My Voice 2025",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786381114465.jpg",
    "rating": "7.4",
    "link": "go:dev53",
    "cast": "Berta Castañé, Jae Woo Yang, Claudia Traisac, Fernando Guallar, Itziar Ituño, Nuno Gallego, Yasmina Drissi,"
},
{
    "id": "kajolstorege2",
    "title": "Crazy Romance 2019",
    "category": "Korean Hindi Dubbed",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786735932125.jpg",
    "rating": "6.8",
    "link": "go:dev54",
    "cast": "Kim Rae-won, Gong Hyo-jin, Kang Ki-young, Jung Woong-in, Jang So-yeon, Lee Chae-eun, Chung Hye-lyn, Son Woo-hyeon,"
},
{
    "id": "kajolstorege16",
    "title": "The Negotiation 2018",
    "category": "Korean Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786738841344.jpg",
    "rating": "7.1",
    "link": "go:dev55",
    "cast": "Son Ye-jin, Hyun Bin, Kim Sang-ho, Jang Young-nam, Jang Kwang, Jo Young-jin, Kim Jong-goo, Kim Min-sang, Han Gi-joong,"
},
{
    "id": "myapkcreator24",
    "title": "Very Ordinary Couple 2013",
    "category": "Korean Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786774767113.jpg",
    "rating": "6.0",
    "link": "go:dev56",
    "cast": "Lee Min-ki, Kim Min-hee, Kim Kang-hyun, Ra Mi-ran, Choi Mu-sung, Park Byung-eun, Ha Yeon-soo, Shin Yeon-sook,"
},
{
    "id": "kajolstorege15",
    "title": "My Brilliant Life 2014",
    "category": "Korean Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786776064460.jpg",
    "rating": "7.4",
    "link": "go:dev57",
    "cast": "Song Hye-kyo, Gang Dong-won, Jo Sung-mok, Baek Il-seob, Heo Joon-seok, Kim So-jin, Cha Eun-woo, Chae Seo-jin,"
},
{
    "id": "kajolstorege14",
    "title": "Love 911 2012",
    "category": "Korean Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786776573177.jpg",
    "rating": "7.3",
    "link": "go:dev58",
    "cast": "Han Hyo-joo, Go Soo, Don Lee, Kim Seung-oh, Hyun Jyu-ni, Jin Seo-yeon, Yoon Se-woong, Oh Yu-na, Lee Doa, Jo Kyoung-hoon,"
},
{
    "id": "kajolstorege14",
    "title": "Because I Love You 2017",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786812142965.jpg",
    "rating": "7.0",
    "link": "go:dev59",
    "cast": "Cha Tae-hyun, Kim You-jung, Seo Hyun-jin, Lim Ju-hwan, Sunwoo Yong-nyeo, Park Keun-hyong, Sung Dong-il, Oh Na-ra,"
},
{
    "id": "myplaylab105",
    "title": "The Moon 2023",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786812293936.jpg",
    "rating": "6.5",
    "link": "go:dev60",
    "cast": "Sul Kyung-gu, Doh Kyung-soo, Kim Hee-ae, Park Byung-eun, Cho Han-chul, Choi Byung-mo, Hong Seung-hee, Lee Sung-min,"
},
{
    "id": "myplaylab105",
    "title": "The Magician 2015",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786812480107.jpg",
    "rating": "6.1",
    "link": "go:dev61",
    "cast": "Yoo Seung-ho, Go Ara, Lee Kyung-young, Jo Yoon-hee, Kwak Do-won, Park Cheol-min, Jo Dal-hwan, Jang Yoo-sang,"
},
{
    "id": "myplaylab105",
    "title": "Mood of the Day 2016",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786812544488.jpg",
    "rating": "7.2",
    "link": "go:dev62",
    "cast": "Moon Chae-won, Yoo Yeon-seok, Jo Jae-yun, Kim Seul-gi, Park Min-woo, Lee Yeon-doo, Kim Dae-ryung, Lee Ju-woo,"
},
{
    "id": "myplaylab105",
    "title": "Always 2011",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786813093934.jpg",
    "rating": "7.8",
    "link": "go:dev63",
    "cast": "So Ji-sub, Han Hyo-joo, Kang Shin-il, Park Cheol-min, Oh Kwang-rok, Kim Mi-kyeong, Jin Goo, Jung Jae-jin,"
},
{
    "id": "myplaylab105",
    "title": "Ditto 2022",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786813501753.jpg",
    "rating": "6.8",
    "link": "go:dev64",
    "cast": "Yeo Jin-goo, Cho Yi-hyun, Kim Hye-yoon, Na In-woo, Bae In-hyuk, Roh Jae-won, Nam Min-woo, Lim Yu-bin, Yoo Jae-myung,"
},
{
    "id": "kajolstorege10",
    "title": "Architecture 101 2012",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786866957256.jpg",
    "rating": "7.3",
    "link": "go:dev65",
    "cast": "Uhm Tae-woong, Han Ga-in, Lee Je-hoon, Suzy, Cho Jung-seok, Yoo Yeon-seok, Kim Eui-sung, Cho Hyun-chul, Go Joon-hee,"
},
{
    "id": "kajolstorege10",
    "title": "RV: Resurrected Victims 2017",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786881045053.jpg",
    "rating": "5.6",
    "link": "go:dev66",
    "cast": "Kim Rae-won, Kim Hae-sook, Sung Dong-il, Jeon Hye-jin, Jang Young-nam, Lee Ji-won, Oh Dae-hwan, Lee Jun-hyeok,"
},
{
    "id": "kajolstorege11",
    "title": "Be With You 2018",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786882132963.jpg",
    "rating": "8.2",
    "link": "go:dev67",
    "cast": "So Ji-sub, Son Ye-jin, Kim Ji-hwan, Ko Chang-seok, Lee Jun-hyeok, Son Yeo-eun, Lee You-jin, Kim Hyeon-soo, Bae Yu-ram,"
},
{
    "id": "kajolstorege11",
    "title": "Sex Is Zero 2002",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786883344029.jpg",
    "rating": "6.2",
    "link": "go:dev68",
    "cast": "Im Chang-jung, Ha Ji-won, Choi Sung-kook, Yoo Chae-young, Jung Min, Jin Jae-young, Choi Won-young, Lee Si-yeon,"
},
{
    "id": "kajolstorege11",
    "title": "A Time to Remember 2021",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786884487545.jpg",
    "rating": "7.1",
    "link": "go:dev69",
    "cast": "Lee Sung-yeol, Bae Yoo-bin, Nam Kyu-hee, Park Sung-woo, Yu Yeon-Su, Park Eun-woo,"
},
{
    "id": "webmplex",
    "title": "Revenge Girl 2017",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786885968915.jpg",
    "rating": "5.4",
    "link": "go:dev70",
    "cast": "Mirei Kiritani, Nobuyuki Suzuki, Sho Kiyohara, Fumika Baba, Aimi Satsukawa, Shin'ya Ohwada, Aisa Takeuchi, Shiho Sasaki,"
},
{
    "id": "webmplex",
    "title": "Life Is Beautiful 2022",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786886176509.jpg",
    "rating": "6.9",
    "link": "go:dev71",
    "cast": "Ryu Seung-ryong, Yum Jung-ah, Park Se-wan, Ong Seong-wu, Shim Dal-gi, Ha Hyun-sang, Kim Da-in, Park Young-kyu,"
},
{
    "id": "kajolstorege13",
    "title": "Love My Scent 2023",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786886473002.jpg",
    "rating": "4.9",
    "link": "go:dev72",
    "cast": "Yoon Shi-yoon, Seol In-a, Steve Sanghyun Noh, Moon Ji-in, Lee Kyu-bok, Kim Young-woong, Heo Eun-jung, Im Do-hwa,"
},
{
    "id": "kajolstorege13",
    "title": "Midnight 2021",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786886542005.jpg",
    "rating": "7.2",
    "link": "go:dev73",
    "cast": "Jin Ki-joo, Wi Ha-jun, Park Hoon, Kil Hae-yeon, Kim Hye-yoon, Park Ji-hoon, Jung Won-chang, Lee Sang-hee, Eun-Woo Bae,"
},
{
    "id": "kajolstorege14",
    "title": "Steal My Heart 2013",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786889399328.jpg",
    "rating": "6.7",
    "link": "go:dev74",
    "cast": "Kim A-joong, Joo Won, Ju Jin-mo, Baek Do-bin, Bae Sung-woo, Cha Tae-hyun, Ju Seok-tae, Park Cheol-min, Kim Hie-won,"
},
{
    "id": "kajolstorege14",
    "title": "Student A 2018",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786889655695.jpg",
    "rating": "6.2",
    "link": "go:dev75",
    "cast": "Kim Hwan-hee, Suho, Lee Jong-hyuk, Jung Da-bin, Yoo Jae-sang, Jeong Da-eun, Kim Hyun-bin, Uh Sung-wook, Jong Ho,"
},
{
    "id": "webmplex",
    "title": "Love Conquest 2020",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786890333055.jpg",
    "rating": "4.5",
    "link": "go:dev76",
    "cast": "Kang Ye-bin, Oh Hee-joong, Shin Sae-rom, Kim Do-hyun, Ha Ra, Yeong-seok had a crush on his club mate,"
},
{
    "id": "kajolstorege8",
    "title": "578: Magnum 2022",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786901309998.jpg",
    "rating": "6.0",
    "link": "go:dev77",
    "cast": "Alexandre Nguyen, Thanh Thảo, H'Hen Niê, Hoàng Phúc, Ngọc Tình, Tuấn Hạc, Jessica Minh Anh, Thảo Tâm, Minh Quang Nguyễn,"
},
{
    "id": "myskdstore31",
    "title": "Train to Busan 2016",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787329924750.jpg",
    "rating": "7.8",
    "link": "go:dev78",
    "cast": "Gong Yoo, Kim Su-an, Jung Yu-mi, Don Lee, Choi Woo-shik, An So-hee, Kim Eui-sung, Ye Su-jeong, Park Myung-shin,"
},
{
    "id": "unknownstorage",
    "title": "The Negotiation 2018",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787333004941.jpg",
    "rating": "7.1",
    "link": "go:dev79",
    "cast": "Son Ye-jin, Hyun Bin, Kim Sang-ho, Jang Young-nam, Jang Kwang, Jo Young-jin, Kim Jong-goo, Kim Min-sang, Han Gi-joong,"
},
{
    "id": "redchilliesaps",
    "title": "The Mermaid 2016",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787480319229.jpg",
    "rating": "6.6",
    "link": "go:dev80",
    "cast": "Lin Yun, Deng Chao, Zhang Yuqi, Show Lo, Tsui Hark, Wen Zhang, Kris Wu, Lee Sheung-Ching, Lu Zhengyu, Chiu Chi-Ling,"
},
{
    "id": "mysiteads99",
    "title": "009-1: The End of the Beginning 2013",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787497400589.jpg",
    "rating": "5.9",
    "link": "go:dev81",
    "cast": "Mayuko Iwasa, Minehiro Kinomoto, Nao Nagasawa, Mao Ichimichi, Aya Sugimoto, Naoto Takenaka, Mami Abe, Ryohei Abe,"
},
{
    "id": "myskdstore25",
    "title": "Kakegurui 2: Desperate Russian Roulette 2021",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787587399630.jpg",
    "rating": "6.7",
    "link": "go:dev82",
    "cast": "Minami Hamabe, Mahiro Takasugi, Ryusei Fujii, Aoi Morikawa, Elaiza Ikeda, Yuma Yamoto, Yurika Nakamura, Natsume Mito,"
},
{
    "id": "unknownstorage",
    "title": "Embrace Again 2021",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787589390439.jpg",
    "rating": "7.4",
    "link": "go:dev83",
    "cast": "Huang Bo, Zhou Dongyu, Jia Ling, Wu Yanshu, Zhu Yilong, Xu Fan, Liu Haoran, Benz Hui Siu-Hung, Wang Xiao, Zhang Youhao,"
},
    {
    "id": "kajolstorege21",
    "title": "Atsay Killer 2026",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786443832621.jpg",
    "rating": "5.5",
    "link": "go:dev21",
    "cast": "Ping Medina, Dolly Watson, Kim Salinas, A powerful but sinister patriarch hides a deadly secret within his household,"
},
{
    "id": "myapkcreator24",
    "title": "Sawsawan 2026",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786350597882.jpg",
    "rating": "5.0",
    "link": "go:dev22",
    "cast": "Karen Lopez, Rhian Rivera, Amor Lapus, Allen Legazpi, Jio Yoshida, Aeron Henry Cruz, Joko Rivera, Karen plays Dolor,"
},
{
    "id": "kajolstorege20",
    "title": "Kesong Puti 2026",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786350921902.jpg",
    "rating": "3.8",
    "link": "go:dev23",
    "cast": "Apphle Celso, Van Allen Ong, Rinoa Halili, Mark Dionisio, Aya Fortes, Eddison Fernandez,"
},
{
    "id": "kajolstorege13",
    "title": "Private Tutor 2024",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786351881349.jpg",
    "rating": "4.0",
    "link": "go:dev24",
    "cast": "Christy Imperial, Zsara Tiblani, Mark Dionisio, Pia Montes, VJ Vera, Juwilyn Legaspi, Melanie Tuquero,"
},
{
    "id": "kajolstorege20",
    "title": "Abot Langit 2026",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786406571578.jpg",
    "rating": "5.0",
    "link": "go:dev25",
    "cast": "Aliya Raymundo, JC Tan, Jio Yoshida, Zel Fernandez, Jetleline Esquivel, Aziely Gonzales, Rosalind Pajarillo,"
},
{
    "id": "kajolstorege20",
    "title": "Ligo 2026",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786406663329.jpg",
    "rating": "5.0",
    "link": "go:dev26",
    "cast": "Ayanna Misola, Step into VMX’s hottest bathing scenes—where steam reveals more than skin,"
},
{
    "id": "kajolstorege9",
    "title": "Beyond the Sky 2022",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786381420208.jpg",
    "rating": "4.4",
    "link": "go:dev27",
    "cast": "Christine Bermas, Baron Geisler, Chloe Jenna, Quinn Carrillo, Milana Ikimoto, Ricky Davao, Ivan Padilla,"
},
{
    "id": "kajolstorege14",
    "title": "Uhaw 2024",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786381537939.jpg",
    "rating": "4.7",
    "link": "go:dev28",
    "cast": "Ataska Mercado, Itan Magnaye, Angeli Khang, Mark Dionisio, CJ Barinaga, Chloey Largado, Gaye Angeles, Ayah Alfonso,"
},
{
    "id": "kajolstorege18",
    "title": "Hipak 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786479554184.jpg",
    "rating": "7.8",
    "link": "go:dev29",
    "cast": "Sean de Guzman, Athena Red, Stephanie Raz, Anne Marie Gonzales, Ivan Ponce, Lester San Juan, Jomar Carduce,"
},
{
    "id": "kajolstorege18",
    "title": "Ligaya 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786480620659.jpg",
    "rating": "5.7",
    "link": "go:dev30",
    "cast": "Shiena Yu, Vince Rillon, Cess Garcia, Julianne Richards, Malou Canzana, Marilyn Obligado, Minda Bernada,"
},
{
    "id": "kajolstorege18",
    "title": "My Love Will Make You Disappear 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786480846274.jpg",
    "rating": "8.5",
    "link": "go:dev31",
    "cast": "Kim Chiu, Paulo Avelino, Wilma Doesnt, Lovely Abella, Benj Manalo, Nico Antonio, Migs Almendras, Martin Escudero,"
},
{
    "id": "kajolstorege19",
    "title": "Mayumi 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786480905252.jpg",
    "rating": "6.7",
    "link": "go:dev32",
    "cast": "Aliya Raymundo, Marco Mora, Salome Salvi, Gboy Pablo, Maria Denice Valeda, Maria Fe Maquiniana, Herald Chavez,"
},
{
    "id": "kajolstorege2",
    "title": "L: Lakad 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786565556581.jpg",
    "rating": "8.0",
    "link": "go:dev33",
    "cast": "Horace Mendoza, Vern Kaye, Gold Aceron, Paula Santos, Earl Ignacio, Roman Perez Jr., Ghen Gabriel, Jay Leando,"
},
{
    "id": "kajolstorege16",
    "title": "Violet 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786739100625.jpg",
    "rating": "6.4",
    "link": "go:dev34",
    "cast": "Aliya Raymundo, Christy Imperial, Dani Yoshida, Ralph Engle, Amid the colorful Panagbenga Festival,"
},
{
    "id": "kajolstorege16",
    "title": "Walker 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786773808136.jpg",
    "rating": "7.6",
    "link": "go:dev35",
    "cast": "Robb Guinto, Stephanie Raz, Mark Dionisio, Vince Rillon, Natts Everett, John Arceo, Lea Bernabe, Seonwoo Kim,"
},
{
    "id": "kajolstorege16",
    "title": "Puri for Rent 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786774488277.jpg",
    "rating": "6.5",
    "link": "go:dev36",
    "cast": "Aiko Garcia, Van Allen Ong, Marlon Marcia, Roxanne De Vera, Mhack Morales, Tabs Sumulong, Alex Espartero,"
},
{
    "id": "mymovieapps105",
    "title": "Teacher's Pet 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786774823142.jpg",
    "rating": "5.6",
    "link": "go:dev37",
    "cast": "Micaella Raz, Apple Dy, Gold Aceron, Robin, a young student, is obsessed with Tanya,"
},
{
    "id": "kajolstorege14",
    "title": "Krista 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786812071871.jpg",
    "rating": "2.5",
    "link": "go:dev38",
    "cast": "Cess Garcia, Karl Aquino, Zsara Tiblani, JD Aguas, Elmo Elarmo Jr., Mark Cortez, Winspy Redukto, Ambrosio Destua Jr.,"
},
{
    "id": "myplaylab105",
    "title": "Nurse Abi 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786813738402.jpg",
    "rating": "3.5",
    "link": "go:dev39",
    "cast": "Vince Rillon, Alessandra Cruz, Marc Capilador, Aina Ashley Roque, Reynaline Delos Santos, Heart Puyong, Virginia Garcia,"
},
{
    "id": "myplaylab105",
    "title": "Foursome 2023",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786813804272.jpg",
    "rating": "5.5",
    "link": "go:dev40",
    "cast": "Armina Alegre, Nico Locco, Mark Dionisio, Robb Guinto, Dyessa Garcia, Ardy Raymundo, Erica Dales, Jomar Valerio,"
},
{
    "id": "kajolstorege10",
    "title": "Huwad 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786865720067.jpg",
    "rating": "4.0",
    "link": "go:dev41",
    "cast": "Azi Acosta, Aerol Carmelo, Chloe Jenna, Simon Ibarra, Katrina Paula, Mark De Jesus, James Suba, Lea Bernabe, Ina Alegre,"
},
{
    "id": "kajolstorege10",
    "title": "Maliko 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786866506811.jpg",
    "rating": "4.3",
    "link": "go:dev42",
    "cast": "Sahara Bernales, Eunice Santos, Richard Solano, James Lomahan, Peggy Rico Tuazon, Ardy Raymundo, Ada Hermosa,"
},
{
    "id": "kajolstorege16",
    "title": "Hiraya 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786881326855.jpg",
    "rating": "4.0",
    "link": "go:dev43",
    "cast": "Rica Gonzales, Denise Esteban, Quinn Carrillo, Itan Magnaye, Nathan Rojas, Panteen Palanca, Tabs Sumulong, Jhai Slvr,"
},
{
    "id": "myplaylab105",
    "title": "Cita 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786883945512.jpg",
    "rating": "5.2",
    "link": "go:dev44",
    "cast": "Erika Balagtas, Zia Zamora, Renzo Ruiz, Arjay Bautista, Francis Mata, Trixie Emmanuel,"
},
{
    "id": "kajolstorege12",
    "title": "Package Deal 2024",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786885485402.jpg",
    "rating": "5.4",
    "link": "go:dev45",
    "cast": "Angelica Hart, Mark Anthony Fernandez, Mariane Saint, Yuki Sakamoto, Sofia Vevora, Micahel Pangan, Oscar Mananta,"
},
{
    "id": "kajolstorege12",
    "title": "Balik Taya 2023",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786889751104.jpg",
    "rating": "2.9",
    "link": "go:dev46",
    "cast": "Angeli Khang, Jela Cuenca, Kiko Estrada, Azi Acosta, Chesca Paredes, Amor Lapus, Benz Sangalang, Nor Domingo,"
},
{
    "id": "myplaylab105",
    "title": "Pamasahe 2022",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786900682390.jpg",
    "rating": "6.3",
    "link": "go:dev47",
    "cast": "Mark Anthony Fernandez, Felix Roco, Azi Acosta, Julio Díaz, Shirley Fuentes, Shiena Yu, Alvaro Oteyza, Rash Flores,"
},
    {
    "id": "kajolstorege21",
    "title": "Snake Woman 2025",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1791138531451.jpg",
    "rating": "7.0",
    "link": "go:dev9",
    "cast": "Liu Lincheng, Jin Yangyang, Grace Qiu, Zhong Lei, Michelle Hu, Du Shuai, Yan Luhan, Li Gaoji, Yu Qinghui, Wang Zhao,"
},
{
    "id": "kajolstorege21",
    "title": "Anand Ashram 1977",
    "category": "Bengali Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787738846257.jpg",
    "rating": "8.0",
    "link": "go:dev10",
    "cast": "Ashok Kumar, Uttam Kumar, Sharmila Tagore, Rakesh Roshan, Moushumi Chatterjee, Utpal Dutt, Anita Guha,"
},
{
    "id": "kajolstorege21",
    "title": "My Best Friend, His Girlfriend and Me 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787689131891.jpg",
    "rating": "6.0",
    "link": "go:dev11",
    "cast": "Kostja Ullmann, Janina Uhse, David Kross, Ferdinand Hofer, Clara Immel, Mira Huber, Larissa Sirah Herden, Anna Herrmann,"
},
{
    "id": "kajolstorege21",
    "title": "Hogi Pyaar Ki Jeet 1999",
    "category": "Bollywood 90s Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787517459743.jpg",
    "rating": "5.6",
    "link": "go:dev12",
    "cast": "Ajay Devgn, Neha, Arshad Warsi, Mayuri Kango, Arjun, Ketki Dave, Mohan Joshi, Adi Irani, Shiva Rindani, Raza Murad,"
},
{
    "id": "kajolstorege21",
    "title": "Awarapan 2 2026",
    "category": "Bollywood Hindi Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786913575110.jpg",
    "rating": "0.0",
    "link": "go:dev13",
    "cast": "Emraan Hashmi, Shabana Azmi, Disha Patani, Suvinder Vicky, Vijayant Kohli, Atul Kumar, Aniruddh Rawal, Shriya Saran,"
},
{
    "id": "kajolstorege18",
    "title": "Kirot 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786480685004.jpg",
    "rating": "5.0",
    "link": "go:dev14",
    "cast": "A conservative woman, engaged to her high school sweetheart,"
},
{
    "id": "kajolstorege20",
    "title": "Bagong Tukso 2026",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786439848559.jpg",
    "rating": "5.0",
    "link": "go:dev15",
    "cast": "Meet the freshest faces of VMX! Apphle Celso, Margaret Diaz, Heart Fox, and Allison Ross turn up the heat,"
},
{
    "id": "jmatthes903",
    "title": "The Odyssey 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786440705616.jpg",
    "rating": "8.0",
    "link": "go:dev16",
    "cast": "Matt Damon, Tom Holland, Anne Hathaway, Robert Pattinson, Himesh Patel, Charlize Theron, John Leguizamo, Travis Scott,"
},
{
    "id": "kajolstorage21",
    "title": "What Death Leaves Behind 2018",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441000169.jpg",
    "rating": "4.5",
    "link": "go:dev17",
    "cast": "Christopher Mann, Vincent Young, Kelly Dowdle, Erin O'Brien, Johnny Alonso, Alexandra Tydings, Jesse Bradley,"
},
{
    "id": "kajolstorege20",
    "title": "cute girls",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/post@main/img/tagalo.jpg",
    "rating": "5.6",
    "link": "go:dev18",
    "cast": "tagalog movie,"
},
{
    "id": "kajolstorage21",
    "title": "Angkinin Mo Ako 2026",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441100143.jpg",
    "rating": "5.0",
    "link": "go:dev19",
    "cast": "Cess Garcia, Sheena Cole, Juan Calma, Dara Lima, Sarah Pulido,"
},
{
    "id": "kajolstorege19",
    "title": "Unli Pop 2025",
    "category": "Tagalog Movie",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441321430.jpg",
    "rating": "5.7",
    "link": "go:dev20",
    "cast": "Micaella Raz, Marco Gomez, Julianne Richards, JD Aguas, Reina Castillo, Zsa Zsa Zobel, Adriana Roces, Lyka Casaje,"
},
{
    "id": "kajolstorege21",
    "title": "Robin Hood 2018",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1790710906565.jpg",
    "rating": "5.9",
    "link": "go:dev2",
    "cast": "Taron Egerton, Jamie Foxx, Ben Mendelsohn, Eve Hewson, Jamie Dornan, Tim Minchin, Paul Anderson, F. Murray Abraham,"
},
{
    "id": "kajolstorege21",
    "title": "Hungry 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1790710689286.jpg",
    "rating": "7.0",
    "link": "go:dev3",
    "cast": "Madison Davenport, Tracey Bonner, Joaquim de Almeida, Michel Curiel, Samantha Coughlan, Olivia Bernstone, Jim Meskimen,"
},
{
    "id": "kajolstorege21",
    "title": "Sultana 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1790710529178.jpg",
    "rating": "7.3",
    "link": "go:dev4",
    "cast": "Tuba Büyüküstün, Derya Pınar Ak, Seray Kaya, Begüm Akkaya, Rojbin Erden, Şirin Saldamlı, Itır Esen, Taro Emir Tekin,"
},
{
    "id": "kajolstorege19",
    "title": "Wanted: Girlfriend 2024",
    "category": "Tagalog Movie",
    "poster": "https://raw.githubusercontent.com/appcreator05/768/main/5/1786380259731.jpg",
    "rating": "5.2",
    "link": "go:dev5",
    "cast": "Shiena Yu, Yuki Sakamoto, Reina Castillo, Allan Villafuerte, Erica Dales, Jericho Ponce, Lau Apostol, Anica Paljapay,"
},
{
    "id": "kajolstorege21",
    "title": "Evil Dead Burn 2026",
    "category": "Horror Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788122147137.jpg",
    "rating": "7.8",
    "link": "go:dev6",
    "cast": "Souheila Yacoub, Tandi Wright, Hunter Doohan, Luciane Buchanan, Erroll Shand, Maude Davey, George Pullar,"
},
{
    "id": "kajolstorege21",
    "title": "The Last Sunrise 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788121606234.jpg",
    "rating": "7.0",
    "link": "go:dev7",
    "cast": "Maia Reficco, Eva Longoria, Fernando Lindez, Chloé Sweetlove, Andrés Velencoso, Stefanie Martini, Sabrina Bartlett,"
},
{
    "id": "kajolstorege21",
    "title": "The Bay 2026",
    "category": "Hollywood Hindi Dubbed",
    "poster": "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788120721884.jpg",
    "rating": "5.8",
    "link": "go:dev8",
    "cast": "Francesca Eastwood, Dani Oliveros, Alexander Wraith, Ta'imua, Calan Scherer, Destiny Benner, Best friends Emma and Lani,"
}
];
