var elem = document.createElement ( 'p' )
elem.innerText ="Click me, plz! =)";
document.body.appendChild ( elem );
elem.style.cursor = "pointer"
elem.style.margin = "50px 0px 20px"
elem.style.fontSize = "18px"
elem.onclick = function ( event ) {	
   	picture.style.display = "inline-block"
}

var picture = document.body.appendChild ( document.createElement ( 'img' ) )
picture.style.display = "none"
picture.style.transition = "all 1s"
picture.style.width = "100px"
picture.src = "https://media.cntraveler.com/photos/5a985db3a566be4ab1b46cde/2:3/w_320,c_limit/kimi-werner-cr-Perrin-James.jpg"
picture.onmouseenter = function ( event ) {
        this.style.width = "200px"
		this.style.cursor = "pointer"
}
picture.onmouseleave = function ( event ) {
        this.style.width = "100px"
}
picture.onclick = function ( event ) {
        picture.style.display = "none"
} 

document.body.style.textAlign = "center"
