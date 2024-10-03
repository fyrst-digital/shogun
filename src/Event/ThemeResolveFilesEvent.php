<?php

namespace Fyrst\ShogunBundle\Event;

use Shopware\Storefront\Theme\StorefrontPluginConfiguration\File;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\FileCollection;
use Symfony\Contracts\EventDispatcher\Event;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfiguration;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfigurationCollection;

class ThemeResolveFilesEvent extends Event
{
    public function __construct(
        private array $files,
        private StorefrontPluginConfiguration $themeConfig,
        private StorefrontPluginConfigurationCollection $configurationCollection
    ) {
        $this->files = $files;
    }

    public function getFiles(): array
    {
        return $this->files;
    }

    public function setFiles(array $files): void
    {
        $this->files = $files;
    }

    public function getStyleFiles(): FileCollection | null
    {
        return $this->files['style' ?? null];
    }

    public function setStyleFiles(FileCollection $styleFiles): void
    {
        $this->files['style'] = $styleFiles;
    }

    public function getScriptFiles(): FileCollection | null
    {
        return $this->files['script'] ?? null;
    }

    public function setScriptFiles(FileCollection $scriptFiles): void
    {
        $this->files['script'] = $scriptFiles;
    }

    public function addFile(string $type, File $file): void
    {
        $this->files[$type][] = $file;
    }
    public function getThemeConfig(): StorefrontPluginConfiguration
    {
        return $this->themeConfig;
    }
    public function getConfigurationCollection(): StorefrontPluginConfigurationCollection
    {
        return $this->configurationCollection;
    }
}
