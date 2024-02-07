<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Subscriber;

use Shopware\Storefront\Event\ThemeCompilerConcatenatedStylesEvent;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\File;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfiguration;
use Shopware\Storefront\Theme\ThemeFileImporterInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ThemeCompiler implements EventSubscriberInterface
{
    public function __construct(
        private readonly ThemeFileImporterInterface $themeFileImporter,
    ) {
    }
    public static function getSubscribedEvents(): array
    {
        return [
            // ThemeCompilerConcatenatedStylesEvent::class => 'onGetConcatenatedStyles'
        ];
    }

    public function onGetConcatenatedStyles(ThemeCompilerConcatenatedStylesEvent $event): void
    {
        $concatenatedStyles = $event->getConcatenatedStyles();
        $concatenatedStyles .= $this->themeFileImporter->getConcatenableStylePath(new File(__DIR__ . '/../Resources/app/storefront/src/styles/base/base.scss'), new StorefrontPluginConfiguration('ShogunBase'));
        $event->setConcatenatedStyles($concatenatedStyles);
    }
}
