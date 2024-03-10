let number = +prompt("لطفا عدد مورد نظر خود را وارد کنید");

isAvval(number);

function isAvval(number) {
    if (number < 0) alert("لطفا عدد مثبت وارد کنید")
    else if (number == 0 | number == 1) alert(`${number} عدد اول نمی باشد`)
    else if(number == 2) alert(`${number} عدد اول می باشد`)
    else { for(let i = 2; i<=Math.ceil(Math.sqrt(number));i++){
        if(number % i === 0) return alert(`${number} عدد اول نمی باشد`);
    }
    return alert(`${number} عدد اول می باشد`);
    }  
}



