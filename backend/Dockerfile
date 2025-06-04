FROM node:18

WORKDIR /app
COPY . .

# Instalar netcat para o entrypoint funcionar
RUN apt-get update && apt-get install -y netcat-openbsd


RUN npm install
RUN chmod +x entrypoint.sh

EXPOSE 8195

CMD ["./entrypoint.sh"]
