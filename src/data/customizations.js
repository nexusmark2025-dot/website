/**
 * NexusMark – Customization Categories
 * Add, remove, or edit entries here. The rest of the UI updates automatically.
 *
 * Fields:
 *   id          – unique slug (used as React key)
 *   name        – category display name
 *   description – short description shown on cards
 *   emoji       – fallback emoji icon (shown when no image)
 *   image       – path to image (files live in /public/images/products/)
 *   tag         – optional badge label (e.g. "Popular", "New", "Bulk")
 */

const customizations = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    description: "Customize with names, logos, photos and designs. Perfect for individuals, teams and events.",
    emoji: "👕",
    image: "/images/products/t-shirts.png",
    tag: "Popular",
  },
  {
    id: "mugs",
    name: "Mugs",
    description: "Personalized mugs for gifts, special occasions, offices and businesses.",
    emoji: "☕",
    image: "/images/products/mugs.png",
    tag: "Popular",
  },
  {
    id: "water-bottles",
    name: "Water Bottles",
    description: "Custom bottles, sippers and personalized designs for daily use and gifting.",
    emoji: "🍶",
    image: "/images/products/water-bottles.png",
    tag: null,
  },
  {
    id: "pillows",
    name: "Pillows",
    description: "Photo pillows and personalized cushions — a thoughtful gift for any occasion.",
    emoji: "🛋️",
    image: "/images/products/pillow.png",
    tag: null,
  },
  {
    id: "keychains",
    name: "Keychains",
    description: "Custom names, photos, logos and shapes. Great as souvenirs and corporate gifts.",
    emoji: "🔑",
    image: "/images/products/keychain.png",
    tag: null,
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    description: "Personalized photo frames for gifts, memories and special occasions.",
    emoji: "🖼️",
    image: "/images/products/photo-frame.png",
    tag: null,
  },
  {
    id: "caps",
    name: "Caps",
    description: "Custom caps with logos, names and designs for teams, events and brands.",
    emoji: "🧢",
    image: "/images/products/caps.png",
    tag: null,
  },
  {
    id: "bags",
    name: "Bags",
    description: "Personalized and promotional bags for everyday use, events and branding.",
    emoji: "👜",
    image: "/images/products/bags.png",
    tag: null,
  },
  {
    id: "id-cards",
    name: "ID Cards",
    description: "Custom ID cards for schools, offices, events and organizations. Professional and durable.",
    emoji: "🪪",
    image: "/images/products/id-card.png",
    tag: "New",
  },
  {
    id: "stickers-labels",
    name: "Stickers & Labels",
    description: "Custom stickers, labels and branding materials for products, packaging and promotions.",
    emoji: "🏷️",
    image: "/images/products/stickers.png",
    tag: null,
  },
  {
    id: "corporate-gifts",
    name: "Corporate Gifts",
    description: "Customized products for companies, teams, clients and corporate events.",
    emoji: "🎁",
    image: "/images/products/corporate.png",
    tag: "Bulk",
  },
  {
    id: "event-wedding-gifts",
    name: "Event & Wedding Gifts",
    description: "Personalized products for weddings, birthdays, anniversaries and all celebrations.",
    emoji: "💍",
    image: "/images/products/event.png",
    tag: null,
  },
  {
    id: "and-more",
    name: "And More…",
    description: "Have something else in mind? We customize a wide range of products. Just ask us.",
    emoji: "✨",
    image: "/images/products/more.png",
    tag: null,
  },
];

export default customizations;
