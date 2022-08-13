        const items = document.querySelectorAll('.list-group-item');
        const input = document.querySelector('#keyLog');

        input.addEventListener('keyup',gonder)
        
        function gonder(e){
            var kelime = (e.target.value);
                items.forEach(item=>{
                    let itm = item.textContent;
                    let mit = itm.includes(`${kelime}`);
                        this.item = item;
                        if(mit){item.style.display='';}

                        else{item.style.display='none';}
            })
        }
