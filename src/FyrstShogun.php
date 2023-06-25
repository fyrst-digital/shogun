<?php declare(strict_types=1);

namespace FyrstShogun;

use Shopware\Core\Framework\Bundle;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Storefront\Framework\ThemeInterface;

class FyrstShogun extends Bundle
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
    }
}