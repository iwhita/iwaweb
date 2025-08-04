# IwA - We Power 🚀

Un sitio web estático moderno y responsivo para IwA, diseñado para ser desplegado en GitHub Pages.

## 🌟 Características

- **Diseño Moderno**: Interface limpia y profesional basada en principios de diseño contemporáneo
- **Completamente Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Optimizado para GitHub Pages**: Listo para desplegar sin configuración adicional
- **Animaciones Suaves**: Transiciones y efectos que mejoran la experiencia del usuario
- **SEO Friendly**: Estructura HTML semántica optimizada para motores de búsqueda

## 📁 Estructura del Proyecto

```
iwa/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
└── README.md           # Este archivo
```

## 🚀 Cómo desplegar en GitHub Pages

### Opción 1: Subir archivos directamente

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona "Deploy from a branch"
5. Elige "main" branch y "/ (root)"
6. ¡Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`!

### Opción 2: Usando Git (recomendado)

```bash
# Inicializar repositorio local
git init

# Agregar archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: IwA website"

# Conectar con repositorio remoto
git remote add origin https://github.com/tu-usuario/nombre-repo.git

# Subir al repositorio
git push -u origin main
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `styles.css`. Puedes modificar:
- Colores de texto: `#333`, `#666`, `#000`
- Color de fondo: `#ffffff`
- Colores de hover y efectos

### Contenido
- **Título principal**: Edita la sección `.hero-title` en `index.html`
- **Descripción**: Modifica `.hero-description`
- **Logos de partners**: Reemplaza las URLs de placeholder en la sección `.partners-grid`

### Tipografía
El sitio usa la fuente **Inter** de Google Fonts. Para cambiarla, modifica el link en el `<head>` y actualiza `font-family` en CSS.

## 📱 Características Técnicas

- **Framework**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Responsive Design**: CSS Grid y Flexbox
- **Performance**: Optimizado para carga rápida
- **Compatibilidad**: Todos los navegadores modernos
- **Accesibilidad**: Cumple estándares WCAG básicos

## 🛠️ Modificaciones Futuras

Para añadir nuevas secciones o funcionalidades:

1. **Nueva sección**: Añade HTML en `index.html` y estilos en `styles.css`
2. **Formulario de contacto**: El JavaScript ya incluye una sección de contacto básica
3. **Blog**: Crea nuevas páginas HTML siguiendo la misma estructura
4. **E-commerce**: Integra con Stripe, PayPal u otros servicios

## 📞 Contacto

- **Email**: hola@iwa.com.ar
- **Ubicación**: Posadas, Misiones, Argentina
- **Website**: [Tu sitio en GitHub Pages]

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Siéntete libre de usar, modificar y distribuir según tus necesidades.

---

**¡Desarrollado con ❤️ por IwA - We Power!**
