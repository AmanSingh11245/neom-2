import { useParams } from "react-router-dom";
import { RecommendationBannerData } from "../../MockData";
import "./event-details.css";

const data = [
  {
    icon: "/img/golf.svg",
    title: "Golf",
    desc: "This is one of the many events comes under the Golf category",
  },
  {
    icon: "/img/location-black.svg",
    title: "Great location",
    desc: "This is one of the many events comes under the Golf category",
  },
  {
    icon: "/img/overwhelmed.svg",
    title: "Overwhelmed experience",
    desc: "This event has a rating of 5.0 that make this event overwhelmed.",
  },
];

const EventDetails = () => {
  const { eventId } = useParams();

  const event = RecommendationBannerData.find((event) => {
    return event.Event_ID == 10005;
  });
  if (!event) {
    return <p>Event not found</p>;
  }

  const {
    imgurl,
    Event_Name,
    Event_Description,
    Event_Location,
    Overall_Event_Rating,
    vibes_text,
  } = event;

  return (
    <div className="event-page">
      {/* <div className="feedback-section">
        <div>
        <p className="fd_charli">Hey Charlie,</p>
        <p className="pfeedback-section">
        We are sure that you have enjoyed this event a lot. Would you like
        to share your feedback with us? It helps us improve and serve you
        better.
        </p>
        </div>
        <div>
        <button className="feedback-btn">Add a review</button>
        </div>
        div.container
        </div> */}

      <div className="container">
        <div className="Fevent-details">
          <div className="filebox">
            <span className="Fevent-name2">{Event_Name}</span>
            <div className="Fevent-data">
              <span className="Frating">
                <span>
                  <span
                    style={{
                      color: "#FF385C",
                      fontSize: "1rem",
                      marginRight: "5px",
                    }}
                  >
                    ★★★★★
                  </span>
                  <span>{Overall_Event_Rating}</span>
                </span>
                •
                <span
                  style={{
                    fontFamily: "'Brown', sans-serif",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {event.Seat_Booking_Availability} reviews
                </span>
                •
                <span style={{ fontFamily: "'Brown', sans-serif" }}>
                  {Event_Location}
                </span>
              </span>
              <span
                className="Fevent-status"
                style={{ fontFamily: "'Brown', sans-serif" }}
              >
                {event.Event_Status}
              </span>
            </div>
          </div>
          <div></div>
        </div>

        <div className="main">
          <div className="Fevent-images grid-container">
            {imgurl.map((imgData, index) => (
              <div className="grid-element" key={index}>
                <img
                  src={`/img/${imgData.img}`}
                  alt={Event_Name}
                  className={`img${index + 1}`}
                />
              </div>
            ))}
            <button className="Fshow__more">Show all</button>
          </div>
        </div>

        <div className="event__information">
          <div className="event__information-txt">
            <div className="event__information-txt-vibe">
              <h1>Vibe-o-meter of the event</h1>
              <ul className="emotions__list">
                <li className="emotions__list--item active">
                  <div className="emotion overwhelmed"></div>
                  <img
                    src="/img/overwhelmed.svg"
                    alt=""
                    width="52"
                    height="52px"
                  />
                </li>
                <li className="emotions__list--item">
                  <div className="emotion joy"></div>
                  <img src="/img/joy.svg" alt="" width="52" height="52px" />
                </li>
                <li className="emotions__list--item">
                  <div className="emotion appreciation"></div>
                  <img
                    src="/img/appreciation.svg"
                    alt=""
                    width="52"
                    height="52px"
                  />
                </li>
                <li className="emotions__list--item">
                  <div className="emotion boredom"></div>
                  <img src="/img/boredom.svg" alt="" width="52" height="52px" />
                </li>
                <li className="emotions__list--item">
                  <div className="emotion disappointed"></div>
                  <img
                    src="/img/disappointed.svg"
                    alt=""
                    width="52"
                    height="52px"
                  />
                </li>
                <li className="emotions__list--item">
                  <div className="emotion anger"></div>
                  <img src="/img/anger.svg" alt="" width="52" height="52px" />
                </li>
              </ul>
            </div>
            <div className="event__information-txt-about">
              <h1>About the event</h1>
              <div className="about">
                {data.map((item, idx) => (
                  <div className="about-item" key={idx}>
                    <img src={item.icon} alt="" />
                    <div className="about-item-txt">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="event__information-txt-p">
              <p style={{ marginBottom: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                eos ab modi animi reprehenderit vel libero! Mollitia consequatur
                recusandae voluptatem dolore, tempore molestiae iure quas
                distinctio aliquam labore corrupti dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                eos ab modi animi reprehenderit vel libero! Mollitia consequatur
                recusandae voluptatem dolore, tempore molestiae iure quas
                distinctio aliquam labore corrupti dolor.
              </p>
            </div>
            <div className="event__information-txt-operator">
              <h1>Operator River Stone</h1>
              <p
                style={{
                  fontFamily: "'Brown', sans-serif",
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                }}
              >
                <span
                  style={{
                    color: "#FF385C",
                    fontSize: "1.5rem",
                  }}
                >
                  ★★★★★
                </span>
                {"  "}4.9
              </p>
              <p style={{ fontFamily: "'brownlight', sans-serif" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis excepturi deleniti sunt amet ab veniam distinctio
                molestias magnam repellat reprehenderit alias cupiditate
                voluptates id, sapiente numquam beatae quam ea aut?
              </p>
            </div>
          </div>
          <div className="event__information-form-container">
            <div className="form-container">
              <div className="event__information-form">
                <p className="cost">
                  AED 1800 <span>per person</span>
                </p>
                <div className="date">
                  <div>
                    <p>From</p>
                    <p>Nov 10, 2022</p>
                  </div>
                  <div>
                    <p>To</p>
                    <p>Nov 29, 2022</p>
                  </div>
                </div>
                <div className="guest">
                  <p>Guests</p>
                  <select>
                    <option value="1">1 adult</option>
                    <option value="2">2 adult</option>
                    <option value="4">3 adult</option>
                    <option value="5">4 adult</option>
                  </select>
                </div>
                <p>172 seats still available</p>
                <div className="bill">
                  <div className="adult">
                    <p>1800 x 1 adult</p>
                    <p>1800</p>
                  </div>
                  <div className="children">
                    <p>600 x 0 children</p>
                    <p>0</p>
                  </div>
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>AED 1800</p>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'brownlight',sans-serif",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                Need help?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
