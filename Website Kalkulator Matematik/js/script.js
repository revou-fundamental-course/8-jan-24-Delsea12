// perhitungan untuk luas persegi
function hitung() {
    var sisi = document.getElementById("sisi").value;
    var luas = sisi * sisi;
    document.getElementById("luas").value = luas;
  }
  
  function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").value = "";
  }

//   perhitungan untuk keliling persegi
  function keliling() {
    var sisi = document.getElementById("sisi").value;
    var luas = 4 * sisi;
    document.getElementById("luas").value = luas;
  }
  
  function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").value = "";
  }

