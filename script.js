$(document).ready(function() {
    $('#form-sueldo').submit(function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
  
      var sueldo = parseFloat($('#sueldo').val());
      var jubilatorios = sueldo * 0.11;
      var obraSocial = sueldo * 0.03;
      var pami = sueldo * 0.03;
      var descuentos = jubilatorios + obraSocial + pami;
      var sueldoNeto = sueldo - descuentos;
  
      var resultHtml = '<h3 class="tit">Descuentos:</h3>';
      resultHtml += '<p>Aportes jubilatorios: $' + jubilatorios.toFixed(2) + '</p>';
      resultHtml += '<p>Obra social: $' + obraSocial.toFixed(2) + '</p>';
      resultHtml += '<p>PAMI: $' + pami.toFixed(2) + '</p>';
      resultHtml += '<p>Total descuentos: $' + descuentos.toFixed(2) + '</p>';
      resultHtml += '<h3 class="tit">Sueldo Neto:</h3>';
      resultHtml += '<p>$' + sueldoNeto.toFixed(2) + '</p>';
  
      $('#result').html(resultHtml);
    });
  });
  