const sampleData = [
  {
    title: "Cozy City Bedroom",
    description:
      "Comfortable private bedroom with queen bed, Wi-Fi, air conditioning, and attached bathroom",
    image: {
      url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbSUyMGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
      filemane: "listingimage",
    },
    price: 3500,
    location: "Lahore",
    country: "Pakistan",
    category: "Mountains",
  },
  {
    title: "Modern Family Room",
    description:
      "Spacious room with king-size bed, wardrobe, TV, and free parking.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661963657190-ecdd1ca794f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4800,
    location: "Islamabad",
    country: "Pakistan",
    category: "Arctic",
  },
  {
    title: "Seaside Comfort Room",
    description:
      "Bright bedroom close to the beach with air conditioning and balcony.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHwwfDB8fHww",
      filename: "listingimage",
    },
    price: 4900,
    location: "Karachi",
    country: "Pakistan",
    category: "Beachfront",
  },
  {
    title: "Budget Traveler's Room",
    description:
      "Clean and affordable bedroom with shared kitchen and high-speed Wi-Fi.",
    image: {
      url: "https://images.unsplash.com/photo-1696762932825-2737db830bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2200,
    location: "Karachi",
    country: "Pakistan",
    category: "Cabins",
  },
  {
    title: "Garden View Bedroom",
    description:
      "Peaceful room overlooking a garden with complimentary breakfast.",
    image: {
      url: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4200,
    location: "Murree",
    country: "Pakistan",
    category: "Camping",
  },
  {
    title: "Mountain Escape Room",
    description:
      "Cozy bedroom with scenic mountain views and heating facilities",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 5500,
    location: "Naran",
    country: "Pakistan",
    category: "Mountains",
  },
  {
    title: "Heritage Guest Room",
    description:
      "Traditional-style room with wooden furniture and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbSUyMGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 3800,
    location: "Peshawar",
    country: "Pakistan",
    category: "Hiking",
  },
  {
    title: "Riverside Retreat",
    description:
      "Comfortable bedroom near the river with private bathroom and free Wi-Fi.",
    image: {
      url: "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4600,
    location: "Swat",
    country: "Pakistan",
    category: "Houseboats",
  },
  {
    title: "Deluxe Apartment Room",
    description:
      "Stylish bedroom in a serviced apartment with kitchenette and workspace.",
    image: {
      url: "https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 6200,
    location: "Faisalabad",
    country: "Pakistan",
    category: "Pool",
  },
  {
    title: "Business Class Room",
    description:
      "Modern room designed for business travelers with fast internet and desk.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664299335717-71d868cd964e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlZHJvb20lMjBpbnRlcmlvcnxlbnwwfDB8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 5700,
    location: "Rawalpindi",
    country: "Pakistan",
    category: "Castles",
  },
  {
    title: "Boutique Hotel Bedroom",
    description:
      "Elegant room with premium furnishings, minibar, and room service.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHwwfDB8fHww",
      filename: "listingimage",
    },
    price: 7500,
    location: "Multan",
    country: "Pakistan",
    category: "Castles",
  },
  {
    title: "Student Budget Stay",
    description:
      "Simple and clean bedroom with essential amenities for short stays.",
    image: {
      url: "https://images.unsplash.com/photo-1628624997999-71948759cd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHwwfDB8fHww",
      filename: "listingimage",
    },
    price: 2000,
    location: "Bahawalpur",
    country: "Pakistan",
    category: "Camping",
  },
];

module.exports = sampleData;
