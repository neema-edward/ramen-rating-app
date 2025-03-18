const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "Images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "Images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Images/gyukotsu.jpg" },
    {id: 4, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "Images/naruto.jpg" },
    {id: 3, name: "Neema Ramen", restaurant: "Ramen-ya", image: "Images/nirvana.jpg" }
 ];

//  document.addEventListener("DOMContentLoaded", () => {
//     const ramensArray = [
//         "Images/gyukotsu.jpg",
//         "Images/kojiro.jpg",
//         "Images/naruto.jpg",
//         "Images/nirvana.jpg",
//         "Images/shoyu.jpg",
//     ];

//     const img = document.getElementById("im2");
//     let currentIndex = 0;

//     function switchImage() {
//         currentIndex = (currentIndex + 1) % ramensArray.length;
//         im2.src = ramensArray[currentIndex]
//     }

//     setInterval(switchImage, 2000);
 

//     displayRamens();
// });

const ramenMenu =document.getElementById("ramen-menu");
const placeholder = document.getElementById('im2');
 function displayRamens() {
    
    
    ramenMenu.addEventListener('click', function(event){
        
        if(event.target.classList.contains('image-container')){
            placeholder.src = event.target.src;
            placeholder.alt = event.target.alt;
        }
    })

 }
  

    // function addSubmitListener() {
    //     const form = document.getElementById('ramen-form');
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault(); 
    //         const newRamen = {
    //             id: ramens.length + 1, 
    //             name: form.name.value,
    //             restaurant: form.restaurant.value,
    //             image: form.image.value,
    //             rating: parseInt(form.rating.value) || null,
    //             comment: form.comment.value || ''
    //         };
    //         ramens.push(newRamen); 
    //         displayRamens(); 
    //         form.reset(); 
    //     });
    // }
 
    (function main(){
        displayRamens();
    })();


