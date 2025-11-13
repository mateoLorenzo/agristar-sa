# Página de Productos - Agri Star

## 📁 Estructura del Proyecto

```
app/productos/
├── _components/
│   ├── ProductCard.tsx          # Card individual de producto
│   ├── ProductCardSkeleton.tsx  # Skeleton para loading state
│   ├── ProductsContent.tsx      # Componente principal con estado
│   ├── ProductsGrid.tsx         # Grid de productos con empty states
│   ├── SearchBar.tsx            # Barra de búsqueda con debounce
│   └── SidebarFilters.tsx       # Filtros por categoría
├── _data/
│   ├── categories.ts            # Definición de categorías
│   ├── helpers.ts               # Funciones helper para filtrado
│   └── products.ts              # Datos mock de productos
├── [slug]/
│   └── page.tsx                 # Página de detalle de producto
├── loading.tsx                  # Loading placeholder
└── page.tsx                     # Página principal
```

## ✨ Características Implementadas

### 1. **Búsqueda y Filtrado**

- ✅ Búsqueda por nombre de producto (case-insensitive)
- ✅ Filtros por categoría (múltiples selecciones)
- ✅ Sincronización con URL query params (`?q=texto&cat=cat1,cat2`)
- ✅ Debounce de 300ms en la búsqueda
- ✅ Botón "Restablecer" para limpiar filtros

### 2. **UI/UX**

- ✅ Layout responsive: 1 columna (mobile) → 2 columnas (tablet) → 3 columnas (desktop)
- ✅ Sidebar colapsable en mobile
- ✅ Cards con hover effects (elevación de sombra, translate-y)
- ✅ Bordes redondeados (rounded-xl) y sombras suaves
- ✅ Colores consistentes con el diseño Greenco-like
- ✅ Tipografía Open Sauce One (fallback a Inter)

### 3. **Estados**

- ✅ **Loading**: Skeletons para cards y sidebar
- ✅ **Empty**: Mensaje cuando no hay resultados
- ✅ **Resultados**: Contador de productos encontrados

### 4. **Accesibilidad**

- ✅ Labels correctos en todos los inputs
- ✅ ARIA attributes (aria-label, aria-expanded, aria-controls)
- ✅ Foco visible en elementos interactivos
- ✅ Navegación por teclado

### 5. **Performance**

- ✅ Next.js Image con loading="lazy"
- ✅ Fallback para imágenes que fallan al cargar
- ✅ Componentes optimizados (memoization implícita con React)
- ✅ Suspense boundaries para mejor UX

## 🎨 Colores y Estilos

```css
- Texto principal: #111
- Texto secundario (muted): #6B7280
- Bordes: #E5E7EB
- Fondo cards: #fff
- Fondo logo container: #F8F9FB
- Botón CTA: #011f2b
```

## 🔧 Tecnologías Utilizadas

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Checkbox, Label components)
- **Lucide React** (iconos)

## 📊 Datos Mock

Se incluyen 12 productos de ejemplo distribuidos en 5 categorías:

- Herbicidas (3 productos)
- Insecticidas (3 productos)
- Fungicidas (3 productos)
- Aditivos (1 producto)
- Bioestimulantes (2 productos)

## 🚀 Cómo Usar

### Agregar Nuevos Productos

Edita `app/productos/_data/products.ts`:

```typescript
export const PRODUCTS: Product[] = [
  {
    id: "13",
    name: "Nombre del Producto",
    logoUrl: "/products/nombre-producto.png",
    category: "Herbicidas",
  },
  // ... más productos
];
```

### Agregar Nuevas Categorías

1. Edita `app/productos/_data/categories.ts`:

```typescript
export const CATEGORIES = [
  "Herbicidas",
  "Insecticidas",
  "Fungicidas",
  "Aditivos",
  "Bioestimulantes",
  "Nueva Categoría", // ← Agregar aquí
] as const;
```

2. Los filtros se actualizarán automáticamente

### Personalizar Estilos

Los estilos están en los componentes usando Tailwind CSS. Para cambiar colores globales, edita `app/globals.css`.

## 🎯 Ejemplos de URLs

- Ver todos: `/productos`
- Buscar: `/productos?q=command`
- Filtrar: `/productos?cat=Herbicidas,Insecticidas`
- Combinado: `/productos?q=super&cat=Insecticidas`

## 📝 Notas para Producción

1. **Imágenes**: Reemplaza los SVG placeholders en `/public/products/` con logos reales en PNG o WebP
2. **SEO**: Agrega metadata en `page.tsx` (title, description, OG tags)
3. **Analytics**: Los eventos de búsqueda y filtros pueden trackearse agregando analytics
4. **API**: Actualmente usa datos mock; puede conectarse fácilmente a una API REST o GraphQL

## 🐛 Solución de Problemas

### Las imágenes no cargan

- Verifica que los archivos existan en `/public/products/`
- El componente tiene fallback automático a `/placeholder-logo.svg`

### Los filtros no persisten

- Asegúrate de que el router de Next.js esté funcionando correctamente
- Verifica que `useSearchParams` tenga acceso a la URL

### Errores de TypeScript

- Ejecuta `pnpm run build` para verificar errores de tipo
- Asegúrate de que TypeScript esté en v5.1.0+

## 📦 Componentes Reutilizables

Todos los componentes en `_components/` pueden reutilizarse en otras páginas:

```tsx
import { SearchBar } from "@/app/productos/_components/SearchBar";
import { ProductCard } from "@/app/productos/_components/ProductCard";
```

## 🎨 Personalización Avanzada

### Cambiar el número de columnas del grid

Edita `ProductsGrid.tsx`:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
  {/* Cambia xl:grid-cols-3 a xl:grid-cols-4 para 4 columnas */}
</div>
```

### Cambiar el ancho del sidebar

Edita `ProductsContent.tsx`:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
  {/* Cambia 280px a tu ancho deseado */}
</div>
```

### Ajustar el debounce de búsqueda

Edita `ProductsContent.tsx`:

```tsx
<SearchBar
  value={searchQuery}
  onChange={handleSearchChange}
  debounceMs={300} // ← Cambia este valor
/>
```

## ✅ Criterios de Aceptación Cumplidos

- ✅ Búsqueda y filtros funcionan y persisten en la URL
- ✅ Layout y estilo coinciden visualmente con el prototipo
- ✅ Responsive correcto (1/2/3 columnas)
- ✅ Empty y loading states implementados
- ✅ Accesibilidad básica y foco visible
- ✅ Código listo para Next.js 15+ con Tailwind
- ✅ 12 productos mock incluidos
- ✅ Sin errores de TypeScript o linting

---

**Desarrollado siguiendo las mejores prácticas de Next.js y React** 🚀
