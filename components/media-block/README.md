# MEDIA BLOCK

A 'Media Block' is a very common design pattern used in web design.

By reusing HTML to create these patterns, we can also reuse CSS and save ourselves a lot of styling.

## The Layout

    + – .media –––––––––––––––––––––––– +
    | + – .img –– + – .body ––––––––– + |
    | |           |                   | |
    | |   Image   |       Text        | |
    | |           |                   | |
    | + ––––––––– + ––––––––––––––––– + |
    + ––––––––––––––––––––––––––––––––– +

Every media block element is made up of 3 basic classes.

* class='media' wraps the content block
* class='img' contains an image, icon or avatar, floated to the left
* class='body'  sits on the right hand side and contains related content

This technique is a variation of Nicole Sullivan's media object technique.
http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/


## Example:

[![Media Block](http://f.cl.ly/items/422C0O0g1l020X3R2I0W/media-block.png)](http://jsbin.com/agofov/latest/edit)

http://jsbin.com/agofov/latest/edit
