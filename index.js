const products = document.getElementById('products')

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => {
//         data.products.forEach( item =>  {
//             const p = document.createElement('p')
//             p.textContent = `${item.id}-${item.title}-${item.brand}-${item.category}-${item.price}`
//             products.appendChild(p)
//         })
//     })

    // axios.get('https://dummyjson.com/products').then((res) => {
    //     res.data.products.forEach( item =>  {
    //         const p = document.createElement('p')
    //         p.textContent = `${item.id}-${item.title}-${item.brand}-${item.category}-${item.price}`
    //         products.appendChild(p)
    //     })
    // });


    const button = document.getElementById('btn')
    // btn.addEventListener('click',function(){
    //         fetch('https://northwind.vercel.app/api/customers',{
    //                       method: "POST",
    //                       headers: {
    //                         "Content-Type": "application/json",
    //                       },
    //                       body: JSON.stringify({
    //                         companyname: Name.value,
    //                         contactname:surname.value
    //                        }),
    //                     })
    //                       .then((res) => res.json())
    //                       .then((data) => {
    //                         console.log("customer created" + data);
    //                       });
    //             })

 btn.addEventListener('click',function(){
    axios.post("https://northwind.vercel.app/api/customers", {
            Companyname: Name.value,
            Contacttitle: surname.value
        }).then(res => {
                console.log(res);
            })
})
