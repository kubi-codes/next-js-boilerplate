import {
  Container,
  Typography,
  Box,
  CardActionArea,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";
import { useParams } from "next/navigation";

const capitalize = (str) => {
  return str
    .split("-") // Pisahkan slug berdasarkan "-"
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi setiap kata
    .join(" "); // Gabungkan kembali dengan spasi
};

function _topic_detail_content_1() {
  const params = useParams();
  const topic = capitalize(params?.slug);

  return (
    <Container>
      <Box py="7%">
        <Typography variant="h5" color="primary" mb="20px" mt="20px">
          {topic} <br /> Latest Updates
        </Typography>

        <Link href={`/topic/${params?.slug}/slug`}>
          <CardActionArea>
            <Box
              bgcolor="lightgray"
              height="400px"
              position="relative"
              sx={{
                backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-1024x573.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box
                bgcolor="#fff"
                height="100px"
                boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
                position="absolute"
                width="90%"
                bottom="-20px"
                right={0}
                padding="10px 20px"
              >
                <Typography variant="body2" color="secondary" gutterBottom>
                  March 20, 2025
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="16px"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 2, // Membatasi ke 2 baris
                  }}
                >
                  Maximizing Nature’s Concealed Potential in Wetland Agriculture
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Link>

        <Box mt="40px">
          {React.Children.toArray(
            [
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/10/DSC07729-1024x580.jpg",
                title:
                  "Tay Juhana Foundation Achieves Success at World Coconut Day 2024",
                date: "Oct 8, 2024",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2022/08/DSC01072-2-1-1024x684.jpg",
                title:
                  "Peran Lahan Gambut dalam Memenuhi Kebutuhan Pangan Lokal",
                date: "Aug 29, 2022",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2022/02/btc-1-80-1024x1024.jpg",
                title:
                  "Wetlands Day #bringthecaption Challenge: Retell the Nostalgic Pictures with Joni",
                date: "Feb 11, 2022",
              },
            ].map((item, key, arr) => (
              <Link href={`/topic/${params?.slug}/slug`}>
                <Box>
                  <Box
                    component="hr"
                    sx={{
                      my: 2,
                      borderColor: (props) => props.palette.secondary.main,
                      borderTop: "1px",
                      borderLeft: "0px",
                      borderRight: "0px",
                      // borderBottom: "1px",
                    }}
                  />

                  <Typography variant="body2" color="secondary" gutterBottom>
                    {item.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 3, // Membatasi ke 2 baris
                    }}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>

                  <CardActionArea>
                    <Box
                      bgcolor="lightgray"
                      height="180px"
                      sx={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                  </CardActionArea>
                </Box>
              </Link>
            ))
          )}
        </Box>

        <Box display="flex" gap="5px" mt="30px" justifyContent="flex-end">
          <IconButton sx={{ padding: "5px", height: "45px" }}>
            <CirclePrev color="#979797" fontSize="33px" />
          </IconButton>
          <IconButton sx={{ padding: "5px", height: "45px" }}>
            <CircleNext color="#233E83" fontSize="33px" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default _topic_detail_content_1;
