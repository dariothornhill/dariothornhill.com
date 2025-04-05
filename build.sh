#!/bin/bash
rm -rf public/*
cp -r static public/static
, pandoc -s content/index.md -H templates/header.html -A templates/footer.html -c static/style.css -o public/index.html
