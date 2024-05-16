<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Storefront\Event\ThemeCompilerConcatenatedStylesEvent;

class ThemeCompile implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        // Return the events to listen to as array like this:  <event to listen to> => <method to execute>
        return [
            ThemeCompilerConcatenatedStylesEvent::class => 'meddl'
        ];
    }

    public function meddl(ThemeCompilerConcatenatedStylesEvent $event)
    {
        /** 
         * inject different shogun styles here
         * make it somehow confugrable
         $mett = realpath(__DIR__ . '/../Resources/app/storefront/src/style/index.scss');
         $styles = $event->getConcatenatedStyles();
         $styles .= "@import '{$mett}' \n";
         $event->setConcatenatedStyles($styles);
         */
        #echo '<pre style="background-color: #000000;color: #ffffff; font-size: 14px; font-family: monospace; padding: 1rem;">';
        #print_r(get_class_methods($event));
        #echo '</pre>';
        #dd($event->getConcatenatedStyles(), realpath(__DIR__ . '/../Resources/app/storefront/src/style/index.scss'));
    }
}
