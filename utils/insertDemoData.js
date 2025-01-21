
const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Custom Banner",
    rating: 4.5,
    description: "High-quality vinyl banners for indoor and outdoor use.",
    mainImage: "custom-banner.jpg",
    slug: "custom-banner-demo",
    manufacturer: "Standard Print",
    categoryId: "Banners-Printing", // Fixed to match category ID
    inStock: 25,
  },
  {
    id: "2",
    title: "Personalized T-Shirt",
    rating: 4.8,
    description: "100% cotton t-shirt with custom printing options.",
    mainImage: "product2.webp",
    slug: "tshirt-printing-demo",
    manufacturer: "TeePrints",
    categoryId: "T-Shirt-Printing", // Already correct
    inStock: 30,
  },
  {
    id: "3",
    title: "Custom Book Printing",
    rating: 5,
    description: "High-quality book printing with multiple binding options.",
    mainImage: "book-printing.jpg",
    slug: "book-printing-demo",
    manufacturer: "BookPrint Co.",
    categoryId: "Book-Printing", // Already correct
    inStock: 10,
  },
  {
    id: "4",
    title: "Personalized Coffee Mug",
    rating: 4.7,
    description: "Ceramic coffee mugs with custom printing options.",
    mainImage: "coffee-mug-printing.jpg",
    slug: "coffee-mug-printing-demo",
    manufacturer: "MugDesigns",
    categoryId: "Coffee-Mug-Printing", // Already correct
    inStock: 100,
  },
  {
    id: "5",
    title: "Business Card Printing",
    rating: 5,
    description: "High-quality business cards with a variety of finishes.",
    mainImage: "business-card-printing.jpg",
    slug: "business-card-demo",
    manufacturer: "CardPrints",
    categoryId: "Business-Card", // Already correct
    inStock: 50,
  },
  {
    id: "6",
    title: "All-in-One Printer",
    rating: 4.2,
    description: "Versatile printer for all your printing needs.",
    mainImage: "all-in-one-printer.jpg",
    slug: "all-in-one-printer-demo",
    manufacturer: "TechPrint",
    categoryId: "Printers", // Already correct
    inStock: 15,
  },
  {
    id: "7",
    title: "Car Branding Service",
    rating: 5,
    description: "Full-service car branding, including design and installation.",
    mainImage: "product3.webp",
    slug: "car-branding-demo",
    manufacturer: "AutoPrint",
    categoryId: "Car-Branding", // Already correct
    inStock: 5,
  },
  {
    id: "8",
    title: "Digital Ink Printing",
    rating: 4,
    description: "Affordable DI printing services for all types of media.",
    mainImage: "digital-printing.png",
    slug: "Digital-ink-printing",
    manufacturer: "PrintMaster",
    categoryId: "Printing-Services", // Fixed to match category ID
    inStock: 200,
  },
  {
    id: "9",
    title: "Professional Printing Ink",
    rating: 4,
    description: "High-quality printing ink for professional use.",
    mainImage: "di-printing-Ink.jpg",
    slug: "professional-printing-ink",
    manufacturer: "PrintMaster",
    categoryId: "Printers", // Already correct
    inStock: 200,
  },
  {
    id: "10",
    title: "Computer Inkjet Cartridge",
    rating: 4,
    description: "Premium inkjet cartridge for computer printers.",
    mainImage: "printing-Ink.jpg",
    slug: "computer-inkjet-cartridge",
    manufacturer: "PrintMaster",
    categoryId: "DI-Printing", // Already correct
    inStock: 200,
  },
  {
    id: "11",
    title: "Professional Bill Book",
    rating: 4,
    description: "High-quality bill books for business use with customizable templates.",
    mainImage: "billbook.jpg",
    slug: "professional-bill-book",
    manufacturer: "PrintMaster",
    categoryId: "Book-Printing", // Already correct
    inStock: 200,
  },
  {
    id: "12",
    title: "Custom Printed Bag",
    rating: 4,
    description: "Premium quality custom printed bags for retail and promotional use.",
    mainImage: "bag-design.jpg",
    slug: "custom-printed-bag",
    manufacturer: "PrintMaster",
    categoryId: "Custom-Printing", // Already correct
    inStock: 100,
  },
];

const demoCategories = [
  {
    // id: "category-printing-services",
    name: "Printing-Services",
  },
  {
    // id: "category-banners-printing",
    name: "Banners-Printing",
  },
  {
    // id: "category-tshirt-printing",
    name: "T-Shirt-Printing",
  },
  {
    // id: "category-book-printing",
    name: "Book-Printing",
  },
  {
    // id: "category-custom-printing",
    name: "Custom-Printing",
  },
  {
    // id: "category-coffee-mug-printing",
    name: "Coffee-Mug-Printing",
  },
  {
    // id: "category-business-card",
    name: "Business-Card",
  },
  {
    // id: "category-printers",
    name: "Printers",
  },
  {
    // id: "category-car-branding",
    name: "Car-Branding",
  },
  {
    // id: "category-di-printing",
    name: "DI-Printing",
  },
];


async function insertDemoData() {
  try {
    for (const category of demoCategories) {
      await prisma.category.create({
        data: category,
      });
    }
    console.log("Demo categories inserted successfully!");
    
    for (const product of demoProducts) {
      await prisma.product.create({
        data: product,
      });
    }
    console.log("Demo products inserted successfully!");
  } catch (error) {
    console.error("Error details:", error);
    throw error;
  }
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });