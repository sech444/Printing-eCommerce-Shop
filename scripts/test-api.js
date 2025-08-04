const fetch = require('node-fetch');

async function testAPI() {
  const apiUrl = 'http://localhost:5000';
  
  try {
    console.log('🧪 Testing API endpoints...');
    
    // Test basic API
    console.log('\n1. Testing basic API connection...');
    const basicRes = await fetch(`${apiUrl}/api`);
    const basicData = await basicRes.json();
    console.log('✅ Basic API:', basicData);
    
    // Test products endpoint
    console.log('\n2. Testing products endpoint...');
    const productsRes = await fetch(`${apiUrl}/api/products`);
    const productsData = await productsRes.json();
    console.log(`✅ Products found: ${productsData.length}`);
    
    if (productsData.length > 0) {
      const firstProduct = productsData[0];
      console.log(`📦 First product: ${firstProduct.title} (slug: ${firstProduct.slug})`);
      
      // Test slug endpoint with the first product
      console.log('\n3. Testing slug endpoint...');
      const slugRes = await fetch(`${apiUrl}/api/slugs/${firstProduct.slug}`);
      
      if (slugRes.ok) {
        const slugData = await slugRes.json();
        console.log('✅ Slug endpoint working:', slugData.title);
      } else {
        console.log('❌ Slug endpoint failed:', slugRes.status, slugRes.statusText);
        const errorText = await slugRes.text();
        console.log('Error details:', errorText);
      }
    }
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    console.log('\n💡 Make sure the server is running with: npm start or node app.js');
  }
}

testAPI();