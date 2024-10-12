import "./css/style.css";
import "./css/ascii-colors.css";

import { TypewriterState } from "typewriter-effect";
import Typewriter from 'typewriter-effect/dist/core';

// Détecter la taille de la fenêtre et charger le fichier ASCII correspondant
function getAsciiFileBasedOnWindowSize(): string {
    const width = window.innerWidth;

    // if (width <= 480) return 'ascii_art/ascii_50.txt';
    // if (width <= 768) return 'ascii_art/ascii_100.txt';
    // if (width <= 1024) return 'ascii_art/ascii_200.txt';
    // if (width <= 1440) return 'ascii_art/ascii_300.txt';
    return 'ascii_art/ascii_400.txt';
}

async function loadAsciiArt(url: string): Promise<string> {
    const response = await fetch(url);
    return await response.text();
}

async function generateAsciiArt() {
    try {
        const asciiFile = getAsciiFileBasedOnWindowSize();
        console.log(`Loading ASCII art from ${asciiFile}`);
        const asciiArt = await loadAsciiArt(asciiFile);

        console.log('Starting Typewriter');
        const typewriter = new Typewriter(document.getElementById('ascii')!, {
            loop: false,
            delay: 1, // Reduce delay for faster rendering
        });

        typewriter.pasteString(asciiArt).start();
        console.log('Typewriter started');
    } catch (error) {
        console.error('Error generating ASCII art:', error);
    }
}

window.addEventListener('resize', generateAsciiArt);
window.addEventListener('load', generateAsciiArt);


// const app = document.getElementById("app");
// const width = app.offsetWidth / (2 * 500);
// console.log(app.offsetWidth, width)
// const imagePath = './assets/logo.png';

// Spécifiez la largeur et hauteur maximales pour le texte ASCII (en caractères)
// const maxWidth = 100; // maxWidth in characters
// const maxHeight = 100; // maxHeight in characters

// // Convert character dimensions to pixel dimensions
// const charWidth = 8; // approx. 8 pixels per character in width
// const charHeight = 16; // approx. 16 pixels per character in height

// // const maxPixelWidth = maxWidth * charWidth;
// // const maxPixelHeight = maxHeight * charHeight;
// const maxPixelWidth = 250;
// const maxPixelHeight = 250;

// Charger l'image et convertir en ASCII
// window.addEventListener('load', function () {
//     // Charger l'image et convertir en ASCII
//     async function generateAsciiArt() {
//         try {
//             const img = await loadImage(imagePath);

//             // Spécifiez la largeur maximale pour le texte ASCII (en caractères)
//             const maxWidth = 500; // maxWidth in characters

//             // Font-size de 1px, donc chaque caractère représente un pixel
//             const charWidth = 1; // 1 pixel per character in width
//             const charHeight = 2; // 2 pixels per character in height (approx. aspect ratio of characters)

//             const maxPixelWidth = maxWidth * charWidth;
//             console.log('Loading image');
            
//             const useColor = false;

//             // Calculer la nouvelle hauteur proportionnelle à la largeur maximale
//             const aspectRatio = img.height / img.width;
//             const maxHeight = Math.floor(maxPixelWidth * aspectRatio / charHeight);

//             const resizedImageData = await resizeImage(img, maxPixelWidth, maxHeight);
//             const asciiArt = imageToAscii(resizedImageData, useColor);

//             console.log(asciiArt.length);

//             console.log('Starting Typewriter');
//             const typewriter = new Typewriter(document.getElementById('ascii')!, {
//                 loop: false,
//                 delay: 1, // Reduce delay for faster rendering
//                 devMode: false,
//             });

//             typewriter.pasteString(asciiArt).start();
//             console.log('Typewriter started');
//         } catch (error) {
//             console.error('Error generating ASCII art:', error);
//         }
//     }

//     generateAsciiArt();
    
//     // // Charger l'image et convertir en ASCII
//     // loadImageToCanvas(imagePath, maxPixelWidth, maxPixelHeight, (imageData) => {
//     //     const asciiArt = imageToAscii(imageData);
//     //     // const asciiArt = "Hello World!";
    
//     //     console.log(asciiArt.length)
//     //     console.log(asciiArt)
//     //     console.log('Starting Typewriter');
//     //     const typewriter = new Typewriter(document.getElementById('ascii')!, {
//     //         loop: false,
//     //         delay: 75,
//     //         // autoStart: true,
//     //         devMode: true,
//     //         // strings: [asciiArt],
//     //     });
//     //     console.log("Typewriter created")
//     //     // typewriter.typeString(asciiArt);
//     //     typewriter.pasteString(asciiArt).start();
//     //     console.log('Typewriter started');
//     // });

//     // async function generateAsciiArt() {
//     //     try {
//     //         const img = await loadImage(imagePath);
            
//     //         // Increase resolution by a factor of 2 for more details
//     //         const highResWidth = maxPixelWidth * 2;
//     //         const highResHeight = maxPixelHeight * 2;
    
