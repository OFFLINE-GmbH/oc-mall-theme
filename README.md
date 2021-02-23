# oc-mall-theme

Demo theme for the [oc-mall-plugin](https://github.com/OFFLINE-GmbH/oc-mall-plugin).

### Theme Setup

You must first install the theme dependencies. In the theme folder, execute:

```
npm install
```

### Theme Customisation and Development

In webpack.mix.js replace your App URL in the following line:

```
proxy: 'http://127.0.0.1:8000/',
```

If you use built-in php/laravel server (php artisan serve), the default value should work for you.

When you run the command below:

```
npm run watch
```

you can open your site with hot-reload at http://localhost:3000

### Production build

Use 'npm run production' to compile your assets with purge and minimize options.

```
npm run production
```

### Theme License

MIT License - check out [LICENSE](LICENSE) file for MIT license details

### Changelog

#### 2.0.0 
**Important / potentially breaking changes! / Tailwind CSS V2** 
- TailwindCSS upgraded to version 2+ with Laravel-mix 6

#### 1.0.12
- Added quickCheckout component

#### 1.0.11
- Optimized compatibility with October 469
  
#### 1.0.10
- Minor improvements
  
#### 1.0.9
- Added property values to product component
  
#### 1.0.8
- Minor improvements
  
#### 1.0.7
- Added PDF export for Wishlists
  
#### 1.0.6
- Added styles for reviews
  
#### 1.0.5
- Added terms and conditions checkbox
  
#### 1.0.4
- Added wishlists
  
#### 1.0.3
- Added default checkbox styles for custom fields
  
#### 1.0.2
- Added new on_sale filter
  
#### 1.0.1
- Initial release

