const tel = document.querySelector("#tel")
const btnNext = document.querySelector("#btn-next-1")

btnNext.addEventListener("click", () => {
    console.log(tel.value)
})

async function fetchAPI() {
    const URL = "http://localholst:3001auth"
    try{

        const req = await fetch (URL, {
             method: 'POST',
             headers: {
                "content-type":"application/json"
             },
            body: JSON.stringify({
                telefone: tel.value,
                senha: ""
            })
        })

        const res = await req.json()

        }

    catch{

    }
}