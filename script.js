// Function play note
document.write("<br><br>");
context = new AudioContext();
o = null;
g = null;

function sleep(milliseconds) {

  const date = Date.now();
  let currentDate = null;
  while (currentDate - date < milliseconds) {
    currentDate = Date.now();
  }

}

function playNote(frequencies, type, time) {

  for (i in frequencies) {
    o = context.createOscillator();
    g = context.createGain();
    o.type = type;
    o.connect(g);
    o.frequency.value = frequencies[i];
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  }

  sleep(time);

}

// Chords

notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
types = ["Major", "Minor", "Diminished"];

key = Math.floor(Math.random() * 11);
degrees = [
  notes[(key) % 12] + " " + types[0],    // I
  notes[(key + 2) % 12] + " " + types[1],  // II
  notes[(key + 4) % 12] + " " + types[1],  // III
  notes[(key + 5) % 12] + " " + types[0],  // IV
  notes[(key + 7) % 12] + " " + types[0],  // V
  notes[(key + 9) % 12] + " " + types[1],  // VI
  notes[(key + 11) % 12] + " " + types[2]  // VII
];

progression = [
  degrees[0]
];
amount = Math.floor(Math.random() * 6);
for (i = 0; i < amount; i++) {
  progression.push(degrees[Math.floor(Math.random() * 4) + 1]);
  while (progression[i + 1] === progression[i]) progression[i + 1] = degrees[Math.floor(Math.random() * 4) + 1];
}

progression.push(degrees[Math.floor(Math.random() * 2) + 3]);
while (progression[progression.length - 1] === progression[progression.length - 2]) progression[progression.length - 1] = degrees[Math.floor(Math.random() * 2) + 3];

progression.push(degrees[0]);

document.write("<center>Key: " + degrees[0]);
document.write("<br>");
document.write("\nProgression: ");
for (i in progression) { 
    if (i !== progression.length - 1) {
        document.write(progression[i] + ", " ); 
    } else {
        document.write(progression[i]);
    }
}

noteFreqs = {
  "C4": 261.6,
  "C#4": 277.2,
  "D4": 293.7,
  "D#4": 311.1,
  "E4": 329.6,
  "F4": 349.2,
  "F#4": 370.0,
  "G4": 392.0,
  "G#4": 415.3,
  "A4": 440.0,
  "A#4": 466.2,
  "B4": 493.9,
  "C5": 523.3,
  "C#5": 554.4,
  "D5": 587.3,
  "D#5": 622.3,
  "E5": 659.3,
  "F5": 698.5,
  "F#5": 740.0
};

Cmaj = ["C4", "E4", "G4"];
Cmin = ["C4", "D#4", "G4"];
Csmaj = ["C#4", "F4", "G#4"];
Csmin = ["C#4", "E4", "G#4"];
Dmaj = ["D4", "F#4", "A4"];
Dmin = ["D4", "F4", "A4"];
Dsmaj = ["D#4", "G4", "A#4"];
Dsmin = ["D#4", "F#4", "A#4"];
Emaj = ["E4", "G#4", "B4"];
Emin = ["E4", "G4", "B4"];
Fmaj = ["F4", "A4", "C5"];
Fmin = ["F4", "G#4", "C5"];
Fsmaj = ["F#4", "A#4", "C#5"];
Fsmin = ["F#4", "A4", "C#5"];
Gmaj = ["G4", "B4", "D5"];
Gmin = ["G4", "A#4", "D5"];
Gsmaj = ["G#4", "C5", "D#5"];
Gsmin = ["G#4", "B4", "D#5"];
Amaj = ["A4", "C#5", "E5"];
Amin = ["A4", "C5", "E5"];
Asmaj = ["A#4", "D5", "F5"];
Asmin = ["A#4", "C#5", "F5"];
Bmaj = ["B4", "D#5", "F#5"];
Bmin = ["B4", "D5", "F#5"];

allChords = [
  Cmaj, Cmin,
  Csmaj, Csmin,
  Dmaj, Dmin,
  Dsmaj, Dsmin,
  Emaj, Emin,
  Fmaj, Fmin,
  Fsmaj, Fsmin,
  Gmaj, Gmin,
  Gsmaj, Gsmin,
  Amaj, Amin,
  Asmaj, Asmin,
  Bmaj, Bmin
];

allChords_Names = [
  "C Major", "C Minor",
  "C# Major", "C# Minor",
  "D Major", "D Minor",
  "D# Major", "D# Minor",
  "E Major", "E Minor",
  "F Major", "F Minor",
  "F# Major", "F# Minor",
  "G Major", "G Minor",
  "G# Major", "G# Minor",
  "A Major", "A Minor",
  "A# Major", "A# Minor",
  "B Major", "B Minor"
];

// Create piece with name
// {arpeggio}_{progression}_{tempo}
loadName = (load) => {
  idx = 0;
  arpeggio = load[idx];
  idx += 2;
};

