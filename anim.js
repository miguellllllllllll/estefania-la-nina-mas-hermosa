var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

if (audio && lyrics) {
  var lyricsData = [
    { text: "Je t'aime, je te quitte", time: 0 },
    { text: "Je t'aime, je te quitte", time: 3 },
    { text: "Je t'aime, je te quitte", time: 6 },
    { text: "T'es la meilleure chose qui m'est arrivée", time: 9 },
    { text: "Mais aussi la pire chose qui m'est arrivée", time: 12 },
    { text: "Ce jour où je t'ai rencontrée, j'aurais peut-être préféré", time: 15 },
    { text: "Que ce jour ne soit jamais arrivé(arrivé)", time: 18 },
    { text: "La pire des bénédictions", time: 21 },
    { text: "La plus belle des malédictions", time: 23 },
    { text: "De toi je devrais m'éloigner", time: 26 },
    { text: "Mais comme dit le dicton", time: 28 },
    { text: "Plutôt qu'être seul mieux vaut être mal accompagné", time: 30 },
    { text: "Tu sais ce qu'on dit", time: 32 },
    { text: "Sois près d'tes amis les plus chers", time: 35 },
    { text: "Mais aussi", time: 37 },
    { text: "Encore plus près de tes adversaires", time: 40 },
    { text: "Mais ma meilleure ennemie c'est toi", time: 43 },
    { text: "Fuis-moi, le pire c'est toi et moi", time: 45 },
    { text: "Mais si tu cherches encore ma voix", time: 54 },
    { text: "Oublie-moi, le pire c'est toi et moi", time: 56 },
    { text: "Pourquoi ton prénom me blesse", time: 65 },
    { text: "Quand il se cache, juste là dans l'espace?", time: 70 },
    { text: "C'est quelle émotion, D'la haine", time: 76 },
    { text: "Ou la douceur quand j'entends ton prénom ?", time: 80 },
    { text: "Je t'avais dit, ne regarde pas en arrière", time: 87 },
    { text: "Le passé qui te suit, te fait la guerre", time: 92 },
    { text: "Mais ma meilleure ennemie c'est toi", time: 97 },
    { text: "Fuis-moi, le pire c'est toi et moi", time: 100 },
    { text: "Mais ma meilleure ennemie c'est toi", time: 108 },
    { text: "Fuis-moi, el peor c'est toi et moi", time: 110 },
    { text: "Je t'aime, je te quitte", time: 117 },
    { text: "Je t'aime, je te quitte", time: 119 }
  ];

  function updateLyrics() {
    var time = audio.currentTime;
    var currentLine = lyricsData
      .filter(line => time >= line.time)
      .pop();

    if (currentLine) {
      lyrics.innerHTML = currentLine.text;
    }
  }

  audio.addEventListener("timeupdate", updateLyrics);

  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    if (titulo) {
      titulo.style.animation = "fadeOut 3s ease-in-out forwards";
      setTimeout(() => {
        titulo.style.display = "none";
      }, 3000);
    }
  }

  setTimeout(ocultarTitulo, 216000);
}
