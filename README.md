# Xss sample attack on Simpleton 

## About

A simple way of storing notes, built using a jquery frontend, a nodejs backend, and a mongodb data store. The functionality is a basic key store system, which allows for simple note taking without the need of authentication. 

## Running 

docker-compose build && docker-compose up

by default the xss attack is available. 

To make it unavailable uncomment the xss attack comments on the notes.js file in the server folder.

Runs on localhost:8080



