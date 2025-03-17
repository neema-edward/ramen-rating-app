const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

//  function displayRamens() {
//     const ramenMenu =document.getElementById("ramen-menu");
//     ramens.forEach((ramens)) => {
//         const img =document.createElement("im2");
//         img.src =ramens.img;
//         img.alt = ramens.name;
//         img.addEventListener("click", () => handleClick(ramens));
//         ramenMenu.appendChild(img);
//     };
//  }
//     displayRamens();
 
 document.addEventListener("DOMContentLoaded", () => {
    const ramensArray = [
        "Images/gyukotsu.jpg",
        "Images/kojiro.jpg",
        "Images/naruto.jpg",
        "Images/nirvana.jpg",
        "Images/shoyu.jpg",
    ];

    const img = document.getElementById("im2");
    let currentIndex = 0;

    function switchImage() {
        currentIndex = (currentIndex + 1) % ramensArray.length;
        im2.src = ramensArray[currentIndex]
    }

    setInterval(switchImage, 2000);
 });

    displayRamens();


