import { Container } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "Lua Scripter",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "React.Js Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
];

export default function Services() {
  return (
    <section id="services">
      <Container>
        <div className="services-container">
          <div className="title-masked">
            <h2>What i Do ?</h2>
            <h3>
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn">View my Work!</button>
          </div>
          <div className="counter">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="map" key={index}>
                    <div className="map-container">
                      <h4>{name}</h4>
                      <p className="font-secondary leading-tightw">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#0"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#0" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
