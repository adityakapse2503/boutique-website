export const collections = [
  {
    id: "anarkalis",
    name: "Anarkalis",
    tagline: "Fluid silhouettes, floor-sweeping grace",
    description:
      "Empire-waisted flares cut from hand-worked fabric, designed to move the way you do.",
    image:
      "https://images.unsplash.com/photo-1610030181087-540f6ca2ca45?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "dresses",
    name: "Dresses",
    tagline: "Everyday elegance, reimagined",
    description:
      "Considered daywear and evening dresses built on clean lines and quiet detail.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "gowns",
    name: "Gowns",
    tagline: "For the room-stopping moment",
    description:
      "Structured bodices and sculpted trains, made for the nights that matter.",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "jackets",
    name: "Jackets",
    tagline: "Tailored layers with an edge",
    description:
      "Structured outerwear that bridges heritage embroidery with a modern cut.",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "jumpsuits",
    name: "Jumpsuits",
    tagline: "One piece, endless movement",
    description:
      "Wide-leg, high-waisted forms cut for ease without losing definition.",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "lehengas",
    name: "Lehengas",
    tagline: "Heritage craft, modern proportion",
    description:
      "Hand-finished skirts and cropped blouses, reworked in restrained palettes.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "pallazos",
    name: "Palazzos",
    tagline: "Wide-leg ease, elevated",
    description: "Fluid, high-rise palazzo sets designed for effortless days.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "saris",
    name: "Saris",
    tagline: "The six yards, retold",
    description:
      "Handloom and hand-embellished drapes for the modern trousseau.",
    image:
      "https://images.unsplash.com/photo-1610189844777-8fb42d02cf27?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    tagline: "Fresh from the atelier",
    description: "The latest pieces to enter the Noor Édition wardrobe.",
    image:
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=1200&q=80&auto=format&fit=crop",
  },
];

export const getCollectionById = (id) =>
  collections.find((c) => c.id === id);
