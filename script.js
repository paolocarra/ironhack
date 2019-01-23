var hacker1 = "Paolo";
console.log ("The drivers name is " + hacker1);
var hacker2 = prompt("What is your name?");
console.log ("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

hacker1 = hacker1.toUpperCase();
var newString1 = "";
for (var i = 0 ; i < hacker1.length ; i++) {

    newString1 += (hacker1[i] + " ");

}
console.log(newString1);

var newString2 = "";
    for (var i = hacker2.length - 1; i >= 0; i--) {
        newString2 += hacker2[i];
    }
    console.log(newString2);


if (newString1[0] > newString2[0]) {
    console.log("The driver's name goes first");
    
}else if (newString1[0] < newString2[0]) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same name?");
}



function palindrome(text) {
// Split, reverse and join string to get reversed text
var reversedText  = text.toLowerCase()
                    .split('').reverse().join('');


return text === reversedText;



}

var text = prompt("Check if this is a Palindrome");
console.log(palindrome(text));




var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia turpis et neque posuere eleifend. Sed aliquam lectus nibh, sit amet ullamcorper ante feugiat ac. Donec fermentum mollis purus ut cursus. Praesent eu posuere velit. Mauris maximus et sem pharetra iaculis. Curabitur gravida quam nec turpis posuere, a mollis dolor mollis. Aenean augue erat, blandit vitae magna nec, finibus gravida ligula.Fusce id ullamcorper nisi, eu egestas leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis vehicula justo. Duis pellentesque mauris bibendum scelerisque tristique. Donec vehicula risus et ex congue hendrerit. Integer egestas, erat id fringilla auctor, ante nulla porta turpis, non dignissim nibh turpis sit amet felis. Vestibulum ornare libero ex, quis suscipit justo rhoncus eu. Nullam sed mauris felis. Ut pulvinar varius pulvinar. Duis sit amet dui sed justo vulputate mollis.Morbi nec cursus dolor, quis venenatis magna. Ut at tellus viverra, imperdiet nisi vitae, ultrices odio. Vivamus finibus orci et odio ultrices aliquam. Curabitur vitae massa feugiat, gravida mi eu, dictum lorem. Cras non metus tortor. Mauris placerat ipsum quis ullamcorper elementum. Phasellus at ullamcorper erat. Sed non nisi sagittis, efficitur tellus id, venenatis quam. Mauris sodales vestibulum magna, at molestie sem maximus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

var count = 0;
for (var i = 0; i < str.length ; i++) {
console.log(count ++);
}

  var num_matches = str.match(/et/gi).length;

  console.log(num_matches);  





