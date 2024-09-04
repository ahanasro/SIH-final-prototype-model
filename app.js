document.addEventListener("DOMContentLoaded", () => {
  const visitButtons = document.querySelectorAll(".read-more-btn button");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupImg = document.getElementById("popup-img");
  const popupText = document.getElementById("popup-text");
  const indianPriceDiv = document.getElementById("indian-price");
  const foreignerPriceDiv = document.getElementById("foreigner-price");
  const closePopup = document.getElementById("close-popup");

  visitButtons.forEach(button => {
    button.addEventListener("click", () => {
      const placeId = button.getAttribute("data-place");

      let imgSrc, title, description, priceIndian, priceForeigner;
      switch (placeId) {
        case "1":
          imgSrc = "sayan-das-97col-gjrfI-unsplash (1).jpg";
          title = "Victoria Memorial";
          description = "Victoria Memorial is famous for its exemplary architecture, a true representation of British influence in Kolkata.";
          priceIndian = "INR 20 for Indian visitors";
          priceForeigner = "INR 500 for Foreign visitors";
          break;
        case "2":
          imgSrc = "ankit-manoharan-0HxxztV_FAI-unsplash.jpg";
          title = "Indian Museum";
          description = "Indian Museum is renowned for its extensive collection of antiques and ornaments, offering a glimpse into India's rich history.";
          priceIndian = "INR 50 for Indian visitors";
          priceForeigner = "INR 1000 for Foreign visitors";
          break;
        case "3":
          imgSrc = "AAN_1.jpg";
          title = "Botanical Gardens";
          description = "Botanical Gardens is known for its lush greenery and rich flora, providing a tranquil environment away from the hustle of the city.";
          priceIndian = "Free Entry";
          priceForeigner = "Free Entry";
          break;
        case "4":
          imgSrc = "eden-garden-small-new.jpg";
          title = "Eden Gardens";
          description = "Eden Gardens, the oldest cricket stadium in India, is a place of worship for cricket lovers.";
          priceIndian = "INR 10 for Indian visitors";
          priceForeigner = "INR 50 for Foreign visitors";
          break;
        case "5":
          imgSrc = "St.Pauls_Cathedral_Church-_Kolkata.jpg";
          title = "St. Paul's Cathedral";
          description = "St. Paul's Cathedral is a renowned church in Kolkata, famous for its Gothic architecture.";
          priceIndian = "Free Entry";
          priceForeigner = "Free Entry";
          break;
        case "6":
          imgSrc = "1200px-Birla_Temple_Kolkata_(26551471839).jpg";
          title = "Birla Temple";
          description = "Birla Temple is known for its remarkable architectural design, a serene place for spiritual seekers.";
          priceIndian = "Free Entry";
          priceForeigner = "Free Entry";
          break;
        default:
          imgSrc = "";
          title = "Unknown Place";
          description = "Details are not available for this place.";
          priceIndian = "N/A";
          priceForeigner = "N/A";
          break;
      }

      // Set the popup content
      popupImg.src = imgSrc;
      popupText.textContent = description;
      indianPriceDiv.textContent = priceIndian;
      foreignerPriceDiv.textContent = priceForeigner;

      // Show the popup
      popupOverlay.style.display = "flex";
    });
  });

  // Close popup on clicking the close button
  closePopup.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });
});
