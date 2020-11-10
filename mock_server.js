const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.get('/categories', (req, res) => {
  const categories = [{
    id: 1,
    name: 'New',
    category_key: 'new',
    category_image: 'http://lorempixel.com/500/500/fashion/1'
  },
  {
    id: 2,
    name: 'Clothes',
    category_key: 'clothes',
    category_image: 'http://lorempixel.com/500/500/fashion/2'
  },
  {
    id: 3,
    name: 'Shoes',
    category_key: 'shoes',
    category_image: 'http://lorempixel.com/500/500/fashion/3'
  },
  {
    id: 4,
    name: 'Accesories',
    category_key: 'accesories',
    category_image: 'http://lorempixel.com/500/500/fashion/4'
  },
  {
    id: 5,
    name: 'Brands',
    category_key: 'brands',
    category_image: 'http://lorempixel.com/500/500/fashion/5'
  }]
  res.status(200).json(categories)
})
app.get('/products', (req, res) => {
  let products = [
    {
      id: 1,
      category: 'new',
      name: "Blue Backless Batik Top",
      sizes: ['L', 'M'],
      price: 15.99,
      image: "https://images.topshop.com/i/TopShop/TS04R02TBLE_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 2,
      category: 'new',
      name: "Mauve Raglan Crop T-Shirt",
      sizes: ['XS', 'S', 'M'],
      price: 15.99,
      image: "https://www.topshop.com/en/tsuk/product/clothing-427/t-shirts-6864659/horoscope-pisces-t-shirt-9767629"
    },
    {
      id: 3,
      category: 'new',
      name: "White Ribbed Ruched Crop Top",
      sizes: ['S', 'XS', 'XL'],
      price: 9.99,
      image: "https://images.topshop.com/i/TopShop/TS04M80SWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 4,
      category: 'new',
      name: "Red Ribbed Ruched Crop Top",
      sizes: ['L', 'XL'],
      price: 21.99,
      image: "https://images.topshop.com/i/TopShop/TS12A16SBLK_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 5,
      category: 'clothes',
      name: "Blue Ribbed Ruched Crop Top",
      sizes: ['L', 'M'],
      price: 5.99,
      image: "https://images.topshop.com/i/TopShop/TS04A94SPNK_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 6,
      category: 'clothes',
      name: "Green Raglan Crop T-Shirt",
      sizes: ['L', 'M'],
      price: 12.99,
      image: "https://images.topshop.com/i/TopShop/TS09A26QRED_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 7,
      category: 'clothes',
      name: "Yellow Raglan Crop T-Shirt",
      sizes: ['L', 'M'],
      price: 15.99,
      image: "https://images.topshop.com/i/TopShop/TS04R29SMUL_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 8,
      category: 'clothes',
      name: "PAIGE Black Leather Sandals",
      sizes: ['L', 'M'],
      price: 5.99,
      image: "https://images.topshop.com/i/TopShop/TS09A20SMVE_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 9,
      category: 'shoes',
      name: "Red Leather Sandals",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 10,
      category: 'shoes',
      name: "Blue Leather Sandals",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 11,
      category: 'shoes',
      name: "Green Leather Sandals",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 12,
      category: 'accessories',
      name: "Green Backpack",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 13,
      category: 'accessories',
      name: "Red Bag",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 14,
      category: 'accessories',
      name: "Blue Purse",
      sizes: ['S'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 15,
      category: 'accessories',
      name: "Green Belt",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 16,
      category: 'brands',
      name: "Nike Shirt",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
    {
      id: 17,
      category: 'brands',
      name: "Adidas sneakers",
      sizes: ['L', 'M'],
      price: 11.99,
      image: "https://images.topshop.com/i/TopShop/TS26G29RWHT_F_1.jpg?$w400$&fmt=webp&qlt=80"
    },
  ]
  if (req.query) {
    const { text, category, size, id } = req.query
    if (id) {
      products = products.find((x) => x.id === Number(id))
    }
    if (text) {
      products = products.filter((x) => x.name.includes(text))
    }
    if (category) {
      products = products.filter((x) => x.category === category)
    }
    if (size) {
      const sizes = size.split(',')
      let allProducts = sizes.map((size) => {
        return products.filter((x) => x.sizes.includes(size))
      }).flat()
      products = allProducts.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
    }
  }
  res.status(200).json(products)
})
app.get('/health', (req, res) => {
  res.sendStatus(200)
})
app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})
