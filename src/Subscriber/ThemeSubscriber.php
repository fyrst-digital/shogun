<?php declare(strict_types=1);

namespace Fyrst\ShogunBundle\Subscriber;

use Shopware\Core\Content\Product\ProductEvents;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Fyrst\ShogunBundle\Event\ThemeResolveFilesEvent;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\File;
use Shopware\Core\Kernel;

class ThemeSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly Kernel $kernel,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ThemeResolveFilesEvent::class => 'onThemeResolveFiles'
        ];
    }

    public function onThemeResolveFiles(ThemeResolveFilesEvent $event)
    {
        $styleFiles = $event->getStyleFiles();
        $hasShogun = false;

        foreach ($styleFiles as $file) {
            $resolveMapping = $file->getResolveMapping() ?? [];

            if (isset($resolveMapping['shogun'])) {
                $shogunPath = $this->kernel->getBundle('ShogunBundle')->getPath();
                $resolveMapping['shogun'] = "{$shogunPath}/Resources/app/storefront/src";
                $file->setResolveMapping($resolveMapping);
                $hasShogun = true;
            }
        }

        if ($hasShogun) {
            $event->setStyleFiles($styleFiles);
        }
    }
}