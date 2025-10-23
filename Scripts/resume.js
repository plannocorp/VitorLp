document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de download
    const downloadBtn = document.querySelector('.section-4 .download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Caminho para o arquivo do currículo com a extensão correta
            const resumeFilePath = 'files/curriculo-vitor-teixeira.pdf';
            
            // Cria um elemento de link temporário
            const link = document.createElement('a');
            link.href = resumeFilePath;
            link.download = 'Curriculo_Vitor_Teixeira.pdf';
            
            // Adiciona o link ao documento
            document.body.appendChild(link);
            
            // Simula um clique no link
            link.click();
            
            // Remove o link do documento
            document.body.removeChild(link);
            
            // Efeito visual de feedback
            this.innerHTML = '<i class="fas fa-check"></i> Download Iniciado!';
            
            // Restaura o texto original após 3 segundos
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-download"></i> Baixar Currículo';
            }, 3000);
        });
    }
});