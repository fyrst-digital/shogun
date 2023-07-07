<?php declare(strict_types=1);

namespace Fyrst\ShogunBundle\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Storefront\Page\Product\ProductPageLoadedEvent;

use Fyrst\ShogunBundle\Service\Storefront\ProductService;

class Frontend implements EventSubscriberInterface
{
    private ProductService $storefrontProductService;

    public function __construct(ProductService $storefrontProductService)
    {
        $this->storefrontProductService = $storefrontProductService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProductPageLoadedEvent::class => 'onProductPageLoaded',
        ];
    }

    public function onProductPageLoaded(ProductPageLoadedEvent $event): void
    {        
        $this->storefrontProductService->pricesQuanitiesExtension( $event->getPage()->getProduct() );
    }
}