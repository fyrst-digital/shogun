<?php

declare(strict_types=1);

namespace Fyrst\ShogunBundle\Storefront\Controller;

use Shopware\Storefront\Controller\StorefrontController;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Shopware\Core\Content\Category\Service\NavigationLoaderInterface;
use Shopware\Core\System\SalesChannel\SalesChannelEntity;
use Shopware\Core\Content\Category\Tree\Tree;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class NavigationController extends StorefrontController
{

    public function __construct(
        private readonly NavigationLoaderInterface $navigationLoader
    ) {}

    #[Route(path: '/shogun/navigation/flyout', name: 'frontend.shogun.navigation.flyout', methods: ['GET'], defaults: ['XmlHttpRequest' => true, '_routeScope' => ['storefront']])]
    public function flyout(Request $request, SalesChannelContext $context): Response
    {
        /** @var ?string $navigationId */
        $navigationId = $request->get('navigationId');
        /** @var string $twigTemplateFile */
        $twigTemplateFile = '@Storefront/shogun/component/navigation/flyout.html.twig';
        /** @var SalesChannelEntity $salesChannel */
        $salesChannel = $context->getSalesChannel();
        /** @var int $navigationDepth */
        $navigationDepth = (int) $request->get('depth', $salesChannel->getNavigationCategoryDepth());
        /** @var Tree $navigation */
        $navigation = $this->navigationLoader->load(
            $navigationId,
            $context,
            $navigationId,
            $navigationDepth
        );

        $response = $this->renderStorefront($twigTemplateFile, [
            'navigationId' => $navigationId,
            'navigationTree' => $navigation
        ]);

        $response->headers->set('x-robots-tag', 'noindex');

        return $response;
    }
}
