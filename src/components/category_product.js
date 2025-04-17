import React from 'react'

const Category_product = ({title, image}) => {
  return (
    <article>
        <div className='category-product-title'>
            {title}
        </div>

        <figure>
            <div className='category-product-image-container'>
                <img src={`./assets/${image}`} alt={title} />
            </div>
        </figure>

        <aside>
            
        </aside>
    </article>
  )
}

export default Category_product