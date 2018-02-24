# Path resolution from AngularJS code to template

## What is the problem?

There is no clear convention about the relative path from the template to the AngularJS code that includes the template. Furthermore, there is no set convention for the path provided to the `templateUrl` member of the Directive Definition Object.

## What is the impact?

Webpack uses the ES2015 module system to load files using relative paths from the source file. This module system is extended to include all manners of files using loaders. If the `templateUrl` is relative to the source file, `auto-ngtemplate-loader` can output a path for Webpack to include but since there is no convention for `templateUrl` paths, there are many projects which don't use relative paths. One of the common conventions for templates in AngularJS is to use root-relative paths. This is where the largest impact exists as can be seen by the example below.

A loader can resolve root-relative paths using the `loaderUtils.urlToRequest` method with a root argument. Assume that the template exists at `/src/html/app.tpl.html` and the file that is trying to include the template is `/src/html/app.js`. Also, assume `rootPath` is an option for `auto-ngtemplate-loader` and is set to `./webapp`. Calling `urlToRequest('/src/html/app.tpl.html', './webapp')` returns the path `./webapp/src/html/app.tpl.html`.

`loaderUtils.urlToRequest()` has turned a root-relative path into something that Webpack can `require` except that the path needs changed to one that is relative to `/src/js/app.js`. Looking at the two paths, it's easy to determine the correct relative path. However, this problem could be arbitrarily complex because there is no set pattern that dictates the relation between the JS code and the HTML template in AngularJS and it can differ from project to project.

## What is the solution

The solution is to ask the clients of `auto-ngtemplate-loader` to optionally provide a `pathResolver` function through the Webpack configuration object. The signature of this function is listed below.

```ts
type pathResolver = (templatePath: string) => string
```

The `pathResolver` function is required to always return a string and can help project maintainers deal with arbitrary template paths in their project without having to change each file that does not fit the the pattern. The returned path will then be passed onto to Webpack to pass to the appropriate loader. This reduces the complexity of the problem because the path resolution is customizable by the maintainers of the project rather than the loader trying to guess where the files are located.
