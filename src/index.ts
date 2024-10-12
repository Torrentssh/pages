import "./css/style.css"

import $ from 'jquery';
import Typewriter from 'typewriter-effect/dist/core';

start();

function start() {
    const title = document.getElementById('title');
    var typewritter_title = new Typewriter(title!, {
        loop: false,
        delay: 25,
        deleteSpeed: 1,
        autoStart: false,
        cursor: '█',
        cursorClassName: 'typerCursorTitle',
    });
    
    typewritter_title
    .typeString("<span class='h1'><strong class='green'>Torrents.sh</strong>, <em>sshimplement</em>.</span>")
    .start()
    .changeCursor(" ")
    .callFunction(() => {
        generateLinks().callFunction(() => {
            generateInfo().callFunction(() => {
                generateAsciiArt();
            });
        });
    })
}

function generateLinks() {
    const links = document.getElementById('links');
    var typewritter_links = new Typewriter(links!, {
        loop: false,
        delay: 25,
        deleteSpeed: 1,
        autoStart: false,
        cursor: '█',
        cursorClassName: 'typerCursor',
    })
    .typeString("Twitter: <a href='https://twitter.com/torrent_ssh' title='Liens Twitter'>@Torrent_ssh</a>")
    .changeCursor(' ')
    .start()

    return typewritter_links;
}

function generateInfo() {
    const info = document.getElementById('info');
    var typewritter_info = new Typewriter(info!, {
        loop: false,
        delay: 25,
        deleteSpeed: 1,
        autoStart: false,
        cursor: '█',
        cursorClassName: 'typerCursorInfo',
    })
    // .typeString("<br><span class='h4'>Lance la commande <a href='ssh://torrents.sh' class='highlight green'><strong>ssh torrents.sh</strong></a> dans ton terminal pour te connecter</span>")
    .typeString("<br><span class='h4'>... Serveur en maintenance <span class='h5'>(bientôt de retour)</span> ...</span>")
    .typeString("<br><br><span class='h4'><s>Lance la commande <a href='ssh://torrents.sh' class='highlight green'><strong>ssh torrents.sh</strong></a> dans ton terminal pour te connecter</s></span>")
    .changeCursor(' ')
    .start()

    return typewritter_info;
}


// Détecter la taille de la fenêtre et charger le fichier ASCII correspondant
function getAsciiFileBasedOnWindowSize(): string {
    const width = window.innerWidth;

    // if (width <= 480) return 'assets/ascii_50.txt';
    if (width <= 768) return 'assets/ascii_200.txt';
    // if (width <= 1024) return 'assets/ascii_200.txt';
    // if (width <= 1440) return 'assets/ascii_300.txt';
    return 'assets/ascii_300_right.txt';
}

// Détecter la taille de la fenêtre et charger le fichier CSS correspondant
function getCssFileBasedOnWindowSize(): string {
    const width = window.innerWidth;

    // if (width <= 480) return 'css/colors_50.css';
    if (width <= 768) return 'css/colors_200.css';
    // if (width <= 1024) return 'css/colors_200.css';
    // if (width <= 1440) return 'css/colors_10.css';
    return 'css/colors_300.css';
}

async function loadAsciiArt(url: string): Promise<string> {
    const response = await fetch(url);
    return await response.text();
}

async function loadCssFile(url: string): Promise<void> {
    const response = await fetch(url);
    const cssText = await response.text();
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);
}

async function generateAsciiArt() {
    try {
        const asciiFile = getAsciiFileBasedOnWindowSize();
        const cssFile = getCssFileBasedOnWindowSize();
        
        await loadCssFile(cssFile);
        const asciiArt = await loadAsciiArt(asciiFile);

        var lines = asciiArt.split('<br>');
        // Parcourir chaque ligne et l'ajouter à la div avec un effet d'animation
        $.each(lines, function(index, line) {
            var lineDiv = $('<div class="line">' + line + '</div>');

            $('#ascii').append(lineDiv);

            lineDiv.delay(index * 100).fadeIn(1000);
        });
    } catch (error) {
        console.error('Error generating ASCII art:', error);
    }
}
