const movies = [
    {
        "Titulo": "DRAGON BALL SUPER:SUPER HERO",
        "Duracion": 99,
        "Genero": ["Animación", "Artes Marciales", "Acción", "Fantasía"],
        "Idioma": "Japonés - Doblaje Latino",
        "Pais": "Japon",
        "Director": "Tetsuro Kodama",
        "Guion": ["Akira Toriyama", "Akira Toriyama"],
        "Descripcion": "Secuela de Dragon Ball Super: Broly. Piccolo, personaje emblemático de la historia creada por Akira Toriyama, es el centro de la acción en esta nueva película. En esta ocasión, el Ejército Red Ribbon - al que se enfrentó Goku en el pasado- ha regresado con dos nuevos androides para desafiarle a él y a sus amigos."
    },
    {
        "Titulo": "Una Voz Silenciosa",
        "Duracion": 129,
        "Genero": ["Animación", "Drama", "Romance"],
        "Idioma": "Japonés",
        "Pais": "Japón",
        "Director": "Naoko Yamada",
        "Guion": ["Yoshitoki Oima", "Reiko Yoshida"],
        "Descripcion": "“Koe no Katachi” (Una Voz Silenciosa) es una conmovedora historia realizada por el estudio de animación Kyoto Animation y basada en el manga escrito por Yohitoki Oima sobre la amistad y la empatía, la cuál se desarrolla a través de Shouya, un chico con un pasado vergonzoso ya que cuando era niño intimidó y se burló de la niña nueva del salón llamada..."
    },
    {
        "Titulo": "El tiempo contigo - Tenki no ko (Weathering With You)",
        "Duracion": 112,
        "Genero": ["Animación", "Fantástico", "Drama", "Romance", "Adolescencia", "Amistad", "Sobrenatural"],
        "Idioma": "Japonés",
        "Pais": "Japón",
        "Director": "Makoto Shinkai",
        "Guion": ["Makoto Shinkai"],
        "Descripcion": `Hotaka Morishima es un estudiante de secundaria que se muda a Tokio para dejar atrás su vida en una isla aislada del mundo. Allí conocerá a Akina Amano, una chica con el misterioso poder de manipular y controlar el clima a su antojo. Dirigida y escrita por Makoto Shinkai ("Your Name"). (FILMAFFINITY)`
    },
    {
        "Titulo": "Kimetsu no Yaiba: Mugen Ressha-hen (Demon Slayer: Mugen Train, 2020)",
        "Duracion": 120,
        "Genero": ["Acción", "Fantasía"],
        "Idioma": "Japonés - Doblaje Latino",
        "Pais": "Japón",
        "Director": "Haruo Sotozaki",
        "Guion": ["Koyoharu Gotouge"],
        "Descripcion": "Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan a Kyōjurō Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y les ha preparado una trampa."
    },
    {
        "Titulo": "Gekijouban Bishōjo Senshi Sailor Moon Eternal",
        "Duracion": 81,
        "Genero": ["Animación", "Fantástico", "Acción", "Comedia", "Drama", "Manga", "Magia", "Sobrenatural", "Secuela"],
        "Idioma": "Japonés",
        "Pais": "Japón",
        "Director": "Chiaki Kon",
        "Guion": ["Kazuyuki Fudeyasu", "Naoko Takeuchi"],
        "Descripcion": `Un eclipse solar ocurre repentinamente en el mes de abril. Mientras la luna cubre el sol, Usagi y Chibiusa se encuentran con un Pegaso llamado Helios, que busca dos "doncellas elegidas" para ayudar a romper el sello del Cristal Dorado. Película en dos partes de la saga anime "Sailor Moon", que cubren el arco argumental "Dead Moon / Dream" del manga original.`
    }
];
let id=0;
(function() {
    id = MyGet('movie');
    render();
    renderMore();
    renderLeft();
})();
function render() {
    let html='';
    document.getElementById('back').style.backgroundImage=`url(assets/img/${id}.jpg)`;
    document.getElementById('pic').style.backgroundImage=`url(assets/img/${id}.jpg)`;
    document.getElementById('meta-title').innerText=`Cine Alpha - ${movies[id].Titulo}`;
    document.getElementById('title').innerText=movies[id].Titulo;
    for (let x = 0; x < movies[id].Genero.length; x++) {
        const e = movies[id].Genero[x];
        html+=`<span>${e}</span>`;
    }
    document.getElementById('tag').innerHTML=html;
    document.getElementById('time').innerText=`${movies[id].Duracion} min`;
    document.getElementById('idioma').innerText=movies[id].Idioma;
    document.getElementById('pais').innerText=movies[id].Pais;
    document.getElementById('director').innerText=movies[id].Director;
    html='';
    for (let x = 0; x < movies[id].Guion.length; x++) {
        const e = movies[id].Guion[x];
        html+=`
            <div class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>${e}</span>
            </div>
        `;
    }
    document.getElementById('guion').innerHTML=html;
    document.getElementById('descripcion').innerText=movies[id].Descripcion;
}
function renderMore() {
    let html='';
    for (let x = 0; x < movies.length; x++) {
        const e = movies[x];
        if (id!=x) {
            html+=`
                <a href="?movie=${x}" class="root p-2 poster" title="${e.Titulo}">
                    <div class="root picture mb-2" style="--img: url(../img/${x}.jpg);" back="cover"></div>
                    <span class="h7 txt-ellipsis">${e.Titulo}</span>
                </a>
            `;
        }
    }
    document.getElementById('mas').innerHTML=html;
}
function renderLeft() {
    let html='';
    for (let x = 0; x < movies.length; x++) {
        const e = movies[x];
        if (id!=x) {
            html+=`
                <a href="?movie=${x}" class="d-flex p-2 card mb-3" title="${e.Titulo}">
                    <div class="root picture mr-4" style="--img: url(../img/${x}.jpg);" back="cover"></div>
                    <div class="root col p-0">
                        <span class="h5 txt-ellipsis">${e.Titulo}</span>
                        <span class="h7 txt-lines-4">${e.Descripcion}</span>
                    </div>
                </a>
            `;
        }
    }
    document.getElementById('recomendacion').innerHTML=html;
}
function MyGet(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
