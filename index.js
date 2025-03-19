const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "Images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "Images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Images/gyukotsu.jpg", rating: 1, comment: "Poor" },
    {id: 4, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "Images/naruto.jpg", rating: 3, comment: "Average" },
    {id: 5, name: "Neema Ramen", restaurant: "Ramen-ya", image: "Images/nirvana.jpg", rating: 5, comment: "Fabulous" }
 ];



const ramenMenu =document.getElementById("ramen-menu");
const placeholder = document.getElementById('im2');
const imageRating = document.getElementById('rating-p');
const imageComment = document.getElementById('comment-p');
 
function displayRamens() {
    for(let a of ramens){
        let createdImage = document.createElement('img');
        createdImage.src = a.image;
        createdImage.alt = a.name;
        createdImage.classList.add('image-container');         
        
        
        ramenMenu.appendChild(createdImage);
    }

    ramenMenu.addEventListener('click', function(event){
        if (event.target.className === "image-container") {
            placeholder.src = event.target.src;
            placeholder.alt = event.target.alt;

            let exact = ramens.find(a => event.target.src.slice(22) === a.image);
            
            imageRating.textContent = exact.rating + "/5"
            imageComment.textContent = exact.comment
        };
        
    })

 }
  (function main(){
        displayRamens();
    })();


