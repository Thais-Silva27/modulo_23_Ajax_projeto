AOS.init();

const dataDoEvento = new Date("Dec 12, 2028 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);

        //https://viacep.com.br/ws/01001000/json/ 

        /* jquery*/

        $(document).ready(function() {
            $('#cep').mask('00000-000')
            $('#btn-buscar-cep').click(function() {
                const cep = $('#cep').val();
                const endpoint = `https://viacep.com.br/ws/${cep}/json`;
                const botao = $(this);
                $(botao).find('i').addClass('d-none'); 
                $(botao).find('span').removeClass('d-none'); /*/this substitui o termo #btn-buscar-cep */
        
          fetch(endpoint)
          .then(function(resposta) {
            return resposta.json();
        })
        
            .then(function(json) {
                        const logradouro = json.logradouro;
                        const bairro = json.bairro;
                        const cidade = json.localidade;
                        const estado = json.uf;
                        const endereco = ` ${logradouro} - ${bairro} - ${cidade} - ${estado}`;
                        $(`#endereco`).val(endereco) 
           })
        
            .catch(function(erro) {
                alert("ocorreu um erro ao buscar o endereço,tente novamente.")  
                
            })

            .finally(function(sucesso) {
                setTimeout(function() { 
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none'); 
                    alert("Endereço ok")
                   },2000);
            }) 
            })
        
        })

        //cpf

        $(document).ready(function() {
            $('#cpf').mask('000.000.000-00')
            $('#botao-form').click(function() {
               const nome = $('#cpf').val();
        
                       
                    fetch("url_da_api")
                    .then(function(json) {
                    
                        const cpfResposta = json.cpf;                   
                        const cpfValido = `${cpf} ${cpfResposta}`;
                    
                        $('#cpf').val(cpf);
                    })
                    .catch(function(erro) {
                        // Exibir alerta de erro em caso de falha na requisição
                        alert("favor confirme os dados.");
                        
                    })
                    .finally(function() {
                        // Após a requisição, reexibir o ícone de busca e ocultar o spinner de carregamento
                        setTimeout(function() {
                            $(botao).find('i').removeClass('d-none');
                            $(botao).find('span').addClass('d-none');
                            // Exibir alerta de sucesso
                            alert("Cadastro realizado com sucesso.");
                        }, 1000);
                    });
            });
        });
        