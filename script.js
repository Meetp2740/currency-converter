let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_y14kgpFpB0lBigmKMleKgwzFbUMwswvaOzEiWtBH&base_currency="

let from = document.querySelector("#from");
let to = document.querySelector("#to")
let amount = document.querySelector("#Amount")
let st = document.querySelector(".answer")
  let base = from.options[from.selectedIndex].value;

let h3 = document.querySelector(".one")
let h1 = document.querySelector(".two")
let h4 = document.querySelector(".three")


let btn = document.querySelector(".btn");


btn.addEventListener("click", async (answ)=> {

    st.computedStyleMap.apply
    let base = from.options[from.selectedIndex].value;
    let num = parseInt(amount.value); 

    if(num == ""){
        alert("please enter valid number")
    }
    
    let toCon = to.options[to.selectedIndex].value;
    h3.innerText = `${num} ${base} =`
    getCur(base , toCon, num);
    let answer = document.querySelector(".answer")
    answer.classList.add("animation")
})

async function getCur (base, toCon, num, list) {
    try{
        let res = await axios.get(url+base);
        let answ = (res.data.data[toCon].value) * num;
        let reverse = num / answ;    
        console.log(res)
        h1.innerText = `${answ} ${toCon}`
        h4.innerText = `${num} ${toCon} = ${reverse} ${base }`
        return answ;
    }
    catch(e){
        console.log(e)
    }
}

async function getList(){
    try{
        const response = await fetch(url);
        var res = await response.json();
         let list = res.data;
         for(i in list){
         var option = document.createElement("option");
         option.text = i;
         option.value = i;
         to.appendChild(option);
         
         var option2 = document.createElement("option");
         option2.text = i;
         option2.value = i;
         from.appendChild(option2);

          
        }
    }
    catch (e){
        alert("Page Not Found")
    }
} 
getList();







