
    var allProducts = document.querySelectorAll(".products li")
    var div1 = document.querySelector("#div1")
    var btn1 = document.querySelector("#showPrice")
    var div2 = totalPrice = 0
    var totalPrice= document.querySelector('#totalPrice')

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            div1.innerHTML += item.textContent + " "


            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "200px"
                btn1.style.height = "45px"
                btn1.style.backgroundColor = "blue"
                btn1.style.color = "white"
                btn1.style.fontSize = "23px"
            }
   
        }
    })

    }

    