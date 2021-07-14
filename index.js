// importing addbt
let addbtn = document.getElementById("addbtn")
// i for sr. no
let i = 0
addbtn.addEventListener("click", function show() {
    i++

    // importing value and output textare

    let title = document.getElementById("title").value
    let context = document.getElementById("context").value
    let table = document.getElementById("table")
    let num = document.createElement(`th`)
    let tit = document.createElement("td")
    let con = document.createElement("td")
    let tic = document.createElement("tr")

    // importing btn and set class and innertext

    let complete = document.createElement("button")
    complete.setAttribute("class", "btn btn-primary")
    complete.innerText = "complete"
    let delet = document.createElement("button")
    delet.setAttribute("class", "btn btn-primary")
    delet.innerText = "delete"

    // adding btn

    cbtn = document.createElement("td")
    dbtn = document.createElement("td")

    // add value to output

    num.innerText = i
    tit.innerText = title
    con.innerText = context

    // appending to dom

    cbtn.appendChild(complete)
    dbtn.appendChild(delet)
    tic.appendChild(num)
    tic.appendChild(tit)
    tic.appendChild(con)
    tic.appendChild(cbtn)
    tic.appendChild(dbtn)


    table.appendChild(tic)

    // event for complete
    
    complete.addEventListener("click", function com(){
        
        num.style.textDecoration = "line-through"
        tit.style.textDecoration = "line-through"
        con.style.textDecoration = "line-through"
        console.log(complete.parentNode.parentNode)
    })

    // event for delete

    delet.addEventListener("click", function del(){
        table.removeChild(tic)
        console.log(num)
        console.log(i)

        // for (let k = 0; k < i; k++) {
        //     num.innerText = i-1
            
        // }


        

    })
})




