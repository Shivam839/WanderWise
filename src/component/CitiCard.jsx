import React from "react";
import "./CitiCard.css";
import Cards from "./Cards";

function CitiCard() {
  const cityData = [
    {
      name: "Varanasi",
      description:
        "Varanasi, one of the oldest cities in the world, is known for its spiritual significance. Situated on the banks of the Ganges River, it's famous for its ghats, temples, and Ganga Aarti ceremonies.",
      image_add: "/images/varanasi.jpg",
    },
    {
      name: "Paris",
      description:
        "Paris, the capital of France, is renowned for its art, culture, and iconic landmarks like the Eiffel Tower and Louvre Museum. It's a global center for fashion, cuisine, and romance.",
      image_add: "/images/paris.jpg",
    },
    {
      name: "Mumbai",
      description:
        "Mumbai, the financial capital of India, is a bustling metropolis with a vibrant culture and Bollywood film industry. It's home to historic landmarks like the Gateway of India.",
      image_add: "/images/mumbai.jpg",
    },
    {
      name: "Kolkata",
      description:
        "Kolkata, the cultural capital of India, is known for its colonial architecture, literary heritage, and festive spirit. It boasts landmarks like the Howrah Bridge and Victoria Memorial.",
      image_add: "/images/kolkata.jpg",
    },
    {
      name: "Delhi",
      description:
        "Delhi, the capital city of India, is a vibrant blend of ancient history and modernity. It's famous for its Mughal-era monuments like the Red Fort and Qutub Minar.",
      image_add: "/images/delhi.jpg",
    },
    {
      name: "Jaipur",
      description:
        "Jaipur, the Pink City of India, is renowned for its majestic forts, palaces, and vibrant culture. It's a UNESCO World Heritage Site known for its architectural marvels.",
      image_add: "/images/jaipur.jpg",
    },
    {
      name: "Goa",
      description:
        "Goa, a coastal paradise, is famous for its sandy beaches, vibrant nightlife, and Portuguese heritage. It offers a unique blend of sun, sea, and spirituality.",
      image_add: "/images/goa.jpg",
    },
    {
      name: "Ahmedabad",
      description:
        "Ahmedabad, the largest city in Gujarat, is known for its rich history, textile industry, and cultural heritage. It's home to the Sabarmati Ashram and vibrant street markets.",
      image_add: "/images/ahmadabad.jpg",
    },
    {
      name: "Manali",
      description:
        "Manali, nestled in the Himalayas, is a popular hill station known for its scenic beauty and adventure sports. It offers opportunities for trekking, skiing, and river rafting.",
      image_add: "/images/manali.jpg",
    },
    {
      name: "Manipur",
      description:
        "Manipur, located in northeastern India, is known for its scenic landscapes and rich cultural heritage. It's home to picturesque lakes, ancient temples, and traditional dance forms.",
      image_add: "/images/manipur.jpg",
    },
    {
      name: "Agra",
      description:
        "Agra, in northern India's Uttar Pradesh, is famed for its architectural wonders, notably the Taj Mahal. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it's one of the Seven Wonders of the World.",
      image_add: "/images/agra.jpg",
    },
    {
      name: "Rameshwaram",
      description:
        "Rameshwaram, on Pamban Island in Tamil Nadu, India, is a sacred town of immense Hindu religious significance. Legend holds it as the site where Lord Rama constructed a bridge (Rama Setu) to Lanka.",
      image_add: "/images/rameshwaram.jpg",
    },
  ];
  return (
    <div className="cards">
      {cityData.map((item, id) => (
        <Cards
          key={id} // Added a unique key prop for each Cards component
          name={item.name}
          description={item.description.substring(0, 150).trim() + "..."}
          image_add={item.image_add}
        />
      ))}
    </div>
  );
}

export default CitiCard;
