export default function PostCard({ title, imgUrl, link }) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top" alt={title}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <a to={link} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
