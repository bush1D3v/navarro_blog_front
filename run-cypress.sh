#!/bin/sh

# Execute npm run dev dentro do container navarroblogfront
docker run -d --name navarroblogfront-dev -v $PWD:/app -w /app navarroblogfront npm run dev

# Aguarde alguns segundos para garantir que o servidor esteja ativo
sleep 10

# Execute o Cypress
docker run -it -e CYPRESS_DISPLAY=:99 -v $PWD:/e2e -w /e2e cypress/included:cypress-13.11.0-node-20.14.0-chrome-125.0.6422.141-1-ff-126.0.1-edge-125.0.2535.85-1

# Pare e remova o container navarroblogfront-dev
docker stop navarroblogfront-dev
docker rm navarroblogfront-dev
