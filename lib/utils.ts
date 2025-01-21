export const categoryMenuList = [
  {
    id: 1,
    title: "Printing Services",
    src: "/printers icon.png",
    href: "/shop/Printing-Services",
    categoryId: "category-printing-services"
  },
  {
    id: 2,
    title: "Banners Printing",
    src: "/advertising.png",
    href: "/shop/Banners-Printing",
    categoryId: "category-banners-printing"
  },
  {
    id: 3,
    title: "T-Shirt Printing",
    src: "/tshirt.png",
    href: "/shop/T-Shirt-Printing",
    categoryId: "category-tshirt-printing"
  },
  {
    id: 4,
    title: "Book Printing",
    src: "/stack-of-books.png",
    href: "/shop/Book-Printing",
    categoryId: "category-book-printing"
  },
  {
    id: 5,
    title: "Custom Printing",
    src: "/smart watch.png",
    href: "/shop/Custom-Printing",
    categoryId: "category-custom-printing"
  },
  {
    id: 6,
    title: "Coffee Mug Printing",
    src: "/mug.png",
    href: "/shop/Coffee-Mug-Printing",
    categoryId: "category-coffee-mug-printing"
  },
  {
    id: 7,
    title: "Business Card",
    src: "/business-card.png",
    href: "/shop/Business-Card",
    categoryId: "category-business-card"
  },
  {
    id: 8,
    title: "Printers",
    src: "/printer.png",
    href: "/shop/printers",
    categoryId: "category-printers"
  },
  {
    id: 9,
    title: "Car Branding",
    src: "/car.png",
    href: "/shop/Car-Branding",
    categoryId: "category-car-branding"
  },
  {
    id: 10,
    title: "DI Printing",
    src: "/pc icon.png",
    href: "/shop/DI-Printing",
    categoryId: "category-di-printing"
  },
];
export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];


export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About La Moniega", href:  "/about"  },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "/company-profile" },
  ],
  buy: [
    { name: "La Moniega Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at La Moniega", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
