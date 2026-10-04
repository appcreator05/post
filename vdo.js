// movies.js
const IMAGE_BASE_URL = "https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/";

let allMovies = [
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
