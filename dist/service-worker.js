/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-68b3524c'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "0c50cfced9c27d6635e9.ttf",
    "revision": null
  }, {
    "url": "1f590c63ad85427d3c70.ttf",
    "revision": null
  }, {
    "url": "7534a76c5a021a6aae2f.ttf",
    "revision": null
  }, {
    "url": "assets/.DS_Store",
    "revision": "194577a7e20bdcc7afbb718f502c134c"
  }, {
    "url": "assets/ascii_100.txt",
    "revision": "bb0efe2bedaeda45510dcfd53870f7f4"
  }, {
    "url": "assets/ascii_100_right.txt",
    "revision": "4b565661aa7bfedddc6fa142f2f7c6cb"
  }, {
    "url": "assets/ascii_200.txt",
    "revision": "670e1f58539aa498d20c445fcc25df0d"
  }, {
    "url": "assets/ascii_200_right.txt",
    "revision": "a8d12124f7d6ba6e1d8e6745b69a34eb"
  }, {
    "url": "assets/ascii_300.txt",
    "revision": "12a6671776641844a0622a7ae6a6ed80"
  }, {
    "url": "assets/ascii_300_right.txt",
    "revision": "5caa7d7d2596ad1d8f43441d4f67bce5"
  }, {
    "url": "assets/ascii_400.txt",
    "revision": "2f8884e339517ba99c0b2e26f2023eb2"
  }, {
    "url": "assets/ascii_50.txt",
    "revision": "8fa8183703464c87caf6adb780284449"
  }, {
    "url": "assets/ascii_50_right.txt",
    "revision": "1787fce7a979dae960abcdbbacc5bde5"
  }, {
    "url": "assets/ascii_75.txt",
    "revision": "31c5de541afc7f04f2867eb296e20111"
  }, {
    "url": "assets/ascii_75_right.txt",
    "revision": "f087e1c286554ba03e91ec54e28f7be0"
  }, {
    "url": "assets/favicon.png",
    "revision": "ad75c4464f7d6d2780a6a43218dfa8bc"
  }, {
    "url": "bundle.67b7a4e1007cedda63e9.min.css",
    "revision": null
  }, {
    "url": "css/.DS_Store",
    "revision": "194577a7e20bdcc7afbb718f502c134c"
  }, {
    "url": "css/colors_100.css",
    "revision": "971f478cc512ce3228fcbcd6aaea9a8e"
  }, {
    "url": "css/colors_200.css",
    "revision": "aadc7e99370f716426dd0cae554ed23a"
  }, {
    "url": "css/colors_300.css",
    "revision": "aab5b634fa96fefcdff8f578cfe60543"
  }, {
    "url": "css/colors_50.css",
    "revision": "b80c8a40d81a507fd65efbb97387425c"
  }, {
    "url": "css/colors_75.css",
    "revision": "6896deefa40de39953a8b105eb0d2693"
  }, {
    "url": "css/style.css",
    "revision": "9cae409fa5da5c7d684c8a6f52cbe819"
  }, {
    "url": "fonts/FiraMono-Bold.ttf",
    "revision": "ba7aefe1d903f1f89d285a01fac887a9"
  }, {
    "url": "fonts/FiraMono-Medium.ttf",
    "revision": "ae2376e676e06ffa41cc1133b4702c60"
  }, {
    "url": "fonts/FiraMono-Regular.ttf",
    "revision": "aa00c5d91c47e7b718b5cdca3dea7875"
  }, {
    "url": "index.html",
    "revision": "d99f35089c7ad5daa4b20503a667e96c"
  }, {
    "url": "main.js",
    "revision": "814f9d9c3dd21b54be234f0b2e4dce8e"
  }], {});

}));
