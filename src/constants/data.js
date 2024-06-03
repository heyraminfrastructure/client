import { images } from "../constants";
import { videos } from "../constants";

const about = [
  {
    title: "ZPrincess",
    description:
      "Z Princess saffron produces and manufacture saffron from different countries. This company was opened in the year 2023. The Z Princess saffron is the 1st saffron brand in the Kashmir. A1 Quality products are being exported and too costly to afford so we are helping our customer by providing high quality and fresh products at affordable prices with attractive packing Z Princess customer are mostly attracted by packing and satisfied with quality after consuming",
    whyUs: "We are the best",
  },
];

const saffron = [
  {
    about:
      "Dive into the vibrant world of saffron, the golden spice that has been revered for its unique aroma, rich flavor, and potent medicinal properties for thousands of years. We offer three exquisite varieties of this precious spice: Kashmir Saffron, Iranian Saffron, and Spanish Saffron. Each variety has its own unique characteristics and benefits.",
    uses: [
      {
        1: "Culinary Uses: Saffron is predominantly used as a natural seasoning and flavoring spice for delicacies. It’s a key ingredient in many cuisines worldwide, adding a unique aroma and vibrant color to dishes.",
        2: "Medicinal Uses: Saffron has been revered for its medicinal properties. It’s rich in antioxidants, which may have many health benefits. These antioxidants help fight against oxidative stress and free radicals in the body.",
        3: "Mood Booster: There is growing evidence that saffron may help improve mood and be a useful addition to treatment for depression.",
        4: "Appetite Suppressant: Some evidence shows saffron can reduce appetite and aid in weight loss.",
        5: "Antioxidant Properties: Saffron contains an impressive variety of plant compounds that act as antioxidants, such as crocin, crocetin, safranal, and kaempferol.",
        6: "Traditional Medicine: Many people use saffron as a pharmaceutical and traditional medicine. It has been used for its sedative, emmenagogue, stimulant (appetite), aphrodisiac, diaphoretic, and antidepressant properties.",
        7: "Preservative and Coloring Agent: Saffron is also used as a natural preservative and coloring agent in food.",
      },
    ],
    magic:
      "Whether you’re a seasoned chef looking to elevate your dishes, a health enthusiast seeking natural remedies, or a curious foodie wanting to explore new flavors, our saffron varieties offer something for everyone. Experience the magic of saffron with us today!",
    medicinal:
      "Saffron is not just a spice; it’s a treasure trove of health benefits. It is rich in antioxidants, which protect your cells against free radicals and oxidative stress. Saffron may help treat symptoms of mild-to-moderate depression, and it could also help relieve some of the emotional symptoms of PMS. Some evidence shows saffron can suppress your appetite and help you lose weight . Furthermore, saffron is used as an anticonvulsant (anti-seizure) remedy in Iranian folk medicine.",
  },
];

const products = [
  {
    title: "Spain Saffron",
    description:
      "Spanish Saffron, particularly from the La Mancha region, is known for its vibrant color and distinct flavor. It is the only saffron in Spain awarded DOP status (protected denomination of origin) to ensure quality control. Spanish saffron is believed to have potential health benefits, including antioxidant properties and mood-enhancing effects.",
    imgUrl: images.spainSaffron,
    vdoUrl: videos.v1,
    price: "₹ 1000",
  },
  {
    title: "Kashmir Saffron",
    description:
      "Kashmir Saffron, also known as Kesar or Zafran, is recognized as the best saffron in the world. It is noted for its long, flat strands and rich red color. This saffron boasts a deep red color, an unmistakable aroma, and a distinct flavor profile. It is also revered for its plethora of health benefits and culinary versatility.",
    imgUrl: images.kashmirSaffron,
    vdoUrl: videos.v2,
    price: "₹ 2000",
  },
  {
    title: "Iran Saffron",
    description:
      "Iranian Saffron, the “red gold” of the spice world, holds a special place in Iran’s culinary and cultural heritage. It is celebrated for its exceptional quality and its rich history dating back thousands of years. Iranian Saffron is considered one of the highest quality saffron varieties in the world due to its high concentration of crocin, a natural pigment that gives the spice its bright red color.",
    imgUrl: images.iranSaffron,
    vdoUrl: videos.v3,
    price: "₹ 3000",
  },
];

const contact = [
  {
    icon: "fa-solid fa-phone",
    title: "CALL US +91 7200150577",
    description:
      "Our Client Advisors are available Monday through Saturday, 9:00AM - 6:00PM (IST) and Sunday, 10:00AM - 5:00PM (IST), excluding holidays.",
  },
  {
    icon: "fa-brands fa-whatsapp",
    title: "WHATSAPP US",
    description:
      "Our Client Advisors are available to answer your WhatsApp messages Monday through Saturday, 9:00AM - 6:00PM (IST), and Sunday 10:00AM - 5:00PM (IST), excluding holidays.",
  },
];

const data = { about, saffron, products, contact };

export default data;