//     //         const resizedImageData = await resizeImage(img, highResWidth, highResHeight);
//     //         const enhancedImageData = enhanceContrast(resizedImageData);
//     //         const asciiArt = imageToAscii(enhancedImageData);
    
//     //         console.log('Starting Typewriter');
//     //         const typewriter = new Typewriter(document.getElementById('ascii')!, {
//     //             loop: false,
//     //             delay: 75,
//     //         });
    
//     //         // typewriter.typeString(asciiArt).start();
//     //         typewriter.pasteString(asciiArt).start();
//     //         console.log('Typewriter started');
//     //     } catch (error) {
//     //         console.error('Error generating ASCII art:', error);
//     //     }
//     // }
    
//     // generateAsciiArt();
// })


// var typewriter = new Typewriter(app, {
//     loop: true,
//     delay: 25,
//     deleteSpeed: 1,
//     autoStart: false,
//     // devMode: true,
//     cursor: "",
//     // cursor: "|",
//     cursorClassName: "typerCursor",
//     strings: [
//         // '<span class="wrapper"><span class="span-1">Hello</span>, <span class="span-2">How</span> <span class="span-3">are</span> <span class="span-4">you</span>?</span>', '<span class="wrapper"><strong>Test</strong></span>'
//         // "Explore et partage ton expérience avec Torrents.sh ",
//         // "La plateforme que tu cherchais ",
//         // "Partage de films, séries, documentaires, musiques, jeux, logiciels, ebooks ... ",
//         // "de vous partager toujours plus de torrents provenant des internets. ",
//     ],
// });


// // const TypewriterKeeper = require('typewriter-effect/dist/core');
// const keeper = document.getElementById("keeper");
// var typewriter_keeper = new Typewriter(keeper, {
//     loop: false,
//     delay: 25,
//     deleteSpeed: 20,
//     autoStart: false,
//     // devMode: true,
//     cursor: "█",
//     // cursor: "|",
//     cursorClassName: "typerCursorKeeper",
//     wrapperClassName: "typerWrapperKeeper",
// });

// typewriter_keeper
// .start()
// // .callFunction((state: TypewriterState) => { $(state.elements.cursor).addClass('hidden') })
// .typeString("<span class='h2'>`<strong>ssh torrents.sh</strong>`, <em>sshimplement</em>.</span>")
// .pauseFor(500)
// .typeString("<br>")
// // .typeString("<br><img src='assets/logo.png' alt='Torrents.sh'>")
// // .typeString(await getAsciiImage(imageURL, config))
// .typeString("<br>")
// .changeCursor(" ")
// .callFunction((state: TypewriterState) => { 
//     typewriter = typewriter
//         .start()
//         .changeCursor("█")
//         .typeString("<span class='h4'>Plateforme de torrenting. Films, Séries, Documentaires, Musiques, Jeux-vidéo, Logiciels, Ebooks ...</span>")
//         .pauseFor(1000)
//         .deleteAll(1)
//         .typeString("<span class='h3'><strong>F.A.Q</strong></span>")
//         .pauseFor(50)
        
//         .typeString("<br><br><span class='h5'>Comment se connecter à <strong>torrents.sh</strong> ?</span>")
//         .pauseFor(100)
//         .typeString("<br>><span class='blockquote'><strong>Ouvre ton terminal</strong>&nbsp;et tape `<strong>ssh torrents.sh</strong>`.</span>")
//         .pauseFor(200)

//         .typeString("<br><br><span class='h5'>Comment ouvrir le <strong>terminal</strong> ?</span> ")
//         .pauseFor(100)
//         .typeString("<br>><span class='blockquote'><strong>Windows</strong> : `<strong>Win + R</strong>` puis tape `<strong>cmd</strong>`.</span>")
//         .typeString("<br>><span class='blockquote'><strong>MacOS</strong> : `<strong>Cmd + Espace</strong>` puis tape `<strong>terminal</strong>`.</span>")
//         .typeString("<br>><span class='blockquote'><strong>Linux</strong> : `<strong>Ctrl + Alt + T</strong>`.</span>")
//         .pauseFor(5000)
//     ;
// }, typewriter)


// //  typewriter
// //  .typeString("<h2>Roadmap</h2>")
// //  .typeString("- Simplifier la recherche de ressources")
// //  .typeString("- Fiabiliser l'environnement")
// //  .typeString("- Toujours plus de ressources")
// //  .typeString("- Améliorer l'esthétique")
// //  .typeString("- Ajout d'une fonctionnalité de signalement de contenu")
// //  .typeString("- Ajouter la possibilité aux utilisateurs de partager leurs propres contenus")
// //  .typeString("  - Systèmes de répertoire publique et prévé pour les utilisateurs")
// //  .typeString("- ")
// //  .typeString("- Améliorer le trie des ressources")
// //  .typeString("- ")