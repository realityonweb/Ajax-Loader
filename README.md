## Ajax Loader

1. Loader with overlay on the page. 
2. Inline Loader, Location specific
3. Simple - Just Copy & Paste

#### Usage Options
```
  [content]: You can pass some HTML markup, Default is blank.
  [target] : Location for the Loader can be changed. You can pass any jQuery Element ID. Default is BODY tag with overlay on the page.
```

## How to use?

#### With all default properties.
```
  APP.loader.show();
```


#### Overriding the default properties.
You can override either a single or multiple property as per your need.
```
  APP.loader.show({
    content: "<p>Loading Content.</p>",
    target: $("#targetElement")
  });
```

Created By: [realityonweb](http://realityonweb.com/)