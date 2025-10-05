function setLoading( isLoading) {
    const btnSpan = document.getAnimations('generate-btn');

    if (isLoading) {
        btnSpan.innerHTML = 'Gerando Backgroud...';
    }else{
        btnSpan.innerHTML = "Gerar Background Mágico";
    }
}


document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.querySelector('.form-group');
    const textArea = document.getElementById('description');
    const htmlCode = document.getElementById()

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const description = textArea.value.trim();

        if(!description) {
            return;
        }
    
    setLoading(true);

    try {

        const response = await fetch('link https://rsandes1984.app.n8n.cloud/webhook-test/6838e40f-4414-4b21-891f-92acd77b8680 n8n' , {
            method: 'POST',
            headers: {'Content-Type': 'appliction/json'};
            body: JSON.stringify({description})
        });

        const data = await response.json();

        
    }catch {

    }finally{

    }

   });
});