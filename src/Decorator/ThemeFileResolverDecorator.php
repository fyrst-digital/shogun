<?php

namespace Fyrst\ShogunBundle\Decorator;

use Shopware\Storefront\Theme\ThemeFileResolver;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfiguration;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfigurationCollection;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Fyrst\ShogunBundle\Event\ThemeResolveFilesEvent;

class ThemeFileResolverDecorator extends ThemeFileResolver
{
    public function __construct(
        private readonly ThemeFileResolver $decorated,
        private readonly EventDispatcherInterface $eventDispatcher
    ) {}

    public function resolveFiles(
        StorefrontPluginConfiguration $themeConfig,
        StorefrontPluginConfigurationCollection $configurationCollection,
        bool $onlySourceFiles
    ): array {

        $files = $this->decorated->resolveFiles($themeConfig, $configurationCollection, $onlySourceFiles);

        return $this->eventDispatcher->dispatch(new ThemeResolveFilesEvent($files, $themeConfig, $configurationCollection))->getFiles();
    }
}
