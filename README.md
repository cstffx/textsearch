# Description
Regular expression builder for JavaScript with search mode options.

# Why? 
Sometimes we need to filter a string collection, but we want to configure position, match case and if only complete words will count. In Spanish is convenient for a better user experience that some characters like a and á can be considered equal.
This is easy with regular expressions. For example:  the regular expression ``/jon/`` will match if the sequence ``jon``is in any position in the target string, but ``/jon$/`` will only at the end. This package provide a method to dynamically generate this regular expression, you only need to pass the query and options.

# Example 

```typescript
TextSearchRegex.build("jon doe", {
    ignoreCase: true
})

// Will output /jon doe/i

```

To reuse the same regular expression we can use the class ``TextSearch``. 

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

The result is a collection with strings that contains ``doe`` at the end, with any upper/lower case combination and only if ``doe`` is a complete word.

# Alias

As I mention before, sometime we need that two characters were considered as the same.  The ``alias`` option is a ``Map`` that can indicate this correspondence.

```javascript
    const alias = new Map([
        ['Á', 'A']
    ])
    
    // Start
    let regex = TextSearchRegex.build("Ábaco", {
        alias
    })
```

This will generate the regular expresion: ``/(Á|A)baco/``.

# Options
Both ``TextSeach`` and ``TextSearchRegex`` receive the next options:

- ``position?``: ``TextSearchPosition`` Indicates if the term must appear at the start, end of any position.
- ``ignoreCase?``: ``boolean`` If true no match case will be applied.
- ``alias?``: ``Map<string, string>`` Indicate that a character can be treated as another.
- ``word?``: ``boolean`` If true, only whole words will match.
