# 🔒 Como Resolver o Problema de Secret Scanning

## Problema
O GitHub bloqueou o push porque detectou uma chave secreta (GEMINI_API_KEY) no repositório.

## ✅ Solução Passo a Passo

### 1. Desbloquear o Secret no GitHub

Acesse o link fornecido pelo GitHub:
```
https://github.com/kellyson71/electron_supaco_IFRN-API/security/secret-scanning/unblock-secret/35lfqernDpdm5ddcvEtcJidLF8c
```

Ou:
1. Vá para: `Settings` > `Security` > `Secret scanning`
2. Encontre o alerta sobre `GEMINI_API_KEY`
3. Clique em "Unblock secret" ou "Mark as false positive"

### 2. Revogar a Chave Exposta (Recomendado)

Por segurança, mesmo que a chave não esteja no código, é recomendado:

1. Acesse o [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Revogue a chave atual: `AIzaSyCl9IeXhatDHf50hZi40AY-Z7YcIMkkmuM`
3. Gere uma nova chave
4. Atualize seu `.env.local` com a nova chave

### 3. Verificar que .env.local está ignorado

```bash
# Verificar se está no .gitignore
cat .gitignore | grep .env.local

# Verificar se não está sendo rastreado
git ls-files | grep .env
```

### 4. Tentar Push Novamente

```bash
git push -u origin main
```

## ⚠️ Se o Problema Persistir

Se o GitHub continuar bloqueando:

1. **Verificar histórico completo:**
   ```bash
   git log --all --full-history -p | grep -i "AIzaSy"
   ```

2. **Se encontrar a chave no histórico, removê-la:**
   ```bash
   # Usar git-filter-repo (mais seguro)
   pip install git-filter-repo
   git filter-repo --invert-paths --path .env.local
   ```

3. **Ou usar BFG Repo-Cleaner:**
   ```bash
   # Substituir a chave por placeholder
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env.local" \
     --prune-empty --tag-name-filter cat -- --all
   ```

## 📝 Prevenção Futura

- ✅ Sempre verificar `.gitignore` antes de commits
- ✅ Nunca commitar arquivos `.env*`
- ✅ Usar variáveis de ambiente ou secret managers
- ✅ Revogar chaves expostas imediatamente

