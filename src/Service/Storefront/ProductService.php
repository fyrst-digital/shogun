<?php declare(strict_types=1);

namespace Fyrst\ShogunBundle\Service\Storefront;

use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;

class ProductService
{
    public function pricesQuanitiesExtension(
        SalesChannelProductEntity $product
    ): void
    {
        $prices = $product->getPrices();
        $pricesQuanities = [];
        
        foreach ($prices->getElements() as $key => $price) {

            $pricesQuanities[$key] = [
                'quantityStart' => $price->getQuantityStart(),
                'quantityEnd' => $price->getQuantityEnd()
            ];
        }

        $pricesQuanities = array_unique($pricesQuanities, SORT_REGULAR);

        $product->getCalculatedPrices()->map( function( $value ) use ($pricesQuanities) { 

            foreach ($pricesQuanities as $key => $price) {

                if ($price['quantityEnd'] === $value->getQuantity()) {
                    $value->addArrayExtension('quantities', $price);
                }
            }
        });
    }
}