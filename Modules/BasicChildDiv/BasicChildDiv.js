const BasicChildDiv = (id, value, parent) => {
  const div = document.createElement("div");
  div.id = id;
  div.textContent = value;
  parent.appendChild(div);
};

export default BasicChildDiv;
