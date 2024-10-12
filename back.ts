eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typewriter-effect/dist/core */ \"./node_modules/typewriter-effect/dist/core.js\");\n/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ascii_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ascii.ts */ \"./src/ascii.ts\");\n\n\n\n
const app = document.getElementById(\"app\");\nconst width = app.offsetWidth / (2 * 500);\nconsole.log(app.offsetWidth, width);\nconst imagePath = './assets/logo.png';\n// Spécifiez la largeur et hauteur maximales pour le texte ASCII (en pixels)\nconst maxWidth = 100; // maxWidth in characters\nconst maxHeight = 100; // maxHeight in characters\n// Convert character dimensions to pixel dimensions\nconst charWidth = 8; // approx. 8 pixels per character in width\nconst charHeight = 16; // approx. 16 pixels per character in height\nconst maxPixelWidth = maxWidth * charWidth;\nconst maxPixelHeight = maxHeight * charHeight;\n// Charger l'image et convertir en ASCII\n(0,_ascii_ts__WEBPACK_IMPORTED_MODULE_2__.loadImageToCanvas)(imagePath, maxPixelWidth, maxPixelHeight, (imageData) => {\n    const asciiArt = (0,_ascii_ts__WEBPACK_IMPORTED_MODULE_2__.imageToAscii)(imageData);\n    console.log('Starting Typewriter');\n    const typewriter = new (typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ascii'), {\n        loop: false,\n        delay: 75,\n    });\n    

typewriter
.typeString(asciiArt).start();\n    console.log('Typewriter started');\n});\n// var typewriter = new Typewriter(app, {\n//     loop: true,\n//     delay: 25,\n//     deleteSpeed: 1,\n//     autoStart: false,\n//     // devMode: true,\n//     cursor: \"\",\n//     // cursor: \"|\",\n//     cursorClassName: \"typerCursor\",\n//     strings: [\n//         // '<span class=\"wrapper\"><span class=\"span-1\">Hello</span>, <span class=\"span-2\">How</span> <span class=\"span-3\">are</span> <span class=\"span-4\">you</span>?</span>', '<span class=\"wrapper\"><strong>Test</strong></span>'\n//         // \"Explore et partage ton expérience avec Torrents.sh \",\n//         // \"La plateforme que tu cherchais \",\n//         // \"Partage de films, séries, documentaires, musiques, jeux, logiciels, ebooks ... \",\n//         // \"de vous partager toujours plus de torrents provenant des internets. \",\n//     ],\n// });\n// // const TypewriterKeeper = require('typewriter-effect/dist/core');\n// const keeper = document.getElementById(\"keeper\");\n// var typewriter_keeper = new Typewriter(keeper, {\n//     loop: false,\n//     delay: 25,\n//     deleteSpeed: 20,\n//     autoStart: false,\n//     // devMode: true,\n//     cursor: \"█\",\n//     // cursor: \"|\",\n//     cursorClassName: \"typerCursorKeeper\",\n//     wrapperClassName: \"typerWrapperKeeper\",\n// });\n// typewriter_keeper\n// .start()\n// // .callFunction((state: TypewriterState) => { $(state.elements.cursor).addClass('hidden') })\n// 
.typeString(\\")\n// .pauseFor(500)\n// 
.typeString(\"<br>\")\n// // 
.typeString(\"<br><img src='assets/logo.png' alt='Torrents.sh'>\")\n// // 
.typeString(await getAsciiImage(imageURL, config))\n// 
.typeString(\"<br>\")\n// .changeCursor(\" \")\n// .callFunction((state: TypewriterState) => { \n//     typewriter = typewriter\n//         .start()\n//         .changeCursor(\"█\")\n//         
.typeString(\\")\n//         .pauseFor(1000)\n//         .deleteAll(1)\n//         
.typeString(\"\")\n//         .pauseFor(50)\n//         
.typeString(\"<br><br><span class='h5'>Comment se connecter à <strong>torrents.sh</strong> ?</span>\")\n//         .pauseFor(100)\n//         
.typeString(\"<br>><span class='blockquote'><strong>Ouvre ton terminal</strong>&nbsp;et tape `<strong>ssh torrents.sh</strong>`.</span>\")\n//         .pauseFor(200)\n//         
.typeString(\"<br><br><span class='h5'>Comment ouvrir le <strong>terminal</strong> ?</span> \")\n//         .pauseFor(100)\n//         
.typeString(\"<br>><span class='blockquote'><strong>Windows</strong> : `<strong>Win + R</strong>` puis tape `<strong>cmd</strong>`.</span>\")\n//         
.typeString(\"<br>><span class='blockquote'><strong>MacOS</strong> : `<strong>Cmd + Espace</strong>` puis tape `<strong>terminal</strong>`.</span>\")\n//         
.typeString(\"<br>><span class='blockquote'><strong>Linux</strong> : `<strong>Ctrl + Alt + T</strong>`.</span>\")\n//         .pauseFor(5000)\n//     ;\n// }, typewriter)\n// //  typewriter\n// //  
.typeString(\"<h2>Roadmap</h2>\")\n// //  
.typeString(\"- Simplifier la recherche de ressources\")\n// //  
.typeString(\"- Fiabiliser l'environnement\")\n// //  
.typeString(\"- Toujours plus de ressources\")\n// //  
.typeString(\"- Améliorer l'esthétique\")\n// //  
.typeString(\"- Ajout d'une fonctionnalité de signalement de contenu\")\n// //  
.typeString(\"- Ajouter la possibilité aux utilisateurs de partager leurs propres contenus\")\n// //  
.typeString(\"  - Systèmes de répertoire publique et prévé pour les utilisateurs\")\n// //  
.typeString(\"- \")\n// //  
.typeString(\"- Améliorer le trie des ressources\")\n// //  
.typeString(\"- \")\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");
