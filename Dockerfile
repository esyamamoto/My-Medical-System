# Usa a imagem oficial do Node.js como base
FROM node:16-alpine

# Define o diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para a imagem
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto para a imagem
COPY . .

# Compila a aplicação React para produção
RUN npm run build

# Expõe a porta 3000 para que a aplicação possa ser acessada
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
