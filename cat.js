var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var book1Add =  document.getElementById("book1");
var book2Add =  document.getElementById("book2");
var book3Add =  document.getElementById("book3");
var book4Add =  document.getElementById("book4");
var book5Add =  document.getElementById("book5");
var book6Add =  document.getElementById("book6");
var book7Add =  document.getElementById("book7");
var book8Add =  document.getElementById("book8");
var book9Add =  document.getElementById("book9");
var book10Add =  document.getElementById("book10");
var book11Add =  document.getElementById("book11");
console.log(book1Add);
var book1 = {
    name: "British Longhaired Cat",
    quantity: 0
};
//console.log(book1.name);
var book2 = {
    name: "Bombay Cat",
    quantity: 0
};
var book3 = {
    name: "Russain Black, White or Tabby cat",
    quantity: 0
};
var book4 = {
    name: "Siamese",
    quantity: 0
};
var book5 = {
    name: "Persian Cat",
    quantity: 0
};
var book6 = {
    name: "American Wirehair cat",
    quantity: 0
};
var book7 = {
    name: "Alaskan Malamute",
    quantity: 0
};
var book8 = {
    name: "American Bulldog",
    quantity: 0
};
var book9 = {
    name: "Kerry Blue Terrier",
    quantity: 0
};
var book10 = {
    name: "Soft Coated Wheaten Terrier",
    quantity: 0
};
var book11 = {
    name: "Flat-Coated Retriever",
    quantity: 0
};
function updateCart() {
    cart = 
    book1.quantity +
    book2.quantity +
    book3.quantity +
    book4.quantity +
    book5.quantity +
    book6.quantity +
    book7.quantity +
    book8.quantity +
    book9.quantity +
    book10.quantity +
    book11.quantity;
   cartValue.innerHTML = cart;
}
book1Add.onclick = (e) => {
    book1.quantity++;
    updateCart();
};
book2Add.onclick = (e) => {
    book2.quantity++;
    updateCart();
};
book3Add.onclick = (e) => {
    book3.quantity++;
    updateCart();
};
book4Add.onclick = (e) => {
    book4.quantity++;
    updateCart();
};
book5Add.onclick = (e) => {
    book5.quantity++;
    updateCart();
};
book6Add.onclick = (e) => {
    book6.quantity++;
    updateCart();
};
book7Add.onclick = (e) => {
    book7.quantity++;
    updateCart();
};
book8Add.onclick = (e) => {
    book8.quantity++;
    updateCart();
};
book9Add.onclick = (e) => {
    book9.quantity++;
    updateCart();
};
book10Add.onclick = (e) => {
    book10.quantity++;
    updateCart();
};
book11Add.onclick = (e) => {
    book11.quantity++;
    updateCart();
};
var whatsappLink = "https://api.whatsapp.com/send?phone=91988390000&text=order%20details"

function updateWhatsappLink(){
    if(book1.quantity!=0){
        whatsappLink+="%0A"+book1.name + book1.quantity
    }
    if(book2.quantity!=0){
        whatsappLink+="%0A"+book2.name + book2.quantity
    }
    if(book3.quantity!=0){
        whatsappLink+="%0A"+book3.name + book3.quantity
    }
    if(book4.quantity!=0){
        whatsappLink+="%0A"+book4.name + book4.quantity
    }
    if(book5.quantity!=0){
        whatsappLink+="%0A"+book5.name + book5.quantity
    }    
    if(book6.quantity!=0){
        whatsappLink+="%0A"+book6.name + book6.quantity
    }     
    if(book7.quantity!=0){
        whatsappLink+="%0A"+book7.name + book7.quantity
    }     
    if(book8.quantity!=0){
        whatsappLink+="%0A"+book8.name + book8.quantity
    }     
    if(book9.quantity!=0){
        whatsappLink+="%0A"+book9.name + book9.quantity
    }     
    if(book10.quantity!=0){
        whatsappLink+="%0A"+book10.name + book10.quantity
    }     
    if(book11.quantity!=0){
        whatsappLink+="%0A"+book11.name + book11.quantity
    } 
    whatsappLink+="%0A"+"Total%20Price=%20$";
}
cartButton.onclick=()=>{
    updateWhatsappLink();
    window.open(whatsappLink,"_blank");
}