//we use the 'money sign' to call jquery like this $()

// $('h1').hide(); //.hide is a jquery method

// $('#heading1').hide(); //select by id
// $('h1#heading1').hide(); //also works but not sure why you would ever use it

// $('.heading2').hide();  //select by class
// $('h1.heading2').hide();  //select by class

//select inner elements
// $('#para1 span').addClass('pink');

//selecting children in ways
// $('ul li:first').addClass('pink2');
// $('ul li:last').addClass('pink2');
$('ul li:even').addClass('turquoise');
$('ul li:odd').addClass('pink2');


//select all inputs
$('input').addClass('pink');