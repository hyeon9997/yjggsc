// static/script.js

// 예시 데이터베이스 (실제로는 서버에서 받아야 하지만, 여기선 프론트엔드에서 시뮬레이션)
const studentData = [
  {
    studentId: "202301",
    name: "김철수",
    googleId: "chulsoo.kim@g.school.com",
    password: "pass1234"
  },

  {
    studentId: "202302",
    name: "이영희",
    googleId: "younghee.lee@g.school.com",
    password: "secure5678"
  },
  {
    studentId: "202303",
    name: "박민수",
    googleId: "minsoo.park@g.school.com",
    password: "pw2023!"
  },
    {
    studentId: "202304",
    name: "김도희",
    googleId: "dohee.kim@g.school.com",
    password: "pass1234"
  }
];

// 폼 제출 시 검색 기능
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 기본 동작 방지

  const inputId = document.getElementById("studentId").value.trim();
  const inputName = document.getElementById("studentName").value.trim();

  const result = studentData.find(
    (student) => student.studentId === inputId && student.name === inputName
  );

  const googleIdField = document.getElementById("googleId");
  const googlePwField = document.getElementById("googlePw");

  if (result) {
    googleIdField.textContent = result.googleId;
    googlePwField.textContent = result.password;
  } else {
    googleIdField.textContent = "정보 없음";
    googlePwField.textContent = "정보 없음";
  }
});
