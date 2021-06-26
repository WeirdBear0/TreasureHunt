class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        var t 
        (enteredCode.toUpperCase() === actualCode)? (t = true) : (t = false)
        return t

        
    }

}