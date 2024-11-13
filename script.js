
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
            `;
        } else {
            infoContainer.textContent = "Universitas tidak ditemukan.";
        }
    };
});
