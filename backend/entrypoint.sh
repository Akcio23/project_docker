#!/bin/sh

echo "⏳ Aguardando o MySQL iniciar..."
while ! nc -z mysql 3306; do
  sleep 1
done

echo "✅ MySQL está no ar, iniciando backend..."
npm start
