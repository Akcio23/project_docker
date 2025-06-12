# 🚀 Projeto docker com CI/CD

Um projeto completo de deploy automatizado utilizando Docker, Docker Compose, Node.js e MySQL, com integração contínua para Docker Hub e deploy automático em servidor remoto.

## 📋 Visão Geral

Este projeto demonstra uma implementação completa de CI/CD (Integração Contínua/Deploy Contínuo) utilizando tecnologias modernas de containerização e automação. O sistema automatiza todo o processo desde o desenvolvimento até a produção, incluindo build, teste, publicação de imagens e deploy em servidor remoto.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL 8.0
- **Containerização**: Docker e Docker Compose
- **CI/CD**: GitHub Actions
- **Registry**: Docker Hub
- **Deploy**: Servidor remoto via SSH

## 🐳 Configuração Docker

### Docker Compose - Desenvolvimento

O arquivo `docker-compose.yml` configura o ambiente de desenvolvimento:

- **Backend**: Container Node.js na porta 8195
- **Database**: MySQL 8.0 na porta 8196
- **Frontend**: Container Node.js na porta 8197
- **Volumes**: Persistência de dados e hot-reload
- **Networks**: Rede interna para comunicação entre serviços


## 🎯 Como Usar

### Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-deploy-automatizado.git
cd projeto-deploy-automatizado

# Inicie os serviços
docker-compose up -d

# Visualize os logs
docker-compose logs -f

# Acesse a aplicação
open http://localhost:3000
```

### Deploy Manual

```bash
# Build das imagens
docker-compose -f docker-compose.prod.yml build

# Deploy para produção
docker-compose -f docker-compose.prod.yml up -d

# Verificar saúde dos serviços
./scripts/health-check.sh
```

### Deploy Automático

O deploy acontece automaticamente ao:

- Fazer push para a branch `main`
- Criar uma nova tag/release
- Merge de pull request aprovado
