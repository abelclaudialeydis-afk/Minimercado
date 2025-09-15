// script.js - validações e interações
document.addEventListener('DOMContentLoaded', function () {
  // Form validation bootstrap-style
  var forms = document.querySelectorAll('form[novalidate]');
  Array.prototype.slice.call(forms).forEach(function(form){
    form.addEventListener('submit', function(event){
      if(!form.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // handle specific forms
        if(form.id === 'formCadastro'){
          alert('Cadastro realizado com sucesso (simulação).');
          form.reset();
        } else if(form.id === 'formAgendamento'){
          var serv = document.getElementById('servico').value;
          var data = document.getElementById('data').value;
          var hora = document.getElementById('hora').value;
          var resumo = document.getElementById('resumoAgendamento');
          resumo.innerHTML = '<div class="alert alert-success">Agendado: <strong>' + serv + '</strong> em ' + data + ' às ' + hora + '.</div>';
          form.reset();
        }
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Simple temporal function: show working hours
  var now = new Date();
  var hoursElem = document.createElement('div');
  hoursElem.className = 'text-end small';
  hoursElem.textContent = 'Horário atual do navegador: ' + now.toLocaleString();
  document.querySelector('header .container').appendChild(hoursElem);

  // Accessibility: focus outline visible on keyboard navigation
  document.body.addEventListener('keydown', function(e){
    if(e.key === 'Tab'){
      document.body.classList.add('show-focus');
    }
  });
});
