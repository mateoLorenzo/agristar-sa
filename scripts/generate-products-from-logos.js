#!/usr/bin/env node

/**
 * Script para generar el mock de productos basado en las imágenes de logos disponibles
 * Ejecutar con: node scripts/generate-products-from-logos.js
 */

const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '../public/products/logos');
const PRODUCTS_FILE = path.join(__dirname, '../app/productos/_data/products.ts');

// Categorías disponibles
const CATEGORIES = [
  'Herbicidas',
  'Insecticidas',
  'Fungicidas',
  'Aditivos',
  'Bioestimulantes'
];

// Mapeo de palabras clave en nombres de productos a categorías
const categoryKeywords = {
  'herbicida': 'Herbicidas',
  'insecticida': 'Insecticidas',
  'fungicida': 'Fungicidas',
  'aditivo': 'Aditivos',
  'bioestimulante': 'Bioestimulantes',
};

function inferCategory(productName) {
  const lowerName = productName.toLowerCase();
  for (const [keyword, category] of Object.entries(categoryKeywords)) {
    if (lowerName.includes(keyword)) {
      return category;
    }
  }
  // Default a Herbicidas si no se puede inferir
  return 'Herbicidas';
}

function normalizeProductName(filename) {
  // Remover extensión
  let name = filename.replace(/\.(png|jpg|jpeg|svg|webp)$/i, '');
  
  // Remover guiones bajos y guiones, reemplazar con espacios
  name = name.replace(/[_-]/g, ' ');
  
  // Capitalizar cada palabra
  name = name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return name;
}

function generateProductsFile(imageFiles) {
  if (imageFiles.length === 0) {
    console.log('⚠️  No se encontraron imágenes en la carpeta de logos');
    return;
  }

  const products = imageFiles.map((filename, index) => {
    const productName = normalizeProductName(filename);
    const category = inferCategory(productName);
    
    return {
      id: String(index + 1),
      name: productName,
      logoUrl: `/products/logos/${filename}`,
      category: category,
    };
  });

  const fileContent = `import type { Product } from "./types";

export const PRODUCTS: Product[] = [
${products.map(p => `  {
    id: "${p.id}",
    name: "${p.name}",
    logoUrl: "${p.logoUrl}",
    category: "${p.category}",
  }`).join(',\n')}
];
`;

  fs.writeFileSync(PRODUCTS_FILE, fileContent, 'utf8');
  console.log(`✅ Generado ${products.length} productos en ${PRODUCTS_FILE}`);
  console.log('\nProductos generados:');
  products.forEach(p => {
    console.log(`  - ${p.name} (${p.category})`);
  });
}

// Leer archivos de la carpeta de logos
try {
  const files = fs.readdirSync(LOGOS_DIR)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext);
    })
    .sort();

  if (files.length === 0) {
    console.log('⚠️  No se encontraron imágenes en:', LOGOS_DIR);
    console.log('   Por favor, agrega las imágenes de logos en esa carpeta y ejecuta este script nuevamente.');
  } else {
    generateProductsFile(files);
  }
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('⚠️  La carpeta no existe:', LOGOS_DIR);
    console.log('   Creando la carpeta...');
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
    console.log('   ✅ Carpeta creada. Por favor, agrega las imágenes de logos y ejecuta este script nuevamente.');
  } else {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

