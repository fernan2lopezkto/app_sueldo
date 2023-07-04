  const sueldoBase = 32420;
  const descuentos = 21;
  const diaDeFalta = 1000;
  const valorHora = 135;

  function calcularSueldo () {

    var cantDeHorasExtras = document.getElementById("HorasExtras").value;
    var cantDeFaltas = document.getElementById("Faltas").value;

    var dineroPorHorasExtras = 2 * valorHora * cantDeHorasExtras;
    
    var dineroPorFaltas = valorHora * 8 * cantDeFaltas;

    var sueldoNominal = sueldoBase + dineroPorHorasExtras - dineroPorFaltas;

    var sueldoLiquido = sueldoNominal * (1 - (descuentos/100));


    document.getElementById("Sueldo").value = Math.round(sueldoLiquido);
  }