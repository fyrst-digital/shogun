<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class ShUnique extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('sh_unique', [$this, 'unique']),
        ];
    }

    public function unique(array $source): array
    {
        return \array_unique($source);
    }
}
