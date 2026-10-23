.DEFAULT_GOAL := help
.PHONY: help install dev test lint format format-check build check up down logs dev-docker

help: ## Lista os comandos
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  %-12s %s\n", $$1, $$2}'

install: ## Instala as dependências
	npm ci

dev: ## Servidor de desenvolvimento em http://localhost:5173
	npm run dev

test: ## Roda os testes
	npm run test:run

lint: ## Roda o linter
	npm run lint

format: ## Formata o código com o Prettier
	npm run format

format-check: ## Confere a formatação sem alterar arquivos
	npm run format:check

build: ## Gera o build de produção em dist/
	npm run build

check: lint format-check test ## Lint + formatação + testes + tipos
	npm run typecheck

up: ## Sobe a versão de produção (Docker) em http://localhost:8080
	docker compose up -d --build web

down: ## Para os containers
	docker compose --profile dev down

logs: ## Mostra os logs dos containers
	docker compose logs -f

dev-docker: ## Desenvolvimento dentro do Docker em http://localhost:5173
	docker compose --profile dev up dev
