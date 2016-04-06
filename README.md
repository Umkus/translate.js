# translate.js

Painless client-side internationalization

## How it works

The script replaces marked tags' contents with matching strings from the vocabulary, based on the client browser language setting.

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
 4. Mark the tags with tranlsatable content with `data-translate="hello_world"`
 
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
