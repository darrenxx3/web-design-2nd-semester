let angkarandom, main_lagi, tebak;
angkarandom = Math.floor(Math.random()* 100 +1);
alert("Mari bermain tebak Angka");

do{
    do{
      tebak = parseInt(prompt("tebak angka antara 0 -100"));

      if(tebak < angkarandom){
          alert("tebakan Anda terlalu kecil");
          document.writeln(tebak + " terlalu kecil ");
      }else if(tebak > angkarandom){
          alert("tebakan Anda terlalu besar");
          document.writeln(tebak + " terlalu besar");
          document.writeln("angka yang benar adalah <br>" + angkarandom);
      }
    }while( tebak != true);
    alert("Main lagi?");
    main_lagi= confirm();
}while(main_lagi == true);