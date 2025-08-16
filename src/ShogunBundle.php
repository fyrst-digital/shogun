<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle;

use Shopware\Core\Framework\Bundle;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Shopware\Storefront\DependencyInjection\DisableTemplateCachePass;
use Shopware\Storefront\DependencyInjection\StorefrontMigrationReplacementCompilerPass;

class ShogunBundle extends Bundle
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
        $loader = new XmlFileLoader($container, new FileLocator(__DIR__ . '/DependencyInjection'));
        $loader->load('services.xml');
        #$loader->import('routes.xml');

        $container->addCompilerPass(new DisableTemplateCachePass());
        $container->addCompilerPass(new StorefrontMigrationReplacementCompilerPass());
    }
}
