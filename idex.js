let body=document.querySelector("body");



let imgs=[{
    image:"_WW236934.jpg",
    Name:"kvala"
},{
    image:"0f3d3a25f200546828aeac1583200949.jpg",
    Name:"horse"
},{
    image:"4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    Name:"Gorrila"
},{
    image:"809f91009a575ce1c335385c841898ce.jpg",
    Name:"Kangaroo"
},{
    image:"animals_hero_giraffe_1_0.jpg",
    Name:"Giraffe"
},{
    image:"czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmwyNjAwNjMyMjYwNC1pbWFnZS1renhsdWpwNS5qcGc.webp",
    Name:"Elephant"
},{
    image:"Donkey_in_Clovelly,_North_Devon,_England.jpg",
    Name:"Donkey"
},{
    image:"download (1).jpg",
    Name:"Leopard"
},{
    image:"download (2).jpg",
    Name:"sheep"
},{
    image:"download (3).jpg",
    Name:"Peacock"
},{
    image:"download.jpg",
    Name:"Camel"
},{
    image:"Eastern_wolf_in_Algonquin_Provincial_Park_01.jpg",
    Name:"Wolf"
},{
    image:"GettyImages-1043597638-49acd69677d7442588c1d8930d298a59.jpg",
    Name:"Zebra"
},{
    image:"gettyimages-157617413-612x612.jpg",
    Name:"Crockodile"
},{
    image:"images.jpg",
    Name:"Snake"
},{
    image:"istockphoto-959866606-612x612.jpg",
    Name:"Rabbit"
},{
    image:"lion-pictures-snw3r6217skr1ni5.jpg",
    Name:"Lion"
},{
    image:"monkey-pictures-8h0v87o9km8bz65x.jpg",
    Name:"Monkey"
},{
    image:"pexels-jose-almeida-2649841.jpg",
    Name:"Tiger"
},{
    image:"pexels-photo-3608263.jpeg",
    Name:"Panda"
},{
    image:"pexels-pixabay-34231.jpg",
    Name:"Deer"
},{
    image:"pexels-pixabay-86594.jpg",
    Name:"Goat"
},{
    image:"pngtree-ester-rabit-png-image_13144548.png",
    Name:"Rabbit"
},{
    image:"Vulpes_vulpes_ssp_fulvus.jpg",
    Name:"Red Fox"
}];
let Second=document.querySelector(".Second");
for(let i=0;i<imgs.length;i++){
    let img=document.createElement("img");  
    let div=document.createElement("div");
    let divt=document.createElement("div");
    let h4=document.createElement("h4");
   
    div.className="Third"
    divt.className="Four";
    img.src=imgs[i].image;
    
    img.alt=imgs[i].Name;
    h4.textContent=img.alt
    img.width=100;
      div.append(img);
      div.appendChild(h4);
       Second.appendChild(div) ;
      
    body.appendChild(Second);
}





 