# translate.js

Painless client-side drop-in internationalization without dependencies.

## How it works

The script replaces marked tags' content with matching strings from the vocabulary json file.
The target translation language is determined based on the client browser settings.
See the demo [here](http://umkus.com/translate.js/demo.html).

## Usage

 1. Prepare the `vocabulary.json` file like the following:
 ```json
{
    "hello_world": {
        "en": "Hello, world!",
        "it": "Ciao mondo!",
        "es": "¡Hola Mundo!",
        "fr": "Bonjour le monde!"
    }
}
```

 2. Include `translate.js` in the page's `<head>`:
 
 ```html
 <script type="application/javascript" src="translate.js" data-translate-vocabulary="vocabulary.json"></script>
 ```
 
 3. Make sure the contents of `data-translate-vocabulary` is a uri to the `vocabulary.json`
 4. Mark the tags with translatable content with `data-translate="hello_world"`
 
## Examples
 
 ```html
 <h4 data-translate="cake_lie">The cake is a lie</h4>
 ```

 ```html
 <title data-translate="main_title">Mike's burgers</title>
 ```

 ```html
 <img src="logo.png" alt="Beautiful downtown apartment" data-tranlsate-alt="downtown_apartment"/>
 ```
 
 ```html
 <div data-translate="menu_main">Root level<div>Unaffected</div></div>
 ```

## Issues
 Not possible to serve vocabulary file from a different domain out of the box. Additional webserver configuration is required.
