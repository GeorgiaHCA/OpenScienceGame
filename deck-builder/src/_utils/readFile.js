export default (evt, callback) => {
  const files = evt.target.files; // FileList object
  const reader = new FileReader();
  reader.onerror = () => {
    reader.abort();
    alert("Problem parsing input file.");
  };
  reader.onload = () => callback(reader.result);
  reader.readAsText(files[0]);
};
