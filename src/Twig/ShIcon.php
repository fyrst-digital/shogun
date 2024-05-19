<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Twig\Markup;

class ShIcon extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('sh_icon', [$this, 'iconMarkup']),
        ];
    }

    public function iconMarkup(string $name, string $prefix = 'sh-'): Markup
    {

        return new Markup("<span class='{$prefix}icon icon-{$name}'></span>", 'UTF-8');
    }
}
