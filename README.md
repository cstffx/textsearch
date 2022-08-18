# Description
Regular expression builder for JavaScript with search mode options.

#Why? 
Sometimes we need to filter an string collection, but we want to allow the user 
to configure position, match case and if only complete words will count. In spanish 
is convenient for better user experience that some characters like 
``a`` and ``á`` can be considered iqual.

This is easy with regular expressions. For example: 
the regular expression ``/jon/`` will match if the secuence``jon`` is at any position in the 
target string, but ``/jon$/`` will only if is at the end. ``textsearch`` provide a method to 
dinamically generate this regular expresions, you only need to pass the query and options. 

# Example 

```typescript
TextSearchRegex.build("jon doe", {
    ignoreCase: true
})

// Will output /jon doe/i

```

To reuse the same regular 
expresion we can use the class ``TextSearch``. 

```javascript
    const items = [
        // ... string collection
    ];

    let search = new TextSearch("doe", {
        word: true,
        ignoreCase: true,
        position: TextSearchPosition.End
    });
    
    const result = items.filter( item => search.match(item) )
```

The result is a collection with strings that contains ``doe`` 
at the end, with any upper/lower case combination and only if
``doe`` is a complete word.