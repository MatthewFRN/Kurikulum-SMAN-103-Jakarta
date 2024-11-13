
document.addEventListener("DOMContentLoaded", function() {
    // Data kelulusan siswa
    const students = [
        { name: "Dzaki Muhammad Sabri", status: "Lulus" },
        { name: "Farrel Pandu Ardeanda Januar", status: "Lulus" },
        { name: "Matthew Francesco Lumban Batu", status: "Lulus" },
        { name: "Muhammad Farrel Izyan", status: "Lulus" },
        { name: "Nurshifa Madana Fauziyah", status: "Lulus" },
        { name: "Raphael Pehulisa Ginting", status: "Lulus" }
    ];
    const tableBody = document.querySelector("#graduationTable tbody");
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.name}</td><td>${student.status}</td>`;
        tableBody.appendChild(row);
    });

    // Data universitas
    const universities = [
        {
            name: "Universitas Indonesia",
            passingGrade: "704,83",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Hukum", "Fakultas Teknik", "Fakultas Ekonomi"],
            description: "Universitas terkemuka di Indonesia dengan program studi yang unggul.",
            website: "<a href='https://www.ui.ac.id/en/universitas-indonesia/'> https://www.ui.ac.id/en/universitas-indonesia/ </a>"
        },
        {
            name: "Institut Teknologi Bandung",
            passingGrade: "718,73",
            competitiveness: "Sangat Tinggi",
            accreditation: "Unggul",
            faculties: ["Fakultas Teknologi Industri", "Fakultas Teknik Mesin dan Dirgantara", "Sekolah Bisnis dan Manajemen"],
            description: "Dikenal sebagai pusat pendidikan teknik terbaik di Indonesia.",
            website: "<a href='https://itb.ac.id/'> https://itb.ac.id/ </a>"
        },
        {
            name: "Universitas Gadjah Mada",
            passingGrade: "702,48",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
            description: "Salah satu universitas tertua dan terbesar di Indonesia.",
            website: "<a href='https://ugm.ac.id/id/'> https://ugm.ac.id/id/ </a>"
        },
        {
            name: "Institut Teknologi Sepuluh November",
            passingGrade: "673,47",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
            website: "<a href='https://www.its.ac.id/id/beranda/'> https://www.its.ac.id/id/beranda/ </a>"
        },
        { 
            name: "Universitas Padjadjaran",
            passingGrade: "653,26",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Hukum", "Fakultas Peternakan dan Pertanian", "Fakultas Psikologi", "Fakultas Ekonomika dan Bisnis", "Fakultas Ilmu Budaya", "Fakultas Perikanan dan Ilmu Kelautan", "Fakultas Teknik", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Sains dan Matematika", "Fakultas Kedokteran"],
            website: "<a href='https://www.unpad.ac.id/'> https://www.unpad.ac.id/ </a>",
            description: "Bentuk sumbangsih para penerus bangsa atas amanah yang ditinggalkan para pejuang kemerdekaan"
        },
        { 
            name: "Universitas Negeri Jakarta",
            passingGrade: "581,74",
            competitiveness: "Rendah",
            accreditation: "A",
            faculties: ["Fakultas Matematika dan IPA. Biologi", "Fakultas Teknik, Keguruan & Pendidikan", "Fakultas Ilmu Pendidikan, Pendidikan Guru Sekolah Dasar", "Fakultas Bahasa dan Seni, Tari", "Fakultas Ilmu Sosial, Sejarah", "Fakultas Ilmu Olahraga, Pendidikan Olahraga", "Fakultas Ekonomi, Ilmu Ekonomi", "Fakultas Pendidikan Psikologi, Psikologi"],
            website: "<a href='https://www.unj.ac.id/'> https://www.unj.ac.id/ </a>",
            description: "Universitas Negeri Jakarta (disingkat sebagai UNJ) adalah perguruan tinggi negeri yang terdapat di Kota Jakarta, Indonesia yang didirikan pada tahun 1964."
        },

           { 
            name: " Institut Pertanian Bogor",
            passingGrade: "648,15",
            competitiveness: "Menengah",
            accreditation: "A",
            faculties: ["Fakultas Hukum", "Fakultas Pertanian", "Fakultas Peternakan", "Fakultas Kehutanan dan Lingkungan", "Fakultas Matematika dan Ilmu Pengetahuan Alam", "Fakultas Perikanan dan Ilmu Kelautan", "Fakultas Ekonomi dan Manajemen", "Fakultas Ekologi Manusia"],
            website: "<a href='https://www.ipb.ac.id/beranda/'> https://www.ipb.ac.id/beranda/ </a>",
            description: " Institut Pertanian Bogor (IPB) merupakan sebuah perguruan tinggi negeri yang didirikan tanggal 1 September 1963 di Bogor berdasarkan keputusan Menteri Perguruan Tinggi dan Ilmu Pengetahuan (PTIP) No. 92/1963 yang kemudian disahkan oleh Presiden RI Pertama."
        },

    ];

    window.displayUniversityInfo = function() {
        const query = document.getElementById("searchInput").value;
        const university = universities.find(uni => uni.name.toLowerCase().includes(query.toLowerCase()));

        const infoContainer = document.getElementById("universityInfo");
        infoContainer.innerHTML = "";

        if (university) {
            infoContainer.innerHTML = `
                <h3>${university.name}</h3>
                <p><strong>Passing Grade:</strong> ${university.passingGrade}</p>
                <p><strong>Keketatan:</strong> ${university.competitiveness}</p>
                <p><strong>Akreditasi:</strong> ${university.accreditation}</p>
                <p><strong>Fakultas:</strong> ${university.faculties.join(", ")}</p>
                <p><strong>Deskripsi:</strong> ${university.description}</p>
                <p><strong>Website: </strong> ${university.website}</p>
            `;
        } else {
            infoContainer.textContent = "Universitas tidak ditemukan.";
        }
    };
});

function hitungPersentase() {
    //  nilai dari input form
    let fisika = parseFloat(document.getElementById("fisika").value) || 0;
    let kimia = parseFloat(document.getElementById("kimia").value) || 0;
    let matematika = parseFloat(document.getElementById("matematika").value) || 0;
    let biologi = parseFloat(document.getElementById("biologi").value) || 0;
    let informatika = parseFloat(document.getElementById("informatika").value) || 0;
    let input = document.getElementById("nama");
    let inputValue = input.value ;
    let sosiologi = parseFloat(document.getElementById("sosiologi").value) || 0;
    let geografi = parseFloat(document.getElementById("geografi").value) || 0;
    let ekonomi = parseFloat(document.getElementById("ekonomi").value) || 0;

    //  rata-rata nilai
    let rataF1 = (fisika + kimia + matematika + informatika) / 4;
    let rataF2 = (fisika + kimia + matematika + biologi) / 4;
    let rataF3 = (informatika + geografi + biologi + ekonomi) / 4;
    let rataF4 = (informatika + sosiologi + biologi + ekonomi) / 4;
    let rataF5 = (informatika + sosiologi + ekonomi) / 3;
    let rataF6 = (informatika + ekonomi + sosiologi) / 3;
    let rataF7 = (sosiologi + geografi + ekonomi) / 3;

    //  persentase kelas
    let F1 = (rataF1 / 100) * 100;
    let F2 = (rataF2 / 100) * 100;
    let F3 = (rataF3 / 100) * 100;
    let F4 = (rataF4 / 100) * 100;
    let F5 = (rataF5 / 100) * 100;
    let F6 = (rataF6 / 100) * 100;
    let F7 = (rataF7 / 100) * 100;


    //  persentase
    document.getElementById("nama1").innerText = "Nama Siswa: " + inputValue
    document.getElementById("F1").innerText = "F1: " + F1.toFixed(2) + "%";
    document.getElementById("F2").innerText = "F2: " + F2.toFixed(2) + "%";
    document.getElementById("F3").innerText = "F3: " + F3.toFixed(2) + "%";
    document.getElementById("F4").innerText = "F4: " + F4.toFixed(2) + "%";
    document.getElementById("F5").innerText = "F5: " + F5.toFixed(2) + "%";
    document.getElementById("F6").innerText = "F6: " + F6.toFixed(2) + "%";
    document.getElementById("F7").innerText = "F7: " + F7.toFixed(2) + "%";
}
