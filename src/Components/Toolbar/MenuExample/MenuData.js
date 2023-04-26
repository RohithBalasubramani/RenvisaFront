export const menuItems = [  
  {    name: "Home",    url: "/"  },

  {   name: "Products",    
      submenu: [ 
         
      {name: "Product 2",   
      submenuTwo: [{name: "Product 2A", url: "/products/2/a" },
                  {name: "Product 2B", url: "/products/2/b"},]},
      {name: "Product 3",   
      submenuTwo: [{name: "Product 3A", url: "/products/2/a" },
                  {name: "Product 3B", url: "/products/2/b"},]},
      {name: "Product 4",   
      submenuTwo: [{name: "Product 4A", url: "/products/2/a" },
                  {name: "Product 4B", url: "/products/2/b"},]}
        
        ]
  },

  {   name: "ProductsTwo",    
  submenu: [ 
     
  {name: "Product A",   
  submenuTwo: [{name: "Product 20A", url: "/products/2/a" },
              {name: "Product 20B", url: "/products/2/b"},]},
  {name: "Product B",   
  submenuTwo: [{name: "Product 30A", url: "/products/2/a" },
              {name: "Product 30B", url: "/products/2/b"},]},
  {name: "Product C",   
  submenuTwo: [{name: "Product 40A", url: "/products/2/a" },
              {name: "Product 40B", url: "/products/2/b"},]}
    
    ]
},

  {
    name: "Contact",
    url: "/contact"
  }
];


export const Categories = [  



         
      {name: "Product 2",   
      submenu: [{name: "Product 2A", url: "/products/2/a" },
                  {name: "Product 2B", url: "/products/2/b"},]},
                  
      {name: "Product 3",   
      submenu: [{name: "Product 3A", url: "/products/2/a" },
                  {name: "Product 3B", url: "/products/2/b"},]},

      {name: "Product 4",   
      submenu: [{name: "Product 4A", url: "/products/2/a" },
                  {name: "Product 4B", url: "/products/2/b"},]}
        


];

export const products = [
  {
    id: 1,
    name: 'Product A',
    description: 'This is product A',
    brand: 'Brand A'
  },
  {
    id: 2,
    name: 'Product B',
    description: 'This is product B',
    brand: 'Brand A'
  },
  {
    id: 3,
    name: 'Product C',
    description: 'This is product C',
    brand: 'Brand B'
  },
  {
    id: 4,
    name: 'Product D',
    description: 'This is product D',
    brand: 'Brand B'
  }
];

export const brands = [
  {
    id: 1,
    name: 'Brand A'
  },
  {
    id: 2,
    name: 'Brand B'
  }
];
