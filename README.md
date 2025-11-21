# Yesica Oviedo - Real Estate Website

Sitio web oficial de Yesica Oviedo, especialista en bienes raíces en el sur de Florida.

## 🏠 Sobre el Proyecto

Este sitio web fue desarrollado para ofrecer servicios inmobiliarios profesionales en Miami, Fort Lauderdale y Palm Beach. La plataforma permite a los clientes conocer los servicios, áreas de cobertura, testimonios y contactar directamente con Yesica Oviedo.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React para producción
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **React Icons** - Iconos para la interfaz

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd yessica-oviedo
```

2. Instalar dependencias:
```bash
npm install
```

3. Agregar las imágenes en la carpeta `/public`:

### Imágenes Requeridas:

#### Logos y Branding:
- `logo.png` - Logo principal del sitio

#### Secciones principales:
- `hero-image.jpg` - Imagen principal del hero
- `about-image.jpg` - Imagen de la sección "Sobre Mi"
- `profile-image.jpg` - Foto de perfil de Yesica Oviedo
- `newsletter-image.jpg` - Imagen para la sección de newsletter

#### Zonas:
- `condado-miami-dade.jpg` - Imagen del Condado Miami-Dade
- `condado-broward.jpg` - Imagen del Condado Broward
- `condado-palm-beach.jpg` - Imagen del Condado Palm Beach

#### Logos de Asociaciones:
- `miami-realtors.png` - Logo Miami Realtors
- `mls-logo.png` - Logo MLS
- `nar-logo.png` - Logo National Association of Realtors
- `condado-miami-dade.png` - Logo Condado Miami Dade
- `arven-logo.png` - Logo Arven
- `club-logo.png` - Club Logo

4. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📁 Estructura del Proyecto

```
yessica-oviedo/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Footer.tsx          # Pie de página
│   ├── Hero.tsx            # Sección hero
│   ├── About.tsx           # Sección "Sobre Mi"
│   ├── Services.tsx        # Sección de servicios
│   ├── Areas.tsx           # Zonas de cobertura
│   ├── Testimonials.tsx    # Testimonios de clientes
│   ├── Newsletter.tsx      # Formulario de newsletter
│   └── Contact.tsx         # Formulario de contacto
├── public/
│   └── [imágenes]          # Recursos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Secciones del Sitio

1. **Hero** - Presentación principal con llamada a la acción
2. **Sobre Mi** - Información sobre Yesica Oviedo y su experiencia
3. **Servicios** - Lista completa de servicios inmobiliarios
4. **Zonas Destacadas** - Áreas de cobertura en Florida
5. **Testimonios** - Opiniones de clientes satisfechos
6. **Newsletter** - Descarga de guía gratuita
7. **Contacto** - Formulario y datos de contacto

## 🌐 Despliegue

### Vercel (Recomendado)

1. Subir el proyecto a GitHub
2. Conectar con Vercel
3. Configurar variables de entorno (si es necesario)
4. Desplegar automáticamente

```bash
npm run build
npm start
```

## 📝 Personalización

### Colores del Tema

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1a1a1a',      // Negro principal
  secondary: '#8b7355',    // Marrón/dorado
  accent: '#c9a875',       // Dorado claro
  dark: '#0a0a0a',         // Negro oscuro
  light: '#f5f5f5',        // Gris claro
}
```

### Fuentes

- **Sans**: Inter (textos generales)
- **Serif**: Playfair Display (títulos)

## 📧 Contacto

Para modificaciones o soporte del sitio web:
- Email: info@yesicaoviedo.com
- WhatsApp: +1 (954) 760-1855

## 📄 Licencia

Todos los derechos reservados © 2024 Yesica Oviedo Real Estate
