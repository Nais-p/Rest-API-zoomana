<template>
  <div>
    <div class="product">
      <div class="product-content">
        <div class="product-img" v-if="picture">
          <v-img
            @click="
              $router.push({
                name: 'Product',
                params: {
                  id: id,
                },
              })
            "
            :src="`${picture}`"
            alt=""
            style="width: 100%;display: block; "
          />
        </div>

        <div class="product-img" v-else>
          <p>imaged</p>
        </div>

        <div class="product-btns">
          <div v-if="stock > '0'" class="bout">
            <button class="btn-cart">
              Buy <span> <i class="fas fa-plus"></i></span>
            </button>
          </div>

          <p class="red-text">
            <strong v-if="stock <= '0'">Product is out of stock</strong>
          </p>
        </div>
      </div>
      <div class="product-info">
        <div class="product-info-top">
          <div class="rating"></div>
        </div>
        <a href="#" class="product-name">{{ name }}</a>
        <p class="product-price">{{ price }}€</p>
        <p>
          Sent by : {{ sent_by }} <br />
          Sold by : {{ sold_by }}
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["name", "price", "stock", "picture", "id", "sent_by", "sold_by"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Quicksand", sans-serif;
}
.ee {
  width: 100%;
  display: block;
}
.cate {
  width: 88vw;
  margin: 0 auto;
}
.lg-title,
.md-title,
.sm-title {
  font-family: "Roboto", sans-serif;
  padding: 0.6rem 0;
  text-transform: capitalize;
}
.lg-title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  padding: 1.3rem 0;
  opacity: 0.9;
}
.md-title {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
.sm-title {
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
}
.text-light {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  opacity: 0.5;
  margin: 0.4rem 0;
}
.product-content {
  height: 300px;
  width: 100%;
  background: #edededbd;
  padding: 3rem 0.5rem 2rem 0.5rem;
  cursor: pointer;
}
.product-img {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5);
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  transition: background 0.5s ease;
}
.product:hover .product-img {
  background: #6d84a5;
}
.product-btns {
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.btn-cart,
.btn-buy {
  background: transparent;
  border: 1px solid black;
  padding: 0.8rem 0;
  width: 125px;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.6s ease;
}
.btn-cart {
  background: black;
  color: white;
}
.btn-cart:hover {
  background: #6d84a5;
}
.btn-buy {
  background: white;
}
.btn-buy:hover {
  background: #6d84a5;
  color: #fff;
}
.product-info {
  background: #f6f6f49c;
  padding: 2rem;
}
.product-info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rating span {
  color: #6d84a5;
}
.product-name {
  color: black;
  display: block;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
.product-price {
  padding-top: 0.6rem;
  padding-right: 0.6rem;
  display: inline-block;
  color: #6d84a5;
  font-size: 18px;
}
.product-img img {
  transition: transform 0.6s ease;
}
.product:hover .product-img img {
  transform: scale(1.1);
}
.product:hover .product-btns {
  opacity: 1;
}
.off-info .sm-title {
  background: #6d84a5;
  color: white;
  display: inline-block;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  z-index: 1;
  letter-spacing: 3px;
  cursor: pointer;
}
.product-collection {
  padding: 3.2rem 0;
}
.product-collection-wrapper {
  padding: 3.2rem 0;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50vh;
  padding: 2rem 1.5rem 3.2rem;
  margin: 5px;
}
.product-col-r-bottom > div:first-child {
  background: #eaa001;
}
.product-col-r-bottom > div:last-child {
  background: #0090ff;
}
.product-col-content {
  text-align: center;
  color: white;
}
.product-collection .text-light {
  opacity: 1;
  font-size: 0.8;
  font-weight: 400;
  line-height: 1.7;
}
.btn-dark {
  background: black;
  color: white;
  outline: 0;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  border: 0;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.6s ease;
  font-size: 1rem;
  font-family: inherit;
}
.btn-dark:hover {
  background: #6d84a5;
}
@media screen and (min-width: 992px) {
  .product-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-col-r-bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .product-items {
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  .products .text-light {
    width: 50%;
  }
}
@media screen and (min-width: 1336px) {
  .product-items {
    grid-template-columns: repeat(4, 1fr);
  }
  .product-collection-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .flex {
    height: 60vh;
  }
  .product-col-left {
    height: 121.5vh;
  }
}
</style>
