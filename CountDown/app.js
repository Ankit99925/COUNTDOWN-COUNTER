const endDate = "31 July 2023 12:00";
document.getElementById('end-Date').innerText= endDate;
const inputs = document.querySelectorAll('input') 
// const clock = () {
// }
function clock()
    {
        const end= new Date(endDate);
        const now = new Date();
        const diff= (end-now)/1000;
        console.log(diff);
        if(diff<0)return;
        // console.log(end,now);
        const Days=(diff/3600/24);
        const hours=((diff/3600)%24);
        const minutes=(diff/60)%60;
        const seconds=(diff%60);

        inputs[0].value=Math.floor(Days);
        inputs[1].value=Math.floor(hours);
        inputs[2].value=Math.floor(minutes);
        inputs[3].value=Math.floor(seconds);



        



}
setInterval(()=>{clock();})