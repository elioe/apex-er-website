# Apex ER Consulting LLC — web local v1

Web estática bilingüe sin dependencias, sin compilación y sin servicios externos.

## Abrir en Ubuntu o macOS

1. Descomprime el ZIP.
2. Abre una terminal dentro de la carpeta `apex-er`.
3. Ejecuta:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

4. Visita http://localhost:8000 en tu navegador.
5. Detén el servidor con Ctrl+C.

Si Python 3 no está disponible en Ubuntu: `sudo apt install python3`.
En macOS puedes instalar Python 3 desde python.org.
También puedes abrir `index.html` directamente con tu navegador. Se recomienda el servidor local para probarla.

## Archivos

- index.html: estructura y textos. Los atributos data-en y data-es contienen las traducciones.
- style.css: diseño adaptable y colores.
- script.js: selector de idioma, preferencia local y año.

## Antes de publicar

- Confirmar adquisición y dominio definitivo (apexer.io es candidato, no una compra confirmada).
- Añadir correo empresarial y enlace de agenda reales en la sección #contact.
- Revisar textos, servicios y presentación del fundador.
- Definir metadatos sociales y URL canónica una vez confirmado el dominio.
- Evaluar requisitos de privacidad según las herramientas de contacto o analítica que se incorporen.

No hay formulario que simule envíos: contacto y agenda muestran un aviso transparente pendiente de configuración. No se recopilan datos ni se usan fuentes, scripts, analítica o imágenes de terceros. La preferencia de idioma se guarda únicamente en el navegador.

Los cargos previos del fundador se presentan como experiencia personal; no se atribuyen clientes ni proyectos anteriores a Apex ER.
