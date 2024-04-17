import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import "./CommentSection.css";
const comments = [
  {
    name: "Meena L",
    description:
      "I absolutely love exploring new destinations with this website! It's like embarking on an adventure every time I visit. Highly recommended!",
    image_add: "/images/paris.jpg",
  },
  {
    name: "Shubham D",
    description:
      "This website has made my travel planning a breeze! From discovering hidden gems to booking accommodations in Mumbai, it's my go-to platform for all things travel.",
    image_add: "/images/mumbai.jpg",
  },
  {
    name: "Abhishek G",
    description:
      "Exploring Kolkata through this website has been an enriching experience! It's amazing how it captures the essence of the city's culture and heritage.",
    image_add: "/images/kolkata.jpg",
  },
  {
    name: "Mohan",
    description:
      "Delhi comes alive for me through this website! It's like having a personal guide to the city's rich history and vibrant culture.",
    image_add: "/images/delhi.jpg",
  },
  {
    name: "Rahul J",
    description:
      "Jaipur, the Pink City, has never looked more inviting! Thanks to this website, I've been able to explore its majestic forts and immerse myself in its colorful culture.",
    image_add: "/images/jaipur.jpg",
  },
  {
    name: "Ram S",
    description:
      "Rameshwaram holds a special place in my heart, and this website helps me relive those cherished memories. It's like taking a spiritual journey every time I visit.",
    image_add: "/images/rameshwaram.jpg",
  },
];

function CommentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCities, setVisibleCities] = useState([]);

  useEffect(() => {
    // Update the visible cities every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % comments.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const newVisibleCities = comments.slice(currentIndex, currentIndex + 3);
    setVisibleCities(newVisibleCities);
  }, [currentIndex]);

  return (
    <div className="cards-container">
      <h1>What customer says about us!</h1>
      <div className="city-cards-container">
        {visibleCities.map((comment, index) => (
          <Comments key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
