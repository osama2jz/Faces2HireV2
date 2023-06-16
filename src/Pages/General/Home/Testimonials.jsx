import { Avatar, Container, Flex, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import qoute1 from "../../../assets/qoute1.svg";
import qoute2 from "../../../assets/qoute2.svg";
import { useMediaQuery } from "@mantine/hooks";

const Testimonials = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate: inViewport });
  const [data, setData] = useState([
    {
      id: 1,
      img: "https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png",
      content:
        "1. I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
      content:
        "2. I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
    {
      id: 3,
      img: "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg",
      content:
        "3. I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=",
      content:
        "4. I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
    {
      id: 5,
      img: "https://wallpapers.com/images/hd/professional-profile-pictures-1276-x-1762-075347emr82ph3hj.jpg",
      content:
        "5. I heard about faces2hire from a friend that told me about a free service. I signed up on the site and created my profile which is similar to a resume format. I have to say that I am actually the first person at faces2hire to be hired by its own platform.You never know who will be looking for a candidate to bring into their company. I hope to help others find their new favorite place to work.",
    },
  ]);
  const [display, setDisplay] = useState(data?.[2].content);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold value as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  const handleChange = (ind) => {
    let newArr = [];
    let a = data[ind];
    data[ind] = data[2];
    data[2] = a;
    newArr = [...data];
    setDisplay(a?.content);
    setData(newArr);
  };

  
  return (
    <Flex direction="column" gap={"lg"} m="md">
      <Title align="center">Let's See What They Have To Say</Title>
      <Flex w={isMobile?"100%":"60%"} m="auto" justify={"space-between"}>
        <img src={qoute1} className={classes.qoute1}/>
        <img src={qoute2} className={classes.qoute2}/>
      </Flex>
      <Text lh={isMobile?2:3} w={isMobile?"100%":"50%"} align="center" m="auto">
        {display}
      </Text>
      <Flex gap={"xl"} justify={"center"} align={"center"} ref={componentRef}>
        {data.map((obj, ind) => (
          <Avatar
            src={obj.img}
            key={obj.id}
            radius={"50%"}
            className={classes.avatar}
            style={{
              border: ind === 2 ? "5px solid green" : "",
              transition: ind === 2 ? "0.3s ease-in-out" : "",
            }}
            size={ind === 2 ? "xl" : ind === 0 || ind === 4 ? "md" : "lg"}
            onClick={() => handleChange(ind)}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default Testimonials;
