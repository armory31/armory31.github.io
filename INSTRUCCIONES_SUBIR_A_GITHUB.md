# Cómo subir esta web a GitHub Pages

1. Descomprime este ZIP en tu ordenador.
2. Crea un repositorio en GitHub llamado exactamente `TU-USUARIO.github.io`.
3. Abre una terminal dentro de la carpeta descomprimida.
4. Ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
git push -u origin main
```

5. En GitHub ve a Settings > Pages.
6. En Source elige GitHub Actions.
7. Espera a que termine el workflow y abre `https://TU-USUARIO.github.io`.

Si vas a usar Claude, súbele este ZIP y dile:

"Este es un proyecto React/Vite/Tailwind exportado desde Lovable. Revísalo y dime exactamente cómo subirlo a GitHub Pages. No cambies la app salvo que sea necesario para desplegarla."