// Melody

tempo = Math.floor(Math.random() * 100) + 100;
document.write("<br>Tempo: ");
document.write(tempo);
type = "triangle";
arpeggio = Math.floor(Math.random() * 6);

//document.write("<br>" + arpeggio);
time = (tempo, length) => { return ((length * 60000) / tempo); };
// melody = []

// Name
document.write("<br>Name: ");
pName = "";
pName += arpeggio + "_";
for (i in progression) {
  pName += progression[i][0] + progression[i][1];
}
pName += "_" + tempo;
document.write(pName);

// Play

document.write("<br><br>");

LEFT = (innerWidth / 2) - (55 * 3);

compose = document.createElement("button");
myDiv = compose;
myDiv.innerHTML = "Compose";
myDiv.setAttribute("id", "composeBtn");
document.body.appendChild(myDiv);
myDiv.style.background = "#4B42F5";
myDiv.style.color = "#BDBFBF";
myDiv.style.fontSize = "18px";
myDiv.style.marginLeft = LEFT + "px";
myDiv.style.borderColor = "black";
myDiv.style.borderWidth = "3px";
myDiv.style.borderRadius = "10px";

compose.onmouseover = () => {
  compose.style.background = "#373096";
};

compose.onmouseout = () => {
  compose.style.background = "#4B42F5";
};

compose.onclick = () => {
  location.reload();
};

play = document.createElement("button");
myDiv = play;
myDiv.innerHTML = "Play";
document.body.appendChild(myDiv);
myDiv.setAttribute("id", "playBtn");
myDiv.style.background = "#4B42F5";
myDiv.style.color = "#BDBFBF";
myDiv.style.fontSize = "18px";
myDiv.style.marginLeft = "20px";
myDiv.style.borderColor = "black";
myDiv.style.borderWidth = "3px";
myDiv.style.borderRadius = "10px";

play.onmouseover = () => {
    play.style.background = "#373096";
};

play.onmouseout = () => {
  play.style.background = "#4B42F5";
};


play.onclick = () => {
    if (arpeggio === 0) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]], noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]], noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]], type, time(tempo, 1));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]], type, time(tempo, 0.5));
        }
    } else if (arpeggio === 1) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]], type, time(tempo, 0.5));
        }
    } else if (arpeggio === 2) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]*2], type, time(tempo, 0.5));
        }
    } else if (arpeggio === 3) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/4], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/4], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/4], type, time(tempo, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2], type, time(tempo, 0.5));
        }
    } else if (arpeggio === 4) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/2], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/4, 1/8));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/4], type, time(tempo/4, 1/8));

        }
    } else if (arpeggio === 5) {
        for (i in progression) {
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2], type, time(tempo/2, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/2, 0.5));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/4], type, time(tempo/2, 0.25));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/4], type, time(tempo/2, 0.25));
            playNote([noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2], type, time(tempo/2, 0.5));
        }
    }

    if (progression.length === 3 || progression.length === 4) {
      for (i in progression) {
        playNote([(noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2), (noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/2), (noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/2)], type, time(tempo, 1));
      }
    }
    
};

playChords = document.createElement("button");
myDiv = playChords;
myDiv.innerHTML = "Play Chords";
document.body.appendChild(myDiv);
myDiv.setAttribute("id", "playBtn");
myDiv.style.background = "#4B42F5";
myDiv.style.color = "#BDBFBF";
myDiv.style.fontSize = "18px";
myDiv.style.marginLeft = "20px";
myDiv.style.borderColor = "black";
myDiv.style.borderWidth = "3px";
myDiv.style.borderRadius = "10px";

playChords.onmouseover = () => {
  playChords.style.background = "#373096";
};

playChords.onmouseout = () => {
  playChords.style.background = "#4B42F5";
};

playChords.onclick = () => {
  for (i in progression) {
    playNote([(noteFreqs[allChords[allChords_Names.indexOf(progression[i])][0]]/2), (noteFreqs[allChords[allChords_Names.indexOf(progression[i])][1]]/2), (noteFreqs[allChords[allChords_Names.indexOf(progression[i])][2]]/2)], type, time(tempo, 1));
  }
};

copyName = document.createElement("button");
myDiv = copyName;
myDiv.innerHTML = "Copy Name";
document.body.appendChild(myDiv);
myDiv.setAttribute("id", "copyBtn");
myDiv.style.background = "#4B42F5";
myDiv.style.color = "#BDBFBF";
myDiv.style.fontSize = "18px";
myDiv.style.marginLeft = "20px";
myDiv.style.borderColor = "black";
myDiv.style.borderWidth = "3px";
myDiv.style.borderRadius = "10px";

copyName.onmouseover = () => {
  copyName.style.background = "#373096";
};

copyName.onmouseout = () => {
  copyName.style.background = "#4B42F5";
};

copyName.onclick = () => {
  navigator.clipboard.writeText(pName);
};