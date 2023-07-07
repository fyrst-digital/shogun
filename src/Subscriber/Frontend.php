<?php declare(strict_types=1);

namespace Fyrst\ShogunBundle\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Storefront\Page\Product\ProductPageLoadedEvent;

class Frontend implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            ProductPageLoadedEvent::class => 'onProductPageLoaded',
        ];
    }

    public function onProductPageLoaded(ProductPageLoadedEvent $event): void
    {
        $product = $event->getPage()->getProduct();
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