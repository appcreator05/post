// movies.js
const IMAGE_BASE_URL = "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/";

let allMovies = [
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
    "category": "Bollywood Hindi Movie",
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
