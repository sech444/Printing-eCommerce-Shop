#!/usr/bin/env node

/**
 * Simple script to test if the build will succeed
 */

console.log('🔨 Testing Next.js build configuration...');
console.log('');

// Check for common build issues
const fs = require('fs');
const path = require('path');

const checks = [
  {
    name: 'Check next.config.mjs',
    test: () => {
      const configPath = path.join(process.cwd(), 'next.config.mjs');
      if (!fs.existsSync(configPath)) {
        throw new Error('next.config.mjs not found');
      }
      const config = fs.readFileSync(configPath, 'utf8');
      if (config.includes('optimizeCss: true') && !config.includes('//')) {
        throw new Error('optimizeCss is enabled but critters module is missing');
      }
      return 'Next.js config looks good';
    }
  },
  {
    name: 'Check layout.tsx',
    test: () => {
      const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
      if (!fs.existsSync(layoutPath)) {
        throw new Error('app/layout.tsx not found');
      }
      const layout = fs.readFileSync(layoutPath, 'utf8');
      if (layout.includes('new URL(')) {
        throw new Error('URL constructor found in metadata - this can cause build issues');
      }
      return 'Layout metadata looks good';
    }
  },
  {
    name: 'Check error pages',
    test: () => {
      const notFoundPath = path.join(process.cwd(), 'app', 'not-found.tsx');
      const globalErrorPath = path.join(process.cwd(), 'app', 'global-error.tsx');
      
      if (!fs.existsSync(notFoundPath)) {
        throw new Error('app/not-found.tsx not found');
      }
      if (!fs.existsSync(globalErrorPath)) {
        throw new Error('app/global-error.tsx not found');
      }
      return 'Error pages are present';
    }
  },
  {
    name: 'Check package.json',
    test: () => {
      const packagePath = path.join(process.cwd(), 'package.json');
      if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
      }
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      if (!pkg.scripts || !pkg.scripts.build) {
        throw new Error('Build script not found in package.json');
      }
      return 'Package.json looks good';
    }
  }
];

let allPassed = true;

for (const check of checks) {
  try {
    const result = check.test();
    console.log(`✅ ${check.name}: ${result}`);
  } catch (error) {
    console.log(`❌ ${check.name}: ${error.message}`);
    allPassed = false;
  }
}

console.log('');

if (allPassed) {
  console.log('🎉 All checks passed! Your build should work now.');
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. If successful, deploy to your domain');
  console.log('3. Update Google Search Console with your sitemap');
} else {
  console.log('⚠️  Some issues found. Please fix them before building.');
}

console.log('');
console.log('🔗 Your SEO-optimized site will be available at: https://www.lamoneiqa.ng');