# 📦 Como Criar a Release no GitHub

## Passo a Passo

### 1. Fazer Push da Tag

```bash
git push origin v1.0.0
```

### 2. Criar Release no GitHub

1. Acesse: https://github.com/kellyson71/electron_supaco_IFRN-API/releases/new
2. Selecione a tag: `v1.0.0`
3. Título: `v1.0.0 - Primeira Release`
4. Descrição: Copie o conteúdo de `RELEASE_NOTES.md`

### 3. Anexar o AppImage

1. Na seção "Attach binaries", clique em "Add file"
2. Selecione: `release/Supaco-0.0.0.AppImage`
3. Renomeie para: `Supaco-1.0.0.AppImage` (opcional)

### 4. Publicar

Clique em "Publish release"

## Comandos Rápidos

```bash
# Push da tag
git push origin v1.0.0

# Push de todos os commits
git push origin main
```

## Nota

O arquivo AppImage está em: `release/Supaco-0.0.0.AppImage` (123 MB)

Para gerar uma nova versão com o nome correto:
```bash
npm run dist:appimage
# Depois renomeie o arquivo se necessário
```

