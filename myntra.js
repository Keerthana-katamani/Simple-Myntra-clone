let bagItems=[];
onload();

function onload(){
  let bagitemstr= localStorage.getItem('bagItem');
  bagItems= bagitemstr? JSON.parse(bagitemstr):[];
  display_items();
  display_bagCount();
}
function addtobag(itemid){
  bagItems.push(itemid);
  localStorage.setItem('bagItem',JSON.stringify(bagItems));
  display_bagCount();
}
function display_bagCount(){
  let bagCountElement = document.querySelector('.bag_count');
  if(bagItems.length >0)
    {
      bagCountElement.style.visibility='visible';
      bagCountElement.innerText=bagItems.length;
    }
else{
  bagCountElement.style.visibility='hidden';
}
}

function display_items(){
  let itemsContainerElement=document.querySelector('.items_container');
  if(!itemsContainerElement) 
    return;
  let innerHtml=''
  items.forEach(item => {
    innerHtml+=`
    <div class="item_container">
    <img class="image_item" src="${item.image}" alt="image 1">
    <div class="rating">${item.rating.stars}⭐|${item.rating.count}</div>
    <div class="item_brand">${item.company}</div>
    <div class="item_name">${item.item_name}</div>
    <div class="price">
      <span class="sale_price">Rs ${item.original_price}</span>
      <span class="original_price">Rs ${item.current_price}</span>
      <span class="discount">${item.discount_percentage}% OFF</span>
    </div>
    <button class="bag_btn" onclick="addtobag(${item.id})">Add to Bag</button>
    </div>`
  
     
  });
  itemsContainerElement.innerHTML=innerHtml;
}
