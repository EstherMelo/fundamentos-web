
        /*
        Case sensitive = reconhece letras  maiusculas e menusculas 
        
        por tag: getElementByTagName()
        por  id: getElementByTagid()
        por Nome:  getElementByTagName()
        por Classe: getElementByTagClassName()
        por Seletor: querySelector()
        */ 

        let nome = window.document.getElementById('nome')
        let email = document.querySelector('#email')
        let assunto = document.querySelector('#assunto')
        let nomeOK = false
        let emailOK = false
        let assuntoOK = false
        let mapa = document.querySelector('#mapa')

        nome.style.width = '80%'                
        email.style.width = '80%'

        function validaNome() {
           let txtNome = document.querySelector('#txtNome')  

           if (nome.value.length < 3) {
                txtNome.innerHTML = 'Nome Inválido'
                txtNome.style.color = 'red'
           } else {
                txtNome.innerHTML = 'Nome Válido' 
                txtNome.style.color = 'green' 
                nomeOK = true
           }  
        }

        function validaEmail() {
           let txtEmail = document.querySelector('#txtEmail')

           if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
               txtEmail.innerHTML = 'E-mail Inválido'
               txtEmail.style.color = 'red'
           }else {
                txtEmail.innerHTML = 'E-mail Válido' 
                txtEmail.style.color = 'green'
                emailOK = true 
           }  

        }

        function validaAssunto() {
           let txtAssunto = document.querySelector('#txtAssunto')

           if (assunto.value.length >= 100) {
                txtAssunto.innerHTML = 'tamanho do texto só obter até 100 caracters'
                txtAssunto.style.color = 'red'
                txtAssunto.style.display = 'block'
           } else {
                txtAssunto.style.display = 'none'
                assuntoOK = true
           }  
        }

        function enviar() {
           if (nomeOK == true && emailOK == true && assuntoOK == true)
           {
                   alert('formulário enviado com sucesso!!')
           } else {
              alert ('Preencha o formulário corretamente antes de enviar...')     
           }

        }

        function mapaZoom() {
          mapa.style.width = '800px'
          mapa.style.height = '600px'
        }

        function mapaNormal() {
          mapa.style.width = '400px'
          mapa.style.height = '250px'
        }
        
       