# BLOCKQUOTES

Semantic citation markup is an ambiguous issue with no agreed implementation.
The `<cite>` tag itself is only to be used for the title of a work, such as
a book, paper, song, movie etc. It should not contain a persons name.

This means we need something to wrap additional details, such as a name or date.

HTML5 Doctor recommend using an invalid footer element within the blockquote:  
http://html5doctor.com/blockquote-q-cite/#change-2011-07-11

The official WHATWG recommendation is to put the blockquote in a figure and add attribution in `<figcaption>`:  
http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-February/034822.html

For now, we are using the Twitter Bootstrap method of using a `<small>` element.
This can still contain the `<cite>`, as long as it references a piece of work.

## Example:

[![Blockquote Example](http://f.cl.ly/items/2r3h1C0t0d0a341i2a2N/blockquote.png)](http://jsfiddle.net/jackbrewer/3aQ4t/)

http://jsfiddle.net/jackbrewer/3aQ4t/
