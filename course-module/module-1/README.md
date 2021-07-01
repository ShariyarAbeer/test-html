# Module-1

## HTML = HyperText Markup Language
<> => Markup

<>Text</> => ei dui tag er majhe text dite hobe abr kisu tag ache je khane sudu single fst tag thake <img src = “ ” alt = “ ”> ei vabe single tag thake ``` <br> ``` a single tag thake ``` <hr> ``` a single tag thake ``` <hr> ``` use for horizontal line.

<img src = “ ” alt = “ ”> er modde or fst tag er modde jeta  “ src ” and “ alt “ thake take Attributes bole 

```
<p>this is paragraph tag </p>
<b> this is bold tag</b>
<strong>this is strong tag</strong>
<br> //use for link bark
<hr> //use for horizontal line.
```
## Heading 6 ta hoy 
```
<h1></h1> sob theke boro
<h2></h2>
<h3></h3> moddo moni
<h4></h4>
<h5></h5>
<h6></h6> sob theke choto
```

## Anchor tag
```
<a href = ”www.google.com”>google</a> //use of a tag
```

## Image tag
```
<img src = “ “ alt = “ ”>
```
### Image from net
```
<img src = “ address of that net image “  alt = “net image name ”>
```
### Image from local file 
```
<img src = “ local file name/image.jog “  alt = “local file image name ”>
```


## List Item
### Sudu list
```
<li> </li>
```
### Order list // 1 2 3 kore list show kore
```
<ol>
	<li> </li>
	<li> </li>
</ol>
```
### Unordered list // point akare show kore
```
<ul>
	<li> </li>
	<li> </li>
</ul>
```

## Input file
```
<input type = “text”> // nml text input er jonno 
<input type = “checkbox”> // checkbox system type input
<input type  = “email”> // use for email
<input type  = “color”> // use for color 
<input type  = “date”> //use for pick date
<input type  = “datetime-local”> // use for date and time pick localy
<input type  = “file”> // use for attach file
<input type  = “hidden”> use for send hidden data, hidden type user display te dekte pare nah 
<input type  = “image”> // image attach input type button or use for submit
<input type  = “month”> // use for pick month
<input type  = “number”> use for only number type input
<input type  = “password”> // use for only password type input
<input type  = “radio”> //radio button type input
<input type  = “range” min = “0” max = “50”> // use for range max to min
<input type  = “submit”> // submit type input
<input type  = “search”> //use for search type of input or use for searching
<input type  = “tel” pattern = “[0-9] {3} - [0-9] {2} - [0-9] {3}” placeholder = “Input type will be 456-87-456”> // use for telephone number type with pattern 
<input type  = “url”> //use for proper https/http url 
<input type  = “week”> // use for pickup week
<input type  = “email”>
```
## Button
```
<button>Submit</button> // use for click button
```

## Form  // use Form for any kind of submission
```
<form action=” ”>
	<input type = “text”>   // input name
	<input type = “password”> // input password
	<input type = “number”>  // input number
	<button>Submit</button> // button for login or button for submit
</form>
```

## HTML Format 
```
<!DOCTYPE html> // the type of this document 
<html lang="en"> //language english or your can use “bn” for banla if your website contain bangla text
<head>   //head suru
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> tab title
</head>  //head sesh
<body> // body suru
    //your website
</body> //body sesh
</html> // html tag sesh
```
## Link Tag
Link tag use for link any other file, image, library with your html file

## Favicon use for website tab logo. always use in header tag of html file
```
<link rel="shortcut icon" href="./logo/logo.png" type="image/x-icon">
```
## Title tag use for website tab title, need to use in header tag of html file
```
<title>Document</title>
```