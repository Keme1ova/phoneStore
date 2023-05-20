import { Link } from 'react-router-dom'
import emptyCartSvg from './../assets/images/emptyCart.svg'

export const EmptyCart = () => {
  return (
    <div className='empty-cart d-flex flex-column justify-content-center align-items-center my-5 py-5'>
      <img src={emptyCartSvg} alt="" />
      <h3 className='mt-4'>Корзина пуста</h3>
      <p className='mb-4'>Но это никогда не поздно исправить :)</p>
      <Link className='d-flex align-items-center justify-content-center' to='/'>В каталог товаров</Link>
    </div>
  )
}
