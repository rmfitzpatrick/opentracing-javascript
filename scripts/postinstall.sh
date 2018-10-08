#!/bin/bash

set -euo pipefail

tgt_dir=../../opentracing
echo $tgt_dir

rm -rf $tgt_dir || true
cp -r ../ ../../
rm -rf ../../@rmfitzpatrick/opentracing
if [ -z "$(ls -A ../../@rmfitzpatrick)" ]; then
    rm -rf ../../@rmfitzpatrick
fi
