import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    
      //create <div> class card
      let divCard = document.createElement('div');
      divCard.setAttribute('class', 'card');
      let elem = divCard;

          //create <div> class card__top
          let divCardTop = document.createElement('div');
          divCardTop.setAttribute('class', 'card__top');
          divCard.appendChild(divCardTop);
             
              //create image of product
              let imgProduct = document.createElement('img');
              console.log(product);
              imgProduct.setAttribute('src', `/assets/images/products/${product.image}`);
              imgProduct.setAttribute('class', 'card__image');
              imgProduct.setAttribute('alt', 'product');
              divCardTop.appendChild(imgProduct);

              //create price line
              let priceLine = document.createElement('span');
              priceLine.setAttribute('class', 'card__price');
              priceLine.innerHTML = `€${product.price}`;
              divCardTop.appendChild(priceLine);

          //create <div> class card__body
          let divCardBody = document.createElement('div');
          divCardBody.setAttribute('class', 'card__body');
          divCard.appendChild(divCardBody);

              //create product title
              let divCardTitle = document.createElement('div');
              divCardTitle.setAttribute('class', 'card__title');
              divCardTitle.innerHTML = product.name;
              divCardBody.appendChild(divCardTitle); 

              //create card button
              let cardButton = document.createElement('button');
              cardButton.setAttribute('type', 'button');
              cardButton.setAttribute('class', 'card__button');
              divCardBody.appendChild(cardButton);
              
                  //create image of button
                  let imgButton = document.createElement('img');
                  imgButton.setAttribute('src', '/assets/images/icons/plus-icon.svg');
                  imgButton.setAttribute('alt', 'icon');
                  cardButton.appendChild(imgButton);
console.log(elem.innerHTML);
  }
}
