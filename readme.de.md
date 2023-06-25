## Bundle Version
Dies ist eine Bundle Version von Shogun. Diese muss gegebenenfalls in `config/bundle.php` hinzugefügt werden.

``` php
return [
    ...
    FyrstShogun\FyrstShogun::class => ['all' => true]
    ...
];
```

Shogun ist ein Komponenten basiertes Template für Shopware 6 Themes. Shogun ist strikt nach Komponenten unterteilt. Das macht die Code-Basis flexibel, wiederverwendbar und wartbar. Es ist vor allem als Boilerplate für Themes gedacht. Es räumt das Storefront Template von Shopware auf und bringt erweiterte Komponenten mit. Wie zum Beispiel **Shop-Vorteile** und eine **Newsletter-Maske**. Somit ist Shogun die optimale Grundlage für Theme Entwicklungen.

Starte mit `composer require fyrst/shogun` und erlebe eine bessere Developer Expierence.

## Erweiterte Komponenten
- Vorteils-Balken
- Newsletter-Maske

## Hinweise

- Alle views von Shogun befinden sich im Ordner `shogun` um Namenskonflikte zu vermeiden. Komponenten können so verwendet werden: `{% sw_include '@Storefront/shogun/component/...' %}`  
  Es ist auch möglich von Komponenten abzuleiten: `{% sw_extends '@Storefront/shogun/component/...' %}`