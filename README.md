## Ajax Loader

1. Loader on full page with overlay effect
2. Inline Loader Location specific
3. Simple - Just Copy & Paste

## How to use?

### Ajax Loader for whole page

#### Without any text
```
$('#loaderBtn').click(function(){
	APP.loader.show();
});
```

#### With some text message
```
$('#loaderBtn').click(function(){
	APP.loader.show({
		content: "<p>Thanks for your patience!! Data is loading"
	});
});
```

### Ajax Loader for a specific location - Inline Ajax Loader

```
$('#loaderBtn').click(function(){
	APP.loader.show({
		target: $("#targetElement")
	});
});
```

Created By: [realityonweb](http://realityonweb.com/)

        
       