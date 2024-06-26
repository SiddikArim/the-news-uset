import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, rating, total_view, title, author, image_url, details } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ height: "40px", width: "40px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>{moment(author?.published_date).format("l")}</p>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            className="text-warning"
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
            readonly
          ></Rating>
          <span></span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
