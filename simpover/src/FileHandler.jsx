function FileHandler() {
return (
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick a file</span>
  </div>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
</label>
)};
export default FileHandler;