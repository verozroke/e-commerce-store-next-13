import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import { FC } from 'react'


interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {

  const billboard = await getBillboard('6abbf3f3-fa96-4a08-a649-12de4158b649')

  const products = await getProducts({
    isFeatured: true
  })

  return <Container>
    <div className="space-y-10 pb-10">
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title='Featured Products' items={products} />
      </div>
    </div>

  </Container>
}

export default page