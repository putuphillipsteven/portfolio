import { HashLink as Link } from "react-router-hash-link";

function Button(props) {
  return (
    <Link class="Link" to="#RecentWork">
      {props.text}
    </Link>
  );
}

export default Button;
