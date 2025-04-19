import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  CardActionArea,
  IconButton,
} from "@mui/material";
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

function _topic_detail_content_2() {
  const params = useParams();
  const topic = capitalize(params?.slug);

  return (
    <Container>
      <Box mb="50px">
        <Typography variant="h5" color="primary">
          {topic} <br /> Latest Resource
        </Typography>

        <Grid container justifyContent="space-between" mt="20px">
          {React.Children.toArray(
            [
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/01/TJF-Greenboard-Isu-3-pdf.jpg",
                label:
                  "TJF Greenboard | Isu 3: Menjaga Ketahanan Pangan di Tengah Gempuran Perubahan Iklim",
                date: "Jan, 2024",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2025/02/Buku-Series-1-Wetland-2025-pdf.jpg",
                label: "Buku Kisah Sukses Bertani di Lahan Basah",
                date: "Feb, 2025",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/07/Brief-TJF-July-2024-Coconut-based-Agroforesty-pdf.jpg",
                label:
                  "Coconut-based Agroforestry-Paludiculture to Improve Peatlands Sustainability and Food Security",
                date: "Jul, 2024",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2023/12/TJF-POLICY-BRIEF-SEPT-2023-2-pdf.jpg",
                label:
                  "TJF Policy Brief: Governance Strategies for Boosting Farmer Capacity and Productivity Amidst El-Nino Challenges in Indonesia",
                date: "Sep, 2024",
              },
            ].map((item) => (
              <Grid item size={{ xs: 5.7 }} sx={{ mb: 1.5 }}>
                <CardActionArea>
                  <Box
                    height="210px"
                    bgcolor="lightgray"
                    mb={1}
                    sx={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      border: "1px solid lightgray",
                    }}
                  ></Box>
                </CardActionArea>
                <Typography color="secondary" fontSize="12px" gutterBottom>
                  {item.date}
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="12px"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3, // Membatasi ke 2 baris
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>

        <Box display="flex" gap="5px" justifyContent="flex-end" mt="20px">
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

export default _topic_detail_content_2;
