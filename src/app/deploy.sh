#!/bin/bash
npm run build -- --base-href "https://ctoxy.github.io/firebase/"
npm run deploy -- --repo=https://github.com/ctoxy/firebase.git