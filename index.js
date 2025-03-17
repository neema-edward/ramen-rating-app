const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 document.addEventListener("DOMContentLoaded", () => {
    const ramensArray = [
        "Images/gyukotsu.jpg",
        "Images/kojiro.jpg",
        "Images/naruto.jpg",
        "Images/nirvana.jpg",
        "Images/shoyu.jpg",
    ];

    const im2 = document.getElementById("im2");
    let currentIndex = 0;

    function switchImage() {
        currentIndex = (currentIndex + 1) % ramensArray.length;
        im2.src = ramensArray[currentIndex]
    }

    setInterval(switchImage, 2000);
 });