#!/bin/sh

DIRNAME="$(pwd | xargs basename)"
cd ..
zip -r kwin-crasher.kwinscript "$DIRNAME"
kpackagetool6 -t KWin/Script -s kwin-crasher \
    && kpackagetool6 -t KWin/Script -u kwin-crasher.kwinscript \
    || kpackagetool6 -t KWin/Script -i kwin-crasher.kwinscript
