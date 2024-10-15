<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ShDefineClasses extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('sh_define_classes', [$this, 'defineClasses']),
        ];
    }

    public function defineClasses(array $defaultClasses, array $customClasses = [], bool $replace = false): array
    {
        $classes = [];

        if ($replace) {
            $classes = \array_replace_recursive($defaultClasses, $customClasses);
        } else {
            $classes = \array_merge_recursive($defaultClasses, $customClasses);
        }

        return $classes;
    }
}
