#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.themarigoldproject.com' > CNAME

git init
git remote add origin https://github.com/andrew-lyons/micayla-blog
git fetch --all
git add -A
git commit -m 'deploy'
git checkout github-pages
git push

cd -