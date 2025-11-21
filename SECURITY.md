# Segurança e Chaves de API

## ⚠️ Importante

Este repositório **NÃO** deve conter chaves de API ou credenciais sensíveis.

## Configuração de Chaves

As chaves de API devem ser configuradas através de variáveis de ambiente:

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione sua chave:
   ```
   GEMINI_API_KEY=sua-chave-aqui
   ```

**O arquivo `.env.local` está no `.gitignore` e NÃO será commitado.**

## Se uma chave foi exposta

Se você acidentalmente commitou uma chave:

1. **Revogue a chave imediatamente** no painel da API
2. Gere uma nova chave
3. Atualize o `.env.local` com a nova chave
4. Se necessário, use `git-filter-repo` para remover do histórico

## GitHub Secret Scanning

O GitHub automaticamente escaneia por chaves expostas. Se você receber um alerta:

1. Acesse o link de desbloqueio fornecido pelo GitHub
2. Revogue a chave exposta
3. Gere uma nova chave
4. Atualize seu `.env.local`

