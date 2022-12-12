import React from 'react';
import appConfig from '../../app/config';

export default function Products() {
    return (
        <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
            </h6>
            {
                appConfig.products.map((product, i) =>
                    <p key={i} className="mb-4">
                        <a href={product.url} className="text-gray-600">{product.name}</a>
                    </p>
                )
            }
        </div>
    )
}
