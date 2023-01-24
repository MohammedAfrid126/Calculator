let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = "Please enter a valid Operator";
                document.querySelector('input').value = string;
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
            document.querySelector('input').value  = string;
        }else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }else{
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value  = string;
        }
    });
});