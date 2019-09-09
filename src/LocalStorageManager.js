function GetData() {
  const stringData = localStorage.getItem("data");
  const data = JSON.parse(stringData);

  if (data) {
    return data;
  }
  return [];
}

function SetData(data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem("data", stringData);
}

export { GetData, SetData };
