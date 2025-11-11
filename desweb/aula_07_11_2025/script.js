// Espera até que todo o HTML esteja carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleciona o formulário pelo seu ID
    const form = document.getElementById('meuFormulario');
    
    // 2. Seleciona os elementos SPAN onde os resultados serão exibidos
    const emailSpan = document.getElementById('mail');
    const nascimentoSpan = document.getElementById('nasc');
    
    // 3. Adiciona um 'listener' de evento para o envio (submit) do formulário
    form.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault(); 
        
        // 4. Obtém os valores dos campos de input
        const emailInput = document.getElementById('email').value;
        // Para o campo de data, acessamos pelo seu atributo 'name' ou 'id'
        // Neste caso, o campo de data tem o 'name="birth"'
        const dataNascimentoInput = form.elements.birth.value; 
        
        // O campo de senha (password) foi omitido da exibição, mas você pode acessá-lo se precisar:
        // const senhaInput = document.getElementById('password').value; 

        // 5. ATUALIZAÇÃO DOS ELEMENTOS SPAN (Exibição dos dados)
        
        // Atualiza o email
        emailSpan.textContent = emailInput;
        
        // Atualiza a data de nascimento
        let dataFormatada = "??";
        if (dataNascimentoInput) {
            // Cria um objeto Date e formata a data para o padrão Brasileiro (DD/MM/AAAA)
            const dataObj = new Date(dataNascimentoInput + 'T00:00:00'); // Adiciona T00:00:00 para evitar problemas de fuso horário
            dataFormatada = dataObj.toLocaleDateString('pt-BR');
        }
        nascimentoSpan.textContent = dataFormatada;
        
        // Exemplo de console log (para debug)
        console.log("Dados do formulário capturados e exibidos.");
        console.log("Email:", emailInput);
        console.log("Nascimento Formatado:", dataFormatada);
        
        // *OPCIONAL: Você pode redefinir o formulário após a exibição*
        // form.reset();
    });
});