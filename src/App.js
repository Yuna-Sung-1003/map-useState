import React, { useState } from "react";

function Hello() {
  return <div>Hello</div>;
}

function App() {
  // DATABASE (API)
  const newData = [
    {
      name: "홍길동1",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동2",
      number: "010-0000-0002",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동3",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동4",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길순",
      number: "010-0000-0001",
      address: "부산",
      gender: "F"
    },
    {
      name: "홍길동6",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동7",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동8",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동9",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    },
    {
      name: "홍길동10",
      number: "010-0000-0001",
      address: "부산",
      gender: "M"
    }
  ];

  const [data, setData] = useState([]);

  // 문법
  const onButtonClick = () => {
    setData(newData);
  };

  const onClearData = () => {
    const clearData = [];
    setData(clearData);
  };

  return (
    <div>
      <tr>
        <th>이름</th>
        <th>연락처</th>
        <th>주소</th>
        <th>성별</th>
      </tr>

      {data.map((item, index) => {
        // 프로그램
        let myGender = "";
        if (item.gender === "M") {
          myGender = "남";
        }
        if (item.gender === "F") {
          myGender = "여";
        }

        let myName = "";
        if (item.name === "홍길순") {
          myName = <Hello></Hello>;
          // <font color="red">홍길순</font>;
        } else {
          myName = item.name;
        }

        return (
          <tr key={index}>
            <td>{myName}</td>
            <td>{item.number}</td>
            <td>{item.address}</td>
            <td>{myGender}</td>
          </tr>
        );
      })}

      <button onClick={onButtonClick}>버튼</button>
      <button onClick={onClearData}>클리어</button>
    </div>
  );
}

export default App;
