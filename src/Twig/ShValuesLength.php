<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class ShValuesLength extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('sh_values_length', [$this, 'values_length']),
        ];
    }

    public function values_length(array $source): int
    {
        $filtered = array_filter($source, function ($value) {
            return $value !== null;
        });

        return \count($filtered);
    }
}
