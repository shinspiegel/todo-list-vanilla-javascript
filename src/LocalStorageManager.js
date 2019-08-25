function GetData() {
  const stringData = localStorage.getItem("data");
  const data = JSON.parse(stringData);

  return data;
}

function SetData(data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem("data", stringData);
}

export { GetData, SetData };
