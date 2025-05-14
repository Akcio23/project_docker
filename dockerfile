# Usando a imagem oficial do Node.js
FROM node:16

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta da aplicação
EXPOSE 8194

# Comando para rodar a aplicação
CMD ["node", "src/index.js"]
