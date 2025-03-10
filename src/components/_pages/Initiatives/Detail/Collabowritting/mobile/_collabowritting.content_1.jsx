import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ChecvronIcon from "@/components/shared/icons/chevronDown";
import React from "react";

function _collabowritting_content_1() {
  return (
    <Container>
      <Box
        bgcolor="#F5F5F5"
        padding="10px"
        borderRadius="8px"
        marginBottom="50px"
        mt="50px"
      >
        {React.Children.toArray(
          [
            {
              title: "Apa itu Collabowriting?",
              body: `Collabowriting adalah program kolaborasi antara penulis artikel dengan TJF yang mengangkat isu Ketahanan Pangan, Lahan Suboptimal, dan Pertanian Berkelanjutan dalam setiap tulisan yang akan dibuat. Program ini bertujuan untuk membentuk gerakan kolaboratif demi membangun kesadaran masyarakat akan pentingnya menjaga ketahanan pangan melalui pertanian berkelanjutan.`,
            },
            {
              title: "Siapa saja yang dapat perpartisipasi",
              body: ``,
            },
            {
              title:
                "Apakah saya akan mendapatkan bayaran jika dapat mempublikasikan tulisan saya di program ini?",
              body: ``,
            },
            {
              title: "Dimana saya bisa membaca panduan penulisan artikel ini",
              body: ``,
            },
            {
              title:
                "Apakah saya harus segera mengirimkan artikel secara utuh jika ingin mengikuti program ini?",
              body: ``,
            },
            {
              title:
                "Setelah saya mengirimkan outline (garis besar) artikel, lalu bagaimana?",
              body: ``,
            },
            {
              title:
                "Saya masih memiliki beberapa pertanyaan tentang program ini, bagaimana saya bisa mendapatkan informasi lebih lanjut?",
              body: ``,
            },
          ].map((item) => (
            <Accordion
              elevation={0}
              sx={{
                mb: "10px",
                backgroundColor: "#F5F5F5",
                "&::before": { backgroundColor: "#F5F5F5" },
              }}
            >
              <AccordionSummary
                expandIcon={<ChecvronIcon color="#233E83" />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ borderBottom: "1px solid #000000", px: 0 }}
              >
                <Typography component="span" color="primary" variant="h6">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 3 }}>
                {item.body}
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Box>
    </Container>
  );
}

export default _collabowritting_content_1;
