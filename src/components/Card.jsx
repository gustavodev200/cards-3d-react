import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

const Card = ({ img, alt, title, colorCircle}, props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <Box ref={tilt} {...rest}>
      <div className="box__container" >
        <h2 className="title">{title}</h2>
        <Buy colorCircle={colorCircle} className="box__buy">
          Comprar
        </Buy>
        <CardCircle colorCircle={colorCircle}>
          <Image src={img} alt={alt} />
        </CardCircle>
      </div>
    </Box>
  );
};

const Box = styled.div`
  .box__container {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 40px;
    background: #232323;
    border-radius: 20px;
    transform-style: preserve-3d;

    &::before {
      content: "NAME";
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 5em;
      font-weight: 900;
      color: #fff;
      font-style: italic;
      opacity: 0;
      transition: 0.5s;
    }

    &::after {
      content: "CAR";
      position: absolute;
      bottom: 20px;
      left: 45px;
      font-size: 5em;
      font-weight: 900;
      color: #fff;
      font-style: italic;
      opacity: 0;
      transition: 0.5s;
    }

    &:hover::after {
      opacity: 0.06;
    }

    &:hover::before {
      opacity: 0.06;
    }
  }

  .box__container .title {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 75px);
    transition: 0.5s;
    opacity: 0;
    z-index: 999;
  }

  .box__container:hover .title {
    top: 40px;
    opacity: 1;
  }

  .box__container:hover .box__buy {
    bottom: 30px;
    opacity: 1;
  }
`;

const Buy = styled.a`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform-style: preserve-3d;
  transform: translate3d(-50%, 0, 75px);
  color: #fff;
  background: ${(props) => props.colorCircle};
  padding: 10px 25px;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.5s;
  opacity: 0;
  cursor: pointer;
  z-index: 10;
`;

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 300px;
    transition: .5s
    transform-style: preserve-3d;
    transform: translate3d(-50%, -50%, 0);
    z-index: 11;
`;

const CardCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: 0.5s;
  background: ${(props) => props.colorCircle};
  opacity: 1;
  transform-style: preserve-3d;
  transform: translate3d(-50%, -50%, 50px);
  z-index: 10;
`;

export default Card;
