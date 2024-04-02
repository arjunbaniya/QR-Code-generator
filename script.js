function showit(){
    var theimg = document.getElementById("myimage");
    var thetext = document.getElementById("myoption").value;

    alert(thetext);

    if (thetext === "google") {
        theimg.src = "https://www.gstatic.com/webp/gallery3/1.png";
    }
    else if (thetext === "bing") {
        theimg.src = "https://www.gstatic.com/webp/gallery3/1.png";
    }
    else if (thetext === "facebook") {
        theimg.src = "https://www.gstatic.com/webp/gallery3/1.png";
    }
    else {
        alert("Picture is not available");
    }
}
