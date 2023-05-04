function mahoa() {
    var plaintext = document.getElementById("plaintext").value; 
    var shift = parseInt(document.getElementById("shift").value);// lấy thằng shift từ bên index qua và chuyển thành số nguyên nằm trong khoảng từ 0 đến 25
    var ciphertext = "";
    for (var i = 0; i < plaintext.length; i++) {
      var c = plaintext.charCodeAt(i);
      if (c >= 65 && c <= 90) /* Trong bản mã ASCII thì các chữ IN HOA nằm trong khoảng từ 65 đến 90 */
      {
        ciphertext += String.fromCharCode((c - 65 + shift) % 26 + 65); //
      } else if (c >= 97 && c <= 122) /* Trong bản mã ASCII thì các chữ viet thường nằm trong khoảng từ 97 đến 122 */
      {
        ciphertext += String.fromCharCode((c - 97 + shift) % 26 + 97); 
      } else {
        ciphertext += plaintext.charAt(i); // các kí tự khác chữ cái thì cho viết lại 
      }
    }
    document.getElementById("ciphertext").value = ciphertext;
  }
  
  function thamma() {
    var ciphertext = document.getElementById("ciphertext").value;
    var shift = parseInt(document.getElementById("shift").value); // số lượng dịch chuyển cần thám mã
    var plaintext = "";
    for (var i = 0; i < ciphertext.length; i++) {
      var c = ciphertext.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        plaintext += String.fromCharCode((c - 65 - shift + 26) % 26 + 65);
    } else if (c >= 97 && c <= 122) {
      plaintext += String.fromCharCode((c - 97 - shift + 26) % 26 + 97);
    } else {
      plaintext += ciphertext.charAt(i);
    }
  }
  document.getElementById("plaintext").value = plaintext;
}
  