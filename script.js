
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
            description: "Universitas terkemuka di Indonesia dengan program studi yang unggul."
        },
        {
            name: "Institut Teknologi Bandung",
            passingGrade: "718,73",
            competitiveness: "Sangat Tinggi",
            accreditation: "Unggul",
            faculties: ["Fakultas Teknologi Industri", "Fakultas Teknik Mesin dan Dirgantara", "Sekolah Bisnis dan Manajemen"],
            description: "Dikenal sebagai pusat pendidikan teknik terbaik di Indonesia."
        },
        {
            name: "Universitas Gadjah Mada",
            passingGrade: "702,48",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
            description: "Salah satu universitas tertua dan terbesar di Indonesia."
        },
        {
            name: "Institut Teknologi Sepuluh November",
            passingGrade: "673,47",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
            description: "Salah satu universitas tertua dan terbesar di Indonesia."
        },
        { 
        name: "Universitas Veteran Jakarta",
        passingGrade: "627,85",
        competitiveness: "Tinggi",
        accreditation: "A",
        faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
        description: "Salah satu universitas tertua dan terbesar di Indonesia."
        },
        { 
            name: "Universitas Veteran Jakarta",
            passingGrade: "627,85",
            competitiveness: "Tinggi",
            accreditation: "A",
            faculties: ["Fakultas Kedokteran", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Pertanian"],
            description: "Salah satu universitas tertua dan terbesar di Indonesia."
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
            }
    

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
                <p><strong>Website:</strong> %{university.website}</p>
            `;
        } else {
            infoContainer.textContent = "Universitas tidak ditemukan.";
        }
    };
});

let availableKeywords = [
    'Institut Teknologi Bandung',
    'Institut Teknologi Sepuluh November',
    'Institut Pertanian Bogor',
    'Universitas Indonesia',
    'Universitas Gadjah Mada',
    'Universitas Veteran Jakarta',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById(".searchInput");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li>" + list ; 
    });
}

    resultsBox.innerHTML = "<ul>" + content + "</ul>";
