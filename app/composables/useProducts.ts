export interface VariantProduct {
  name: string
  category: string
  price: number
  image: string
  maker: string
}

export function useProducts() {
  const products: VariantProduct[] = [
    {
      name: 'Sunday Morning Quilt',
      category: 'Quilts',
      price: 285,
      image: '/sunday-quilt.png',
      maker: 'Pieced & hand-quilted by Mom'
    },
    {
      name: 'Live-Edge Maple Board',
      category: 'Woodwork',
      price: 95,
      image: '/maple-board.png',
      maker: 'Cut & finished by Dad'
    },
    {
      name: 'Coastal Fog, Framed',
      category: 'Artwork',
      price: 140,
      image: '/lakeside-painting.png',
      maker: 'Painted by Sarah'
    },
    {
      name: 'Walnut Nesting Bowls',
      category: 'Woodwork',
      price: 120,
      image: '/walnut-bowls.png',
      maker: 'Turned by Dad'
    }
  ]

  const categories = ['Quilts', 'Diamond Dots', 'Woodwork', 'Artwork']

  return { products, categories }
}
