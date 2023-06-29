window.onload = function() { fungsiSaya(); }

function fungsiSaya() {

//	/* DI BAWAH INI MERUPAKAN CONTOH PENGGUNAAN DOCUMENT OBJECT MODEL (DOM) */
//	a = document.getElementsByTagName("Web Kalbis")[0].firstChild;
//	a.nodeValue = "UMN";
	
	b = document.getElementById("footer").getElementsByTagName("p")[0].firstChild;
	b.nodeValue = "&copy;2019 UMN Students";
	
	/* TULISKAN SCRIPT ANDA DI SINI */
//	var home = document.getElementById("menu").getElementsByTagName("a")[0].firstChild;
//	home.nodeValue = "Utama";


    function appending_menu(name){
    // element a
    let a = document.createElement("a");
    a.href = "#"
    a.innerHTML = name;

    // Bikin element li
    let li = document.createElement("li");
    li.appendChild(a)
    ul.appendChild(li)
    
    }

    function append_categories(addingname){
		var x = document.createElement("li");
		var y = document.createElement ("a");
		y.href = "#"
		var z = document.createTextNode(addingname);
		x.appendChild(y);
		y.appendChild(z);
		document.getElementById("sidebar").getElementsByTagName("ul")[0].appendChild(x);

    }

    

    //tombol bagian atas
    let ul = document.getElementById("menu").getElementsByTagName("ul")[0];
	ul.innerHTML = ""
	appending_menu("Utama");
	appending_menu("Prodi");
	appending_menu("Akademis");
	appending_menu("Beasiswa");
	appending_menu("Kegiatan");
    appending_menu("Berita");
	appending_menu("Kontak");

    //konten 1 Z+ judul
	document.getElementById("intro").innerHTML = "Selamat datang di Universitas Multimedia Nusantara, Kampus Lokal dengan Kualitas Internasional";
	document.getElementsByClassName("title")[0].getElementsByTagName("a")[0].firstChild.nodeValue = "Jurusan Sistem Informasi";
    document.getElementsByClassName("post-attachment")[0].src = "images/jurusan_si.jpg";
    var judul = document.getElementById("page-content").getElementsByTagName("p")[0].firstChild;
    judul.nodeValue = "Jurusan ini mempelajari tentang bagaimana membangun dan menerapkan teknologi informasi dengan proses bisnis yang ada saat ini, sehingga suatu bisnis akan dapat dengan efektif mencapai tujuannya dengan menerapkan IT dalam bisnis.";
	var judul = document.getElementById("page-content").getElementsByTagName("p")[1].firstChild;
    judul.nodeValue = "";

    //konten 2 + judul
    var judul = document.getElementById("page-content").getElementsByTagName("a")[1].firstChild;
    judul.nodeValue = "Jurusan Teknik Informatika";
    document.getElementsByClassName("post-attachment")[1].src = "images/jurusan_ti.jpg";
    var judul = document.getElementById("page-content").getElementsByTagName("p")[2].firstChild;
    judul.nodeValue = "Jurusan ini mempelajari tentang bagaimana mengembangkan computer vision, robotica, intelligence system, dan hal-hal lainnya yang terkait dengan pengembangan komputer di masa yang akan datang.";
    var judul = document.getElementById("page-content").getElementsByTagName("p")[3].firstChild;
    judul.nodeValue = "";

    //sidebar
    var judul = document.getElementById("sidebar").getElementsByTagName("h5")[0].firstChild;
    judul.nodeValue = "Pencarian";

    //categories
    var judul = document.getElementById("sidebar").getElementsByTagName("h5")[1].firstChild;
    judul.nodeValue = "Jurusan";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[0].firstChild;
    judul.nodeValue = "Sistem Informasi";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[1].firstChild;
    judul.nodeValue = "Teknik Informatika";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[2].firstChild;
    judul.nodeValue = "Ilmu Komunikasi";
    
    
    //TAGS
    var judul = document.getElementById("sidebar").getElementsByTagName("h5")[2].firstChild; 
    judul.nodeValue = "Lowongan Pekerjaan";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[3].firstChild;
    judul.nodeValue = "Programmer";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[4].firstChild;
    judul.nodeValue = "Designer";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[5].firstChild;
    judul.nodeValue = "Konsultan";
    var judul = document.getElementById("sidebar").getElementsByTagName("a")[6].firstChild;
    judul.nodeValue = "Analyst";
    append_categories("Manajemen");
    append_categories("Akuntansi");
    append_categories("Broadcasting");

    //CUSTOM TEXT bagian bawah kanan
    var judul = document.getElementById("sidebar").getElementsByTagName("h5")[3].firstChild;
    judul.nodeValue = "UMN"; 
    var judul = document.getElementById("sidebar").getElementsByTagName("p")[0].firstChild;
    judul.nodeValue = "UMN adalah kampus terbaik di Tangerang. Ayo bergabung dengan keluarga besar UMN.";
    var judul = document.getElementById("sidebar").getElementsByTagName("p")[1].firstChild;
    judul.nodeValue = "";



    
    
//let ul = document.getElementById("menu").getElementsByTagName("ul")[0];
//ul.innerHTML = ""
//replace_ul("adawda");
//replace_ul("dawdawda");
//replace_ul("ssdawad");


}

//END