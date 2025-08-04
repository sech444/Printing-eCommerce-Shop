const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAndSeedDatabase() {
  try {
    console.log('🔍 Checking database connection...');
    
    // Check if database is accessible
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Check for existing products
    const productCount = await prisma.product.count();
    console.log(`📦 Found ${productCount} products in database`);

    if (productCount === 0) {
      console.log('🌱 No products found. Adding sample data...');
      
      // Create a sample category first
      const category = await prisma.category.upsert({
        where: { name: 'Business Cards' },
        update: {},
        create: {
          name: 'Business Cards'
        }
      });

      // Create sample products
      const sampleProducts = [
        {
          slug: 'premium-business-cards',
          title: 'Premium Business Cards',
          mainImage: 'business-card-printing.jpg',
          price: 2500, // Price in cents
          rating: 5,
          description: 'High-quality premium business cards with professional finish. Perfect for making a lasting impression.',
          manufacturer: "La'Moniega Printing",
          inStock: 100,
          categoryId: category.id
        },
        {
          slug: 'custom-banners',
          title: 'Custom Banners',
          mainImage: 'custom-banner.jpg',
          price: 5000,
          rating: 4,
          description: 'Custom printed banners for events, advertising, and promotions. Weather-resistant and durable.',
          manufacturer: "La'Moniega Printing",
          inStock: 50,
          categoryId: category.id
        },
        {
          slug: 'book-printing-service',
          title: 'Book Printing Service',
          mainImage: 'book-printing.jpg',
          price: 15000,
          rating: 5,
          description: 'Professional book printing and binding services. Perfect for authors, businesses, and educational materials.',
          manufacturer: "La'Moniega Printing",
          inStock: 25,
          categoryId: category.id
        }
      ];

      for (const product of sampleProducts) {
        await prisma.product.create({
          data: product
        });
        console.log(`✅ Created product: ${product.title}`);
      }

      console.log('🎉 Sample data added successfully!');
    } else {
      console.log('📋 Listing existing products:');
      const products = await prisma.product.findMany({
        take: 5,
        include: { category: true }
      });
      
      products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.title} (slug: ${product.slug})`);
      });
    }

  } catch (error) {
    console.error('❌ Database error:', error.message);
    
    if (error.message.includes("Can't reach database server")) {
      console.log('\n🔧 Troubleshooting steps:');
      console.log('1. Check your database URL in .env file');
      console.log('2. Ensure your database server is running');
      console.log('3. Verify network connectivity');
      console.log('4. Check if you need to run: npx prisma db push');
    }
  } finally {
    await prisma.$disconnect();
  }
}

checkAndSeedDatabase();