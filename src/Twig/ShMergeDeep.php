<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class ShMergeDeep extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('sh_merge_deep', [$this, 'mergeDeep']),
        ];
    }

    public function mergeDeep(array $source, array $target): array
    {
        return array_merge_recursive($source, $target);
    }
}
