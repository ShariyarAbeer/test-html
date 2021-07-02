# Module-2

## CSS: Cascading Style Sheets is a style sheet language

3 vabe css file add kora jay

## Inline css

### Head tag er bithor

```
<style>
	h1{
		color: red;   //ei vabe head tag er modde css add korte hoy
}
</style>
```

Alada CSS file attach kore CSS add kora jay. Oi alada file link tag diye head file er bithor a add korte hoy

### External CSS file

```
h1{
color: red;
}
```

## How to add External CSS file with link in head

```
<link rel=”stylesheet” href=”./css/style.css”>
```

## Color 4 vabe dea jay or ochit RGB, RGBA, HEX, name color

## p tag a css

```
p{
	color: red;
	Background-color: indigo;
height: 50px;
width: 500px // 75% o dea jay er mane screen er 4 vag er 3 vagwidth3/4
font-size:20px
}
```

## CSS measurement Unit

### px = These paragraphs have a calculated px of the screen.

### % = The % unit sets the font-size relative to the current font-size.

### em = These paragraphs have a calculated line-height of: 2x16px = 32px.

### rem = The font-size of this document is 16px.The font-size of this div element is 2rem, which translates to 2 x the browser's font size.The font-size of this div element is 3rem. It also shows that it does not inherit from its parent element font size.The rem unit sets the font-size relative to the browsers base font-size, and will not inherit from its parents.

### vw =Resize the width of the browser window to see how the font-size of h1 changes. 1vw = 1% of viewport width.

### vh = Resize the height of the browser window to see how the font-size of h1 changes. 1vh = 1% of viewport height.

### Div er modde class ke .class and id ke #id diye likte hoy

## In HTML file

```
<p class=”car”> this is a class tag</p>
<p id=”bike”> this is a class tag</p>
```

## In CSS file

```
.car{
	color:red;
}
#bike{
	color:red;
}
```

Class ekadik bar use kora jay but id all tym unique hoy and one tym one item er jonno or tag er jonno use korte hoy.

## Ek shate dui ta css class ek tag a add kora jay

### In CSS file

```
.car{
	color : red;
}
.bike{
	background-color: black;
}
```

### In HTML file

```
<p class=”car bike”>This is 2 class tag</p>
```

## Inline vs Block vs inline-block

### Inline: The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height

### Block: The element will start on a new line and occupy the full width available. And you can set width and height values.

### Inline-Block: It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.

Inline Element vs Block Elements:

## Block Elements

A block-level element always starts on a new line.
A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
A block level element has a top and a bottom margin, whereas an inline element does not.
The`<div>`element is a block-level element.

## Here are the block-level elements in HTML:

```
<address><article><aside><blockquote><canvas><dd><div><dl><dt>
<fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr>
<li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul>
<video>

```

## Inline Element :

An inline element does not start on a new line.
An inline element only takes up as much width as necessary.
This is a `<span> `element inside a paragraph.

## Here are the inline elements in HTML:

```
<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script>
<select><small><span><strong><sub><sup><textarea><time><tt><var>
```

## Inline element class:

### In HTML file:

```
<small>Author:<span class:”author-name”>omuk tukum</span></small>
```

In CSS file:

```
.author-name{
	color: red;
}
```

## CSS property

    broder: 2px solid yellow;  // solid er jaygay dotted use kroa jay dashed use kora jay
    broder-top: 40px
    broder-left: 200px
    broder-bottom: 100px
    broder-right: 10px
    border-radius: 15px
    margin: 20px   // sob dike 20px margin

Or
margin: 20px 10px // upore niche 20px ar pasa pashi 10px margin

Or
margin: 40px 20px 100px // upore 40px pasa pashi 20 px niche 100px margin
Or
margin: 40px 10px 100px 200px // upore 40px right a 10px niche 100px left a 200px margin

// margin padding all tym clockwise gurbe

    margin-top: 40px
    margin-left: 200px
    margin-bottom: 100px
    margin-right: 10px

    padding: 20px   // sob dike 20px padding

Or
padding: 20px 10px // upore niche 20px ar pasa pashi 10px padding

Or
padding: 40px 20px 100px // upore 40px pasa pashi 20 px niche 100px padding
Or
padding: 40px 10px 100px 200px // upore 40px right a 10px niche 100px left a 200px padding

// margin padding all tym clockwise gurbe

    padding-top: 40px
    padding-left: 200px
    padding-bottom: 100px
    padding-right: 10px

Majkhane ante age use kora hoto

    margin: 0 auto;
    width: 50%

Taxt majhe ante
text-align: center;

Text size change korte
font-size:30px

Text mota ba chikon korte
font-weight: 900

Display use korte
display: block //justify thn block thn inline o use kora jay
.
