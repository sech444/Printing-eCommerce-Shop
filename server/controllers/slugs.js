const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getProductBySlug(request, response) {
  try {
    const { slug } = request.params;
    
    const product = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
      include: {
        category: true
      },
    });

    if (!product) {
      return response.status(404).json({ error: "Product not found" });
    }
    
    return response.status(200).json(product);
  } catch (error) {
    console.error('Database error:', error);
    return response.status(500).json({ 
      error: "Internal server error", 
      details: error.message 
    });
  }
}

module.exports = { getProductBySlug };
